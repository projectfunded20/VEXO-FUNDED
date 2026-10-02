import { r as __exportAll$1 } from "../_runtime.mjs";
import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import "../_libs/firebase.mjs";
import { a as sendPasswordResetEmail, c as updatePassword, i as onAuthStateChanged, l as updateProfile, n as createUserWithEmailAndPassword, o as signInWithEmailAndPassword, r as getAuth, s as signOut, t as GoogleAuthProvider } from "../_libs/firebase__auth.mjs";
import { u as getFirestore } from "../_libs/@firebase/firestore+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-q8YvMaqw.js
var client_q8YvMaqw_exports = /* @__PURE__ */ __exportAll$1({
	a: () => signOut,
	c: () => getCurrentUser,
	d: () => signInWithEmailAndPassword,
	i: () => db,
	l: () => onAuthStateChanged,
	n: () => client_exports,
	o: () => updatePassword,
	r: () => createUserWithEmailAndPassword,
	s: () => updateProfile,
	t: () => auth,
	u: () => sendPasswordResetEmail
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var firebaseConfig = {
	apiKey: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "hncttkxymjyvsmxbjfii",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_RnZoz2IJylelQ_kFBvFh7A_er0zCcyh",
		"VITE_SUPABASE_URL": "https://hncttkxymjyvsmxbjfii.supabase.co"
	}["VITE_FIREBASE_API_KEY"] || "AIzaSyCLi_ZdGVOeXqK3iEMfpZHqQ_kz5zPkyjw",
	authDomain: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "hncttkxymjyvsmxbjfii",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_RnZoz2IJylelQ_kFBvFh7A_er0zCcyh",
		"VITE_SUPABASE_URL": "https://hncttkxymjyvsmxbjfii.supabase.co"
	}["VITE_FIREBASE_AUTH_DOMAIN"] || "qxtdemo-519c4.firebaseapp.com",
	projectId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "hncttkxymjyvsmxbjfii",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_RnZoz2IJylelQ_kFBvFh7A_er0zCcyh",
		"VITE_SUPABASE_URL": "https://hncttkxymjyvsmxbjfii.supabase.co"
	}["VITE_FIREBASE_PROJECT_ID"] || "qxtdemo-519c4",
	storageBucket: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "hncttkxymjyvsmxbjfii",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_RnZoz2IJylelQ_kFBvFh7A_er0zCcyh",
		"VITE_SUPABASE_URL": "https://hncttkxymjyvsmxbjfii.supabase.co"
	}["VITE_FIREBASE_STORAGE_BUCKET"] || "qxtdemo-519c4.firebasestorage.app",
	messagingSenderId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "hncttkxymjyvsmxbjfii",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_RnZoz2IJylelQ_kFBvFh7A_er0zCcyh",
		"VITE_SUPABASE_URL": "https://hncttkxymjyvsmxbjfii.supabase.co"
	}["VITE_FIREBASE_MESSAGING_SENDER_ID"] || "69964281046",
	appId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "hncttkxymjyvsmxbjfii",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_RnZoz2IJylelQ_kFBvFh7A_er0zCcyh",
		"VITE_SUPABASE_URL": "https://hncttkxymjyvsmxbjfii.supabase.co"
	}["VITE_FIREBASE_APP_ID"] || "1:69964281046:web:e563fad1812636614e8577",
	measurementId: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "hncttkxymjyvsmxbjfii",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_RnZoz2IJylelQ_kFBvFh7A_er0zCcyh",
		"VITE_SUPABASE_URL": "https://hncttkxymjyvsmxbjfii.supabase.co"
	}["VITE_FIREBASE_MEASUREMENT_ID"] || "G-PTFZR74J5J"
};
var client_exports = /* @__PURE__ */ __exportAll({
	app: () => app,
	auth: () => auth,
	createUserWithEmailAndPassword: () => createUserWithEmailAndPassword,
	db: () => db,
	getCurrentUser: () => getCurrentUser,
	onAuthStateChanged: () => onAuthStateChanged,
	sendPasswordResetEmail: () => sendPasswordResetEmail,
	signInWithEmailAndPassword: () => signInWithEmailAndPassword,
	signOut: () => signOut,
	updatePassword: () => updatePassword,
	updateProfile: () => updateProfile,
	waitForAuth: () => waitForAuth
});
var app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
var auth = getAuth(app);
var db = getFirestore(app);
new GoogleAuthProvider();
var authInitialized = false;
var initialAuthPromise = null;
function waitForAuth() {
	if (authInitialized) return Promise.resolve(auth.currentUser);
	if (!initialAuthPromise) initialAuthPromise = new Promise((resolve) => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			authInitialized = true;
			unsubscribe();
			resolve(user);
		}, () => {
			authInitialized = true;
			resolve(null);
		});
	});
	return initialAuthPromise;
}
async function getCurrentUser() {
	if (auth.currentUser) return auth.currentUser;
	return await waitForAuth();
}
//#endregion
export { getCurrentUser as i, client_q8YvMaqw_exports as n, db as r, auth as t };
