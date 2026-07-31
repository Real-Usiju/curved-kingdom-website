import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyChWR1zKBnsaBYVR6WIwZUdv2yiFK1yc5g",
  authDomain: "curved-kingdom.firebaseapp.com",
  projectId: "curved-kingdom",
  storageBucket: "curved-kingdom.firebasestorage.app",
  messagingSenderId: "855668782722",
  appId: "1:855668782722:web:04247a77d8a52a99ada69b",
  measurementId: "G-K5YQ0TVSBJ"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);