import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db, auth, getCurrentUser, updateProfile as firebaseUpdateProfile } from "@/integrations/firebase/client";

export type OrderStatus = "pending" | "processing" | "waiting_callback" | "completed" | "rejected";

export type OrderRow = {
  id: string;
  reference: string;
  account_type: "instant" | "challenge";
  account_size: number;
  price: number | string;
  broker: string;
  payment_method: string;
  coupon: string | null;
  status: string;
  decision_at: string;
  created_at: string;
  user_id?: string;
  user_email?: string | null;
};

/**
 * Review outcome for an order.
 * Any purchased account automatically becomes rejected exactly 1 hour after creation,
 * unless previously marked completed.
 */
export function effectiveStatus(
  order: Pick<OrderRow, "status" | "decision_at"> & { created_at?: string },
): OrderStatus {
  if (order.status === "completed") return "completed";
  if (order.status === "rejected") return "rejected";

  const decisionAtMs = order.decision_at ? Date.parse(order.decision_at) : 0;
  const createdAtMs = order.created_at ? Date.parse(order.created_at) : 0;
  const now = Date.now();

  const isOneHourElapsed =
    (decisionAtMs > 0 && now >= decisionAtMs) ||
    (createdAtMs > 0 && now - createdAtMs >= 60 * 60 * 1000);

  if (isOneHourElapsed) {
    return "rejected";
  }

  return (order.status as OrderStatus) || "waiting_callback";
}

export function reviewCountdown(
  order: Pick<OrderRow, "status" | "decision_at"> & { created_at?: string },
): string | null {
  const current = effectiveStatus(order);
  if (current === "rejected" || current === "completed") return null;

  const decisionAtMs = order.decision_at
    ? Date.parse(order.decision_at)
    : (order.created_at ? Date.parse(order.created_at) + 60 * 60 * 1000 : 0);

  const ms = decisionAtMs - Date.now();
  if (ms <= 0) return null;
  const minutes = Math.max(0, Math.round(ms / 60000));
  return minutes >= 60 ? "60 min" : `${minutes} min`;
}

export const shortDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return iso;
  }
};

export const shortTime = (iso: string) => {
  try {
    return new Date(iso).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
};

// Local storage fallback helpers for resilience
function getLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setLocal<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

export async function fetchOrders(): Promise<OrderRow[]> {
  const user = await getCurrentUser();
  const cached = getLocal<OrderRow[]>("vexo_firebase_orders", []);

  try {
    let ordersRef = collection(db, "orders");
    let q = user?.uid
      ? query(ordersRef, where("user_id", "==", user.uid))
      : query(ordersRef, limit(20));

    let snap;
    try {
      snap = await getDocs(q);
    } catch {
      // If composite index or where filter fails, fallback to general collection fetch
      snap = await getDocs(query(ordersRef, limit(50)));
    }

    const fetched: OrderRow[] = [];
    snap.forEach((docSnap) => {
      const data = docSnap.data() as OrderRow;
      const order = { ...data, id: docSnap.id };
      fetched.push(order);
    });

    // Merge with any locally placed orders if not yet replicated
    const combined = [...fetched];
    for (const c of cached) {
      if (!combined.some((o) => o.reference === c.reference)) {
        combined.push(c);
      }
    }

    // Sort by created_at desc
    combined.sort((a, b) => (Date.parse(b.created_at || "0") - Date.parse(a.created_at || "0")));

    // Process 1-hour auto-rejection & sync back to Firestore
    const results: OrderRow[] = combined.map((o) => {
      const computed = effectiveStatus(o);
      if (computed === "rejected" && o.status !== "rejected") {
        // Asynchronously update in Firestore
        updateDoc(doc(db, "orders", o.id), { status: "rejected" }).catch(() => {});
        return { ...o, status: "rejected" };
      }
      return { ...o, status: computed };
    });

    setLocal("vexo_firebase_orders", results);
    return results;
  } catch (err) {
    console.warn("Firestore fetchOrders error, returning local cache:", err);
    return cached.map((o) => ({ ...o, status: effectiveStatus(o) }));
  }
}

export async function fetchOrder(reference: string): Promise<OrderRow | null> {
  const cached = getLocal<OrderRow[]>("vexo_firebase_orders", []);
  const localMatch = cached.find((o) => o.reference === reference);

  try {
    const q = query(collection(db, "orders"), where("reference", "==", reference), limit(1));
    const snap = await getDocs(q);

    if (snap.empty) {
      if (localMatch) {
        return { ...localMatch, status: effectiveStatus(localMatch) };
      }
      return null;
    }

    const docSnap = snap.docs[0];
    const data = docSnap.data() as OrderRow;
    const order: OrderRow = { ...data, id: docSnap.id };
    const computed = effectiveStatus(order);

    if (computed === "rejected" && order.status !== "rejected") {
      updateDoc(doc(db, "orders", order.id), { status: "rejected" }).catch(() => {});
      order.status = "rejected";
    } else {
      order.status = computed;
    }

    return order;
  } catch (err) {
    console.warn("Firestore fetchOrder error, returning local match:", err);
    return localMatch ? { ...localMatch, status: effectiveStatus(localMatch) } : null;
  }
}

export async function createOrder(input: {
  account_type: "instant" | "challenge";
  account_size: number;
  price: number;
  broker: string;
  payment_method: string;
  coupon?: string | null;
}): Promise<OrderRow> {
  const user = await getCurrentUser();
  const id = `ord-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const reference = `VEXO-${Math.floor(10000 + Math.random() * 90000)}`;
  const now = new Date().toISOString();
  // Exactly 1 hour review decision window
  const decision_at = new Date(Date.now() + 60 * 60 * 1000).toISOString();

  const newOrder: OrderRow = {
    id,
    reference,
    account_type: input.account_type,
    account_size: input.account_size,
    price: input.price,
    broker: input.broker,
    payment_method: input.payment_method,
    coupon: input.coupon ?? null,
    status: "waiting_callback",
    decision_at,
    created_at: now,
    user_id: user?.uid ?? "guest",
    user_email: user?.email ?? null,
  };

  // Cache locally first for instant feedback
  const cached = getLocal<OrderRow[]>("vexo_firebase_orders", []);
  setLocal("vexo_firebase_orders", [newOrder, ...cached]);

  // Persist into Firebase Firestore
  try {
    await setDoc(doc(db, "orders", id), newOrder);
  } catch (err) {
    console.warn("Firestore order persistence error:", err);
  }

  return newOrder;
}

export type TicketRow = {
  id: string;
  reference: string;
  subject: string;
  category: string;
  priority: string;
  status: string;
  created_at: string;
  updated_at: string;
  user_id?: string;
};

export type MessageRow = {
  id: string;
  ticket_id?: string;
  author: string;
  body: string;
  created_at: string;
};

export async function fetchTickets(): Promise<TicketRow[]> {
  const user = await getCurrentUser();
  const cached = getLocal<TicketRow[]>("vexo_firebase_tickets", []);

  try {
    const ticketsRef = collection(db, "support_tickets");
    const q = user?.uid
      ? query(ticketsRef, where("user_id", "==", user.uid))
      : query(ticketsRef, limit(20));

    let snap;
    try {
      snap = await getDocs(q);
    } catch {
      snap = await getDocs(query(ticketsRef, limit(50)));
    }

    const fetched: TicketRow[] = [];
    snap.forEach((d) => {
      fetched.push({ ...(d.data() as TicketRow), id: d.id });
    });

    const combined = [...fetched];
    for (const c of cached) {
      if (!combined.some((t) => t.id === c.id || t.reference === c.reference)) {
        combined.push(c);
      }
    }

    combined.sort((a, b) => Date.parse(b.updated_at || "0") - Date.parse(a.updated_at || "0"));
    setLocal("vexo_firebase_tickets", combined);
    return combined;
  } catch (err) {
    console.warn("Firestore fetchTickets error:", err);
    return cached;
  }
}

export async function fetchTicket(reference: string) {
  const cachedTickets = getLocal<TicketRow[]>("vexo_firebase_tickets", []);
  const cachedMessages = getLocal<MessageRow[]>("vexo_firebase_messages", []);

  try {
    const q = query(collection(db, "support_tickets"), where("reference", "==", reference), limit(1));
    const snap = await getDocs(q);

    let ticket: TicketRow | null = null;
    if (!snap.empty) {
      ticket = { ...(snap.docs[0].data() as TicketRow), id: snap.docs[0].id };
    } else {
      ticket = cachedTickets.find((t) => t.reference === reference) ?? null;
    }

    if (!ticket) return null;

    let messages: MessageRow[] = [];
    try {
      const msgSnap = await getDocs(
        query(collection(db, "ticket_messages"), where("ticket_id", "==", ticket.id)),
      );
      msgSnap.forEach((m) => {
        messages.push({ ...(m.data() as MessageRow), id: m.id });
      });
    } catch {
      messages = cachedMessages.filter((m) => m.ticket_id === ticket?.id);
    }

    // Merge with any cached messages
    for (const cm of cachedMessages) {
      if (cm.ticket_id === ticket.id && !messages.some((m) => m.id === cm.id)) {
        messages.push(cm);
      }
    }

    messages.sort((a, b) => Date.parse(a.created_at || "0") - Date.parse(b.created_at || "0"));

    return { ticket, messages };
  } catch (err) {
    console.warn("Firestore fetchTicket error:", err);
    const ticket = cachedTickets.find((t) => t.reference === reference) ?? null;
    if (!ticket) return null;
    const messages = cachedMessages.filter((m) => m.ticket_id === ticket.id);
    return { ticket, messages };
  }
}

export async function createTicket(input: {
  subject: string;
  category: string;
  priority: string;
  body: string;
}) {
  const user = await getCurrentUser();
  const id = `tck-${Date.now()}`;
  const reference = `TCK-${Math.floor(10000 + Math.random() * 90000)}`;
  const now = new Date().toISOString();

  const newTicket: TicketRow = {
    id,
    reference,
    subject: input.subject,
    category: input.category,
    priority: input.priority,
    status: "open",
    created_at: now,
    updated_at: now,
    user_id: user?.uid ?? "guest",
  };

  const msgId = `msg-${Date.now()}`;
  const firstMessage: MessageRow = {
    id: msgId,
    ticket_id: id,
    author: "user",
    body: input.body,
    created_at: now,
  };

  const cachedT = getLocal<TicketRow[]>("vexo_firebase_tickets", []);
  setLocal("vexo_firebase_tickets", [newTicket, ...cachedT]);

  const cachedM = getLocal<MessageRow[]>("vexo_firebase_messages", []);
  setLocal("vexo_firebase_messages", [...cachedM, firstMessage]);

  try {
    await setDoc(doc(db, "support_tickets", id), newTicket);
    await setDoc(doc(db, "ticket_messages", msgId), firstMessage);
  } catch (err) {
    console.warn("Firestore createTicket error:", err);
  }

  return { id, reference };
}

export async function replyToTicket(ticketId: string, body: string) {
  const user = await getCurrentUser();
  const now = new Date().toISOString();
  const msgId = `msg-${Date.now()}`;

  const message: MessageRow = {
    id: msgId,
    ticket_id: ticketId,
    author: "user",
    body,
    created_at: now,
  };

  const cachedM = getLocal<MessageRow[]>("vexo_firebase_messages", []);
  setLocal("vexo_firebase_messages", [...cachedM, message]);

  const cachedT = getLocal<TicketRow[]>("vexo_firebase_tickets", []);
  setLocal(
    "vexo_firebase_tickets",
    cachedT.map((t) => (t.id === ticketId ? { ...t, updated_at: now } : t)),
  );

  try {
    await setDoc(doc(db, "ticket_messages", msgId), message);
    await updateDoc(doc(db, "support_tickets", ticketId), { updated_at: now });
  } catch (err) {
    console.warn("Firestore replyToTicket error:", err);
  }
}

export type ProfileRow = {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  country: string | null;
  created_at: string;
};

export async function fetchProfile(): Promise<ProfileRow | null> {
  const user = await getCurrentUser();
  if (!user) return null;

  try {
    const snap = await getDoc(doc(db, "profiles", user.uid));
    if (snap.exists()) {
      return snap.data() as ProfileRow;
    }
  } catch (err) {
    console.warn("Firestore fetchProfile error:", err);
  }

  // Fallback to Firebase user profile info
  const fallback: ProfileRow = {
    id: user.uid,
    full_name: user.displayName || (user.email ? user.email.split("@")[0] : "Mohammed K."),
    email: user.email,
    phone: user.phoneNumber || null,
    country: "United States",
    created_at: user.metadata?.creationTime || new Date().toISOString(),
  };

  return fallback;
}

export async function updateProfile(input: { full_name: string; phone: string; country: string }) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to update your profile.");

  const now = new Date().toISOString();
  const profileData = {
    id: user.uid,
    email: user.email ?? null,
    full_name: input.full_name,
    phone: input.phone,
    country: input.country,
    updated_at: now,
  };

  if (auth.currentUser && input.full_name) {
    try {
      await firebaseUpdateProfile(auth.currentUser, { displayName: input.full_name });
    } catch {
      // ignore
    }
  }

  try {
    await setDoc(doc(db, "profiles", user.uid), profileData, { merge: true });
  } catch (err) {
    console.warn("Firestore updateProfile error:", err);
  }
}
