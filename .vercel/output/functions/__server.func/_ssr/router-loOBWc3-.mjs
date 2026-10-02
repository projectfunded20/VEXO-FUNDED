import { o as __toESM } from "../_runtime.mjs";
import { i as getCurrentUser } from "./client-Cis1qyns.mjs";
import { o as require_react, r as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { C as useRouter, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, q as redirect, v as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as StatusPage } from "./legal-status-Ctvc9neV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-loOBWc3-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-DOLjBjQk.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPage, { kind: "404" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 10
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var SITE_URL = "https://project--d4b6037e-b2d8-4160-a495-87273e6609ed.lovable.app";
var organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "VEXO FUNDED",
	alternateName: "VEXO",
	url: SITE_URL,
	logo: `${SITE_URL}/favicon.svg`,
	image: `${SITE_URL}/og-cover.jpg`,
	description: "VEXO FUNDED is a proprietary trading firm offering instant funding and two-step evaluation accounts from $3,000 to $50,000 with profit splits up to 92%.",
	sameAs: [],
	contactPoint: [{
		"@type": "ContactPoint",
		contactType: "customer support",
		availableLanguage: ["English"],
		url: `${SITE_URL}/support`
	}]
};
var websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "VEXO FUNDED",
	url: SITE_URL,
	potentialAction: {
		"@type": "SearchAction",
		target: `${SITE_URL}/faq?q={search_term_string}`,
		"query-input": "required name=search_term_string"
	}
};
var Route$40 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "VEXO FUNDED — Funded Trading Accounts up to $50,000" },
			{
				name: "description",
				content: "VEXO FUNDED gives disciplined traders instant funding and two-step evaluations from $3,000 to $50,000, with clear rules and profit splits up to 92%."
			},
			{
				name: "author",
				content: "VEXO FUNDED"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			},
			{
				name: "theme-color",
				content: "#0B1112"
			},
			{
				property: "og:site_name",
				content: "VEXO FUNDED"
			},
			{
				property: "og:title",
				content: "VEXO FUNDED — Funded Trading Accounts up to $50,000"
			},
			{
				property: "og:description",
				content: "Instant funding and two-step evaluations with transparent rules and up to 92% profit split."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: SITE_URL
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-cover.jpg`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "VEXO FUNDED — Funded Trading Accounts up to $50,000"
			},
			{
				name: "twitter:description",
				content: "Instant funding and two-step evaluations with transparent rules and up to 92% profit split."
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-cover.jpg`
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			},
			{
				rel: "canonical",
				href: SITE_URL
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(organizationSchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(websiteSchema)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 156,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 155,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 160,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 158,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 154,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$40.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		import("./client-Cis1qyns.mjs").then((n) => n.n).then((n) => n.n).then(({ auth, onAuthStateChanged }) => {
			if (cancelled) return;
			const unsubscribe = onAuthStateChanged(auth, (user) => {
				if (cancelled) return;
				router.invalidate();
				if (user) queryClient.invalidateQueries();
			});
			return () => {
				unsubscribe();
			};
		});
		return () => {
			cancelled = true;
		};
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 193,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 191,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$39 = () => import("./routes-B7z1Zkk-.mjs");
var Route$39 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Home — VEXO FUNDED" },
		{
			name: "description",
			content: "Access funded trading accounts up to $50,000 and keep up to 92% of profits."
		},
		{
			property: "og:title",
			content: "Home — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Access funded trading accounts up to $50,000 and keep up to 92% of profits."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$39, "component")
});
var $$splitComponentImporter$38 = () => import("./500-CwwG9lsg.mjs");
var Route$38 = createFileRoute("/500")({
	head: () => ({ meta: [
		{ title: "Server Error — VEXO FUNDED" },
		{
			name: "description",
			content: "VEXO FUNDED service status page."
		},
		{
			property: "og:title",
			content: "Server Error — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "VEXO FUNDED service status page."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$38, "component")
});
var $$splitComponentImporter$37 = () => import("./route-CRRSyPUS.mjs");
var Route$37 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async ({ location }) => {
		const user = await getCurrentUser();
		if (!user) throw redirect({
			to: "/login",
			search: { redirect: location.href }
		});
		return { user };
	},
	component: lazyRouteComponent($$splitComponentImporter$37, "component")
});
var $$splitComponentImporter$36 = () => import("./accounts-BYjHhLGL.mjs");
var Route$36 = createFileRoute("/accounts")({
	head: () => ({ meta: [
		{ title: "Trading Accounts — VEXO FUNDED" },
		{
			name: "description",
			content: "Compare VEXO FUNDED Instant and Challenge account sizes, prices, and rules."
		},
		{
			property: "og:title",
			content: "Trading Accounts — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Compare VEXO FUNDED Instant and Challenge account sizes, prices, and rules."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./brokers-BpIddsrm.mjs");
var Route$35 = createFileRoute("/brokers")({
	head: () => ({ meta: [
		{ title: "Brokers — VEXO FUNDED" },
		{
			name: "description",
			content: "Explore supported VEXO FUNDED broker environments."
		},
		{
			property: "og:title",
			content: "Brokers — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Explore supported VEXO FUNDED broker environments."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$35, "component")
});
var $$splitComponentImporter$34 = () => import("./contact-Cq1VldA2.mjs");
var Route$34 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — VEXO FUNDED" },
		{
			name: "description",
			content: "Contact the VEXO FUNDED support team."
		},
		{
			property: "og:title",
			content: "Contact Us — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Contact the VEXO FUNDED support team."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
var $$splitComponentImporter$33 = () => import("./cookies-WXObvL4T.mjs");
var Route$33 = createFileRoute("/cookies")({
	beforeLoad: () => {
		throw redirect({ to: "/legal/cookies" });
	},
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
var $$splitComponentImporter$32 = () => import("./faq-BDUxheY8.mjs");
var Route$32 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ — VEXO FUNDED" },
		{
			name: "description",
			content: "Answers about VEXO FUNDED accounts, rules, brokers, and payouts."
		},
		{
			property: "og:title",
			content: "FAQ — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Answers about VEXO FUNDED accounts, rules, brokers, and payouts."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./forgot-password-DdfkbZbF.mjs");
var Route$31 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [
		{ title: "Reset Password — VEXO FUNDED" },
		{
			name: "description",
			content: "Reset access to your VEXO FUNDED account."
		},
		{
			property: "og:title",
			content: "Reset Password — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Reset access to your VEXO FUNDED account."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./how-it-works-BlBF0ID5.mjs");
var Route$30 = createFileRoute("/how-it-works")({
	head: () => ({ meta: [
		{ title: "How It Works — VEXO FUNDED" },
		{
			name: "description",
			content: "Learn the path from account selection to funded trader."
		},
		{
			property: "og:title",
			content: "How It Works — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Learn the path from account selection to funded trader."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./login-DiiU5KDS.mjs");
var Route$29 = createFileRoute("/login")({
	validateSearch: (search) => typeof search["redirect"] === "string" ? { redirect: search["redirect"] } : {},
	head: () => ({ meta: [
		{ title: "Sign In — VEXO FUNDED" },
		{
			name: "description",
			content: "Sign in to your VEXO FUNDED client area to track orders, accounts and support tickets."
		},
		{
			property: "og:title",
			content: "Sign In — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Sign in to your VEXO FUNDED client area to track orders, accounts and support tickets."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./maintenance-DYxmvV2D.mjs");
var Route$28 = createFileRoute("/maintenance")({
	head: () => ({ meta: [
		{ title: "Maintenance — VEXO FUNDED" },
		{
			name: "description",
			content: "VEXO FUNDED scheduled maintenance notice."
		},
		{
			property: "og:title",
			content: "Maintenance — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "VEXO FUNDED scheduled maintenance notice."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./privacy-CRz_cuQN.mjs");
var Route$27 = createFileRoute("/privacy")({
	beforeLoad: () => {
		throw redirect({ to: "/legal/privacy" });
	},
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./refund-hht_-mpd.mjs");
var Route$26 = createFileRoute("/refund")({
	beforeLoad: () => {
		throw redirect({ to: "/legal/refund" });
	},
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./reset-password-iRlzHlS9.mjs");
var Route$25 = createFileRoute("/reset-password")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Set a New Password — VEXO FUNDED" },
		{
			name: "description",
			content: "Choose a new password for your VEXO FUNDED account."
		},
		{
			property: "og:title",
			content: "Set a New Password — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Choose a new password for your VEXO FUNDED account."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./reviews-CsT5KJbn.mjs");
var Route$24 = createFileRoute("/reviews")({
	head: () => ({ meta: [
		{ title: "Trader Reviews — VEXO FUNDED" },
		{
			name: "description",
			content: "Read VEXO FUNDED trader reviews and experiences."
		},
		{
			property: "og:title",
			content: "Trader Reviews — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Read VEXO FUNDED trader reviews and experiences."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./risk-Ba5mHAZg.mjs");
var Route$23 = createFileRoute("/risk")({
	beforeLoad: () => {
		throw redirect({ to: "/legal/risk" });
	},
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./signup-DglpcceX.mjs");
var Route$22 = createFileRoute("/signup")({
	head: () => ({ meta: [
		{ title: "Create Account — VEXO FUNDED" },
		{
			name: "description",
			content: "Create a VEXO FUNDED account in this frontend demonstration."
		},
		{
			property: "og:title",
			content: "Create Account — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Create a VEXO FUNDED account in this frontend demonstration."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./support-D4E0VbMK.mjs");
var Route$21 = createFileRoute("/support")({
	head: () => ({ meta: [
		{ title: "Support Center — VEXO FUNDED" },
		{
			name: "description",
			content: "Get help with VEXO FUNDED accounts, billing, and technical questions."
		},
		{
			property: "og:title",
			content: "Support Center — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Get help with VEXO FUNDED accounts, billing, and technical questions."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./terms-B60g1rrn.mjs");
var Route$20 = createFileRoute("/terms")({
	beforeLoad: () => {
		throw redirect({ to: "/legal/terms" });
	},
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./thank-you-Rmoj_NhB.mjs");
var Route$19 = createFileRoute("/thank-you")({
	head: () => ({ meta: [
		{ title: "Thank You — VEXO FUNDED" },
		{
			name: "description",
			content: "Your message has been received by VEXO FUNDED."
		},
		{
			property: "og:title",
			content: "Thank You — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Your message has been received by VEXO FUNDED."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./dashboard-_w72WHy6.mjs");
var Route$18 = createFileRoute("/_authenticated/dashboard")({
	head: () => ({ meta: [
		{ title: "Trading Dashboard | VEXO FUNDED" },
		{
			name: "description",
			content: "Track your VEXO FUNDED accounts, orders, targets, and support activity."
		},
		{
			property: "og:title",
			content: "Trading Dashboard | VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Track funded account progress and account activity in one workspace."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./legal.index-C9momPf4.mjs");
var Route$17 = createFileRoute("/legal/")({
	beforeLoad: () => {
		throw redirect({ to: "/legal/terms" });
	},
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./legal.cookies-CBdNvm9E.mjs");
var Route$16 = createFileRoute("/legal/cookies")({
	head: () => ({ meta: [
		{ title: "Cookies Policy — VEXO FUNDED" },
		{
			name: "description",
			content: "Cookies Policy for VEXO FUNDED customers."
		},
		{
			property: "og:title",
			content: "Cookies Policy — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Cookies Policy for VEXO FUNDED customers."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./legal.privacy-TeqOSyUO.mjs");
var Route$15 = createFileRoute("/legal/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Agreement — VEXO FUNDED" },
		{
			name: "description",
			content: "Privacy Agreement for VEXO FUNDED customers."
		},
		{
			property: "og:title",
			content: "Privacy Agreement — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Privacy Agreement for VEXO FUNDED customers."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./legal.refund-_XqqPh_C.mjs");
var Route$14 = createFileRoute("/legal/refund")({
	head: () => ({ meta: [
		{ title: "Refund Policy — VEXO FUNDED" },
		{
			name: "description",
			content: "Refund Policy for VEXO FUNDED customers."
		},
		{
			property: "og:title",
			content: "Refund Policy — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Refund Policy for VEXO FUNDED customers."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./legal.risk-o0THisN6.mjs");
var Route$13 = createFileRoute("/legal/risk")({
	head: () => ({ meta: [
		{ title: "Risk Disclosure — VEXO FUNDED" },
		{
			name: "description",
			content: "Risk Disclosure for VEXO FUNDED customers."
		},
		{
			property: "og:title",
			content: "Risk Disclosure — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Risk Disclosure for VEXO FUNDED customers."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./legal.terms-LOUnFwT2.mjs");
var Route$12 = createFileRoute("/legal/terms")({
	head: () => ({ meta: [
		{ title: "Terms & Agreement — VEXO FUNDED" },
		{
			name: "description",
			content: "Terms & Agreement for VEXO FUNDED customers."
		},
		{
			property: "og:title",
			content: "Terms & Agreement — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Terms & Agreement for VEXO FUNDED customers."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./checkout.index-BIzwQvXF.mjs");
var Route$11 = createFileRoute("/_authenticated/checkout/")({
	beforeLoad: ({ search }) => {
		throw redirect({
			to: "/checkout/details",
			search
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./checkout.deposit-D_i3UYtF.mjs");
var Route$10 = createFileRoute("/_authenticated/checkout/deposit")({
	head: () => ({ meta: [
		{ title: "Confirm Order — VEXO FUNDED Checkout" },
		{
			name: "description",
			content: "Review and confirm your demonstration order."
		},
		{
			property: "og:title",
			content: "Confirm Order — VEXO FUNDED Checkout"
		},
		{
			property: "og:description",
			content: "Review and confirm your demonstration order."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./checkout.details-B2uXGrfz.mjs");
var Route$9 = createFileRoute("/_authenticated/checkout/details")({
	head: () => ({ meta: [
		{ title: "Select Broker — VEXO FUNDED Checkout" },
		{
			name: "description",
			content: "Choose a broker environment for your VEXO FUNDED account."
		},
		{
			property: "og:title",
			content: "Select Broker — VEXO FUNDED Checkout"
		},
		{
			property: "og:description",
			content: "Choose a broker environment for your VEXO FUNDED account."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./checkout.payment-DP-jvKin.mjs");
var Route$8 = createFileRoute("/_authenticated/checkout/payment")({
	head: () => ({ meta: [
		{ title: "Select Payment — VEXO FUNDED Checkout" },
		{
			name: "description",
			content: "Choose a demonstration payment method."
		},
		{
			property: "og:title",
			content: "Select Payment — VEXO FUNDED Checkout"
		},
		{
			property: "og:description",
			content: "Choose a demonstration payment method."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./dashboard.index-DuOeYmxD.mjs");
var Route$7 = createFileRoute("/_authenticated/dashboard/")({
	validateSearch: (search) => ({
		payment: typeof search["payment"] === "string" ? search["payment"] : void 0,
		order: typeof search["order"] === "string" ? search["order"] : void 0
	}),
	head: () => ({ meta: [
		{ title: "Dashboard — VEXO FUNDED" },
		{
			name: "description",
			content: "Preview VEXO FUNDED account activity and recent orders."
		},
		{
			property: "og:title",
			content: "Dashboard — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Preview VEXO FUNDED account activity and recent orders."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./dashboard.profile-BJXReHPi.mjs");
var Route$6 = createFileRoute("/_authenticated/dashboard/profile")({
	head: () => ({ meta: [
		{ title: "Profile — VEXO FUNDED" },
		{
			name: "description",
			content: "Preview VEXO FUNDED profile settings."
		},
		{
			property: "og:title",
			content: "Profile — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Preview VEXO FUNDED profile settings."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./dashboard.security-DB6BJXcg.mjs");
var Route$5 = createFileRoute("/_authenticated/dashboard/security")({
	head: () => ({ meta: [
		{ title: "Security — VEXO FUNDED" },
		{
			name: "description",
			content: "Preview VEXO FUNDED password and security settings."
		},
		{
			property: "og:title",
			content: "Security — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Preview VEXO FUNDED password and security settings."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./dashboard.orders.index-Cfw9zdrC.mjs");
var Route$4 = createFileRoute("/_authenticated/dashboard/orders/")({
	head: () => ({ meta: [
		{ title: "Orders — VEXO FUNDED" },
		{
			name: "description",
			content: "Track VEXO FUNDED account purchases and delivery status."
		},
		{
			property: "og:title",
			content: "Orders — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Track VEXO FUNDED account purchases and delivery status."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./dashboard.orders._id-F7i1xLDQ.mjs");
var Route$3 = createFileRoute("/_authenticated/dashboard/orders/$id")({
	head: () => ({ meta: [
		{ title: "Order Details — VEXO FUNDED" },
		{
			name: "description",
			content: "Review a VEXO FUNDED order timeline and account details."
		},
		{
			property: "og:title",
			content: "Order Details — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Review a VEXO FUNDED order timeline and account details."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./dashboard.support.index-Bj_ej9a_.mjs");
var Route$2 = createFileRoute("/_authenticated/dashboard/support/")({
	head: () => ({ meta: [
		{ title: "Support Tickets — VEXO FUNDED" },
		{
			name: "description",
			content: "Preview and manage VEXO FUNDED support requests."
		},
		{
			property: "og:title",
			content: "Support Tickets — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Preview and manage VEXO FUNDED support requests."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./dashboard.support._id-D14Jfhnr.mjs");
var Route$1 = createFileRoute("/_authenticated/dashboard/support/$id")({
	head: () => ({ meta: [
		{ title: "Support Ticket — VEXO FUNDED" },
		{
			name: "description",
			content: "Review and reply to a demonstration VEXO FUNDED support ticket."
		},
		{
			property: "og:title",
			content: "Support Ticket — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Review and reply to a demonstration VEXO FUNDED support ticket."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./dashboard.support.new-SakmQ-ci.mjs");
var Route = createFileRoute("/_authenticated/dashboard/support/new")({
	head: () => ({ meta: [
		{ title: "New Support Ticket — VEXO FUNDED" },
		{
			name: "description",
			content: "Create a demonstration VEXO FUNDED support ticket."
		},
		{
			property: "og:title",
			content: "New Support Ticket — VEXO FUNDED"
		},
		{
			property: "og:description",
			content: "Create a demonstration VEXO FUNDED support ticket."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$39.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$40
});
var R500Route = Route$38.update({
	id: "/500",
	path: "/500",
	getParentRoute: () => Route$40
});
var AuthenticatedRouteRoute = Route$37.update({
	id: "/_authenticated",
	getParentRoute: () => Route$40
});
var AccountsRoute = Route$36.update({
	id: "/accounts",
	path: "/accounts",
	getParentRoute: () => Route$40
});
var BrokersRoute = Route$35.update({
	id: "/brokers",
	path: "/brokers",
	getParentRoute: () => Route$40
});
var ContactRoute = Route$34.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$40
});
var CookiesRoute = Route$33.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$40
});
var FaqRoute = Route$32.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$40
});
var ForgotPasswordRoute = Route$31.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$40
});
var HowItWorksRoute = Route$30.update({
	id: "/how-it-works",
	path: "/how-it-works",
	getParentRoute: () => Route$40
});
var LoginRoute = Route$29.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$40
});
var MaintenanceRoute = Route$28.update({
	id: "/maintenance",
	path: "/maintenance",
	getParentRoute: () => Route$40
});
var PrivacyRoute = Route$27.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$40
});
var RefundRoute = Route$26.update({
	id: "/refund",
	path: "/refund",
	getParentRoute: () => Route$40
});
var ResetPasswordRoute = Route$25.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$40
});
var ReviewsRoute = Route$24.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => Route$40
});
var RiskRoute = Route$23.update({
	id: "/risk",
	path: "/risk",
	getParentRoute: () => Route$40
});
var SignupRoute = Route$22.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$40
});
var SupportRoute = Route$21.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => Route$40
});
var TermsRoute = Route$20.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$40
});
var ThankYouRoute = Route$19.update({
	id: "/thank-you",
	path: "/thank-you",
	getParentRoute: () => Route$40
});
var AuthenticatedDashboardRoute = Route$18.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AuthenticatedRouteRoute
});
var LegalIndexRoute = Route$17.update({
	id: "/legal/",
	path: "/legal/",
	getParentRoute: () => Route$40
});
var LegalCookiesRoute = Route$16.update({
	id: "/legal/cookies",
	path: "/legal/cookies",
	getParentRoute: () => Route$40
});
var LegalPrivacyRoute = Route$15.update({
	id: "/legal/privacy",
	path: "/legal/privacy",
	getParentRoute: () => Route$40
});
var LegalRefundRoute = Route$14.update({
	id: "/legal/refund",
	path: "/legal/refund",
	getParentRoute: () => Route$40
});
var LegalRiskRoute = Route$13.update({
	id: "/legal/risk",
	path: "/legal/risk",
	getParentRoute: () => Route$40
});
var LegalTermsRoute = Route$12.update({
	id: "/legal/terms",
	path: "/legal/terms",
	getParentRoute: () => Route$40
});
var AuthenticatedCheckoutIndexRoute = Route$11.update({
	id: "/checkout/",
	path: "/checkout/",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedCheckoutDepositRoute = Route$10.update({
	id: "/checkout/deposit",
	path: "/checkout/deposit",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedCheckoutDetailsRoute = Route$9.update({
	id: "/checkout/details",
	path: "/checkout/details",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedCheckoutPaymentRoute = Route$8.update({
	id: "/checkout/payment",
	path: "/checkout/payment",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardIndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardProfileRoute = Route$6.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardSecurityRoute = Route$5.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardOrdersIndexRoute = Route$4.update({
	id: "/orders/",
	path: "/orders/",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardOrdersIdRoute = Route$3.update({
	id: "/orders/$id",
	path: "/orders/$id",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardSupportIndexRoute = Route$2.update({
	id: "/support/",
	path: "/support/",
	getParentRoute: () => AuthenticatedDashboardRoute
});
var AuthenticatedDashboardRouteChildren = {
	AuthenticatedDashboardProfileRoute,
	AuthenticatedDashboardSecurityRoute,
	AuthenticatedDashboardIndexRoute,
	AuthenticatedDashboardOrdersIdRoute,
	AuthenticatedDashboardSupportIdRoute: Route$1.update({
		id: "/support/$id",
		path: "/support/$id",
		getParentRoute: () => AuthenticatedDashboardRoute
	}),
	AuthenticatedDashboardSupportNewRoute: Route.update({
		id: "/support/new",
		path: "/support/new",
		getParentRoute: () => AuthenticatedDashboardRoute
	}),
	AuthenticatedDashboardOrdersIndexRoute,
	AuthenticatedDashboardSupportIndexRoute
};
var AuthenticatedRouteRouteChildren = {
	AuthenticatedDashboardRoute: AuthenticatedDashboardRoute._addFileChildren(AuthenticatedDashboardRouteChildren),
	AuthenticatedCheckoutDepositRoute,
	AuthenticatedCheckoutDetailsRoute,
	AuthenticatedCheckoutPaymentRoute,
	AuthenticatedCheckoutIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	R500Route,
	AccountsRoute,
	BrokersRoute,
	ContactRoute,
	CookiesRoute,
	FaqRoute,
	ForgotPasswordRoute,
	HowItWorksRoute,
	LoginRoute,
	MaintenanceRoute,
	PrivacyRoute,
	RefundRoute,
	ResetPasswordRoute,
	ReviewsRoute,
	RiskRoute,
	SignupRoute,
	SupportRoute,
	TermsRoute,
	ThankYouRoute,
	LegalCookiesRoute,
	LegalPrivacyRoute,
	LegalRefundRoute,
	LegalRiskRoute,
	LegalTermsRoute,
	LegalIndexRoute
};
var routeTree = Route$40._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	const router = createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
	const origGetMatchedRoutes = router.getMatchedRoutes.bind(router);
	router.getMatchedRoutes = (pathname) => {
		const res = origGetMatchedRoutes(pathname);
		if (res && typeof res === "object" && typeof res[Symbol.iterator] !== "function") {
			const matchedRoutes = res.matchedRoutes ?? (Array.isArray(res) ? res : []);
			const routeParams = res.routeParams ?? res.rawParams ?? {};
			const foundRoute = res.foundRoute;
			res[Symbol.iterator] = function* () {
				yield matchedRoutes;
				yield routeParams;
				yield foundRoute;
			};
		}
		return res;
	};
	const patchServerSsr = (ssr) => {
		if (ssr && typeof ssr === "object" && typeof ssr.takeBufferedScripts !== "function") ssr.takeBufferedScripts = () => void 0;
	};
	const routerObj = router;
	const lifecycle = routerObj.serverSsrLifecycle = routerObj.serverSsrLifecycle || {};
	lifecycle.onServerSsrAttach = lifecycle.onServerSsrAttach || [];
	lifecycle.onServerSsrAttach.push(patchServerSsr);
	let _serverSsr = routerObj.serverSsr;
	patchServerSsr(_serverSsr);
	Object.defineProperty(router, "serverSsr", {
		configurable: true,
		enumerable: true,
		get() {
			patchServerSsr(_serverSsr);
			return _serverSsr;
		},
		set(v) {
			patchServerSsr(v);
			_serverSsr = v;
		}
	});
	return router;
};
//#endregion
export { getRouter };
