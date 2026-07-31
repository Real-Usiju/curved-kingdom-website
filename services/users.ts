import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function createCitizenProfile(uid: string) {
  await setDoc(doc(db, "users", uid), {
    displayName: "",
    username: "",
    phone: "",
    country: "",
    bio: "",
    photoURL: "",

    rank: "Early Citizen",
    kingdomPoints: 0,
    followers: 0,
    following: 0,

    createdAt: serverTimestamp(),
  });
}