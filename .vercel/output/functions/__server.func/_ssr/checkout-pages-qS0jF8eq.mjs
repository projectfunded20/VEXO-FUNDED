import { o as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, x as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ArrowLeft, E as Copy, I as Check, N as CircleAlert, _ as LoaderCircle, g as Lock, s as Tag, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as brokers, f as challengePlans, i as Card, m as crypto, n as Badge, p as cn, r as Button, u as assets, v as instantPlans, y as money } from "./session-BFLLUQCL.mjs";
import { i as SiteLayout } from "./layouts-CW9SqjRk.mjs";
import { t as createOrder } from "./vexo-api-qfIjf-Nu.mjs";
import { t as QRCodeSVG } from "../_libs/qrcode.react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-pages-qS0jF8eq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				to: "/accounts",
				variant: "ghost",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), "Back"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-bold",
				children: "Complete Your Purchase"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-7 grid grid-cols-3 gap-2",
			children: [
				"Broker",
				"Payment",
				"Confirm"
			].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("mx-auto grid h-8 w-8 place-items-center rounded-full border text-sm", i + 1 <= step ? "border-success bg-success text-ink" : "border-line text-dim"),
					children: i + 1 < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }) : i + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: l
				})]
			}, l))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex justify-between rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"Selected:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
					money(plan.size),
					" ",
					plan.type === "instant" ? "Instant" : "Evaluation",
					" Account"
				] })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-right",
				children: total < plan.price ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted line-through",
							children: money(plan.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "num text-brand-soft",
							children: money(total)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-success/15 px-1.5 py-0.5 text-xs font-semibold text-success",
							children: "-28.57%"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
					className: "num text-brand-soft",
					children: money(total)
				})
			})]
		})
	] });
}
function BrokerStep() {
	const s = useSearch({ strict: false });
	const nav = useNavigate();
	const plan = getPlan(s.plan);
	const [selected, setSelected] = (0, import_react.useState)("Pocket Option");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 pb-20 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
					step: 1,
					plan,
					total: plan.price
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: "1. Select Your Broker Partner"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",
					children: brokers.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSelected(b.name),
						className: cn("relative flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border bg-surface p-4", selected === b.name ? "border-brand ring-2 ring-brand/40" : "border-line"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: b.logo,
								className: "h-12 w-12 rounded-xl object-contain",
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-sm",
								children: b.name
							}),
							selected === b.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-brand text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 12 })
							})
						]
					}, b.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-8 w-full py-4",
					onClick: () => nav({
						to: "/checkout/payment",
						search: {
							plan: s.plan || "instant-20000",
							broker: selected
						}
					}),
					children: ["Continue to Payment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 19 })]
				})
			]
		})
	}) });
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 pb-20 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
					step: 2,
					plan,
					total
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					hover: false,
					className: "mb-8 max-w-md p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								size: 14,
								className: "mr-1 inline"
							}), "Promo Coupon Code"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
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
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: handleApplyCoupon,
								children: "Apply"
							})]
						}),
						applied && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex items-center justify-between rounded-lg border border-success/30 bg-success/10 px-3 py-2 text-xs text-success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 14,
									className: "shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Promo code applied!" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleRemoveCoupon,
								className: "ml-2 text-xs text-muted underline hover:text-bright",
								children: "Remove"
							})]
						}),
						couponError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex items-center gap-1.5 text-xs text-red-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
								size: 14,
								className: "shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: couponError })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold",
					children: "Select Payment Method (Crypto)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",
					children: crypto.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMethod(m.id),
						className: cn("relative flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border bg-surface p-4", method === m.id ? "border-brand ring-2 ring-brand/40" : "border-line"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.logo,
								className: "h-12 w-12 object-contain",
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-sm",
								children: m.id
							}),
							method === m.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-brand text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 12 })
							})
						]
					}, m.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid grid-cols-3 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						to: "/checkout/details",
						search: s.plan ? { plan: s.plan } : void 0,
						variant: "secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }), "Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
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
						children: ["Proceed to Payment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 19 })]
					})]
				})
			]
		})
	}) });
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 pb-20 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				step: 3,
				plan,
				total
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					hover: false,
					className: "p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-between gap-3 border-b border-line pb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-bold",
								children: "Deposit & Confirm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Send the exact amount, then submit the order for review."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "brand",
								children: ["Broker: ", s.broker || "Pocket Option"]
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-start gap-3 rounded-lg border border-brand/35 bg-panel-raised/90 p-3.5 text-sm shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium leading-relaxed text-bright",
								children: error
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-xl border border-brand/30 bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b border-line pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: method.logo,
										className: "h-12 w-12 object-contain",
										alt: ""
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: method.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: method.network
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
										className: "text-muted",
										children: "Total Amount"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "num text-xl font-bold text-brand-soft",
										children: [
											"$",
											total,
											" USD"
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-col gap-5 md:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-44 w-44 shrink-0 place-items-center rounded-xl bg-white p-3 text-ink shadow-inner",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QRCodeSVG, {
										value: method.address,
										size: 152,
										level: "M",
										includeMargin: false,
										className: "h-full w-full"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-semibold",
											children: [
												"Deposit Address (",
												method.network,
												")"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												readOnly: true,
												value: method.address,
												className: "min-w-0 flex-1 rounded-lg border border-line bg-ink p-3 text-xs"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "outline",
												onClick: () => {
													navigator.clipboard?.writeText(method.address);
													setCopied(true);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 15 }), copied ? "Copied!" : "Copy"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 rounded-lg border border-line bg-soft p-4 text-xs text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
												className: "text-brand",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
													size: 13,
													className: "inline"
												}), " Manual settlement"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2",
												children: "Send the exact total to the address above, then confirm below. Our desk matches the transaction and updates your order in the dashboard."
											})]
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-6 flex gap-2 text-sm text-copy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: agree,
								onChange: (e) => setAgree(e.target.checked)
							}), "I agree to the Terms & Agreement, Refund Policy, and Risk Disclosure"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-3 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						to: "/checkout/payment",
						search: s.plan ? { plan: s.plan } : void 0,
						variant: "secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), "Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						disabled: !agree || busy,
						className: "col-span-2 py-4",
						children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "animate-spin",
							size: 16
						}) : null, "I have paid"]
					})]
				})]
			})]
		})
	}) });
}
//#endregion
export { DepositStep as n, PaymentStep as r, BrokerStep as t };
