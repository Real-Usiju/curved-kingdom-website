import {
  initializeApp,
  getApps,
  getApp,
} from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0k4ZlAHaeCPGRGf1NnapyAzJ5tJF48_E",
  authDomain: "curvedkingdom.com",
  projectId: "curved-kingdom-87579",
  storageBucket: "curved-kingdom-87579.firebasestorage.app",
  messagingSenderId: "912952367169",
  appId: "1:912952367169:web:71e4ea408cef28e6c2cec0",
};

const app =
  getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig);

/*
 * --------------------------------------------------
 * FIREBASE AUTHENTICATION
 * --------------------------------------------------
 */

export const auth = getAuth(app);

export const googleProvider =
  new GoogleAuthProvider();

/*
 * Keep the citizen signed in.
 *
 * Refreshing the page will NOT automatically
 * send the citizen back to the beginning
 * of the registration flow.
 */

export const authPersistence = setPersistence(
  auth,
  browserLocalPersistence
);

/*
 * --------------------------------------------------
 * FIRESTORE
 * --------------------------------------------------
 */

export const db = getFirestore(app);



/*
 * --------------------------------------------------
 * FIREBASE STORAGE
 * --------------------------------------------------
 *
 * Used for:
 *
 * Royal Portraits
 * Profile Images
 * Kingdom Banners
 * Future Kingdom media
 */

export const storage = getStorage(app);