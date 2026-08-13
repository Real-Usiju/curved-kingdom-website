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
 * --------------------------------------------------
 * CREATE CITIZEN PROFILE
 * --------------------------------------------------
 *
 * Creates the citizen's first Kingdom profile.
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
  const citizenRef = doc(
    db,
    "users",
    uid
  );

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

    /*
     * Google portrait is used initially.
     *
     * If the citizen later chooses a custom
     * Royal Portrait, this value will be
     * replaced with the Firebase Storage URL.
     */
    profileImage: photoURL,

    /*
     * Early Citizen royal standard.
     */
    bannerImage:
      "/royal-standards/early-citizen.jpg",

    power: 0,
    citizens: 0,
    glory: 0,

    verified: false,

    createdAt: serverTimestamp(),
  };

  await setDoc(
    citizenRef,
    citizenProfile,
    {
      merge: true,
    }
  );

  return citizenProfile;
}


/**
 * --------------------------------------------------
 * GET CITIZEN PROFILE
 * --------------------------------------------------
 */
export async function getCitizenProfile(
  uid: string
): Promise<CitizenProfile | null> {
  const citizenRef = doc(
    db,
    "users",
    uid
  );

  const snapshot =
    await getDoc(citizenRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as CitizenProfile;
}


/**
 * --------------------------------------------------
 * UPDATE CITIZEN PROFILE
 * --------------------------------------------------
 *
 * Used by:
 *
 * Capital
 * → Profile
 * → Reforge My Kingdom
 */
export async function updateCitizenProfile(
  uid: string,
  data: Partial<CitizenProfile>
) {
  const citizenRef = doc(
    db,
    "users",
    uid
  );

  await updateDoc(
    citizenRef,
    {
      ...data,
      updatedAt: serverTimestamp(),
    }
  );
}


/**
 * --------------------------------------------------
 * UPLOAD ROYAL PORTRAIT
 * --------------------------------------------------
 *
 * Uploads a custom portrait to:
 *
 * Firebase Storage
 * users/{uid}/royal-portrait/
 *
 * Then returns the permanent download URL.
 */
export async function uploadRoyalPortrait(
  uid: string,
  file: File
): Promise<string> {

  /*
   * Create a unique filename.
   *
   * This prevents browser/cache issues when
   * the citizen replaces their portrait.
   */
  const extension =
    file.name.split(".").pop() ||
    "jpg";

  const fileName =
    `royal-portrait-${Date.now()}.${extension}`;

  /*
   * Firebase Storage location.
   */
  const storageRef = ref(
    storage,
    `users/${uid}/royal-portrait/${fileName}`
  );

  /*
   * Upload the actual image.
   */
  await uploadBytes(
    storageRef,
    file
  );

  /*
   * Get the permanent Firebase URL.
   */
  const downloadURL =
    await getDownloadURL(
      storageRef
    );

  /*
   * Save the URL into the citizen's
   * Firestore profile.
   */
  await updateCitizenProfile(
    uid,
    {
      profileImage:
        downloadURL,

      /*
       * Keep photoURL synchronized with
       * the chosen Royal Portrait.
       */
      photoURL:
        downloadURL,
    }
  );

  return downloadURL;
}