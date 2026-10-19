
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import {
  db,
  storage,
} from "../../lib/firebase";

export type CitizenProfile = {
  uid: string;
  fullName: string;
  email: string;
  photoURL: string;

  kingdomName: string;
  alias: string;
  royalRank: string;

  motto: string;
  alliance: string;
  biography: string;

  profileImage: string;
  bannerImage: string;

  power: number;
  citizens: number;
  glory: number;

  verified: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
};

/**
 * CREATE OR UPDATE CITIZEN PROFILE
 *
 * Preserves existing Power, Citizens, Glory,
 * verification status, and creation date when
 * the citizen already has a profile.
 */
export async function createCitizenProfile(
  uid: string,
  fullName: string,
  email: string,
  photoURL: string,
  kingdomName: string,
  alias: string,
  royalRank: string,
  motto: string,
  alliance: string,
  biography: string
) {
  const citizenRef = doc(db, "users", uid);
  const existingSnapshot = await getDoc(citizenRef);

  if (existingSnapshot.exists()) {
    const existing = existingSnapshot.data();

    const updates: Partial<CitizenProfile> = {
      uid,
      fullName,
      email,
      kingdomName,
      alias,
      royalRank,
      motto,
      alliance,
      biography,
    };

    if (!existing.profileImage && photoURL) {
      updates.profileImage = photoURL;
    }

    if (!existing.photoURL && photoURL) {
      updates.photoURL = photoURL;
    }

    if (!existing.bannerImage) {
      updates.bannerImage =
        "/royal-standards/kingdom-lord.jpg";
    }

    await setDoc(
      citizenRef,
      {
        ...updates,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    return {
      ...existing,
      ...updates,
    };
  }

  const citizenProfile: CitizenProfile = {
    uid,
    fullName,
    email,
    photoURL,

    kingdomName,
    alias,
    royalRank,

    motto,
    alliance,
    biography,

    profileImage: photoURL,

    bannerImage:
      "/royal-standards/kingdom-lord.jpg",

    power: 0,
    citizens: 0,
    glory: 0,

    verified: false,

    createdAt: serverTimestamp(),
  };

  await setDoc(
    citizenRef,
    citizenProfile,
    { merge: true }
  );

  return citizenProfile;
}

/**
 * GET CITIZEN PROFILE
 */
export async function getCitizenProfile(
  uid: string
): Promise<CitizenProfile | null> {
  const citizenRef = doc(db, "users", uid);
  const snapshot = await getDoc(citizenRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as CitizenProfile;
}

/**
 * UPDATE CITIZEN PROFILE
 */
export async function updateCitizenProfile(
  uid: string,
  data: Partial<CitizenProfile>
) {
  const citizenRef = doc(db, "users", uid);

  await updateDoc(citizenRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

/**
 * UPLOAD ROYAL PORTRAIT
 *
 * Uploads the portrait to Firebase Storage
 * and synchronizes profileImage and photoURL.
 */
export async function uploadRoyalPortrait(
  uid: string,
  file: File
): Promise<string> {
  const extension =
    file.name.split(".").pop() || "jpg";

  const fileName =
    `royal-portrait-${Date.now()}.${extension}`;

  const storageRef = ref(
    storage,
    `users/${uid}/royal-portrait/${fileName}`
  );

  await uploadBytes(storageRef, file);

  const downloadURL =
    await getDownloadURL(storageRef);

  await updateCitizenProfile(uid, {
    profileImage: downloadURL,
    photoURL: downloadURL,
  });

  return downloadURL;
}

