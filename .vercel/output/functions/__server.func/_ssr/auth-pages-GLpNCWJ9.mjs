import { o as __toESM } from "../_runtime.mjs";
import "../_libs/firebase.mjs";
import { a as sendPasswordResetEmail, c as updatePassword, l as updateProfile, n as createUserWithEmailAndPassword, o as signInWithEmailAndPassword } from "../_libs/firebase__auth.mjs";
import { a as setDoc, l as doc } from "../_libs/@firebase/firestore+[...].mjs";
import { r as db, t as auth } from "./client-q8YvMaqw.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, x as useSearch, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as CircleCheck, N as CircleAlert, _ as LoaderCircle, m as Mail } from "../_libs/lucide-react.mjs";
import { o as Field, r as Button } from "./session-BFLLUQCL.mjs";
import { t as AuthShell } from "./layouts-CW9SqjRk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-pages-GLpNCWJ9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Alert({ message }) {
	if (!message) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3 rounded-lg border border-brand/35 bg-panel-raised/90 p-3.5 text-sm shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-bright leading-relaxed",
			children: message
		})]
	});
}
function cleanAuthError(err, fallback) {
	if (!err) return "";
	const raw = err instanceof Error ? err.message : String(err);
	if (raw.includes("user-not-found") || raw.includes("wrong-password") || raw.includes("invalid-credential") || raw.includes("INVALID_LOGIN_CREDENTIALS")) return "Invalid email or password. Please check your credentials and try again.";
	if (raw.includes("email-already-in-use")) return "An account with this email address already exists. Please sign in.";
	if (raw.includes("weak-password")) return "Password should be at least 8 characters long.";
	if (raw.includes("invalid-email")) return "Please enter a valid email address.";
	if (raw.includes("too-many-requests")) return "Access temporarily locked due to multiple failed attempts. Please try again later.";
	if (raw.includes("network-request-failed")) return "Network connection error. Please check your internet connection.";
	if (raw.includes("user-disabled")) return "This account has been disabled. Please contact support.";
	return raw.replace(/^Firebase:\s*/i, "").replace(/^Error\s*\([^)]+\):\s*/i, "").trim() || fallback;
}
function safePath(value) {
	return typeof value === "string" && value.startsWith("/") && !value.startsWith("//") ? value : null;
}
function parseSearchQuery(query) {
	const result = {};
	if (!query) return result;
	(query.startsWith("?") ? query.slice(1) : query).split("&").forEach((part) => {
		if (!part) return;
		const eqIdx = part.indexOf("=");
		if (eqIdx === -1) result[decodeURIComponent(part)] = "";
		else {
			const k = part.slice(0, eqIdx);
			const v = part.slice(eqIdx + 1);
			try {
				result[decodeURIComponent(k)] = decodeURIComponent(v);
			} catch {
				result[k] = v;
			}
		}
	});
	return result;
}
function navigateSafe(nav, target) {
	if (target.includes("?")) {
		const [pathname, queryString] = target.split("?");
		nav({
			to: pathname,
			search: parseSearchQuery(queryString)
		});
	} else nav({ to: target });
}
function Login() {
	const nav = useNavigate();
	const search = useSearch({ strict: false });
	const target = safePath(search.redirect) ?? "/dashboard";
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (event) => {
		event.preventDefault();
		setBusy(true);
		setError("");
		try {
			await signInWithEmailAndPassword(auth, email.trim(), password);
			setBusy(false);
			navigateSafe(nav, target);
		} catch (err) {
			setBusy(false);
			setError(cleanAuthError(err, "Sign in failed. Please check your credentials and try again."));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthShell, {
		title: "Welcome back",
		subtitle: "Sign in to reach your accounts, orders and support desk.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-5",
			onSubmit: submit,
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, { message: error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					type: "email",
					placeholder: "you@example.com",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Password",
					type: "password",
					placeholder: "••••••••",
					required: true,
					value: password,
					onChange: (e) => setPassword(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/forgot-password",
						className: "text-brand",
						children: "Forgot password?"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					className: "w-full",
					disabled: busy,
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "animate-spin",
						size: 16
					}) : null, "Sign In"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-7 text-center text-sm text-muted",
			children: [
				"Don't have an account?",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signup",
					search: search?.redirect ? { redirect: search.redirect } : void 0,
					className: "text-brand",
					children: "Get funded"
				})
			]
		})]
	});
}
function Signup() {
	const nav = useNavigate();
	const search = useSearch({ strict: false });
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		password: "",
		confirm: "",
		country: "United States"
	});
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const set = (key) => (event) => setForm({
		...form,
		[key]: event.target.value
	});
	const submit = async (event) => {
		event.preventDefault();
		if (form.password !== form.confirm) {
			setError("Both password fields must match.");
			return;
		}
		setBusy(true);
		setError("");
		try {
			const cred = await createUserWithEmailAndPassword(auth, form.email.trim(), form.password);
			if (form.name) try {
				await updateProfile(cred.user, { displayName: form.name });
			} catch {}
			try {
				await setDoc(doc(db, "profiles", cred.user.uid), {
					id: cred.user.uid,
					email: form.email.trim(),
					full_name: form.name,
					country: form.country,
					created_at: (/* @__PURE__ */ new Date()).toISOString(),
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				}, { merge: true });
			} catch {}
			setBusy(false);
			const target = safePath(search?.redirect) ?? "/dashboard";
			navigateSafe(nav, target);
		} catch (err) {
			setBusy(false);
			setError(cleanAuthError(err, "Registration failed. Please check your information and try again."));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthShell, {
		title: "Create your account",
		subtitle: "Open an evaluation or instant account in a few minutes.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: submit,
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, { message: error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Full Name",
					placeholder: "Your legal name",
					required: true,
					value: form.name,
					onChange: set("name")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					type: "email",
					placeholder: "you@example.com",
					required: true,
					value: form.email,
					onChange: set("email")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Password",
					type: "password",
					placeholder: "At least 8 characters",
					required: true,
					value: form.password,
					onChange: set("password")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Confirm Password",
					type: "password",
					placeholder: "Repeat your password",
					required: true,
					value: form.confirm,
					onChange: set("confirm")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm text-copy",
					children: ["Country", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: form.country,
						onChange: set("country"),
						className: "mt-1.5 w-full rounded-lg border border-line bg-surface px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "United States" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "United Kingdom" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "United Arab Emirates" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pakistan" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "India" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex gap-2 text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						required: true
					}), " I agree to the Terms & Agreement and Risk Disclosure."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "w-full",
					type: "submit",
					disabled: busy,
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "animate-spin",
						size: 16
					}) : null, "Create Account"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-center text-sm text-muted",
			children: [
				"Already have an account?",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					search: search?.redirect ? { redirect: search.redirect } : void 0,
					className: "text-brand",
					children: "Sign in"
				})
			]
		})]
	});
}
function Forgot() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (event) => {
		event.preventDefault();
		setBusy(true);
		setError("");
		try {
			await sendPasswordResetEmail(auth, email.trim());
			setBusy(false);
			setSent(true);
		} catch (err) {
			setBusy(false);
			if ((err instanceof Error ? err.message : "Could not send reset email.").includes("user-not-found")) setSent(true);
			else setError(cleanAuthError(err, "Could not send reset email. Please try again."));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthShell, {
		title: "Reset your password",
		subtitle: "We'll email you a secure link to set a new password.",
		children: [sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-success/30 bg-success/10 p-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto text-success" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-semibold",
					children: "Check your inbox"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"If an account exists for ",
						email,
						", a reset link is on its way."
					]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "space-y-5",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, { message: error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					type: "email",
					placeholder: "you@example.com",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "w-full",
					type: "submit",
					disabled: busy,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }), "Send Reset Link"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-center text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "text-brand",
				children: "Back to sign in"
			})
		})]
	});
}
function ResetPassword() {
	const nav = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (event) => {
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
		} catch (err) {
			setBusy(false);
			setError(cleanAuthError(err, "Could not update password. Please try again."));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthShell, {
		title: "Set a new password",
		subtitle: "Choose a password you have not used on this account before.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-5",
			onSubmit: submit,
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, { message: error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "New Password",
					type: "password",
					placeholder: "At least 8 characters",
					required: true,
					value: password,
					onChange: (e) => setPassword(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Confirm Password",
					type: "password",
					placeholder: "Repeat your password",
					required: true,
					value: confirm,
					onChange: (e) => setConfirm(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					type: "submit",
					disabled: busy,
					children: "Update Password"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-center text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "text-brand",
				children: "Back to sign in"
			})
		})]
	});
}
//#endregion
export { Signup as i, Login as n, ResetPassword as r, Forgot as t };
