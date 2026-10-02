import { o as __toESM } from "../_runtime.mjs";
import { o as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, x as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ArrowLeft, E as Copy, I as Check, N as CircleAlert, _ as LoaderCircle, g as Lock, s as Tag, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { d as brokers, f as challengePlans, i as Card, m as crypto, n as Badge, p as cn, r as Button, u as assets, v as instantPlans, y as money } from "./session-BWHLnZm0.mjs";
import { i as SiteLayout } from "./layouts-DUnCLKV-.mjs";
import { t as createOrder } from "./vexo-api-DKJ6VF6g.mjs";
import { t as QRCodeSVG } from "../_libs/qrcode.react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-pages-BZ4b-sfe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/vexo/checkout-pages.tsx";
var defaultPlan = {
	size: 2e4,
	price: 466,
	dailyLoss: 4667,
	split: 92,
	type: "instant",
	popular: true
};
var defaultMethod = crypto[0] ?? {
	id: "USDT TRC20",
	network: "TRON Network (TRC-20)",
	logo: assets.usdt,
	address: "TMaaVzAJ4iP6Tabn85MMm9oBPRwLVuLTrJ"
};
function getPlan(raw) {
	const [type, size] = String(raw || "instant-20000").split("-");
	return (type === "challenge" ? challengePlans : instantPlans).find((p) => p.size === Number(size)) ?? defaultPlan;
}
function Header({ step, plan, total }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-6 flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				to: "/accounts",
				variant: "ghost",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { size: 16 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 11
				}, this), "Back"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-bold",
				children: "Complete Your Purchase"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-7 grid grid-cols-3 gap-2",
			children: [
				"Broker",
				"Payment",
				"Confirm"
			].map((l, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: cn("mx-auto grid h-8 w-8 place-items-center rounded-full border text-sm", i + 1 <= step ? "border-success bg-success text-ink" : "border-line text-dim"),
					children: i + 1 < step ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { size: 15 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 31
					}, this) : i + 1
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-xs text-muted",
					children: l
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 13
				}, this)]
			}, l, true, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-8 flex justify-between rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
				"Selected:",
				" ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: [
					money(plan.size),
					" ",
					plan.type === "instant" ? "Instant" : "Evaluation",
					" Account"
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-right",
				children: total < plan.price ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs text-muted line-through",
							children: money(plan.price)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
							className: "num text-brand-soft",
							children: money(total)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded bg-success/15 px-1.5 py-0.5 text-xs font-semibold text-success",
							children: "-28.57%"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 13
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
					className: "num text-brand-soft",
					children: money(total)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 71,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 5
	}, this);
}
function BrokerStep() {
	const s = useSearch({ strict: false });
	const nav = useNavigate();
	const plan = getPlan(s.plan);
	const [selected, setSelected] = (0, import_react.useState)("Pocket Option");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "min-h-screen px-4 pb-20 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
					step: 1,
					plan,
					total: plan.price
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-2xl font-bold",
					children: "1. Select Your Broker Partner"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",
					children: brokers.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setSelected(b.name),
						className: cn("relative flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border bg-surface p-4", selected === b.name ? "border-brand ring-2 ring-brand/40" : "border-line"),
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: b.logo,
								className: "h-12 w-12 rounded-xl object-contain",
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 116,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
								className: "text-sm",
								children: b.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 17
							}, this),
							selected === b.name && /* @__PURE__ */ (void 0)("i", {
								className: "absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-brand text-ink",
								children: /* @__PURE__ */ (void 0)(Check, { size: 12 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 19
							}, this)
						]
					}, b.name, true, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					className: "mt-8 w-full py-4",
					onClick: () => nav({
						to: "/checkout/payment",
						search: {
							plan: s.plan || "instant-20000",
							broker: selected
						}
					}),
					children: ["Continue to Payment ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { size: 19 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 135,
						columnNumber: 33
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 103,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 102,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 101,
		columnNumber: 5
	}, this);
}
function PaymentStep() {
	const s = useSearch({ strict: false });
	const nav = useNavigate();
	const plan = getPlan(s.plan);
	const [method, setMethod] = (0, import_react.useState)("USDT TRC20");
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const [applied, setApplied] = (0, import_react.useState)(false);
	const [couponError, setCouponError] = (0, import_react.useState)("");
	const handleApplyCoupon = () => {
		if (!coupon.trim()) {
			setCouponError("Please enter a promo code.");
			setApplied(false);
			return;
		}
		setCouponError("This promo code has expired.");
		setApplied(false);
	};
	const handleRemoveCoupon = () => {
		setApplied(false);
		setCoupon("");
		setCouponError("");
	};
	const total = plan.price;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "min-h-screen px-4 pb-20 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
					step: 2,
					plan,
					total
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 174,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					hover: false,
					className: "mb-8 max-w-md p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, {
								size: 14,
								className: "mr-1 inline"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 177,
								columnNumber: 15
							}, this), "Promo Coupon Code"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 176,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-2 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								value: coupon,
								onChange: (e) => {
									setCoupon(e.target.value);
									if (applied) setApplied(false);
									if (couponError) setCouponError("");
								},
								onKeyDown: (e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										handleApplyCoupon();
									}
								},
								placeholder: "Enter promo code",
								className: "min-w-0 flex-1 rounded-lg border border-line bg-ink px-3 py-2 uppercase"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 181,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								size: "sm",
								onClick: handleApplyCoupon,
								children: "Apply"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 197,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 180,
							columnNumber: 13
						}, this),
						applied && /* @__PURE__ */ (void 0)("div", {
							className: "mt-2.5 flex items-center justify-between rounded-lg border border-success/30 bg-success/10 px-3 py-2 text-xs text-success",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-1.5 font-medium",
								children: [/* @__PURE__ */ (void 0)(Check, {
									size: 14,
									className: "shrink-0"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 204,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Promo code applied!" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 205,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 203,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: handleRemoveCoupon,
								className: "ml-2 text-xs text-muted underline hover:text-bright",
								children: "Remove"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 207,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 15
						}, this),
						couponError && /* @__PURE__ */ (void 0)("p", {
							className: "mt-2 flex items-center gap-1.5 text-xs text-red-400",
							children: [/* @__PURE__ */ (void 0)(CircleAlert, {
								size: 14,
								className: "shrink-0"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 218,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("span", { children: couponError }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 219,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 217,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 175,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-2xl font-bold",
					children: "Select Payment Method (Crypto)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 223,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",
					children: crypto.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setMethod(m.id),
						className: cn("relative flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border bg-surface p-4", method === m.id ? "border-brand ring-2 ring-brand/40" : "border-line"),
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: m.logo,
								className: "h-12 w-12 object-contain",
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 234,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
								className: "text-sm",
								children: m.id
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 235,
								columnNumber: 17
							}, this),
							method === m.id && /* @__PURE__ */ (void 0)("i", {
								className: "absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-brand text-ink",
								children: /* @__PURE__ */ (void 0)(Check, { size: 12 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 238,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 237,
								columnNumber: 19
							}, this)
						]
					}, m.id, true, {
						fileName: _jsxFileName,
						lineNumber: 226,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 224,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid grid-cols-3 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						to: "/checkout/details",
						search: s.plan ? { plan: s.plan } : void 0,
						variant: "secondary",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { size: 18 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 250,
							columnNumber: 15
						}, this), "Back"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 245,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						className: "col-span-2 py-4",
						onClick: () => nav({
							to: "/checkout/deposit",
							search: {
								plan: s.plan || "instant-20000",
								broker: s.broker || "Pocket Option",
								method,
								total,
								coupon: ""
							}
						}),
						children: ["Proceed to Payment ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { size: 19 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 268,
							columnNumber: 34
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 253,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 244,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 173,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 172,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 171,
		columnNumber: 5
	}, this);
}
function DepositStep() {
	const s = useSearch({ strict: false });
	const nav = useNavigate();
	const plan = getPlan(s.plan);
	const method = crypto.find((m) => m.id === s.method) ?? defaultMethod;
	const total = plan.price;
	const [agree, setAgree] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const submit = async (e) => {
		e.preventDefault();
		if (!agree || busy) return;
		setBusy(true);
		setError("");
		try {
			const order = await createOrder({
				account_type: plan.type,
				account_size: plan.size,
				price: total,
				broker: s.broker || "Pocket Option",
				payment_method: method.id,
				coupon: null
			});
			nav({
				to: "/dashboard",
				search: {
					payment: "processed",
					order: order.reference
				}
			});
		} catch (err) {
			setError(err instanceof Error ? err.message : "We could not submit this order. Please try again.");
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "min-h-screen px-4 pb-20 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
				step: 3,
				plan,
				total
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 321,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: submit,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					hover: false,
					className: "p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap justify-between gap-3 border-b border-line pb-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "font-display text-xl font-bold",
								children: "Deposit & Confirm"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 326,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted",
								children: "Send the exact amount, then submit the order for review."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 327,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 325,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								tone: "brand",
								children: ["Broker: ", s.broker || "Pocket Option"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 331,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 324,
							columnNumber: 15
						}, this),
						error && /* @__PURE__ */ (void 0)("div", {
							className: "mt-4 flex items-start gap-3 rounded-lg border border-brand/35 bg-panel-raised/90 p-3.5 text-sm shadow-sm",
							children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 335,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-medium leading-relaxed text-bright",
								children: error
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 336,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 334,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 rounded-xl border border-brand/30 bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex justify-between border-b border-line pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: method.logo,
										className: "h-12 w-12 object-contain",
										alt: ""
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 342,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: method.id }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 344,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-muted",
										children: method.network
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 345,
										columnNumber: 23
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 343,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 341,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
										className: "text-muted",
										children: "Total Amount"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 349,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "num text-xl font-bold text-brand-soft",
										children: [
											"$",
											total,
											" USD"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 350,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 348,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 340,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-5 flex flex-col gap-5 md:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid h-44 w-44 shrink-0 place-items-center rounded-xl bg-white p-3 text-ink shadow-inner",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QRCodeSVG, {
										value: method.address,
										size: 152,
										level: "M",
										includeMargin: false,
										className: "h-full w-full"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 355,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 354,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "text-xs font-semibold",
											children: [
												"Deposit Address (",
												method.network,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 364,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mt-2 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												readOnly: true,
												value: method.address,
												className: "min-w-0 flex-1 rounded-lg border border-line bg-ink p-3 text-xs"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 368,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												type: "button",
												variant: "outline",
												onClick: () => {
													navigator.clipboard?.writeText(method.address);
													setCopied(true);
												},
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { size: 15 }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 381,
													columnNumber: 25
												}, this), copied ? "Copied!" : "Copy"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 373,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 367,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "mt-4 rounded-lg border border-line bg-soft p-4 text-xs text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
												className: "text-brand",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, {
													size: 13,
													className: "inline"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 387,
													columnNumber: 25
												}, this), " Manual settlement"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 386,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-2",
												children: "Send the exact total to the address above, then confirm below. Our desk matches the transaction and updates your order in the dashboard."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 389,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 385,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 363,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 353,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 339,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "mt-6 flex gap-2 text-sm text-copy",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "checkbox",
								checked: agree,
								onChange: (e) => setAgree(e.target.checked)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 398,
								columnNumber: 17
							}, this), "I agree to the Terms & Agreement, Refund Policy, and Risk Disclosure"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 397,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 323,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 grid grid-cols-3 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						to: "/checkout/payment",
						search: s.plan ? { plan: s.plan } : void 0,
						variant: "secondary",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 412,
							columnNumber: 17
						}, this), "Back"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 407,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						disabled: !agree || busy,
						className: "col-span-2 py-4",
						children: [busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
							className: "animate-spin",
							size: 16
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 416,
							columnNumber: 25
						}, this) : null, "I have paid"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 415,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 406,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 322,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 320,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 319,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 318,
		columnNumber: 5
	}, this);
}
//#endregion
export { DepositStep as n, PaymentStep as r, BrokerStep as t };
