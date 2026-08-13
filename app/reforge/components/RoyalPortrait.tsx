"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type RoyalPortraitProps = {
  googlePhotoURL: string;
  displayName: string;
  onPortraitChange?: (
    photoURL: string,
    file?: File
  ) => void;
};

export default function RoyalPortrait({
  googlePhotoURL,
  displayName,
  onPortraitChange,
}: RoyalPortraitProps) {
  const [selectedPhoto, setSelectedPhoto] =
    useState(googlePhotoURL);

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const handlePhotoSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    /*
     * Make sure the selected file is an image.
     */

    if (!file.type.startsWith("image/")) {
      return;
    }

    /*
     * Limit portrait size to 5MB.
     */

    if (file.size > 5 * 1024 * 1024) {
      alert(
        "Your Royal Portrait must be smaller than 5MB."
      );

      return;
    }

    /*
     * Create a temporary preview.
     *
     * This is only for the screen.
     * The real file will be uploaded to
     * Firebase Storage when the citizen
     * saves the Royal Identity.
     */

    const previewURL =
      URL.createObjectURL(file);

    setSelectedPhoto(previewURL);

    onPortraitChange?.(
      previewURL,
      file
    );
  };

  const initials =
    displayName
      ?.trim()
      .charAt(0)
      .toUpperCase() || "C";

  return (
    <div className="mt-8">

      {/* --------------------------------------------------
          ROYAL PORTRAIT HEADING
          -------------------------------------------------- */}

      <p className="text-xs font-semibold uppercase tracking-[4px] text-yellow-400">
        Royal Portrait
      </p>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        This portrait represents you within
        the Kingdom.
      </p>


      {/* --------------------------------------------------
          PORTRAIT
          -------------------------------------------------- */}

      <div className="mt-6 flex justify-center">

        {selectedPhoto ? (
          <div className="relative">

            <Image
              src={selectedPhoto}
              alt={
                displayName ||
                "Royal Portrait"
              }
              width={120}
              height={120}
              unoptimized
              className="h-28 w-28 rounded-full border-2 border-yellow-400/60 object-cover shadow-[0_0_35px_rgba(234,179,8,.18)]"
            />

          </div>
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-yellow-400/30 bg-yellow-400/10 shadow-[0_0_35px_rgba(234,179,8,.10)]">

            <span className="text-4xl font-black text-yellow-400">
              {initials}
            </span>

          </div>
        )}

      </div>


      {/* --------------------------------------------------
          NAME
          -------------------------------------------------- */}

      <h2 className="mt-4 text-center text-xl font-bold text-white">
        {displayName || "Citizen"}
      </h2>


      {/* --------------------------------------------------
          FILE INPUT
          -------------------------------------------------- */}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handlePhotoSelect}
        className="hidden"
      />


      {/* --------------------------------------------------
          CHOOSE PORTRAIT
          -------------------------------------------------- */}

      <button
        type="button"
        onClick={() =>
          fileInputRef.current?.click()
        }
        className="mx-auto mt-5 block rounded-xl border border-yellow-500/30 bg-transparent px-5 py-3 text-sm font-bold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400/10"
      >
        {selectedPhoto
          ? "Change Royal Portrait"
          : "Choose Royal Portrait"}
      </button>


      {/* --------------------------------------------------
          INFORMATION
          -------------------------------------------------- */}

      <p className="mt-3 text-center text-xs leading-5 text-gray-600">
        You may use your Google portrait or
        choose another portrait for your
        Royal Identity.
      </p>

    </div>
  );
}