import { useEffect, useState } from "react";
import { auth, onAuthStateChanged, type FirebaseUser } from "@/integrations/firebase/client";

export type SessionUser = {
  id: string;
  uid: string;
  email: string | null;
  displayName: string | null;
  user_metadata: {
    full_name?: string;
    name?: string;
    country?: string;
  };
};

function toSessionUser(user: FirebaseUser | null): SessionUser | null {
  if (!user) return null;
  const fullName = user.displayName || undefined;
  return {
    id: user.uid,
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    user_metadata: {
      full_name: fullName,
      name: fullName,
    },
  };
}

export function useSession() {
  const [user, setUser] = useState<SessionUser | null>(() => toSessionUser(auth.currentUser));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
      if (!active) return;
      setUser(toSessionUser(fbUser));
      setLoading(false);
    });
    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  return { user, loading };
}

export function nameOf(user: SessionUser | null): string {
  if (!user) return "Trader";
  return (
    user.displayName ||
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    (user.email ? user.email.split("@")[0] : "Trader")
  );
}

export function initialsOf(name: string): string {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]!.toUpperCase())
      .join("") || "V"
  );
}
