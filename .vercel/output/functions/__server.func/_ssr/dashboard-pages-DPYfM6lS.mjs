import { o as __toESM } from "../_runtime.mjs";
import { i as useQueryClient, n as useQuery, o as require_react, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { S as useParams, b as useNavigate, x as useSearch, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Circle, B as ArrowLeft, M as CircleCheck, N as CircleAlert, R as ArrowUpRight, T as Download, _ as LoaderCircle, a as TrendingUp, c as ShieldCheck, d as Paperclip, j as CircleX, k as Clock, n as X, v as ListOrdered, y as LifeBuoy, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { S as useSession, _ as initialsOf, b as nameOf, i as Card, l as Status, n as Badge, o as Field, p as cn, r as Button, y as money } from "./session-BWHLnZm0.mjs";
import { a as fetchOrders, c as fetchTickets, d as shortDate, f as shortTime, i as fetchOrder, l as replyToTicket, n as createTicket, o as fetchProfile, p as updateProfile, r as effectiveStatus, s as fetchTicket, u as reviewCountdown } from "./vexo-api-DKJ6VF6g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-pages-DPYfM6lS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/vexo/dashboard-pages.tsx";
function Loading({ label = "Loading" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center gap-3 rounded-md border border-line bg-card p-6 text-sm text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
				className: "animate-spin text-brand",
				size: 16
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			label,
			"…"
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 5
	}, this);
}
function Empty({ title, body, action }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
		hover: false,
		className: "p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "font-display text-lg font-semibold",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mx-auto mt-2 max-w-md text-sm text-muted",
				children: body
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 7
			}, this),
			action && /* @__PURE__ */ (void 0)(Button, {
				to: action.to,
				className: "mt-5",
				children: action.label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 60,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8",
		children: [
			showPaymentNotice && /* @__PURE__ */ (void 0)("div", {
				className: "relative flex flex-col justify-between gap-4 rounded-xl border border-brand/35 bg-panel-raised/95 p-5 shadow-lg sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-start gap-3.5 sm:items-center",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand/15 text-brand",
						children: /* @__PURE__ */ (void 0)(CircleCheck, { size: 22 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (void 0)("h3", {
							className: "font-display text-base font-semibold text-bright",
							children: "Your payment has been processed"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 17
						}, this), search.order && /* @__PURE__ */ (void 0)("span", {
							className: "num rounded border border-brand/30 bg-brand/15 px-2 py-0.5 font-mono text-xs text-brand-soft",
							children: search.order
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-xs text-muted",
						children: "Your order has been submitted for desk verification. Your new account details will update below shortly."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "flex items-center gap-2 self-end sm:self-auto",
					children: [search.order && /* @__PURE__ */ (void 0)(Button, {
						to: "/dashboard/orders/$id",
						params: { id: search.order },
						variant: "outline",
						size: "sm",
						className: "text-xs",
						children: "View Order"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("button", {
						onClick: () => setDismissed(true),
						className: "rounded-lg p-1.5 text-muted transition hover:bg-soft hover:text-bright",
						"aria-label": "Dismiss notice",
						children: /* @__PURE__ */ (void 0)(X, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-semibold",
				children: nameOf(user)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 134,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Your accounts, orders and desk activity in one place."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 133,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
				].map(([Icon, label, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					hover: false,
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs uppercase text-muted kicker",
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
							className: "text-brand",
							size: 16
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "num mt-3 text-2xl font-bold",
						children: value
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 13
					}, this)]
				}, label, true, {
					fileName: _jsxFileName,
					lineNumber: 147,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 139,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				hover: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Latest orders"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 158,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						to: "/dashboard/orders",
						variant: "ghost",
						size: "sm",
						children: ["All orders ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { size: 14 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 24
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 9
				}, this), orders.isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading, { label: "Fetching your orders" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 11
				}, this) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-5 text-sm text-muted",
					children: "Nothing here yet. Pick an account size and your first order will show up in this table."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 168,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersTable, { rows: rows.slice(0, 4) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 172,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				hover: false,
				className: "flex flex-wrap items-center justify-between gap-4 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-display text-lg font-semibold",
					children: "Need more capital?"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 177,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Larger account sizes carry the same rules and the same 92% split."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					to: "/accounts",
					children: ["Browse accounts ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { size: 16 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 183,
						columnNumber: 27
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 175,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 87,
		columnNumber: 5
	}, this);
}
function OrdersTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-5 overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
			className: "w-full min-w-[700px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
				className: "border-b border-line text-xs uppercase text-dim",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
						className: "pb-3",
						children: "Order"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 196,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Account" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 197,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Route" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 198,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Broker" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 199,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Paid" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Status" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 201,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 195,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
				className: "divide-y divide-line",
				children: rows.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
					className: "hover:bg-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "py-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/dashboard/orders/$id",
								params: { id: o.reference },
								className: "num text-brand",
								children: o.reference
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 208,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-[11px] text-dim",
								children: shortDate(o.created_at)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 215,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "num",
							children: money(o.account_size)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 217,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "capitalize",
							children: o.account_type
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 218,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: o.broker }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 219,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "num",
							children: money(Number(o.price))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 220,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Status, { status: effectiveStatus(o) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 17
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 221,
							columnNumber: 15
						}, this)
					]
				}, o.id, true, {
					fileName: _jsxFileName,
					lineNumber: 206,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 204,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 193,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 192,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Orders"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 257,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Every purchase you have submitted and where it stands right now."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 258,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 256,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				to: "/accounts",
				children: "New account"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 255,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			children: [
				"all",
				"pending",
				"completed",
				"rejected"
			].map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => setFilter(x),
				className: cn("rounded-full border px-3 py-1.5 text-xs capitalize", filter === x ? "border-brand bg-brand/10 text-brand" : "border-line text-muted"),
				children: x
			}, x, false, {
				fileName: _jsxFileName,
				lineNumber: 266,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 264,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-5",
			children: orders.isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading, { label: "Fetching your orders" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 280,
				columnNumber: 11
			}, this) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, {
				title: "No orders in this view",
				body: "Once you complete a checkout, the order lands here with its review status and full receipt.",
				action: {
					to: "/accounts",
					label: "Choose an account"
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 282,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				hover: false,
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersTable, { rows }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 289,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 288,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 278,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 254,
		columnNumber: 5
	}, this);
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
	if (query.isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading, { label: `Opening ${id}` }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 307,
		columnNumber: 31
	}, this);
	if (!query.data) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, {
		title: "We could not open that order",
		body: `No order with reference ${id} is linked to your account. It may belong to a different login.`,
		action: {
			to: "/dashboard/orders",
			label: "Back to orders"
		}
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 310,
		columnNumber: 7
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/dashboard/orders",
				className: "inline-flex items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { size: 14 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 329,
					columnNumber: 9
				}, this), "Back to orders"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 328,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "num font-display text-2xl font-semibold",
					children: o.reference
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 334,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-sm text-muted",
					children: ["Submitted ", shortTime(o.created_at)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 335,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 333,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Status, { status }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 338,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { size: 14 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 340,
							columnNumber: 13
						}, this), "Receipt"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 339,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 337,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 332,
				columnNumber: 7
			}, this),
			countdown && /* @__PURE__ */ (void 0)("div", {
				className: "flex items-start gap-3 rounded-md border border-warning/30 bg-warning/5 p-4 text-sm",
				children: [/* @__PURE__ */ (void 0)(Clock, {
					className: "mt-0.5 shrink-0 text-warning",
					size: 18
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 348,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("p", { children: [
					"Our desk reviews this order manually. A decision is posted within the next ",
					countdown,
					"; you will see the outcome on this page."
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 349,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 347,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					hover: false,
					className: "p-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Progress"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 358,
						columnNumber: 11
					}, this), status === "rejected" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 flex gap-3 rounded-md border border-error/30 bg-error/5 p-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleX, { className: "shrink-0 text-error" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 361,
							columnNumber: 15
						}, this), "This order was declined during review. No account was issued. Open a support ticket and the desk will explain the reason and arrange a new attempt."]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 360,
						columnNumber: 13
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
						className: "mt-6 space-y-6",
						children: stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex gap-4",
							children: [i <= idx ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, {
								className: "text-success",
								size: 20
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 370,
								columnNumber: 21
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, {
								className: "text-dim",
								size: 20
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 372,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
								className: i <= idx ? "" : "text-dim",
								children: s
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 375,
								columnNumber: 21
							}, this), i <= idx && /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-dim",
								children: shortDate(o.created_at)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 376,
								columnNumber: 34
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 374,
								columnNumber: 19
							}, this)]
						}, s, true, {
							fileName: _jsxFileName,
							lineNumber: 368,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 366,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 357,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					hover: false,
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Receipt"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 384,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
						className: "mt-5 space-y-3 text-sm",
						children: [
							["Route", o.account_type === "instant" ? "Instant funding" : "Two-step evaluation"],
							["Broker", o.broker],
							["Account size", money(size)],
							["Payment", o.payment_method],
							["Coupon", o.coupon || "—"],
							["Paid", money(Number(o.price))]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between gap-3 border-b border-line pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "text-muted",
								children: k
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 397,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
								className: "num text-right",
								children: v
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 398,
								columnNumber: 17
							}, this)]
						}, k, true, {
							fileName: _jsxFileName,
							lineNumber: 396,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 385,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 383,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 356,
				columnNumber: 7
			}, this),
			status === "completed" && /* @__PURE__ */ (void 0)(Card, {
				hover: false,
				className: "border-brand/30 bg-brand/5 p-6 sm:p-8",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex justify-between border-b border-line pb-6",
					children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(Badge, {
						tone: "success",
						children: "Account live"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 409,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("h2", {
						className: "mt-2 font-display text-2xl font-bold",
						children: "Account details"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 410,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 408,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "text-success",
						children: "Active"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 412,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 407,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
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
					].map(([l, v, tone]) => /* @__PURE__ */ (void 0)("div", {
						className: "rounded-xl border border-line bg-surface p-4",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "text-xs text-muted",
							children: l
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 428,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: cn("num mt-1 font-semibold", tone === "brand" ? "text-brand" : tone === "error" ? "text-error" : tone === "success" ? "text-success" : ""),
							children: v
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 429,
							columnNumber: 17
						}, this)]
					}, l, true, {
						fileName: _jsxFileName,
						lineNumber: 427,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 414,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 406,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 327,
		columnNumber: 5
	}, this);
}
function SupportList() {
	const tickets = useQuery({
		queryKey: ["tickets"],
		queryFn: fetchTickets
	});
	const rows = Array.isArray(tickets.data) ? tickets.data : [];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Support"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 459,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Payouts, rule questions and account issues — all handled here."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 460,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 458,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				to: "/dashboard/support/new",
				children: "New ticket"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 464,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 457,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
			hover: false,
			className: "mt-6 border-brand/20 bg-brand/5 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display font-semibold",
				children: "Desk hours"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 467,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted",
				children: "The team is staffed 24/5 and answers most tickets within a few hours."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 468,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 466,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-6 space-y-3",
			children: tickets.isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading, { label: "Loading your tickets" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 474,
				columnNumber: 11
			}, this) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, {
				title: "No tickets yet",
				body: "When you need a hand with a rule, a payout or a broker, open a ticket and the conversation stays saved here.",
				action: {
					to: "/dashboard/support/new",
					label: "Open a ticket"
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 476,
				columnNumber: 11
			}, this) : rows.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/dashboard/support/$id",
				params: { id: t.reference },
				className: "flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-card p-5 hover:border-brand/30",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-semibold",
					children: t.subject
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 490,
					columnNumber: 17
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-xs text-dim",
					children: [
						t.reference,
						" · ",
						t.category,
						" · Updated ",
						shortDate(t.updated_at)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 491,
					columnNumber: 17
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 489,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Status, { status: t.status }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 495,
					columnNumber: 15
				}, this)]
			}, t.id, true, {
				fileName: _jsxFileName,
				lineNumber: 483,
				columnNumber: 13
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 472,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 456,
		columnNumber: 5
	}, this);
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
	if (query.isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading, { label: "Opening ticket" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 517,
		columnNumber: 31
	}, this);
	if (!query.data) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, {
		title: "Ticket not available",
		body: `No ticket with reference ${id} belongs to this account.`,
		action: {
			to: "/dashboard/support",
			label: "Back to tickets"
		}
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 520,
		columnNumber: 7
	}, this);
	const { ticket, messages } = query.data;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/dashboard/support",
				className: "inline-flex gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { size: 14 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 531,
					columnNumber: 9
				}, this), "Back to tickets"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 530,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 flex flex-wrap justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "num text-xs text-brand",
					children: ticket.reference
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 536,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-1 font-display text-2xl font-semibold",
					children: ticket.subject
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 537,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 535,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Status, { status: ticket.status }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 539,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 534,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 space-y-4",
				children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: cn("max-w-[85%] rounded-xl p-4 text-sm", m.author === "user" ? "ml-auto bg-brand/10" : "border border-line bg-card"),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "whitespace-pre-wrap",
						children: m.body
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 550,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
						className: "mt-2 block text-dim",
						children: [
							m.author === "user" ? "You" : "VEXO desk",
							" · ",
							shortTime(m.created_at)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 551,
						columnNumber: 13
					}, this)]
				}, m.id, true, {
					fileName: _jsxFileName,
					lineNumber: 543,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 541,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					if (reply.trim()) send.mutate(reply.trim());
				},
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
					value: reply,
					onChange: (e) => setReply(e.target.value),
					placeholder: "Add to this conversation…",
					className: "h-28 w-full rounded-xl border border-line bg-surface p-4"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 564,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-3 flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "ghost",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paperclip, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 572,
							columnNumber: 13
						}, this), "Attach"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 571,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						disabled: send.isPending,
						children: [send.isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
							className: "animate-spin",
							size: 16
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 576,
							columnNumber: 31
						}, this) : null, "Send reply"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 575,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 570,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 557,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 529,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/dashboard/support",
				className: "inline-flex gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { size: 14 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 604,
					columnNumber: 9
				}, this), "Back to tickets"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 603,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-5 font-display text-2xl font-semibold",
				children: "Open a ticket"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 607,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				hover: false,
				className: "mt-6 p-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					className: "space-y-5",
					onSubmit: (e) => {
						e.preventDefault();
						create.mutate();
					},
					children: [
						create.isError && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-start gap-3 rounded-lg border border-brand/35 bg-panel-raised/90 p-3.5 text-sm shadow-sm",
							children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 618,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-medium text-bright leading-relaxed",
								children: "We could not save this ticket. Please try again."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 619,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 617,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Subject",
							placeholder: "What do you need help with?",
							required: true,
							value: form.subject,
							onChange: (e) => setForm({
								...form,
								subject: e.target.value
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 624,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block text-sm text-copy",
							children: ["Category", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
								value: form.category,
								onChange: (e) => setForm({
									...form,
									category: e.target.value
								}),
								className: "mt-1.5 w-full rounded-lg border border-line bg-surface p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Technical" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 638,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Billing" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 639,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Account" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 640,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Challenge" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 641,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "General" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 642,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 633,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 631,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block text-sm text-copy",
							children: ["Priority", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
								value: form.priority,
								onChange: (e) => setForm({
									...form,
									priority: e.target.value
								}),
								className: "mt-1.5 w-full rounded-lg border border-line bg-surface p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Low" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 652,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Medium" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 653,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "High" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 654,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 647,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 645,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block text-sm text-copy",
							children: ["Message", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								required: true,
								value: form.body,
								onChange: (e) => setForm({
									...form,
									body: e.target.value
								}),
								className: "mt-1.5 h-36 w-full rounded-lg border border-line bg-surface p-3",
								placeholder: "Include your order reference and what you are seeing."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 659,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 657,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							className: "w-full",
							type: "submit",
							disabled: create.isPending,
							children: [create.isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
								className: "animate-spin",
								size: 16
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 668,
								columnNumber: 33
							}, this) : null, "Submit ticket"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 667,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 609,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 608,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 602,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Profile"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 700,
				columnNumber: 7
			}, this),
			saved && /* @__PURE__ */ (void 0)("p", {
				className: "rounded-lg border border-success/30 bg-success/10 p-3 text-sm text-success",
				children: "Your details are up to date."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 702,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				hover: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid h-20 w-20 place-items-center rounded-full border-2 border-brand/40 bg-brand/10 text-2xl font-bold text-brand",
						children: initialsOf(name)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 708,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: name }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 712,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-dim",
						children: ["Client since ", profile.data ? shortDate(profile.data.created_at) : "—"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 713,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 711,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 707,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						save.mutate();
					},
					className: "mt-8 grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Full Name",
							value: current.full_name,
							onChange: (e) => setForm({
								...current,
								full_name: e.target.value
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 725,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Email",
							type: "email",
							value: user?.email ?? "",
							disabled: true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 730,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Phone",
							value: current.phone,
							onChange: (e) => setForm({
								...current,
								phone: e.target.value
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 731,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "text-sm text-copy",
							children: ["Country", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
								value: current.country,
								onChange: (e) => setForm({
									...current,
									country: e.target.value
								}),
								className: "mt-1.5 w-full rounded-lg border border-line bg-surface p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "United States" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 743,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "United Kingdom" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 744,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "United Arab Emirates" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 745,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Pakistan" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 746,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "India" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 747,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Other" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 748,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 738,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 736,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							className: "sm:col-span-2 sm:w-fit",
							type: "submit",
							disabled: save.isPending,
							children: "Save changes"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 751,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 718,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 706,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 699,
		columnNumber: 5
	}, this);
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
			const { auth, updatePassword } = await import("./client-Cis1qyns.mjs").then((n) => n.n).then((n) => n.n);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Security"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 796,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Keep your sign-in details current — payouts depend on this account."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 797,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 795,
				columnNumber: 7
			}, this),
			message && /* @__PURE__ */ (void 0)("p", {
				className: cn("rounded-lg border p-3 text-sm", message.tone === "ok" ? "border-success/30 bg-success/10 text-success" : "border-error/30 bg-error/10 text-error"),
				children: message.text
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 802,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				hover: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Change password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 814,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					className: "mt-5 space-y-4",
					onSubmit: submit,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Current Password",
							type: "password",
							placeholder: "••••••••",
							value: current,
							onChange: (e) => setCurrent(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 816,
							columnNumber: 11
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
							lineNumber: 823,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Confirm Password",
							type: "password",
							placeholder: "Repeat new password",
							required: true,
							value: confirm,
							onChange: (e) => setConfirm(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 831,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "submit",
							disabled: busy,
							children: [busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
								className: "animate-spin",
								size: 16
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 840,
								columnNumber: 21
							}, this) : null, "Update password"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 839,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 815,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 813,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				hover: false,
				className: "flex justify-between p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-semibold",
					children: "Two-factor authentication"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 846,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Coming with the next platform release."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 847,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 845,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { children: "Not enabled" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 849,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 844,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				hover: false,
				className: "flex justify-between p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-semibold",
					children: "Session"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 853,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-sm text-muted",
					children: "You are signed in on this device."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 854,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 852,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "text-success" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 856,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 851,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 794,
		columnNumber: 5
	}, this);
}
//#endregion
export { Security as a, SupportNew as c, Profile as i, Orders as n, SupportDetail as o, Overview as r, SupportList as s, OrderDetail as t };
