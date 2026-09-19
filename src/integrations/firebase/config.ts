export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCLi_ZdGVOeXqK3iEMfpZHqQ_kz5zPkyjw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "qxtdemo-519c4.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "qxtdemo-519c4",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "qxtdemo-519c4.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "69964281046",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:69964281046:web:e563fad1812636614e8577",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-PTFZR74J5J",
};
