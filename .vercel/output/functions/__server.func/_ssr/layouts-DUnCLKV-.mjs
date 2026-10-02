import { o as __toESM } from "../_runtime.mjs";
import { s as signOut } from "../_libs/firebase__auth.mjs";
import { t as auth } from "./client-Cis1qyns.mjs";
import { i as useQueryClient, o as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, h as Outlet, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Cookie, L as Bell, S as Headphones, a as TrendingUp, b as LayoutDashboard, c as ShieldCheck, h as LogOut, n as X, p as Menu, r as User, v as ListOrdered, x as House, y as LifeBuoy } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { S as useSession, _ as initialsOf, b as nameOf, p as cn, r as Button, s as Logo } from "./session-BWHLnZm0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layouts-DUnCLKV-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/vexo/live-support.tsx";
function openSupportChat() {
	if (typeof window === "undefined") return;
	window.__vexoUserClickedChat = true;
	if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") try {
		window.Tawk_API.showWidget?.();
		window.Tawk_API.maximize();
		return;
	} catch (e) {}
	if (window.Tawk_API) {
		const prev = window.Tawk_API.onLoad;
		window.Tawk_API.onLoad = () => {
			try {
				prev?.();
			} catch (e) {}
			try {
				window.Tawk_API?.showWidget?.();
				window.Tawk_API?.maximize?.();
			} catch (e) {}
		};
	}
}
function LiveSupport({ adapter }) {
	const pendingClickRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		window.Tawk_API = window.Tawk_API || {};
		window.Tawk_LoadStart = /* @__PURE__ */ new Date();
		window.Tawk_API.onBeforeLoad = () => {
			try {
				window.Tawk_API?.hideWidget?.();
			} catch (e) {}
		};
		window.Tawk_API.onLoad = () => {
			try {
				if (window.__vexoUserClickedChat || pendingClickRef.current) {
					window.Tawk_API?.showWidget?.();
					window.Tawk_API?.maximize?.();
				} else window.Tawk_API?.hideWidget?.();
			} catch (e) {}
		};
		window.Tawk_API.onChatMaximized = () => {
			try {
				if (!window.__vexoUserClickedChat && !pendingClickRef.current) {
					window.Tawk_API?.minimize?.();
					window.Tawk_API?.hideWidget?.();
				}
			} catch (e) {}
		};
		window.Tawk_API.onChatMinimized = () => {
			try {
				window.Tawk_API?.hideWidget?.();
			} catch (e) {}
		};
		window.Tawk_API.onChatHidden = () => {
			try {
				window.Tawk_API?.hideWidget?.();
			} catch (e) {}
		};
		const scriptId = "tawk-to-script";
		if (!document.getElementById(scriptId)) {
			const s1 = document.createElement("script");
			s1.id = scriptId;
			s1.async = true;
			s1.src = "https://embed.tawk.to/6abec63f94972634491fef03/1k3sjcqp6";
			s1.charset = "UTF-8";
			s1.setAttribute("crossorigin", "*");
			const s0 = document.getElementsByTagName("script")[0];
			if (s0 && s0.parentNode) s0.parentNode.insertBefore(s1, s0);
			else document.head.appendChild(s1);
		}
	}, []);
	const handleClick = () => {
		adapter?.onOpen?.();
		pendingClickRef.current = true;
		openSupportChat();
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type: "button",
		onClick: handleClick,
		"aria-label": "Customer Support",
		title: "Customer Support",
		className: "fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-action text-action-foreground shadow-action transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-action",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Headphones, {
			size: 22,
			className: "relative z-10"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 157,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			"aria-hidden": "true",
			className: "absolute top-1 right-1 h-3 w-3 rounded-full border-2 border-panel bg-success"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 158,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 150,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/vexo/layouts.tsx";
var links = [
	["/accounts", "Accounts"],
	["/brokers", "Brokers"],
	["/how-it-works", "How It Works"],
	["/faq", "FAQ"],
	["/reviews", "Reviews"],
	["/support", "Support"]
];
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			children,
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CookieBanner, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveSupport, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 5
	}, this);
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { user } = useSession();
	(0, import_react.useEffect)(() => {
		const update = () => setScrolled(scrollY > 12);
		addEventListener("scroll", update);
		return () => removeEventListener("scroll", update);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: cn("fixed top-0 z-50 w-full border-b border-transparent py-4 transition", scrolled && "glass border-line py-2.5"),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hidden items-center gap-1 lg:flex",
					children: links.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to,
						className: "rounded-sm px-3 py-2 text-xs font-medium uppercase text-muted transition hover:bg-soft hover:text-bright",
						activeProps: { className: "bg-brand/10 text-brand-soft" },
						children: label
					}, to, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						to: "/dashboard",
						variant: "ghost",
						size: "sm",
						children: "My Dashboard"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 13
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						to: "/login",
						variant: "ghost",
						size: "sm",
						children: "Sign In"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						to: "/accounts",
						size: "sm",
						children: "Open Account"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					"aria-label": "Menu",
					onClick: () => setOpen(!open),
					className: "rounded-sm border border-line bg-panel p-2.5 lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { size: 20 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 19
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { size: 20 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 37
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 62,
			columnNumber: 7
		}, this), open && /* @__PURE__ */ (void 0)("div", {
			className: "glass mt-3 border-y border-line px-5 py-4 lg:hidden",
			children: [links.map(([to, label]) => /* @__PURE__ */ (void 0)(Link, {
				to,
				onClick: () => setOpen(false),
				className: "block rounded-sm border-b border-line px-3 py-3 text-sm text-copy last:border-0 hover:bg-soft",
				children: label
			}, to, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 13
			}, this)), /* @__PURE__ */ (void 0)("div", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: [user ? /* @__PURE__ */ (void 0)(Button, {
					to: "/dashboard",
					variant: "secondary",
					children: "Dashboard"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 15
				}, this) : /* @__PURE__ */ (void 0)(Button, {
					to: "/login",
					variant: "secondary",
					children: "Sign In"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 15
				}, this), /* @__PURE__ */ (void 0)(Button, {
					to: "/accounts",
					children: "Open Account"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 120,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 99,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 5
	}, this);
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl px-5 py-14 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 gap-10 border-b border-line pb-12 md:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-muted",
							children: "Simulated evaluations for aspiring traders. Prove your edge, get funded, and keep up to 92% of the profits you generate on your funded account."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 inline-flex items-center gap-2 border-l-2 border-success pl-3 text-xs text-copy",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "h-1.5 w-1.5 rounded-full bg-success" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 169,
								columnNumber: 15
							}, this), " Operations online 24/7"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 162,
					columnNumber: 11
				}, this), [
					["Product", [
						["/accounts", "Accounts"],
						["/brokers", "Brokers"],
						["/how-it-works", "How It Works"],
						["/reviews", "Reviews"]
					]],
					["Support", [
						["/faq", "FAQ"],
						["/support", "Support Center"],
						["/contact", "Contact Us"]
					]],
					["Legal", [
						["/legal/terms", "Terms & Agreement"],
						["/legal/privacy", "Privacy Agreement"],
						["/legal/refund", "Refund Policy"],
						["/legal/risk", "Risk Disclosure"],
						["/legal/cookies", "Cookies"]
					]]
				].map(([title, items]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
					className: "font-display text-xs font-semibold uppercase text-copy kicker",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 174,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-5 space-y-3",
					children: items.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to,
						className: "text-sm text-muted transition hover:text-brand",
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 180,
						columnNumber: 21
					}, this) }, to, false, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 19
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 177,
					columnNumber: 15
				}, this)] }, title, true, {
					fileName: _jsxFileName,
					lineNumber: 173,
					columnNumber: 13
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 161,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "pt-7 text-xs leading-relaxed text-dim",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
						className: "text-muted",
						children: "Risk Disclosure:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 11
					}, this),
					" Evaluation and Instant accounts are simulated trading environments funded by account fees; no client funds are traded on live markets during the evaluation phase. Profit splits on funded accounts are paid from firm capital according to your account agreement. Trading involves risk and past performance is not indicative of future results. VEXO FUNDED does not provide investment advice.",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 flex flex-wrap justify-between gap-3 border-t border-line pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "© 2026 VEXO FUNDED. All rights reserved." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-mono uppercase kicker",
							children: "Built for traders, by traders."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 196,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 189,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 160,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 159,
		columnNumber: 5
	}, this);
}
function CookieBanner() {
	const [show, setShow] = (0, import_react.useState)(true);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed bottom-3 left-3 right-3 z-50 mx-auto max-w-2xl rounded-md border border-line-strong bg-panel p-4 shadow-panel",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-start gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cookie, {
					className: "mt-1 shrink-0 text-brand",
					size: 18
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm font-semibold",
						children: "Cookie preferences"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 214,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs text-muted",
						children: "Essential cookies keep the platform working. Optional cookies improve your experience."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 213,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					"aria-label": "Dismiss",
					onClick: () => setShow(false),
					className: "text-muted hover:text-bright",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { size: 18 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 224,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 219,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 211,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-3 flex justify-end gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				size: "sm",
				variant: "ghost",
				onClick: () => setShow(false),
				children: "Essential only"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 228,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				size: "sm",
				onClick: () => setShow(false),
				children: "Accept all"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 231,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 227,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 210,
		columnNumber: 5
	}, this);
}
var dash = [
	[
		"/dashboard",
		"Dashboard",
		LayoutDashboard
	],
	[
		"/dashboard/orders",
		"Orders",
		ListOrdered
	],
	[
		"/dashboard/support",
		"Support Tickets",
		LifeBuoy
	],
	[
		"/dashboard/profile",
		"Profile",
		User
	],
	[
		"/dashboard/security",
		"Security",
		ShieldCheck
	]
];
function DashboardLayout() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [notifs, setNotifs] = (0, import_react.useState)(false);
	const { user } = useSession();
	const name = nameOf(user);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: "fixed inset-y-0 left-0 hidden w-64 border-r border-line bg-ink lg:block",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashNav, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 255,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 254,
				columnNumber: 7
			}, this),
			open && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-40 bg-overlay lg:hidden",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (void 0)("aside", {
					className: "h-full w-72 bg-ink",
					onClick: (event) => event.stopPropagation(),
					children: /* @__PURE__ */ (void 0)(DashNav, { close: () => setOpen(false) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 260,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 259,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 258,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "min-w-0 flex-1 lg:pl-64",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
					className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-background/95 px-5 backdrop-blur md:px-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							"aria-label": "Open dashboard menu",
							className: "rounded-sm border border-line p-2 lg:hidden",
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 271,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 266,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/",
									className: "flex items-center gap-1.5 rounded-sm border border-line bg-panel px-3 py-1.5 text-xs font-medium text-muted transition hover:bg-soft hover:text-bright",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(House, { size: 14 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 278,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "hidden sm:inline",
										children: "Main Website"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 279,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 274,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/accounts",
									className: "hidden items-center gap-1.5 rounded-sm border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand-soft transition hover:bg-brand/20 sm:flex",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { size: 14 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 285,
										columnNumber: 15
									}, this), "New Account"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 281,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "hidden items-center gap-2 text-[10px] uppercase text-dim kicker lg:flex",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "h-1.5 w-1.5 rounded-full bg-success" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 289,
										columnNumber: 15
									}, this), " Systems operational"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 288,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 273,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									"aria-label": "Notifications",
									onClick: () => setNotifs(!notifs),
									className: "relative rounded-sm border border-line bg-panel p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { size: 16 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 298,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-action" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 299,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 293,
									columnNumber: 13
								}, this),
								notifs && /* @__PURE__ */ (void 0)(CardPopover, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 301,
									columnNumber: 24
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/dashboard/profile",
									className: "flex items-center gap-2 border-l border-line pl-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "grid h-8 w-8 place-items-center rounded-sm bg-brand/15 text-xs font-bold text-brand",
										children: initialsOf(name)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 306,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "hidden text-xs sm:block",
										children: name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 309,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 302,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 292,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 265,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
					className: "p-5 md:p-8",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 313,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 264,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveSupport, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 317,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 253,
		columnNumber: 5
	}, this);
}
function CardPopover() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "absolute right-11 top-12 w-80 rounded-md border border-line-strong bg-panel p-4 shadow-panel",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex justify-between border-b border-line pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
				className: "text-sm",
				children: "Notifications"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 326,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-xs text-dim",
				children: "Desk updates"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 327,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 325,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-3 space-y-2 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "rounded-sm bg-soft p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Order review" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 331,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 332,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-muted",
						children: "New orders are checked by the desk within one hour."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 333,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 330,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "rounded-sm bg-soft p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Support" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 336,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 337,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-muted",
						children: "Ticket replies appear in your support inbox."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 338,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 335,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 329,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 324,
		columnNumber: 5
	}, this);
}
function DashNav({ close }) {
	const nav = useNavigate();
	const qc = useQueryClient();
	const signOut$1 = async () => {
		await qc.cancelQueries();
		qc.clear();
		await signOut(auth);
		nav({
			to: "/login",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border-b border-line px-5 py-5",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 357,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 356,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "px-5 py-4 text-[9px] uppercase text-dim kicker",
				children: "Client workspace"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 359,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "flex-1 space-y-1 px-3",
				children: [
					dash.map(([to, label, Icon]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to,
						onClick: close,
						activeProps: { className: "border-brand/25 bg-brand/10 text-brand-soft" },
						className: "flex items-center gap-3 rounded-sm border border-transparent px-3 py-2.5 text-xs font-medium uppercase text-muted transition hover:bg-soft hover:text-bright",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 369,
							columnNumber: 13
						}, this), label]
					}, to, true, {
						fileName: _jsxFileName,
						lineNumber: 362,
						columnNumber: 11
					}, this)),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pt-4 pb-1.5 px-3 text-[9px] uppercase text-dim kicker",
						children: "Explore"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 373,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/accounts",
						onClick: close,
						className: "flex items-center gap-3 rounded-sm border border-transparent px-3 py-2 text-xs font-medium uppercase text-muted transition hover:bg-soft hover:text-bright",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 379,
							columnNumber: 11
						}, this), "Trading Accounts"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 374,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						onClick: close,
						className: "flex items-center gap-3 rounded-sm border border-transparent px-3 py-2 text-xs font-medium uppercase text-muted transition hover:bg-soft hover:text-bright",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(House, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 387,
							columnNumber: 11
						}, this), "Main Website"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 382,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 360,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: signOut$1,
				className: "m-3 flex items-center gap-3 border-t border-line px-3 py-4 text-xs uppercase text-muted hover:text-bright",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { size: 16 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 396,
					columnNumber: 9
				}, this), "Sign out"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 391,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 355,
		columnNumber: 5
	}, this);
}
function AuthShell({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex w-full flex-col justify-center px-6 py-12 lg:w-[46%] lg:px-16 xl:px-24",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-12",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 416,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 415,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mb-3 text-[10px] uppercase text-brand kicker",
						children: "Client area"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 419,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-3xl font-semibold",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 420,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm text-muted",
						children: subtitle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 421,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8",
						children
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 422,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 418,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 414,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative hidden flex-1 overflow-hidden border-l border-line bg-ink lg:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 grid-bg market-bg" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 426,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Equity, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 427,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute left-14 top-14 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "inline-flex items-center gap-2 text-[10px] font-medium uppercase text-success kicker",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "h-1.5 w-1.5 rounded-full bg-success" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 430,
							columnNumber: 13
						}, this), " VEXO operations online"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 429,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-5 font-display text-4xl font-semibold leading-tight",
						children: "A disciplined path from evaluation to funded capital."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 432,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 428,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute bottom-14 left-14 right-14 border-l-2 border-brand pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
						className: "font-display text-xl",
						children: "“The clearest rules and the fastest payouts of any firm I've traded with.”"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 437,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 text-xs uppercase text-muted kicker",
						children: "Sarah P. · Funded Trader · UK"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 440,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 436,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 425,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 413,
		columnNumber: 5
	}, this);
}
function Equity() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		className: "pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-55",
		viewBox: "0 0 1000 400",
		preserveAspectRatio: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M0 340 C100 320 160 360 250 280 S390 250 450 230 S570 290 630 190 S760 210 820 120 S930 130 1000 45",
				fill: "none",
				stroke: "var(--brand)",
				strokeWidth: "2",
				className: "draw"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 454,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M0 340 C100 320 160 360 250 280 S390 250 450 230 S570 290 630 190 S760 210 820 120 S930 130 1000 45 V400 H0Z",
				fill: "url(#vexo-equity)"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 461,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
				id: "vexo-equity",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
					stopColor: "var(--brand)",
					stopOpacity: ".16"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 467,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
					offset: "1",
					stopColor: "var(--brand)",
					stopOpacity: "0"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 468,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 466,
				columnNumber: 9
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 465,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 449,
		columnNumber: 5
	}, this);
}
//#endregion
export { openSupportChat as a, SiteLayout as i, DashboardLayout as n, Equity as r, AuthShell as t };
