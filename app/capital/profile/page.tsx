"use client";

import { useEffect, useState } from "react";

import {
  Crown,
  Save,
  UserRound,
  ScrollText,
  Shield,
  BookOpen,
  Trophy,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { onAuthStateChanged } from "firebase/auth";

import ProtectedApp from "../../components/ProtectedApp";
import RoyalNavigation from "../../components/RoyalNavigation";
import RoyalPortrait from "../profile/components/RoyalPortrait";

import { auth } from "../../../lib/firebase";

import {
  CitizenProfile,
  getCitizenProfile,
  updateCitizenProfile,
  uploadRoyalPortrait,
} from "../../services/user";


/*
|--------------------------------------------------------------------------
| ROYAL MOTTOS
|--------------------------------------------------------------------------
*/

const mottos = [
  {
    title: "Built for Greatness",
    description:
      "A Kingdom founded to pursue greatness with purpose.",
  },
  {
    title: "Wisdom. Power. Legacy.",
    description:
      "A path guided by wisdom, strengthened by power, and built for legacy.",
  },
  {
    title: "Rise Beyond Limits",
    description:
      "A Kingdom determined to rise beyond every limitation.",
  },
  {
    title: "United by Purpose",
    description:
      "Different identities, one Kingdom, one greater purpose.",
  },
  {
    title: "Courage Creates Legacy",
    description:
      "Every bold step today becomes part of tomorrow's legacy.",
  },
];


/*
|--------------------------------------------------------------------------
| ROYAL ALLIANCES
|--------------------------------------------------------------------------
*/

const alliances = [
  {
    title: "House of Wisdom",
    description:
      "For Kingdoms guided by knowledge, wisdom, and understanding.",
  },
  {
    title: "House of Valor",
    description:
      "For Kingdoms built upon courage, strength, and determination.",
  },
  {
    title: "House of Legacy",
    description:
      "For Kingdoms focused on building something that will endure.",
  },
  {
    title: "House of Unity",
    description:
      "For Kingdoms that value cooperation, loyalty, and togetherness.",
  },
];


/*
|--------------------------------------------------------------------------
| PROFILE
|--------------------------------------------------------------------------
*/

export default function ProfilePage() {

  const [citizen, setCitizen] =
    useState<CitizenProfile | null>(null);

  const [kingdomName, setKingdomName] =
    useState("");

  const [alias, setAlias] =
    useState("");

  const [motto, setMotto] =
    useState("");

  const [alliance, setAlliance] =
    useState("");

  const [biography, setBiography] =
    useState("");

  /*
   * Selected custom Royal Portrait.
   *
   * This is the actual File object that will
   * be uploaded to Firebase Storage.
   */
  const [selectedPortraitFile, setSelectedPortraitFile] =
    useState<File | undefined>(undefined);

  const [saving, setSaving] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const [mottoOpen, setMottoOpen] =
    useState(false);

  const [allianceOpen, setAllianceOpen] =
    useState(false);


  /*
  |--------------------------------------------------------------------------
  | LOAD CITIZEN PROFILE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (currentUser) => {

          if (!currentUser) {
            setCitizen(null);
            return;
          }

          try {

            const profile =
              await getCitizenProfile(
                currentUser.uid
              );

            if (profile) {

              setCitizen(profile);

              setKingdomName(
                profile.kingdomName || ""
              );

              setAlias(
                profile.alias || ""
              );

              setMotto(
                profile.motto || ""
              );

              setAlliance(
                profile.alliance || ""
              );

              setBiography(
                profile.biography || ""
              );
            }

          } catch (error) {

            console.error(
              "Reforge My Kingdom error:",
              error
            );

          }

        }
      );

    return () => unsubscribe();

  }, []);


  /*
  |--------------------------------------------------------------------------
  | SAVE ROYAL IDENTITY
  |--------------------------------------------------------------------------
  */

  const saveRoyalIdentity = async () => {

    if (!citizen) return;

    try {

      setSaving(true);
      setSaved(false);


      /*
       * --------------------------------------------------
       * SAVE ROYAL IDENTITY
       * --------------------------------------------------
       */

      await updateCitizenProfile(
        citizen.uid,
        {
          kingdomName,
          alias,
          motto,
          alliance,
          biography,
        }
      );


      /*
       * --------------------------------------------------
       * ROYAL PORTRAIT
       * --------------------------------------------------
       *
       * Only upload a portrait when the citizen
       * actually selected a new image.
       */

      let updatedProfileImage =
        citizen.profileImage ||
        citizen.photoURL ||
        "";


      if (selectedPortraitFile) {

        updatedProfileImage =
          await uploadRoyalPortrait(
            citizen.uid,
            selectedPortraitFile
          );

      }


      /*
       * --------------------------------------------------
       * UPDATE LOCAL PROFILE
       * --------------------------------------------------
       */

      setCitizen({

        ...citizen,

        kingdomName,
        alias,
        motto,
        alliance,
        biography,

        profileImage:
          updatedProfileImage,

        photoURL:
          updatedProfileImage,

      });


      /*
       * Clear selected file after successful
       * upload.
       */

      setSelectedPortraitFile(
        undefined
      );


      /*
       * Success message.
       */

      setSaved(true);

      setTimeout(() => {

        setSaved(false);

      }, 2500);


    } catch (error) {

      console.error(
        "Failed to reforge Royal Identity:",
        error
      );

    } finally {

      setSaving(false);

    }

  };


  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (!citizen) {

    return (

      <ProtectedApp>

        <main className="min-h-screen bg-black text-white">

          <div className="flex min-h-screen items-center justify-center px-5">

            <div className="text-center">

              <p className="text-xs font-semibold uppercase tracking-[4px] text-yellow-400">
                Capital
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Entering the Reforge Chamber...
              </p>

            </div>

          </div>

          <RoyalNavigation />

        </main>

      </ProtectedApp>

    );

  }


  /*
  |--------------------------------------------------------------------------
  | PAGE
  |--------------------------------------------------------------------------
  */

  return (

    <ProtectedApp>

      <main className="min-h-screen bg-black pb-28 text-white">

        <div className="mx-auto w-full max-w-md px-4">


          {/* ==================================================
              HEADER
              ================================================== */}

          <section className="pt-7">

            <button
              type="button"
              onClick={() =>
                window.history.back()
              }
              className="mb-5 text-xs text-gray-500 transition active:text-yellow-400"
            >
              ← Capital
            </button>


            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-yellow-400">
              Capital
            </p>


            <h1 className="mt-1 text-3xl font-black tracking-tight">
              Reforge My Kingdom
            </h1>


            <p className="mt-1.5 text-xs leading-5 text-gray-500">
              Shape the identity your Kingdom
              presents to the world.
            </p>

          </section>


          {/* ==================================================
              ROYAL PORTRAIT
              ================================================== */}

          <RoyalPortrait

            googlePhotoURL={
              citizen.profileImage ||
              citizen.photoURL ||
              ""
            }

            displayName={
              citizen.alias ||
              citizen.fullName ||
              "Citizen"
            }

            onPortraitChange={(
              _photoURL: string | null,
              file: File | null | undefined
            ) => {

              setSelectedPortraitFile(
                file ?? undefined
              );

            }}

          />


          {/* ==================================================
              KINGDOM IDENTITY
              ================================================== */}

          <section className="mt-7">

            <div className="mb-4 flex items-center gap-3">

              <div className="h-px flex-1 bg-yellow-500/15" />

              <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[2.5px] text-yellow-400">
                Kingdom Identity
              </p>

              <div className="h-px flex-1 bg-yellow-500/15" />

            </div>


            <div className="space-y-4">


              {/* KINGDOM NAME */}

              <div>

                <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Kingdom Name
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-yellow-500/10 bg-white/2.5 px-4 py-3">

                  <Crown
                    size={17}
                    className="shrink-0 text-yellow-400"
                  />

                  <input
                    type="text"
                    value={kingdomName}
                    onChange={(e) =>
                      setKingdomName(
                        e.target.value
                      )
                    }
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-700"
                    placeholder="Enter Kingdom Name"
                  />

                </div>

              </div>


              {/* ROYAL ALIAS */}

              <div>

                <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Royal Alias
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-yellow-500/10 bg-white/2.5 px-4 py-3">

                  <UserRound
                    size={17}
                    className="shrink-0 text-yellow-400"
                  />

                  <input
                    type="text"
                    value={alias}
                    onChange={(e) =>
                      setAlias(
                        e.target.value
                      )
                    }
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-700"
                    placeholder="Enter Royal Alias"
                  />

                </div>

              </div>


              {/* ROYAL RANK */}

              <div>

                <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Royal Rank
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-yellow-500/10 bg-white/2.5 px-4 py-3">

                  <Shield
                    size={17}
                    className="shrink-0 text-yellow-400"
                  />

                  <p className="text-sm text-gray-400">
                    {citizen.royalRank ||
                      "Early Citizen"}
                  </p>

                </div>

                <p className="mt-1.5 text-[10px] text-gray-700">
                  Royal Rank is earned through
                  Kingdom progression.
                </p>

              </div>

            </div>

          </section>


          {/* ==================================================
              ROYAL VOICE
              ================================================== */}

          <section className="mt-8">

            <div className="mb-4 flex items-center gap-3">

              <div className="h-px flex-1 bg-yellow-500/15" />

              <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[2.5px] text-yellow-400">
                Royal Voice
              </p>

              <div className="h-px flex-1 bg-yellow-500/15" />

            </div>


            <div className="space-y-4">


              {/* ==================================================
                  ROYAL MOTTO
                  ================================================== */}

              <div>

                <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Royal Motto
                </label>


                <button
                  type="button"
                  onClick={() => {

                    setMottoOpen(
                      !mottoOpen
                    );

                    setAllianceOpen(
                      false
                    );

                  }}
                  className="flex w-full items-center justify-between gap-3 rounded-xl border border-yellow-500/10 bg-white/2.5 px-4 py-3 text-left transition active:border-yellow-400/40"
                >

                  <div className="flex min-w-0 items-center gap-3">

                    <ScrollText
                      size={17}
                      className="shrink-0 text-yellow-400"
                    />

                    <p
                      className={`truncate text-sm ${
                        motto
                          ? "font-semibold text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {motto ||
                        "Choose Royal Motto"}
                    </p>

                  </div>


                  {mottoOpen ? (

                    <ChevronUp
                      size={17}
                      className="shrink-0 text-yellow-400"
                    />

                  ) : (

                    <ChevronDown
                      size={17}
                      className="shrink-0 text-gray-600"
                    />

                  )}

                </button>


                {mottoOpen && (

                  <div className="mt-3 space-y-2">

                    {mottos.map(
                      (item) => {

                        const selected =
                          motto ===
                          item.title;

                        return (

                          <button
                            key={
                              item.title
                            }
                            type="button"
                            onClick={() => {

                              setMotto(
                                item.title
                              );

                              setMottoOpen(
                                false
                              );

                            }}
                            className={`w-full rounded-xl border p-4 text-left transition ${
                              selected
                                ? "border-yellow-400 bg-yellow-400/10"
                                : "border-yellow-500/10 bg-white/2.5 active:border-yellow-400/40"
                            }`}
                          >

                            <div className="flex items-center justify-between gap-3">

                              <p
                                className={`text-sm font-bold ${
                                  selected
                                    ? "text-yellow-400"
                                    : "text-white"
                                }`}
                              >
                                {
                                  item.title
                                }
                              </p>


                              {selected && (

                                <Check
                                  size={17}
                                  className="shrink-0 text-yellow-400"
                                />

                              )}

                            </div>


                            <p className="mt-1 text-[11px] leading-5 text-gray-500">
                              {
                                item.description
                              }
                            </p>

                          </button>

                        );

                      }
                    )}

                  </div>

                )}

              </div>


              {/* ==================================================
                  ALLIANCE
                  ================================================== */}

              <div>

                <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Alliance
                </label>


                <button
                  type="button"
                  onClick={() => {

                    setAllianceOpen(
                      !allianceOpen
                    );

                    setMottoOpen(
                      false
                    );

                  }}
                  className="flex w-full items-center justify-between gap-3 rounded-xl border border-yellow-500/10 bg-white/2.5 px-4 py-3 text-left transition active:border-yellow-400/40"
                >

                  <div className="flex min-w-0 items-center gap-3">

                    <Crown
                      size={17}
                      className="shrink-0 text-yellow-400"
                    />

                    <p
                      className={`truncate text-sm ${
                        alliance
                          ? "font-semibold text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {alliance ||
                        "Choose Alliance"}
                    </p>

                  </div>


                  {allianceOpen ? (

                    <ChevronUp
                      size={17}
                      className="shrink-0 text-yellow-400"
                    />

                  ) : (

                    <ChevronDown
                      size={17}
                      className="shrink-0 text-gray-600"
                    />

                  )}

                </button>


                {allianceOpen && (

                  <div className="mt-3 space-y-2">

                    {alliances.map(
                      (item) => {

                        const selected =
                          alliance ===
                          item.title;

                        return (

                          <button
                            key={
                              item.title
                            }
                            type="button"
                            onClick={() => {

                              setAlliance(
                                item.title
                              );

                              setAllianceOpen(
                                false
                              );

                            }}
                            className={`w-full rounded-xl border p-4 text-left transition ${
                              selected
                                ? "border-yellow-400 bg-yellow-400/10"
                                : "border-yellow-500/10 bg-white/2.5 active:border-yellow-400/40"
                            }`}
                          >

                            <div className="flex items-center justify-between gap-3">

                              <p
                                className={`text-sm font-bold ${
                                  selected
                                    ? "text-yellow-400"
                                    : "text-white"
                                }`}
                              >
                                {
                                  item.title
                                }
                              </p>


                              {selected && (

                                <Check
                                  size={17}
                                  className="shrink-0 text-yellow-400"
                                />

                              )}

                            </div>


                            <p className="mt-1 text-[11px] leading-5 text-gray-500">
                              {
                                item.description
                              }
                            </p>

                          </button>

                        );

                      }
                    )}

                  </div>

                )}

              </div>


              {/* ==================================================
                  BIOGRAPHY
                  ================================================== */}

              <div>

                <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Biography
                </label>


                <div className="flex items-start gap-3 rounded-xl border border-yellow-500/10 bg-white/2.5 px-4 py-3">

                  <BookOpen
                    size={17}
                    className="mt-0.5 shrink-0 text-yellow-400"
                  />


                  <textarea
                    value={biography}
                    onChange={(e) =>
                      setBiography(
                        e.target.value
                      )
                    }
                    rows={5}
                    className="w-full resize-none bg-transparent text-sm leading-5 text-white outline-none placeholder:text-gray-700"
                    placeholder="Tell the Kingdom about your journey..."
                  />

                </div>

              </div>

            </div>

          </section>


          {/* ==================================================
              ROYAL LEGACY
              ================================================== */}

          <section className="mt-8">

            <div className="mb-4 flex items-center gap-3">

              <div className="h-px flex-1 bg-yellow-500/15" />

              <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[2.5px] text-yellow-400">
                Royal Legacy
              </p>

              <div className="h-px flex-1 bg-yellow-500/15" />

            </div>


            <div className="grid grid-cols-2 gap-3">


              {/* ROYAL ACHIEVEMENTS */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/2.5 p-4">

                <Trophy
                  size={20}
                  className="text-yellow-400"
                />

                <p className="mt-3 text-sm font-bold">
                  Royal Achievements
                </p>

                <p className="mt-1 text-[10px] leading-4 text-gray-600">
                  Your achievements will
                  appear here as your Kingdom
                  journey grows.
                </p>

              </div>


              {/* GLORY */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/2.5 p-4">

                <Trophy
                  size={20}
                  className="text-yellow-400"
                />

                <p className="mt-3 text-xl font-black">
                  {citizen.glory ?? 0}
                </p>

                <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-gray-600">
                  Glory
                </p>

              </div>

            </div>

          </section>


          {/* ==================================================
              SAVE
              ================================================== */}

          <section className="mt-8">

            <button
              type="button"
              onClick={
                saveRoyalIdentity
              }
              disabled={saving}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-yellow-400/30
                bg-yellow-400/8
                px-4
                py-3.5
                text-sm
                font-bold
                text-yellow-400
                transition
                active:scale-[0.98]
                disabled:opacity-50
              "
            >

              <Save size={17} />

              {saving
                ? "Reforging..."
                : saved
                ? "Royal Identity Reforged"
                : "Save Royal Identity"}

            </button>

          </section>


          {/* ==================================================
              FOOTER
              ================================================== */}

          <div className="pb-5 pt-8 text-center">

            <p className="text-[9px] uppercase tracking-[2px] text-gray-700">
              Reforge your identity.
              Shape your Kingdom.
            </p>

          </div>

        </div>


        {/* BOTTOM NAVIGATION */}

        <RoyalNavigation />

      </main>

    </ProtectedApp>

  );

}