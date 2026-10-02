import { o as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, i as useQueryClient, n as useQuery, o as require_react, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { S as useParams, b as useNavigate, x as useSearch, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Circle, B as ArrowLeft, M as CircleCheck, N as CircleAlert, R as ArrowUpRight, T as Download, _ as LoaderCircle, a as TrendingUp, c as ShieldCheck, d as Paperclip, j as CircleX, k as Clock, n as X, v as ListOrdered, y as LifeBuoy, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { S as useSession, _ as initialsOf, b as nameOf, i as Card, l as Status, n as Badge, o as Field, p as cn, r as Button, y as money } from "./session-BFLLUQCL.mjs";
import { a as fetchOrders, c as fetchTickets, d as shortDate, f as shortTime, i as fetchOrder, l as replyToTicket, n as createTicket, o as fetchProfile, p as updateProfile, r as effectiveStatus, s as fetchTicket, u as reviewCountdown } from "./vexo-api-qfIjf-Nu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-pages-CHcgmZOv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Loading({ label = "Loading" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-md border border-line bg-card p-6 text-sm text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
				className: "animate-spin text-brand",
				size: 16
			}),
			label,
			"…"
		]
	});
}
function Empty({ title, body, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		hover: false,
		className: "p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-md text-sm text-muted",
				children: body
			}),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				to: action.to,
				className: "mt-5",
				children: action.label
			})
		]
	});
}
function Overview() {
	const { user } = useSession();
	const search = useSearch({ strict: false });
	const [dismissed, setDismissed] = (0, import_react.useState)(false);
	const showPaymentNotice = Boolean(search?.payment === "processed" && !dismissed);
	const orders = useQuery({
		queryKey: ["orders"],
		queryFn: fetchOrders
	});
	const tickets = useQuery({
		queryKey: ["tickets"],
		queryFn: fetchTickets
	});
	const rows = Array.isArray(orders.data) ? orders.data : [];
	const live = rows.filter((o) => effectiveStatus(o) === "completed").length;
	const openTickets = (Array.isArray(tickets.data) ? tickets.data : []).filter((t) => t.status !== "closed").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			showPaymentNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col justify-between gap-4 rounded-xl border border-brand/35 bg-panel-raised/95 p-5 shadow-lg sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3.5 sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand/15 text-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 22 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold text-bright",
							children: "Your payment has been processed"
						}), search.order && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "num rounded border border-brand/30 bg-brand/15 px-2 py-0.5 font-mono text-xs text-brand-soft",
							children: search.order
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "Your order has been submitted for desk verification. Your new account details will update below shortly."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 self-end sm:self-auto",
					children: [search.order && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						to: "/dashboard/orders/$id",
						params: { id: search.order },
						variant: "outline",
						size: "sm",
						className: "text-xs",
						children: "View Order"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setDismissed(true),
						className: "rounded-lg p-1.5 text-muted transition hover:bg-soft hover:text-bright",
						"aria-label": "Dismiss notice",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: nameOf(user)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Your accounts, orders and desk activity in one place."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-3",
				children: [
					[
						TrendingUp,
						"Live accounts",
						String(live)
					],
					[
						ListOrdered,
						"Orders placed",
						String(rows.length)
					],
					[
						LifeBuoy,
						"Open tickets",
						String(openTickets)
					]
				].map(([Icon, label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					hover: false,
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase text-muted kicker",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "text-brand",
							size: 16
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "num mt-3 text-2xl font-bold",
						children: value
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				hover: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Latest orders"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						to: "/dashboard/orders",
						variant: "ghost",
						size: "sm",
						children: ["All orders ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})]
				}), orders.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, { label: "Fetching your orders" })
				}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm text-muted",
					children: "Nothing here yet. Pick an account size and your first order will show up in this table."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersTable, { rows: rows.slice(0, 4) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				hover: false,
				className: "flex flex-wrap items-center justify-between gap-4 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold",
					children: "Need more capital?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Larger account sizes carry the same rules and the same 92% split."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					to: "/accounts",
					children: ["Browse accounts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
				})]
			})
		]
	});
}
function OrdersTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[700px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-line text-xs uppercase text-dim",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-3",
						children: "Order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Account" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Route" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Broker" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Paid" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" })
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
				className: "divide-y divide-line",
				children: rows.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "hover:bg-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard/orders/$id",
								params: { id: o.reference },
								className: "num text-brand",
								children: o.reference
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] text-dim",
								children: shortDate(o.created_at)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "num",
							children: money(o.account_size)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "capitalize",
							children: o.account_type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: o.broker }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "num",
							children: money(Number(o.price))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { status: effectiveStatus(o) }) })
					]
				}, o.id))
			})]
		})
	});
}
function Orders() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => setTick((t) => t + 1), 1e4);
		return () => clearInterval(timer);
	}, []);
	const orders = useQuery({
		queryKey: ["orders"],
		queryFn: fetchOrders
	});
	const all = Array.isArray(orders.data) ? orders.data : [];
	const rows = filter === "all" ? all : all.filter((o) => {
		const s = effectiveStatus(o);
		if (filter === "pending") return s === "pending" || s === "waiting_callback" || s === "processing";
		return s === filter;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Orders"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Every purchase you have submitted and where it stands right now."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				to: "/accounts",
				children: "New account"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			children: [
				"all",
				"pending",
				"completed",
				"rejected"
			].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setFilter(x),
				className: cn("rounded-full border px-3 py-1.5 text-xs capitalize", filter === x ? "border-brand bg-brand/10 text-brand" : "border-line text-muted"),
				children: x
			}, x))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5",
			children: orders.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, { label: "Fetching your orders" }) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
				title: "No orders in this view",
				body: "Once you complete a checkout, the order lands here with its review status and full receipt.",
				action: {
					to: "/accounts",
					label: "Choose an account"
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				hover: false,
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersTable, { rows })
			})
		})
	] });
}
function OrderDetail() {
	const { id } = useParams({ strict: false });
	const [, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => setTick((t) => t + 1), 1e4);
		return () => clearInterval(timer);
	}, []);
	const query = useQuery({
		queryKey: ["order", id],
		queryFn: () => fetchOrder(id)
	});
	if (query.isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, { label: `Opening ${id}` });
	if (!query.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
		title: "We could not open that order",
		body: `No order with reference ${id} is linked to your account. It may belong to a different login.`,
		action: {
			to: "/dashboard/orders",
			label: "Back to orders"
		}
	});
	const o = query.data;
	const status = effectiveStatus(o);
	const countdown = reviewCountdown(o);
	const size = o.account_size;
	const stages = [
		"Order submitted",
		"Payment matched",
		"Broker callback",
		"Account delivered"
	];
	const idx = {
		pending: 0,
		processing: 1,
		waiting_callback: 2,
		completed: 3,
		rejected: -1
	}[status] ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/orders",
				className: "inline-flex items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), "Back to orders"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "num font-display text-2xl font-semibold",
					children: o.reference
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: ["Submitted ", shortTime(o.created_at)]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { status }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), "Receipt"]
					})]
				})]
			}),
			countdown && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 rounded-md border border-warning/30 bg-warning/5 p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
					className: "mt-0.5 shrink-0 text-warning",
					size: 18
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Our desk reviews this order manually. A decision is posted within the next ",
					countdown,
					"; you will see the outcome on this page."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					hover: false,
					className: "p-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Progress"
					}), status === "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-3 rounded-md border border-error/30 bg-error/5 p-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "shrink-0 text-error" }), "This order was declined during review. No account was issued. Open a support ticket and the desk will explain the reason and arrange a new attempt."]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-6",
						children: stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [i <= idx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "text-success",
								size: 20
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
								className: "text-dim",
								size: 20
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: i <= idx ? "" : "text-dim",
								children: s
							}), i <= idx && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-dim",
								children: shortDate(o.created_at)
							})] })]
						}, s))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					hover: false,
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Receipt"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-5 space-y-3 text-sm",
						children: [
							["Route", o.account_type === "instant" ? "Instant funding" : "Two-step evaluation"],
							["Broker", o.broker],
							["Account size", money(size)],
							["Payment", o.payment_method],
							["Coupon", o.coupon || "—"],
							["Paid", money(Number(o.price))]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-3 border-b border-line pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "num text-right",
								children: v
							})]
						}, k))
					})]
				})]
			}),
			status === "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				hover: false,
				className: "border-brand/30 bg-brand/5 p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between border-b border-line pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "success",
						children: "Account live"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl font-bold",
						children: "Account details"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-success",
						children: "Active"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						[
							"Account size",
							money(size),
							"brand"
						],
						[
							"Issued",
							shortDate(o.created_at),
							""
						],
						[
							"Broker",
							o.broker,
							""
						],
						[
							"Route",
							o.account_type === "instant" ? "Instant" : "Two-step",
							""
						],
						[
							"Daily loss limit",
							money(size * .05),
							"error"
						],
						[
							"Maximum drawdown",
							money(size * .1),
							"error"
						],
						[
							"Profit target",
							money(size * .08),
							"success"
						],
						[
							"Profit split",
							"92%",
							"success"
						]
					].map(([l, v, tone]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: l
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("num mt-1 font-semibold", tone === "brand" ? "text-brand" : tone === "error" ? "text-error" : tone === "success" ? "text-success" : ""),
							children: v
						})]
					}, l))
				})]
			})
		]
	});
}
function SupportList() {
	const tickets = useQuery({
		queryKey: ["tickets"],
		queryFn: fetchTickets
	});
	const rows = Array.isArray(tickets.data) ? tickets.data : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Support"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Payouts, rule questions and account issues — all handled here."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				to: "/dashboard/support/new",
				children: "New ticket"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			hover: false,
			className: "mt-6 border-brand/20 bg-brand/5 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display font-semibold",
				children: "Desk hours"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "The team is staffed 24/5 and answers most tickets within a few hours."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-3",
			children: tickets.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, { label: "Loading your tickets" }) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
				title: "No tickets yet",
				body: "When you need a hand with a rule, a payout or a broker, open a ticket and the conversation stays saved here.",
				action: {
					to: "/dashboard/support/new",
					label: "Open a ticket"
				}
			}) : rows.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/support/$id",
				params: { id: t.reference },
				className: "flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-card p-5 hover:border-brand/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: t.subject
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-dim",
					children: [
						t.reference,
						" · ",
						t.category,
						" · Updated ",
						shortDate(t.updated_at)
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { status: t.status })]
			}, t.id))
		})
	] });
}
function SupportDetail() {
	const { id } = useParams({ strict: false });
	const qc = useQueryClient();
	const query = useQuery({
		queryKey: ["ticket", id],
		queryFn: () => fetchTicket(id)
	});
	const [reply, setReply] = (0, import_react.useState)("");
	const send = useMutation({
		mutationFn: (body) => replyToTicket(query.data.ticket.id, body),
		onSuccess: () => {
			setReply("");
			qc.invalidateQueries({ queryKey: ["ticket", id] });
		}
	});
	if (query.isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, { label: "Opening ticket" });
	if (!query.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
		title: "Ticket not available",
		body: `No ticket with reference ${id} belongs to this account.`,
		action: {
			to: "/dashboard/support",
			label: "Back to tickets"
		}
	});
	const { ticket, messages } = query.data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/support",
				className: "inline-flex gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), "Back to tickets"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "num text-xs text-brand",
					children: ticket.reference
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-2xl font-semibold",
					children: ticket.subject
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { status: ticket.status })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4",
				children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("max-w-[85%] rounded-xl p-4 text-sm", m.author === "user" ? "ml-auto bg-brand/10" : "border border-line bg-card"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whitespace-pre-wrap",
						children: m.body
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
						className: "mt-2 block text-dim",
						children: [
							m.author === "user" ? "You" : "VEXO desk",
							" · ",
							shortTime(m.created_at)
						]
					})]
				}, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					if (reply.trim()) send.mutate(reply.trim());
				},
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: reply,
					onChange: (e) => setReply(e.target.value),
					placeholder: "Add to this conversation…",
					className: "h-28 w-full rounded-xl border border-line bg-surface p-4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "ghost",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { size: 16 }), "Attach"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						disabled: send.isPending,
						children: [send.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "animate-spin",
							size: 16
						}) : null, "Send reply"]
					})]
				})]
			})
		]
	});
}
function SupportNew() {
	const nav = useNavigate();
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({
		subject: "",
		category: "Technical",
		priority: "Medium",
		body: ""
	});
	const create = useMutation({
		mutationFn: () => createTicket(form),
		onSuccess: (t) => {
			qc.invalidateQueries({ queryKey: ["tickets"] });
			nav({
				to: "/dashboard/support/$id",
				params: { id: t.reference }
			});
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/support",
				className: "inline-flex gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 14 }), "Back to tickets"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 font-display text-2xl font-semibold",
				children: "Open a ticket"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				hover: false,
				className: "mt-6 p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-5",
					onSubmit: (e) => {
						e.preventDefault();
						create.mutate();
					},
					children: [
						create.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-lg border border-brand/35 bg-panel-raised/90 p-3.5 text-sm shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-bright leading-relaxed",
								children: "We could not save this ticket. Please try again."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Subject",
							placeholder: "What do you need help with?",
							required: true,
							value: form.subject,
							onChange: (e) => setForm({
								...form,
								subject: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm text-copy",
							children: ["Category", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.category,
								onChange: (e) => setForm({
									...form,
									category: e.target.value
								}),
								className: "mt-1.5 w-full rounded-lg border border-line bg-surface p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Technical" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Billing" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Account" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Challenge" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "General" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm text-copy",
							children: ["Priority", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.priority,
								onChange: (e) => setForm({
									...form,
									priority: e.target.value
								}),
								className: "mt-1.5 w-full rounded-lg border border-line bg-surface p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Low" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Medium" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "High" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm text-copy",
							children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								value: form.body,
								onChange: (e) => setForm({
									...form,
									body: e.target.value
								}),
								className: "mt-1.5 h-36 w-full rounded-lg border border-line bg-surface p-3",
								placeholder: "Include your order reference and what you are seeing."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full",
							type: "submit",
							disabled: create.isPending,
							children: [create.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "animate-spin",
								size: 16
							}) : null, "Submit ticket"]
						})
					]
				})
			})
		]
	});
}
function Profile() {
	const { user } = useSession();
	const qc = useQueryClient();
	const profile = useQuery({
		queryKey: ["profile"],
		queryFn: fetchProfile
	});
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(null);
	const current = form ?? {
		full_name: profile.data?.full_name ?? nameOf(user),
		phone: profile.data?.phone ?? "",
		country: profile.data?.country ?? "United States"
	};
	const save = useMutation({
		mutationFn: () => updateProfile(current),
		onSuccess: () => {
			setSaved(true);
			qc.invalidateQueries({ queryKey: ["profile"] });
		}
	});
	const name = current.full_name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Profile"
			}),
			saved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg border border-success/30 bg-success/10 p-3 text-sm text-success",
				children: "Your details are up to date."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				hover: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-20 w-20 place-items-center rounded-full border-2 border-brand/40 bg-brand/10 text-2xl font-bold text-brand",
						children: initialsOf(name)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-dim",
						children: ["Client since ", profile.data ? shortDate(profile.data.created_at) : "—"]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						save.mutate();
					},
					className: "mt-8 grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full Name",
							value: current.full_name,
							onChange: (e) => setForm({
								...current,
								full_name: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email",
							value: user?.email ?? "",
							disabled: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							value: current.phone,
							onChange: (e) => setForm({
								...current,
								phone: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm text-copy",
							children: ["Country", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: current.country,
								onChange: (e) => setForm({
									...current,
									country: e.target.value
								}),
								className: "mt-1.5 w-full rounded-lg border border-line bg-surface p-3",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "sm:col-span-2 sm:w-fit",
							type: "submit",
							disabled: save.isPending,
							children: "Save changes"
						})
					]
				})]
			})
		]
	});
}
function Security() {
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [current, setCurrent] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		if (password !== confirm) {
			setMessage({
				tone: "bad",
				text: "Both new password fields must match."
			});
			return;
		}
		setBusy(true);
		try {
			const { auth, updatePassword } = await import("./client-q8YvMaqw.mjs").then((n) => n.n).then((n) => n.n);
			if (auth.currentUser) {
				await updatePassword(auth.currentUser, password);
				setMessage({
					tone: "ok",
					text: "Password changed. Use it next time you sign in."
				});
				setPassword("");
				setConfirm("");
				setCurrent("");
			} else setMessage({
				tone: "bad",
				text: "No active session found. Please re-login."
			});
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Could not update password.";
			setMessage({
				tone: "bad",
				text: msg
			});
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Security"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Keep your sign-in details current — payouts depend on this account."
			})] }),
			message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("rounded-lg border p-3 text-sm", message.tone === "ok" ? "border-success/30 bg-success/10 text-success" : "border-error/30 bg-error/10 text-error"),
				children: message.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				hover: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Change password"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-5 space-y-4",
					onSubmit: submit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Current Password",
							type: "password",
							placeholder: "••••••••",
							value: current,
							onChange: (e) => setCurrent(e.target.value)
						}),
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
							placeholder: "Repeat new password",
							required: true,
							value: confirm,
							onChange: (e) => setConfirm(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: busy,
							children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "animate-spin",
								size: 16
							}) : null, "Update password"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				hover: false,
				className: "flex justify-between p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold",
					children: "Two-factor authentication"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Coming with the next platform release."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Not enabled" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				hover: false,
				className: "flex justify-between p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold",
					children: "Session"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "You are signed in on this device."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "text-success" })]
			})
		]
	});
}
//#endregion
export { Security as a, SupportNew as c, Profile as i, Orders as n, SupportDetail as o, Overview as r, SupportList as s, OrderDetail as t };
