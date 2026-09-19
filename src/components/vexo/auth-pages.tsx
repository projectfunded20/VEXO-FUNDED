import { useState, type FormEvent } from "react";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import { doc, setDoc } from "firebase/firestore";
import {
  auth,
  db,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  updateProfile,
} from "@/integrations/firebase/client";
import { AuthShell } from "./layouts";
import { Button, Field } from "./ui";

function Alert({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div className="flex items-start gap-3 rounded-lg border border-brand/35 bg-panel-raised/90 p-3.5 text-sm shadow-sm">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
      <span className="font-medium text-bright leading-relaxed">{message}</span>
    </div>
  );
}

function cleanAuthError(err: unknown, fallback: string): string {
  if (!err) return "";
  const raw = err instanceof Error ? err.message : String(err);
  if (
    raw.includes("user-not-found") ||
    raw.includes("wrong-password") ||
    raw.includes("invalid-credential") ||
    raw.includes("INVALID_LOGIN_CREDENTIALS")
  ) {
    return "Invalid email or password. Please check your credentials and try again.";
  }
  if (raw.includes("email-already-in-use")) {
    return "An account with this email address already exists. Please sign in.";
  }
  if (raw.includes("weak-password")) {
    return "Password should be at least 8 characters long.";
  }
  if (raw.includes("invalid-email")) {
    return "Please enter a valid email address.";
  }
  if (raw.includes("too-many-requests")) {
    return "Access temporarily locked due to multiple failed attempts. Please try again later.";
  }
  if (raw.includes("network-request-failed")) {
    return "Network connection error. Please check your internet connection.";
  }
  if (raw.includes("user-disabled")) {
    return "This account has been disabled. Please contact support.";
  }
  const cleaned = raw
    .replace(/^Firebase:\s*/i, "")
    .replace(/^Error\s*\([^)]+\):\s*/i, "")
    .trim();
  return cleaned || fallback;
}

function safePath(value: unknown): string | null {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//")
    ? value
    : null;
}

export function Login() {
  const nav = useNavigate();
  const search = useSearch({ strict: false }) as { redirect?: string };
  const target = safePath(search.redirect) ?? "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setBusy(false);
      nav({ to: target });
    } catch (err: unknown) {
      setBusy(false);
      setError(cleanAuthError(err, "Sign in failed. Please check your credentials and try again."));
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to reach your accounts, orders and support desk."
    >
      <form className="space-y-5" onSubmit={submit}>
        {error && <Alert message={error} />}
        <Field
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          label="Password"
          type="password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-end text-sm">
          <Link to="/forgot-password" className="text-brand">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full" disabled={busy}>
          {busy ? <Loader2 className="animate-spin" size={16} /> : null}Sign In
        </Button>
      </form>
      <p className="mt-7 text-center text-sm text-muted">
        Don't have an account?{" "}
        <Link to="/signup" className="text-brand">
          Get funded
        </Link>
      </p>
    </AuthShell>
  );
}

export function Signup() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    country: "United States",
  });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (key: keyof typeof form) => (event: { target: { value: string } }) =>
    setForm({ ...form, [key]: event.target.value });

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (form.password !== form.confirm) {
      setError("Both password fields must match.");
      return;
    }
    setBusy(true);
    setError("");

    try {
      const cred = await createUserWithEmailAndPassword(auth, form.email.trim(), form.password);
      if (form.name) {
        try {
          await updateProfile(cred.user, { displayName: form.name });
        } catch {
          // ignore
        }
      }
      try {
        await setDoc(
          doc(db, "profiles", cred.user.uid),
          {
            id: cred.user.uid,
            email: form.email.trim(),
            full_name: form.name,
            country: form.country,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          { merge: true },
        );
      } catch {
        // ignore
      }
      setBusy(false);
      nav({ to: "/dashboard" });
    } catch (err: unknown) {
      setBusy(false);
      setError(
        cleanAuthError(err, "Registration failed. Please check your information and try again."),
      );
    }
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Open an evaluation or instant account in a few minutes."
    >
      <form className="space-y-4" onSubmit={submit}>
        {error && <Alert message={error} />}
        <Field
          label="Full Name"
          placeholder="Your legal name"
          required
          value={form.name}
          onChange={set("name")}
        />
        <Field
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
          value={form.email}
          onChange={set("email")}
        />
        <Field
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          required
          value={form.password}
          onChange={set("password")}
        />
        <Field
          label="Confirm Password"
          type="password"
          placeholder="Repeat your password"
          required
          value={form.confirm}
          onChange={set("confirm")}
        />
        <label className="block text-sm text-copy">
          Country
          <select
            value={form.country}
            onChange={set("country")}
            className="mt-1.5 w-full rounded-lg border border-line bg-surface px-4 py-3"
          >
            <option>United States</option>
            <option>United Kingdom</option>
            <option>United Arab Emirates</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>Other</option>
          </select>
        </label>
        <label className="flex gap-2 text-xs text-muted">
          <input type="checkbox" required /> I agree to the Terms &amp; Agreement and Risk
          Disclosure.
        </label>
        <Button className="w-full" type="submit" disabled={busy}>
          {busy ? <Loader2 className="animate-spin" size={16} /> : null}Create Account
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link to="/login" className="text-brand">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}

export function Forgot() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setBusy(false);
      setSent(true);
    } catch (err: unknown) {
      setBusy(false);
      const msg = err instanceof Error ? err.message : "Could not send reset email.";
      if (msg.includes("user-not-found")) {
        // Do not leak existence, show sent
        setSent(true);
      } else {
        setError(cleanAuthError(err, "Could not send reset email. Please try again."));
      }
    }
  };

  return (
    <AuthShell
      title="Reset your password"
      subtitle="We'll email you a secure link to set a new password."
    >
      {sent ? (
        <div className="rounded-xl border border-success/30 bg-success/10 p-5 text-center">
          <CheckCircle2 className="mx-auto text-success" />
          <h2 className="mt-3 font-semibold">Check your inbox</h2>
          <p className="mt-2 text-sm text-muted">
            If an account exists for {email}, a reset link is on its way.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-5">
          {error && <Alert message={error} />}
          <Field
            label="Email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="w-full" type="submit" disabled={busy}>
            <Mail size={16} />
            Send Reset Link
          </Button>
        </form>
      )}
      <p className="mt-6 text-center text-sm">
        <Link to="/login" className="text-brand">
          Back to sign in
        </Link>
      </p>
    </AuthShell>
  );
}

export function ResetPassword() {
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirm) {
      setError("Both password fields must match.");
      return;
    }
    setBusy(true);
    setError("");

    try {
      if (auth.currentUser) {
        await updatePassword(auth.currentUser, password);
        setBusy(false);
        nav({ to: "/dashboard" });
      } else {
        setBusy(false);
        setError("No active reset session found. Please sign in or request a new reset link.");
      }
    } catch (err: unknown) {
      setBusy(false);
      setError(cleanAuthError(err, "Could not update password. Please try again."));
    }
  };

  return (
    <AuthShell
      title="Set a new password"
      subtitle="Choose a password you have not used on this account before."
    >
      <form className="space-y-5" onSubmit={submit}>
        {error && <Alert message={error} />}
        <Field
          label="New Password"
          type="password"
          placeholder="At least 8 characters"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Field
          label="Confirm Password"
          type="password"
          placeholder="Repeat your password"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Button className="w-full" type="submit" disabled={busy}>
          Update Password
        </Button>
      </form>
      <p className="mt-6 text-center text-sm">
        <Link to="/login" className="text-brand">
          Back to sign in
        </Link>
      </p>
    </AuthShell>
  );
}
