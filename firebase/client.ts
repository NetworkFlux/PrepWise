import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4ed5HK60ARxNCJ3Kp7Or9-CwqbUDGQbs",
  authDomain: "prepwise-a1e1b.firebaseapp.com",
  projectId: "prepwise-a1e1b",
  storageBucket: "prepwise-a1e1b.firebasestorage.app",
  messagingSenderId: "1019901119362",
  appId: "1:1019901119362:web:e09ed9bb41eaf11e265d9b",
  measurementId: "G-2NTHJELT7X"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);