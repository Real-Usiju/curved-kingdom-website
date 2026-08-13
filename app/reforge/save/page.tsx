"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { auth, storage } from "../../../lib/firebase";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { createCitizenProfile } from "../../services/user";

import RoyalPortrait from "../components/RoyalPortrait";

export default function SaveRoyalIdentityPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const role =
    searchParams.get("role") || "";

  const motto =
    searchParams.get("motto") || "";

  const alliance =
    searchParams.get("alliance") || "";

  const kingdom =
    searchParams.get("kingdom") || "";

  const alias =
    searchParams.get("alias") || "";

  const biography =
    searchParams.get("biography") || "";

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  /*
   * --------------------------------------------------
   * SELECTED ROYAL PORTRAIT FILE
   * --------------------------------------------------
   *
   * This stores the actual image file selected
   * by the citizen.
   *
   * It will be uploaded to Firebase Storage
   * when SAVE ROYAL IDENTITY is pressed.
   */

  const [
    selectedPortraitFile,
    setSelectedPortraitFile,
  ] = useState<File | undefined>(undefined);

  /*
   * --------------------------------------------------
   * SELECTED PORTRAIT PREVIEW
   * --------------------------------------------------
   */

  const [
    selectedPortrait,
    setSelectedPortrait,
  ] = useState(
    auth.currentUser?.photoURL || ""
  );

  /*
   * --------------------------------------------------
   * SAVE ROYAL IDENTITY
   * --------------------------------------------------
   */

  const saveIdentity = async () => {
    try {
      setLoading(true);
      setError("");

      const currentUser = auth.currentUser;

      /*
       * Make sure the citizen is authenticated.
       */

      if (!currentUser) {
        setError(
          "Your Royal identity could not be connected. Please enter again."
        );

        return;
      }

      /*
       * --------------------------------------------------
       * ROYAL PORTRAIT
       * --------------------------------------------------
       *
       * If the citizen selected a custom portrait,
       * upload that actual file to Firebase Storage.
       *
       * Otherwise use the Google profile photo.
       */

      let profileImage =
        currentUser.photoURL || "";

      if (selectedPortraitFile) {
        /*
         * Create a unique location for this
         * citizen's Royal Portrait.
         */

        const fileExtension =
          selectedPortraitFile.name
            .split(".")
            .pop() || "jpg";

        const portraitPath =
          `users/${currentUser.uid}/royal-portrait-${Date.now()}.${fileExtension}`;

        const portraitRef =
          ref(storage, portraitPath);

        /*
         * Upload the actual image file.
         */

        await uploadBytes(
          portraitRef,
          selectedPortraitFile
        );

        /*
         * Get the permanent Firebase Storage URL.
         */

        profileImage =
          await getDownloadURL(
            portraitRef
          );

        console.log(
          "ROYAL PORTRAIT UPLOADED SUCCESSFULLY"
        );
      }

      /*
       * --------------------------------------------------
       * ESTABLISH CITIZEN PROFILE
       * --------------------------------------------------
       */

      await createCitizenProfile(
        currentUser.uid,
        currentUser.displayName ?? "Citizen",
        currentUser.email ?? "",
        profileImage,
        kingdom,
        alias,
        role,
        motto,
        alliance,
        biography
      );

      console.log(
        "ROYAL IDENTITY SAVED SUCCESSFULLY"
      );

      /*
       * --------------------------------------------------
       * ENTER PALACE
       * --------------------------------------------------
       */

      router.push("/palace");

    } catch (error) {
      console.error(
        "Royal Identity save error:",
        error
      );

      setError(
        "The Kingdom could not establish your identity. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">

      <div className="w-full max-w-md">

        <div className="rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* --------------------------------------------------
              ROYAL FOUNDATION
              -------------------------------------------------- */}

          <p className="text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Royal Foundation
          </p>

          <h1 className="mt-5 text-3xl font-black text-white sm:text-4xl">
            Establish Your Kingdom
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Your Royal Identity is ready.
            Once established, your Kingdom will
            enter Curved Kingdom.
          </p>


          {/* --------------------------------------------------
              ROYAL PORTRAIT
              -------------------------------------------------- */}

          <RoyalPortrait
            googlePhotoURL={
              auth.currentUser?.photoURL || ""
            }
            displayName={
              auth.currentUser?.displayName ||
              "Citizen"
            }
            onPortraitChange={(
              photoURL,
              file
            ) => {
              setSelectedPortrait(
                photoURL
              );

              setSelectedPortraitFile(
                file
              );
            }}
          />


          {/* --------------------------------------------------
              ROYAL IDENTITY SUMMARY
              -------------------------------------------------- */}

          <div className="mt-8 rounded-2xl border border-yellow-500/10 bg-yellow-400/5 p-5 text-left">

            <p className="text-xs uppercase tracking-widest text-gray-600">
              Kingdom
            </p>

            <p className="mt-2 text-xl font-bold text-yellow-400">
              {kingdom}
            </p>


            <p className="mt-5 text-xs uppercase tracking-widest text-gray-600">
              Royal Alias
            </p>

            <p className="mt-2 font-bold text-white">
              {alias}
            </p>


            <p className="mt-5 text-xs uppercase tracking-widest text-gray-600">
              Royal Rank
            </p>

            <p className="mt-2 font-bold text-white">
              {role}
            </p>

          </div>


          {/* --------------------------------------------------
              ROYAL VOICE
              -------------------------------------------------- */}

          <div className="mt-4 rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-5 text-left">

            <p className="text-xs uppercase tracking-widest text-gray-600">
              Royal Voice
            </p>

            <div className="mt-4 space-y-4">

              {/* Motto */}

              <div>
                <p className="text-xs text-gray-600">
                  Royal Motto
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {motto}
                </p>
              </div>


              {/* Alliance */}

              <div>
                <p className="text-xs text-gray-600">
                  Alliance
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {alliance}
                </p>
              </div>


              {/* Biography */}

              <div>
                <p className="text-xs text-gray-600">
                  Royal Biography
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-300">
                  {biography}
                </p>
              </div>

            </div>

          </div>


          {/* --------------------------------------------------
              SAVE ROYAL IDENTITY
              -------------------------------------------------- */}

          <button
            type="button"
            disabled={loading}
            onClick={saveIdentity}
            className="mt-8 w-full rounded-2xl bg-yellow-400 py-4 font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Establishing Kingdom..."
              : "SAVE ROYAL IDENTITY"}
          </button>


          {/* --------------------------------------------------
              ERROR
              -------------------------------------------------- */}

          {error && (
            <p className="mt-5 text-sm text-red-400">
              {error}
            </p>
          )}


          {/* --------------------------------------------------
              FOOTER
              -------------------------------------------------- */}

          <p className="mt-6 text-xs leading-6 text-gray-600">
            Your journey as an Early Citizen begins here.
          </p>

        </div>

      </div>

    </main>
  );
}