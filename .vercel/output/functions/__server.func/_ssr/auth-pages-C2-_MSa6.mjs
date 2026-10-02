import { o as __toESM } from "../_runtime.mjs";
import "../_libs/firebase.mjs";
import { a as sendPasswordResetEmail, c as updatePassword, l as updateProfile, n as createUserWithEmailAndPassword, o as signInWithEmailAndPassword } from "../_libs/firebase__auth.mjs";
import { a as setDoc, l as doc } from "../_libs/@firebase/firestore+[...].mjs";
import { r as db, t as auth } from "./client-Cis1qyns.mjs";
import { o as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, x as useSearch, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as CircleCheck, N as CircleAlert, _ as LoaderCircle, m as Mail } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { o as Field, r as Button } from "./session-BWHLnZm0.mjs";
import { t as AuthShell } from "./layouts-DUnCLKV-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-pages-C2-_MSa6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/vexo/auth-pages.tsx";
function Alert({ message }) {
	if (!message) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-start gap-3 rounded-lg border border-brand/35 bg-panel-raised/90 p-3.5 text-sm shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "font-medium text-bright leading-relaxed",
			children: message
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: "Welcome back",
		subtitle: "Sign in to reach your accounts, orders and support desk.",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "space-y-5",
			onSubmit: submit,
			children: [
				error && /* @__PURE__ */ (void 0)(Alert, { message: error }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
					label: "Email",
					type: "email",
					placeholder: "you@example.com",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
					label: "Password",
					type: "password",
					placeholder: "••••••••",
					required: true,
					value: password,
					onChange: (e) => setPassword(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 139,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex justify-end text-sm",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/forgot-password",
						className: "text-brand",
						children: "Forgot password?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 147,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					className: "w-full",
					disabled: busy,
					children: [busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
						className: "animate-spin",
						size: 16
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 19
					}, this) : null, "Sign In"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 152,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 129,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-7 text-center text-sm text-muted",
			children: [
				"Don't have an account?",
				" ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/signup",
					search: search?.redirect ? { redirect: search.redirect } : void 0,
					className: "text-brand",
					children: "Get funded"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 158,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 156,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 125,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: "Create your account",
		subtitle: "Open an evaluation or instant account in a few minutes.",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "space-y-4",
			onSubmit: submit,
			children: [
				error && /* @__PURE__ */ (void 0)(Alert, { message: error }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 236,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
					label: "Full Name",
					placeholder: "Your legal name",
					required: true,
					value: form.name,
					onChange: set("name")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 237,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
					label: "Email",
					type: "email",
					placeholder: "you@example.com",
					required: true,
					value: form.email,
					onChange: set("email")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 244,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
					label: "Password",
					type: "password",
					placeholder: "At least 8 characters",
					required: true,
					value: form.password,
					onChange: set("password")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 252,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
					label: "Confirm Password",
					type: "password",
					placeholder: "Repeat your password",
					required: true,
					value: form.confirm,
					onChange: set("confirm")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 260,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
					className: "block text-sm text-copy",
					children: ["Country", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
						value: form.country,
						onChange: set("country"),
						className: "mt-1.5 w-full rounded-lg border border-line bg-surface px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "United States" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 275,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "United Kingdom" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 276,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "United Arab Emirates" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 277,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Pakistan" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 278,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "India" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 279,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Other" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 280,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 270,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 268,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
					className: "flex gap-2 text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "checkbox",
						required: true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 284,
						columnNumber: 11
					}, this), " I agree to the Terms & Agreement and Risk Disclosure."]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 283,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					className: "w-full",
					type: "submit",
					disabled: busy,
					children: [busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
						className: "animate-spin",
						size: 16
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 288,
						columnNumber: 19
					}, this) : null, "Create Account"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 287,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 235,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-6 text-center text-sm text-muted",
			children: [
				"Already have an account?",
				" ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/login",
					search: search?.redirect ? { redirect: search.redirect } : void 0,
					className: "text-brand",
					children: "Sign in"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 293,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 291,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 231,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: "Reset your password",
		subtitle: "We'll email you a secure link to set a new password.",
		children: [sent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "rounded-xl border border-success/30 bg-success/10 p-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "mx-auto text-success" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 338,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-3 font-semibold",
					children: "Check your inbox"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 339,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"If an account exists for ",
						email,
						", a reset link is on its way."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 340,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 337,
			columnNumber: 9
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			onSubmit: submit,
			className: "space-y-5",
			children: [
				error && /* @__PURE__ */ (void 0)(Alert, { message: error }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 346,
					columnNumber: 21
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
					label: "Email",
					type: "email",
					placeholder: "you@example.com",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 347,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					className: "w-full",
					type: "submit",
					disabled: busy,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { size: 16 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 356,
						columnNumber: 13
					}, this), "Send Reset Link"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 355,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 345,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-6 text-center text-sm",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/login",
				className: "text-brand",
				children: "Back to sign in"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 362,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 361,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 332,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthShell, {
		title: "Set a new password",
		subtitle: "Choose a password you have not used on this account before.",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "space-y-5",
			onSubmit: submit,
			children: [
				error && /* @__PURE__ */ (void 0)(Alert, { message: error }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 407,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
					label: "New Password",
					type: "password",
					placeholder: "At least 8 characters",
					required: true,
					value: password,
					onChange: (e) => setPassword(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 408,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
					label: "Confirm Password",
					type: "password",
					placeholder: "Repeat your password",
					required: true,
					value: confirm,
					onChange: (e) => setConfirm(e.target.value)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 416,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					className: "w-full",
					type: "submit",
					disabled: busy,
					children: "Update Password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 424,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 406,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-6 text-center text-sm",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/login",
				className: "text-brand",
				children: "Back to sign in"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 429,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 428,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 402,
		columnNumber: 5
	}, this);
}
//#endregion
export { Signup as i, Login as n, ResetPassword as r, Forgot as t };
