import { O as Construction, i as TriangleAlert, u as RefreshCw, x as House } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { c as Section, i as Card, r as Button } from "./session-BWHLnZm0.mjs";
import { i as SiteLayout, r as Equity } from "./layouts-DUnCLKV-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-status-Ctvc9neV.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/vexo/legal-status.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "pb-10 pt-36",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-4xl font-semibold",
				children: d.title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-sm text-muted",
				children: ["Last updated: ", d.date]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 151,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 150,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
		className: "pt-0",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-3xl space-y-5",
			children: d.sections.map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				hover: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-lg font-semibold",
					children: [
						i + 1,
						". ",
						t
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-sm leading-7 text-muted",
					children: b
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 163,
					columnNumber: 15
				}, this)]
			}, t, true, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 13
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 157,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 156,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 149,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative grid min-h-screen place-items-center overflow-hidden p-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 grid-bg market-bg" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 196,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Equity, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I, {
						className: "mx-auto text-brand",
						size: 44
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 199,
						columnNumber: 9
					}, this),
					c[0] && /* @__PURE__ */ (void 0)("p", {
						className: "num mt-5 text-7xl font-bold text-brand-soft",
						children: c[0]
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 18
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-4 font-display text-3xl font-semibold",
						children: c[1]
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 201,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 text-muted",
						children: c[2]
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 202,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 flex justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							to: "/",
							children: "Go Home"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 204,
							columnNumber: 11
						}, this), kind === "500" && /* @__PURE__ */ (void 0)(Button, {
							variant: "secondary",
							onClick: () => location.reload(),
							children: [/* @__PURE__ */ (void 0)(RefreshCw, { size: 16 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 207,
								columnNumber: 15
							}, this), "Try Again"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 203,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 198,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 195,
		columnNumber: 5
	}, this);
}
//#endregion
export { StatusPage as n, LegalPage as t };
