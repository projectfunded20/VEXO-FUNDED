import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile as firebaseUpdateProfile,
  updatePassword as firebaseUpdatePassword,
  sendPasswordResetEmail,
  type User as FirebaseUser,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

let authInitialized = false;
let initialAuthPromise: Promise<FirebaseUser | null> | null = null;

export function waitForAuth(): Promise<FirebaseUser | null> {
  if (authInitialized) {
    return Promise.resolve(auth.currentUser);
  }
  if (!initialAuthPromise) {
    initialAuthPromise = new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          authInitialized = true;
          unsubscribe();
          resolve(user);
        },
        () => {
          authInitialized = true;
          resolve(null);
        },
      );
    });
  }
  return initialAuthPromise;
}

export async function getCurrentUser(): Promise<FirebaseUser | null> {
  if (auth.currentUser) return auth.currentUser;
  return await waitForAuth();
}

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  firebaseSignOut as signOut,
  onAuthStateChanged,
  firebaseUpdateProfile as updateProfile,
  firebaseUpdatePassword as updatePassword,
  sendPasswordResetEmail,
  type FirebaseUser,
};
