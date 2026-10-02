import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { O as Construction, i as TriangleAlert, u as RefreshCw, x as House } from "../_libs/lucide-react.mjs";
import { c as Section, i as Card, r as Button } from "./session-BFLLUQCL.mjs";
import { i as SiteLayout, r as Equity } from "./layouts-CW9SqjRk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-status-CUYFaBYW.js
var import_jsx_runtime = require_jsx_runtime();
var legal = {
	terms: {
		title: "Terms & Agreement",
		date: "August 1, 2026",
		sections: [
			["Acceptance of Terms", "By accessing VEXO FUNDED or purchasing an account, you agree to these terms and all applicable laws."],
			["Nature of Service", "VEXO FUNDED provides simulated trading evaluations and funded account opportunities. Evaluation activity is conducted in a demo environment; client funds are not traded on live markets during evaluation."],
			["Account Rules", "Traders must follow the profit target, daily loss limit, maximum drawdown, and conduct requirements shown for their selected account."],
			["Payments and Fees", "Account fees cover access to the evaluation service and are generally non-refundable once access has been delivered."],
			["Prohibited Conduct", "Copy trading abuse, account sharing, platform manipulation, and fraudulent activity are prohibited."],
			["Termination", "We may suspend or terminate accounts that breach these terms or the applicable trading rules."],
			["Limitation of Liability", "Trading involves risk. VEXO FUNDED is not responsible for indirect losses arising from platform use."],
			["Changes to Terms", "We may update these terms and will publish the effective date of material changes."]
		]
	},
	privacy: {
		title: "Privacy Agreement & Terms Policy",
		date: "August 14, 2026",
		sections: [
			["Information We Collect", "We collect account, contact, transaction, support, and technical information needed to provide and improve our services."],
			["How We Use Information", "Information is used for account delivery, support, compliance, fraud prevention, and service communications."],
			["Mandatory Legal Email Address Requirement", "Customers must use a valid personal email address. Addresses imitating VEXO FUNDED or related funding brands may be rejected for compliance reasons."],
			["Data Storage and Security", "Reasonable technical and organizational safeguards are used to protect personal information."],
			["Payment Information", "Cryptocurrency transaction references may be retained for reconciliation and support."],
			["Cookies", "Cookies support sessions, preferences, security, and aggregate site analytics."],
			["Your Rights", "You may request access, correction, or deletion where permitted by applicable law."]
		]
	},
	refund: {
		title: "Refund Policy",
		date: "August 14, 2026",
		sections: [
			["General Policy", "Account fees are generally non-refundable after credentials or service access have been provided."],
			["Eligible Cases", "A refund may be considered for non-delivery, duplicate charges, or cancellation within 24 hours before trading begins."],
			["Non-Refundable Situations", "Refunds are not available after trading begins, following a rule breach, or where compliance requirements were violated."],
			["Request Process", "Open a Billing support ticket within 24 hours and include your order reference. Requests are reviewed within two business days."],
			["Processing Time", "Approved cryptocurrency refunds are generally processed within 3–5 business days."]
		]
	},
	risk: {
		title: "Risk Disclosure",
		date: "August 1, 2026",
		sections: [
			["Evaluation Accounts", "Evaluation accounts are simulated and do not represent deposits or live client funds."],
			["Funded Accounts", "Eligible payouts are paid from firm capital according to the funded account agreement."],
			["Trading Risk", "Trading carries substantial risk and results can vary. Past performance does not indicate future results."],
			["No Investment Advice", "VEXO FUNDED does not provide investment, legal, or tax advice."],
			["Suitability", "You should assess whether trading and evaluation fees are suitable for your circumstances."]
		]
	},
	cookies: {
		title: "Cookies Policy",
		date: "August 1, 2026",
		sections: [
			["What Are Cookies", "Cookies are small files used by websites to remember settings and support essential functions."],
			["How We Use Cookies", "We use cookies for sessions, preferences, security, and aggregate analytics."],
			["Managing Cookies", "You can control optional cookies using the site notice or your browser settings."],
			["Third-Party Cookies", "Some service providers may set cookies under their own policies."]
		]
	}
};
function LegalPage({ kind }) {
	const d = legal[kind];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pb-10 pt-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold",
				children: d.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: ["Last updated: ", d.date]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl space-y-5",
			children: d.sections.map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				hover: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-lg font-semibold",
					children: [
						i + 1,
						". ",
						t
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-7 text-muted",
					children: b
				})]
			}, t))
		})
	})] });
}
function StatusPage({ kind }) {
	const c = kind === "404" ? [
		"404",
		"Page not found",
		"The page you’re looking for doesn’t exist or has been moved.",
		House
	] : kind === "500" ? [
		"500",
		"Something went wrong",
		"We couldn’t load this page. Please try again in a moment.",
		TriangleAlert
	] : [
		"",
		"Scheduled Maintenance",
		"We’re making improvements and will be back shortly.",
		Construction
	];
	const I = c[3];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid min-h-screen place-items-center overflow-hidden p-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg market-bg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Equity, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, {
						className: "mx-auto text-brand",
						size: 44
					}),
					c[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "num mt-5 text-7xl font-bold text-brand-soft",
						children: c[0]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-3xl font-semibold",
						children: c[1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: c[2]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							to: "/",
							children: "Go Home"
						}), kind === "500" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							onClick: () => location.reload(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 }), "Try Again"]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { StatusPage as n, LegalPage as t };
