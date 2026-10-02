import { o as __toESM } from "../_runtime.mjs";
import { s as signOut } from "../_libs/firebase__auth.mjs";
import { t as auth } from "./client-q8YvMaqw.mjs";
import { a as require_jsx_runtime, i as useQueryClient, o as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, h as Outlet, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Cookie, L as Bell, S as Headphones, a as TrendingUp, b as LayoutDashboard, c as ShieldCheck, h as LogOut, n as X, p as Menu, r as User, v as ListOrdered, x as House, y as LifeBuoy } from "../_libs/lucide-react.mjs";
import { S as useSession, _ as initialsOf, b as nameOf, p as cn, r as Button, s as Logo } from "./session-BFLLUQCL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layouts-CW9SqjRk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: handleClick,
		"aria-label": "Customer Support",
		title: "Customer Support",
		className: "fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-action text-action-foreground shadow-action transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-action",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, {
			size: 22,
			className: "relative z-10"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "absolute top-1 right-1 h-3 w-3 rounded-full border-2 border-panel bg-success"
		})]
	});
}
var links = [
	["/accounts", "Accounts"],
	["/brokers", "Brokers"],
	["/how-it-works", "How It Works"],
	["/faq", "FAQ"],
	["/reviews", "Reviews"],
	["/support", "Support"]
];
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveSupport, {})
		]
	});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed top-0 z-50 w-full border-b border-transparent py-4 transition", scrolled && "glass border-line py-2.5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-1 lg:flex",
					children: links.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "rounded-sm px-3 py-2 text-xs font-medium uppercase text-muted transition hover:bg-soft hover:text-bright",
						activeProps: { className: "bg-brand/10 text-brand-soft" },
						children: label
					}, to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						to: "/dashboard",
						variant: "ghost",
						size: "sm",
						children: "My Dashboard"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						to: "/login",
						variant: "ghost",
						size: "sm",
						children: "Sign In"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						to: "/accounts",
						size: "sm",
						children: "Open Account"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Menu",
					onClick: () => setOpen(!open),
					className: "rounded-sm border border-line bg-panel p-2.5 lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass mt-3 border-y border-line px-5 py-4 lg:hidden",
			children: [links.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to,
				onClick: () => setOpen(false),
				className: "block rounded-sm border-b border-line px-3 py-3 text-sm text-copy last:border-0 hover:bg-soft",
				children: label
			}, to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: [user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					to: "/dashboard",
					variant: "secondary",
					children: "Dashboard"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					to: "/login",
					variant: "secondary",
					children: "Sign In"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					to: "/accounts",
					children: "Open Account"
				})]
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-14 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-10 border-b border-line pb-12 md:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-muted",
							children: "Simulated evaluations for aspiring traders. Prove your edge, get funded, and keep up to 92% of the profits you generate on your funded account."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 inline-flex items-center gap-2 border-l-2 border-success pl-3 text-xs text-copy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-1.5 w-1.5 rounded-full bg-success" }), " Operations online 24/7"]
						})
					]
				}), [
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
				].map(([title, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-xs font-semibold uppercase text-copy kicker",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: items.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "text-sm text-muted transition hover:text-brand",
						children: label
					}) }, to))
				})] }, title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-7 text-xs leading-relaxed text-dim",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-muted",
						children: "Risk Disclosure:"
					}),
					" Evaluation and Instant accounts are simulated trading environments funded by account fees; no client funds are traded on live markets during the evaluation phase. Profit splits on funded accounts are paid from firm capital according to your account agreement. Trading involves risk and past performance is not indicative of future results. VEXO FUNDED does not provide investment advice.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap justify-between gap-3 border-t border-line pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 VEXO FUNDED. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono uppercase kicker",
							children: "Built for traders, by traders."
						})]
					})
				]
			})]
		})
	});
}
function CookieBanner() {
	const [show, setShow] = (0, import_react.useState)(true);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-3 left-3 right-3 z-50 mx-auto max-w-2xl rounded-md border border-line-strong bg-panel p-4 shadow-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cookie, {
					className: "mt-1 shrink-0 text-brand",
					size: 18
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Cookie preferences"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "Essential cookies keep the platform working. Optional cookies improve your experience."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Dismiss",
					onClick: () => setShow(false),
					className: "text-muted hover:text-bright",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex justify-end gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "ghost",
				onClick: () => setShow(false),
				children: "Essential only"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				onClick: () => setShow(false),
				children: "Accept all"
			})]
		})]
	});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "fixed inset-y-0 left-0 hidden w-64 border-r border-line bg-ink lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashNav, {})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 bg-overlay lg:hidden",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "h-full w-72 bg-ink",
					onClick: (event) => event.stopPropagation(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashNav, { close: () => setOpen(false) })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 lg:pl-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-background/95 px-5 backdrop-blur md:px-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Open dashboard menu",
							className: "rounded-sm border border-line p-2 lg:hidden",
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									className: "flex items-center gap-1.5 rounded-sm border border-line bg-panel px-3 py-1.5 text-xs font-medium text-muted transition hover:bg-soft hover:text-bright",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Main Website"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/accounts",
									className: "hidden items-center gap-1.5 rounded-sm border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand-soft transition hover:bg-brand/20 sm:flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 14 }), "New Account"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden items-center gap-2 text-[10px] uppercase text-dim kicker lg:flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-1.5 w-1.5 rounded-full bg-success" }), " Systems operational"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									"aria-label": "Notifications",
									onClick: () => setNotifs(!notifs),
									className: "relative rounded-sm border border-line bg-panel p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-action" })]
								}),
								notifs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardPopover, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/dashboard/profile",
									className: "flex items-center gap-2 border-l border-line pl-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-8 w-8 place-items-center rounded-sm bg-brand/15 text-xs font-bold text-brand",
										children: initialsOf(name)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden text-xs sm:block",
										children: name
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "p-5 md:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveSupport, {})
		]
	});
}
function CardPopover() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute right-11 top-12 w-80 rounded-md border border-line-strong bg-panel p-4 shadow-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between border-b border-line pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
				className: "text-sm",
				children: "Notifications"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-dim",
				children: "Desk updates"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 space-y-2 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-sm bg-soft p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Order review" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "New orders are checked by the desk within one hour."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-sm bg-soft p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Support" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "Ticket replies appear in your support inbox."
					})
				]
			})]
		})]
	});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line px-5 py-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 py-4 text-[9px] uppercase text-dim kicker",
				children: "Client workspace"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex-1 space-y-1 px-3",
				children: [
					dash.map(([to, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to,
						onClick: close,
						activeProps: { className: "border-brand/25 bg-brand/10 text-brand-soft" },
						className: "flex items-center gap-3 rounded-sm border border-transparent px-3 py-2.5 text-xs font-medium uppercase text-muted transition hover:bg-soft hover:text-bright",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 }), label]
					}, to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-4 pb-1.5 px-3 text-[9px] uppercase text-dim kicker",
						children: "Explore"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/accounts",
						onClick: close,
						className: "flex items-center gap-3 rounded-sm border border-transparent px-3 py-2 text-xs font-medium uppercase text-muted transition hover:bg-soft hover:text-bright",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 16 }), "Trading Accounts"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						onClick: close,
						className: "flex items-center gap-3 rounded-sm border border-transparent px-3 py-2 text-xs font-medium uppercase text-muted transition hover:bg-soft hover:text-bright",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 16 }), "Main Website"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: signOut$1,
				className: "m-3 flex items-center gap-3 border-t border-line px-3 py-4 text-xs uppercase text-muted hover:text-bright",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }), "Sign out"]
			})
		]
	});
}
function AuthShell({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full flex-col justify-center px-6 py-12 lg:w-[46%] lg:px-16 xl:px-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-[10px] uppercase text-brand kicker",
						children: "Client area"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-semibold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative hidden flex-1 overflow-hidden border-l border-line bg-ink lg:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg market-bg" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Equity, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-14 top-14 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 text-[10px] font-medium uppercase text-success kicker",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-1.5 w-1.5 rounded-full bg-success" }), " VEXO operations online"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 font-display text-4xl font-semibold leading-tight",
						children: "A disciplined path from evaluation to funded capital."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-14 left-14 right-14 border-l-2 border-brand pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "font-display text-xl",
						children: "“The clearest rules and the fastest payouts of any firm I've traded with.”"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs uppercase text-muted kicker",
						children: "Sarah P. · Funded Trader · UK"
					})]
				})
			]
		})]
	});
}
function Equity() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-55",
		viewBox: "0 0 1000 400",
		preserveAspectRatio: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 340 C100 320 160 360 250 280 S390 250 450 230 S570 290 630 190 S760 210 820 120 S930 130 1000 45",
				fill: "none",
				stroke: "var(--brand)",
				strokeWidth: "2",
				className: "draw"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 340 C100 320 160 360 250 280 S390 250 450 230 S570 290 630 190 S760 210 820 120 S930 130 1000 45 V400 H0Z",
				fill: "url(#vexo-equity)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "vexo-equity",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					stopColor: "var(--brand)",
					stopOpacity: ".16"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "1",
					stopColor: "var(--brand)",
					stopOpacity: "0"
				})]
			}) })
		]
	});
}
//#endregion
export { openSupportChat as a, SiteLayout as i, DashboardLayout as n, Equity as r, AuthShell as t };
