import "../_libs/firebase.mjs";
import { l as updateProfile$1 } from "../_libs/firebase__auth.mjs";
import { a as setDoc, c as collection, i as query, l as doc, n as getDocs, o as updateDoc, r as limit, s as where, t as getDoc } from "../_libs/@firebase/firestore+[...].mjs";
import { i as getCurrentUser, r as db, t as auth } from "./client-q8YvMaqw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vexo-api-qfIjf-Nu.js
/**
* Review outcome for an order.
* Any purchased account automatically becomes rejected exactly 1 hour after creation,
* unless previously marked completed.
*/
function effectiveStatus(order) {
	if (order.status === "completed") return "completed";
	if (order.status === "rejected") return "rejected";
	const decisionAtMs = order.decision_at ? Date.parse(order.decision_at) : 0;
	const createdAtMs = order.created_at ? Date.parse(order.created_at) : 0;
	const now = Date.now();
	if (decisionAtMs > 0 && now >= decisionAtMs || createdAtMs > 0 && now - createdAtMs >= 36e5) return "rejected";
	return order.status || "waiting_callback";
}
function reviewCountdown(order) {
	const current = effectiveStatus(order);
	if (current === "rejected" || current === "completed") return null;
	const ms = (order.decision_at ? Date.parse(order.decision_at) : order.created_at ? Date.parse(order.created_at) + 36e5 : 0) - Date.now();
	if (ms <= 0) return null;
	const minutes = Math.max(0, Math.round(ms / 6e4));
	return minutes >= 60 ? "60 min" : `${minutes} min`;
}
var shortDate = (iso) => {
	try {
		return new Date(iso).toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "short",
			year: "numeric"
		});
	} catch {
		return iso;
	}
};
var shortTime = (iso) => {
	try {
		return new Date(iso).toLocaleString("en-GB", {
			day: "2-digit",
			month: "short",
			hour: "2-digit",
			minute: "2-digit"
		});
	} catch {
		return iso;
	}
};
function getLocal(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return fallback;
		const parsed = JSON.parse(raw);
		if (Array.isArray(fallback)) {
			if (Array.isArray(parsed)) return parsed;
			try {
				localStorage.setItem(key, JSON.stringify(fallback));
			} catch {}
			return fallback;
		}
		if (fallback !== null && typeof fallback === "object") {
			if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) return parsed;
			return fallback;
		}
		return parsed;
	} catch {
		return fallback;
	}
}
function setLocal(key, value) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
async function fetchOrders() {
	const user = await getCurrentUser();
	const cachedRaw = getLocal("vexo_firebase_orders", []);
	const cached = Array.isArray(cachedRaw) ? cachedRaw : [];
	try {
		const ordersRef = collection(db, "orders");
		const q = user?.uid ? query(ordersRef, where("user_id", "==", user.uid)) : query(ordersRef, limit(20));
		let snap;
		try {
			snap = await getDocs(q);
		} catch {
			snap = await getDocs(query(ordersRef, limit(50)));
		}
		const fetched = [];
		snap.forEach((docSnap) => {
			const order = {
				...docSnap.data(),
				id: docSnap.id
			};
			fetched.push(order);
		});
		const combined = Array.isArray(fetched) ? [...fetched] : [];
		for (const c of cached) if (!combined.some((o) => o.reference === c.reference)) combined.push(c);
		combined.sort((a, b) => Date.parse(b.created_at || "0") - Date.parse(a.created_at || "0"));
		const results = combined.map((o) => {
			const computed = effectiveStatus(o);
			if (computed === "rejected" && o.status !== "rejected") {
				updateDoc(doc(db, "orders", o.id), { status: "rejected" }).catch(() => {});
				return {
					...o,
					status: "rejected"
				};
			}
			return {
				...o,
				status: computed
			};
		});
		setLocal("vexo_firebase_orders", results);
		return results;
	} catch (err) {
		console.warn("Firestore fetchOrders error, returning local cache:", err);
		return cached.map((o) => ({
			...o,
			status: effectiveStatus(o)
		}));
	}
}
async function fetchOrder(refOrId) {
	const cachedRaw = getLocal("vexo_firebase_orders", []);
	const localMatch = (Array.isArray(cachedRaw) ? cachedRaw : []).find((o) => o.reference === refOrId || o.id === refOrId);
	try {
		const q = query(collection(db, "orders"), where("reference", "==", refOrId), limit(1));
		const snap = await getDocs(q);
		if (snap.empty) {
			try {
				const directDoc = await getDoc(doc(db, "orders", refOrId));
				if (directDoc.exists()) {
					const order = {
						...directDoc.data(),
						id: directDoc.id
					};
					order.status = effectiveStatus(order);
					return order;
				}
			} catch (err) {
				console.debug("Direct order id lookup failed:", err);
			}
			if (localMatch) return {
				...localMatch,
				status: effectiveStatus(localMatch)
			};
			return null;
		}
		const docSnap = snap.docs[0];
		const order = {
			...docSnap.data(),
			id: docSnap.id
		};
		const computed = effectiveStatus(order);
		if (computed === "rejected" && order.status !== "rejected") {
			updateDoc(doc(db, "orders", order.id), { status: "rejected" }).catch(() => {});
			order.status = "rejected";
		} else order.status = computed;
		return order;
	} catch (err) {
		console.warn("Firestore fetchOrder error, returning local match:", err);
		return localMatch ? {
			...localMatch,
			status: effectiveStatus(localMatch)
		} : null;
	}
}
async function createOrder(input) {
	const user = await getCurrentUser();
	const id = `ord-${Date.now()}-${Math.floor(1e3 + Math.random() * 9e3)}`;
	const reference = `VEXO-${Math.floor(1e4 + Math.random() * 9e4)}`;
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const decision_at = new Date(Date.now() + 36e5).toISOString();
	const newOrder = {
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
		user_email: user?.email ?? null
	};
	const cachedRaw = getLocal("vexo_firebase_orders", []);
	setLocal("vexo_firebase_orders", [newOrder, ...Array.isArray(cachedRaw) ? cachedRaw : []]);
	try {
		await setDoc(doc(db, "orders", id), newOrder);
	} catch (err) {
		console.warn("Firestore order persistence error:", err);
	}
	return newOrder;
}
async function fetchTickets() {
	const user = await getCurrentUser();
	const cachedRaw = getLocal("vexo_firebase_tickets", []);
	const cached = Array.isArray(cachedRaw) ? cachedRaw : [];
	try {
		const ticketsRef = collection(db, "support_tickets");
		const q = user?.uid ? query(ticketsRef, where("user_id", "==", user.uid)) : query(ticketsRef, limit(20));
		let snap;
		try {
			snap = await getDocs(q);
		} catch {
			snap = await getDocs(query(ticketsRef, limit(50)));
		}
		const fetched = [];
		snap.forEach((d) => {
			fetched.push({
				...d.data(),
				id: d.id
			});
		});
		const combined = Array.isArray(fetched) ? [...fetched] : [];
		for (const c of cached) if (!combined.some((t) => t.id === c.id || t.reference === c.reference)) combined.push(c);
		combined.sort((a, b) => Date.parse(b.updated_at || "0") - Date.parse(a.updated_at || "0"));
		setLocal("vexo_firebase_tickets", combined);
		return combined;
	} catch (err) {
		console.warn("Firestore fetchTickets error:", err);
		return cached;
	}
}
async function fetchTicket(reference) {
	const cachedTicketsRaw = getLocal("vexo_firebase_tickets", []);
	const cachedTickets = Array.isArray(cachedTicketsRaw) ? cachedTicketsRaw : [];
	const cachedMessagesRaw = getLocal("vexo_firebase_messages", []);
	const cachedMessages = Array.isArray(cachedMessagesRaw) ? cachedMessagesRaw : [];
	try {
		const q = query(collection(db, "support_tickets"), where("reference", "==", reference), limit(1));
		const snap = await getDocs(q);
		let ticket = null;
		if (!snap.empty) ticket = {
			...snap.docs[0].data(),
			id: snap.docs[0].id
		};
		else ticket = cachedTickets.find((t) => t.reference === reference) ?? null;
		if (!ticket) return null;
		let messages = [];
		try {
			(await getDocs(query(collection(db, "ticket_messages"), where("ticket_id", "==", ticket.id)))).forEach((m) => {
				messages.push({
					...m.data(),
					id: m.id
				});
			});
		} catch {
			messages = cachedMessages.filter((m) => m.ticket_id === ticket?.id);
		}
		for (const cm of cachedMessages) if (cm.ticket_id === ticket.id && !messages.some((m) => m.id === cm.id)) messages.push(cm);
		messages.sort((a, b) => Date.parse(a.created_at || "0") - Date.parse(b.created_at || "0"));
		return {
			ticket,
			messages
		};
	} catch (err) {
		console.warn("Firestore fetchTicket error:", err);
		const ticket = cachedTickets.find((t) => t.reference === reference) ?? null;
		if (!ticket) return null;
		return {
			ticket,
			messages: cachedMessages.filter((m) => m.ticket_id === ticket.id)
		};
	}
}
async function createTicket(input) {
	const user = await getCurrentUser();
	const id = `tck-${Date.now()}`;
	const reference = `TCK-${Math.floor(1e4 + Math.random() * 9e4)}`;
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const newTicket = {
		id,
		reference,
		subject: input.subject,
		category: input.category,
		priority: input.priority,
		status: "open",
		created_at: now,
		updated_at: now,
		user_id: user?.uid ?? "guest"
	};
	const msgId = `msg-${Date.now()}`;
	const firstMessage = {
		id: msgId,
		ticket_id: id,
		author: "user",
		body: input.body,
		created_at: now
	};
	const cachedTRaw = getLocal("vexo_firebase_tickets", []);
	setLocal("vexo_firebase_tickets", [newTicket, ...Array.isArray(cachedTRaw) ? cachedTRaw : []]);
	const cachedMRaw = getLocal("vexo_firebase_messages", []);
	setLocal("vexo_firebase_messages", [...Array.isArray(cachedMRaw) ? cachedMRaw : [], firstMessage]);
	try {
		await setDoc(doc(db, "support_tickets", id), newTicket);
		await setDoc(doc(db, "ticket_messages", msgId), firstMessage);
	} catch (err) {
		console.warn("Firestore createTicket error:", err);
	}
	return {
		id,
		reference
	};
}
async function replyToTicket(ticketId, body) {
	await getCurrentUser();
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const msgId = `msg-${Date.now()}`;
	const message = {
		id: msgId,
		ticket_id: ticketId,
		author: "user",
		body,
		created_at: now
	};
	const cachedMRaw = getLocal("vexo_firebase_messages", []);
	setLocal("vexo_firebase_messages", [...Array.isArray(cachedMRaw) ? cachedMRaw : [], message]);
	const cachedTRaw = getLocal("vexo_firebase_tickets", []);
	setLocal("vexo_firebase_tickets", (Array.isArray(cachedTRaw) ? cachedTRaw : []).map((t) => t.id === ticketId ? {
		...t,
		updated_at: now
	} : t));
	try {
		await setDoc(doc(db, "ticket_messages", msgId), message);
		await updateDoc(doc(db, "support_tickets", ticketId), { updated_at: now });
	} catch (err) {
		console.warn("Firestore replyToTicket error:", err);
	}
}
async function fetchProfile() {
	const user = await getCurrentUser();
	if (!user) return null;
	try {
		const snap = await getDoc(doc(db, "profiles", user.uid));
		if (snap.exists()) return snap.data();
	} catch (err) {
		console.warn("Firestore fetchProfile error:", err);
	}
	return {
		id: user.uid,
		full_name: user.displayName || (user.email ? user.email.split("@")[0] : "Mohammed K."),
		email: user.email,
		phone: user.phoneNumber || null,
		country: "United States",
		created_at: user.metadata?.creationTime || (/* @__PURE__ */ new Date()).toISOString()
	};
}
async function updateProfile(input) {
	const user = await getCurrentUser();
	if (!user) throw new Error("You must be signed in to update your profile.");
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const profileData = {
		id: user.uid,
		email: user.email ?? null,
		full_name: input.full_name,
		phone: input.phone,
		country: input.country,
		updated_at: now
	};
	if (auth.currentUser && input.full_name) try {
		await updateProfile$1(auth.currentUser, { displayName: input.full_name });
	} catch {}
	try {
		await setDoc(doc(db, "profiles", user.uid), profileData, { merge: true });
	} catch (err) {
		console.warn("Firestore updateProfile error:", err);
	}
}
//#endregion
export { fetchOrders as a, fetchTickets as c, shortDate as d, shortTime as f, fetchOrder as i, replyToTicket as l, createTicket as n, fetchProfile as o, updateProfile as p, effectiveStatus as r, fetchTicket as s, createOrder as t, reviewCountdown as u };
