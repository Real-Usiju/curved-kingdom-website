import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

import { db } from "./firebase";

/*
|--------------------------------------------------------------------------
| Join a Kingdom
|--------------------------------------------------------------------------
*/

export async function joinKingdom(
  myUid: string,
  kingdomUid: string
) {
  if (myUid === kingdomUid) return;

  // I become a citizen of another Kingdom
  await setDoc(
    doc(db, "users", kingdomUid, "citizens", myUid),
    {
      uid: myUid,
      joinedAt: Date.now(),
    }
  );

  // Save the Kingdom I joined
  await setDoc(
    doc(db, "users", myUid, "alliances", kingdomUid),
    {
      uid: kingdomUid,
      joinedAt: Date.now(),
    }
  );
}

/*
|--------------------------------------------------------------------------
| Leave a Kingdom
|--------------------------------------------------------------------------
*/

export async function leaveKingdom(
  myUid: string,
  kingdomUid: string
) {
  await deleteDoc(
    doc(db, "users", kingdomUid, "citizens", myUid)
  );

  await deleteDoc(
    doc(db, "users", myUid, "alliances", kingdomUid)
  );
}

/*
|--------------------------------------------------------------------------
| Check if already a Citizen
|--------------------------------------------------------------------------
*/

export async function isCitizen(
  myUid: string,
  kingdomUid: string
) {
  const snapshot = await getDoc(
    doc(db, "users", kingdomUid, "citizens", myUid)
  );

  return snapshot.exists();
}

/*
|--------------------------------------------------------------------------
| Count Citizens
|--------------------------------------------------------------------------
*/

export async function getCitizenCount(uid: string) {
  const snapshot = await getDocs(
    collection(db, "users", uid, "citizens")
  );

  return snapshot.size;
}

/*
|--------------------------------------------------------------------------
| Count Allied Kingdoms
|--------------------------------------------------------------------------
*/

export async function getAllianceCount(uid: string) {
  const snapshot = await getDocs(
    collection(db, "users", uid, "alliances")
  );

  return snapshot.size;
}