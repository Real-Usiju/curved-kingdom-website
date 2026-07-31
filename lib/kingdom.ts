import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { KingdomProfile } from "@/types/kingdom";

export async function getKingdomProfile(
  uid: string
): Promise<KingdomProfile | null> {
  try {
    console.log("Looking for UID:", uid);

    const ref = doc(db, "users", uid);
    const snapshot = await getDoc(ref);

    console.log("Document exists:", snapshot.exists());

    if (!snapshot.exists()) {
      return null;
    }

    return snapshot.data() as KingdomProfile;
  } catch (error) {
    console.error("Failed to load kingdom profile:", error);
    return null;
  }
}

/* NEW FUNCTION */

export async function updateKingdomProfile(
  uid: string,
  data: Partial<KingdomProfile>
) {
  try {
    const ref = doc(db, "users", uid);

    await updateDoc(ref, data);

    return true;
  } catch (error) {
    console.error("Failed to update kingdom profile:", error);
    throw error;
  }
}