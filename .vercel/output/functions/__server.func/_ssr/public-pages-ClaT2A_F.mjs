import { o as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ChevronDown, I as Check, P as ChevronRight, S as Headphones, f as MessageCircle, l as Search, m as Mail, o as Target, t as Zap, y as LifeBuoy, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Eyebrow, c as Section, d as brokers, f as challengePlans, g as howItWorks, h as faqs, i as Card, n as Badge, o as Field, p as cn, r as Button, t as AccountCard, v as instantPlans, x as reviews, y as money } from "./session-BFLLUQCL.mjs";
import { a as openSupportChat, i as SiteLayout } from "./layouts-CW9SqjRk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public-pages-ClaT2A_F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var vexo_trading_desk_default = "/assets/vexo-trading-desk-CuZfSZE6.jpg";
function Home$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[760px] overflow-hidden border-b border-line pt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: vexo_trading_desk_default,
					width: 1920,
					height: 1080,
					alt: "Professional trading desk with market data displays",
					className: "hero-photo absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-scrim absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-center px-5 py-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							tone: "brand",
							className: "w-fit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-1.5 w-1.5 rounded-full bg-success" }), "Proprietary trading firm · Evaluations open"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-7 max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-bright",
								children: "VEXO FUNDED"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block max-w-3xl text-copy",
								children: "Capital for traders who can prove it."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-copy sm:text-lg",
							children: "Access up to $50,000 in simulated trading capital through an Instant account or a structured Challenge. Keep up to 92% of the profits you generate."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								to: "/accounts",
								size: "lg",
								children: ["Choose your account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								to: "/how-it-works",
								size: "lg",
								variant: "secondary",
								children: "See the process"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid max-w-3xl grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4",
							children: [
								["$50K", "Maximum capital"],
								["92%", "Profit split"],
								["5", "Broker options"],
								["24/7", "Support desk"]
							].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-ink/90 p-4 sm:p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "num text-xl font-semibold text-brand-soft sm:text-2xl",
									children: value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[9px] uppercase text-muted kicker",
									children: label
								})]
							}, label))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FundingPaths, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FundingJourney, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrokerGrid, { preview: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewGrid, { preview: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-8 border-l-2 border-action bg-panel p-8 sm:p-10 lg:grid-cols-[1fr_auto]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Start your evaluation" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold sm:text-4xl",
					children: "Your trading record should open doors."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "Select a funding route, choose the account size, and follow every order from one clear workspace."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					to: "/accounts",
					size: "lg",
					children: ["Compare Accounts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					to: "/faq",
					size: "lg",
					variant: "secondary",
					children: "Read the FAQ"
				})]
			})]
		}) })
	] });
}
function FundingPaths() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[.7fr_1.3fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Two funding paths" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold leading-tight sm:text-4xl",
				children: "Choose the route that matches your trading record."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
				children: "There is no one-size-fits-all account. Start directly, or demonstrate consistency through an evaluation with a lower entry price."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-line border-y border-line",
			children: [[
				Zap,
				"01",
				"Instant Account",
				"Start directly with simulated capital. No profit target is required before account access.",
				"From $70",
				"/accounts"
			], [
				Target,
				"02",
				"Challenge Account",
				"Meet the published target while staying inside the daily loss and maximum drawdown limits.",
				"From $48",
				"/accounts"
			]].map(([Icon, n, title, body, price, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group grid gap-5 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "num text-sm text-dim",
						children: n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "text-brand",
							size: 19
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
						children: body
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-5 sm:block sm:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "num text-sm font-semibold text-action",
							children: price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							to,
							variant: "ghost",
							size: "sm",
							className: "mt-1 px-0",
							children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 15 })]
						})]
					})
				]
			}, title))
		})]
	}) });
}
function FundingJourney() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[.72fr_1.28fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Funding protocol" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold sm:text-4xl",
					children: "A clear path from selection to payout."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
					children: "Every milestone is visible before you begin. No vague phases, hidden limits, or unexplained account status."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					to: "/how-it-works",
					variant: "outline",
					className: "mt-7",
					children: ["Full process ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative border-l border-line-strong",
				children: howItWorks.map(([title, body], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative border-b border-line py-6 pl-8 first:pt-0 last:border-0 last:pb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute -left-3 top-6 grid h-6 w-6 place-items-center rounded-full border border-brand/40 bg-surface num text-[9px] text-brand first:top-0",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[9px] uppercase text-dim kicker",
							children: ["Milestone ", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-lg font-semibold",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
							children: body
						})
					]
				}, title))
			})]
		})
	});
}
function AccountPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Account desk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold sm:text-4xl",
			children: "Select capital. Know every limit."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			to: "/accounts",
			variant: "secondary",
			children: ["View all account sizes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid gap-4 lg:grid-cols-3",
		children: [
			instantPlans[1],
			instantPlans[5],
			challengePlans[5]
		].filter((plan) => Boolean(plan)).map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountCard, { plan }, `${plan.type}-${plan.size}`))
	})] });
}
function BrokerGrid({ preview = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Trading Environments" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold sm:text-4xl",
			children: "Trade on the platforms you know"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mt-12 grid gap-6", preview ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-3"),
			children: brokers.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: cn("p-6", preview && "text-center"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex", preview ? "flex-col items-center" : "items-start justify-between"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: b.logo,
							alt: b.name,
							className: "h-14 w-14 rounded-xl border border-line bg-surface object-contain p-1.5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "success",
							className: preview ? "mt-3" : "",
							children: "Active"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-lg font-semibold",
						children: b.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: b.note
					}),
					!preview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-5 text-sm text-brand",
						children: "Platform details ↗"
					})
				]
			}, b.name))
		})
	] });
}
function ReviewGrid({ preview = false }) {
	const safeReviews = Array.isArray(reviews) ? reviews : [];
	const rs = preview ? safeReviews : [...safeReviews, ...safeReviews.slice(0, 2)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: preview ? "bg-surface/40" : "",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Trustpilot" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold sm:text-4xl",
				children: "What our traders say"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "num text-2xl text-brand-soft",
						children: "4.8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: "★★★★★"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: "from 2,400+ reviews"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("mt-12 grid gap-6 sm:grid-cols-2", !preview && "lg:grid-cols-3", preview && "lg:grid-cols-4"),
				children: rs.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-brand",
							children: "★★★★★"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-copy",
							children: [
								"“",
								r[3],
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3 border-t border-line pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-full bg-brand/10 text-xs font-bold text-brand",
								children: r[1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: r[0]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-dim",
								children: r[2]
							})] })]
						})
					]
				}, r[0] + i))
			})
		]
	});
}
function FAQPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Questions" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold",
			children: "Frequently asked questions"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-10 max-w-3xl space-y-3",
			children: faqs.slice(0, 4).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				hover: false,
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: f[1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: f[2]
				})]
			}, f[1]))
		})
	] });
}
function Accounts() {
	const [a, setA] = (0, import_react.useState)("instant");
	const plans = a === "instant" ? instantPlans : challengePlans;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eye: "Funding desk",
		title: "One account. Every rule visible.",
		copy: "Compare account capital, entry price, risk limits, and profit split before you commit. Choose direct access or complete a structured evaluation."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "pt-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-5 mb-9 border-y border-line bg-background/95 px-5 py-4 backdrop-blur sm:sticky sm:top-20 sm:z-20 sm:mx-0 sm:rounded-md sm:border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 rounded-sm border border-line bg-panel p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: () => setA("instant"),
							variant: a === "instant" ? "primary" : "ghost",
							className: "min-w-32",
							children: "Instant"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: () => setA("challenge"),
							variant: a === "challenge" ? "primary" : "ghost",
							className: "min-w-32",
							children: "Challenge"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-6 text-[10px] uppercase text-muted kicker sm:justify-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "num mr-1 text-bright",
								children: plans.length
							}), " sizes"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "num mr-1 text-action",
								children: "92%"
							}), " split"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "mr-1 inline-block h-1.5 w-1.5 rounded-full bg-success" }), a === "instant" ? "Direct access" : "Evaluation"] })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 hidden grid-cols-[1fr_7rem_7rem_7rem_7rem_10rem] items-center gap-4 border-b border-line px-5 pb-3 text-[9px] uppercase text-dim kicker lg:grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Account capital" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Entry price" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Daily limit" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a === "instant" ? "Route" : "Target" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Profit split" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanRow, { plan }, plan.size))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 border-l-2 border-brand pl-4 text-xs leading-relaxed text-dim",
				children: "All accounts use simulated trading environments. Published limits apply throughout the selected funding route, and funded-stage profit splits are paid from firm capital."
			})
		]
	})] });
}
function PlanRow({ plan }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: cn("group overflow-hidden", plan.popular && "border-brand/50"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 p-5 lg:grid-cols-[1fr_7rem_7rem_7rem_7rem_10rem] lg:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4 lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: plan.type === "instant" ? "success" : "brand",
							children: plan.type
						}), plan.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "brand",
							children: "Most selected"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "num mt-3 text-2xl font-semibold text-bright",
						children: money(plan.size)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-right text-[9px] uppercase text-dim kicker lg:hidden",
						children: "Account capital"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanMetric, {
					label: "Entry price",
					value: money(plan.price),
					accent: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanMetric, {
					label: "Daily limit",
					value: money(plan.dailyLoss)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanMetric, {
					label: plan.type === "instant" ? "Route" : "Profit target",
					value: plan.type === "instant" ? "Direct" : money(plan.profitTarget ?? 0)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanMetric, {
					label: "Profit split",
					value: `${plan.split}%`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					to: "/checkout/details",
					search: { plan: `${plan.type}-${plan.size}` },
					className: "w-full",
					children: ["Select ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})
			]
		}), plan.type === "challenge" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-px border-t border-line bg-line text-[10px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-surface px-5 py-3 text-muted",
				children: [
					"Maximum drawdown",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "num float-right text-bright",
						children: money(plan.drawdown ?? 0)
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-surface px-5 py-3 text-muted",
				children: ["Evaluation route ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
					className: "float-right text-bright",
					children: "Two-step"
				})]
			})]
		})]
	});
}
function PlanMetric({ label, value, accent = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between border-b border-line pb-3 lg:block lg:border-0 lg:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[9px] uppercase text-dim kicker lg:hidden",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: cn("num text-sm font-medium", accent ? "text-action" : "text-copy"),
			children: value
		})]
	});
}
function Brokers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eye: "Trading Environments",
		title: "Trade on the platforms you know",
		copy: "Every account gives you a choice of broker environment. Pick the one that matches how you already trade."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrokerGrid, {})] });
}
function How() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eye: "The Path to Funding",
		title: "From account purchase to funded trader",
		center: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "pt-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl space-y-6",
			children: howItWorks.map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand/40 bg-surface font-mono text-brand",
					children: ["0", i + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					hover: false,
					className: "flex-1 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: b
					})]
				})]
			}, t))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				to: "/accounts",
				size: "lg",
				children: ["Start with an account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
			})
		})]
	})] });
}
function FAQ() {
	const [q, setQ] = (0, import_react.useState)(""), [cat, setCat] = (0, import_react.useState)("All"), [open, setOpen] = (0, import_react.useState)(null);
	const cats = ["All", ...new Set(faqs.map((f) => f[0]))];
	const list = (0, import_react.useMemo)(() => faqs.filter((f) => (cat === "All" || f[0] === cat) && (f[1] + f[2]).toLowerCase().includes(q.toLowerCase())), [q, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eye: "Support",
		title: "Frequently asked questions",
		copy: "Find immediate answers about accounts, rules, and payouts."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search FAQ topics…",
						className: "w-full bg-transparent outline-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: cat === c ? "brand" : "neutral",
							children: c
						})
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-3",
					children: list.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						hover: false,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex w-full justify-between p-5 text-left",
							onClick: () => setOpen(open === i ? null : i),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: f[1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: cn("text-brand transition", open === i && "rotate-180"),
								size: 18
							})]
						}), open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-5 pb-5 text-sm text-muted",
							children: f[2]
						})]
					}, f[1]))
				})
			]
		})
	})] });
}
function Reviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eye: "Trustpilot",
		title: "What our traders say",
		center: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewGrid, {})] });
}
function Support() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eye: "We're here to help",
			title: "Support Center",
			copy: "Search the FAQ, start a live chat session, browse your tickets, or reach out directly — our team responds 24/7.",
			center: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Headphones,
						title: "Live Chat",
						desc: "Connect instantly with our support team in real-time 24/7.",
						action: () => openSupportChat()
					},
					{
						icon: LifeBuoy,
						title: "Open a Ticket",
						desc: "Create a support ticket for account, billing, or technical issues.",
						to: "/dashboard/support/new"
					},
					{
						icon: MessageCircle,
						title: "Browse the FAQ",
						desc: "Most questions about accounts, rules, and payouts are answered.",
						to: "/faq"
					},
					{
						icon: Mail,
						title: "Email Us",
						desc: "Reach our support team directly via email anytime.",
						to: "/contact"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { size: 20 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-lg font-semibold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: item.desc
						}),
						item.action ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: item.action,
							variant: "outline",
							size: "sm",
							className: "mt-5 w-full",
							children: ["Start Chat ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							to: item.to,
							variant: "outline",
							size: "sm",
							className: "mt-5 w-full",
							children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})
					]
				}, item.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQPreview, {})
	] });
}
function Contact() {
	const nav = useNavigate();
	const submit = (e) => {
		e.preventDefault();
		nav({
			to: "/thank-you",
			search: { type: "contact" }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eye: "Get in Touch",
		title: "Contact Us",
		copy: "Questions before you sign up? Send us a message and we'll get back to you within a day.",
		center: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			hover: false,
			className: "mx-auto max-w-xl p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-5",
				onSubmit: submit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full Name",
							placeholder: "Alex Trader",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email",
							placeholder: "you@example.com",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm text-copy",
						children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							minLength: 10,
							placeholder: "How can we help?",
							className: "mt-1.5 h-32 w-full rounded-lg border border-line bg-surface p-4 outline-none focus:border-brand"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Send Message"
					})
				]
			})
		})
	})] });
}
function Thanks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-[75vh] place-items-center px-6 pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			hover: false,
			className: "max-w-xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-success/10 text-success",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 30 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-display text-3xl font-semibold",
					children: "Message Sent Successfully"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Thank you for reaching out to VEXO FUNDED. Your message has been received by our operations desk, and a team member will reply to your email within 24 hours."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					to: "/",
					className: "mt-8",
					children: "Back to Home"
				})
			]
		})
	}) });
}
function PageHero({ eye, title, copy, center = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: cn("grid-bg pb-10 pt-36", center && "text-center"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				className: center ? "justify-center before:hidden" : "",
				children: eye
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: cn("max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl", center && "mx-auto"),
				children: title
			}),
			copy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base", center && "mx-auto"),
				children: copy
			})
		]
	});
}
//#endregion
export { Home$1 as a, Support as c, FAQ as i, Thanks as l, Brokers as n, How as o, Contact as r, Reviews as s, Accounts as t };
