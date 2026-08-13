"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import {
  auth,
  googleProvider,
  authPersistence,
} from "../../lib/firebase";

import { createCitizenProfile } from "../services/user";

type GoogleIdentity = {
  displayName: string;
  email: string;
  photoURL: string;
};

type RoyalRole = {
  name: string;
  description: string;
};

export default function RegisterPage() {
  const router = useRouter();

  const [user, setUser] = useState<GoogleIdentity | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [showRoleSelection, setShowRoleSelection] =
    useState(false);

  const [selectedRole, setSelectedRole] =
    useState("");

  const [showMottoSelection, setShowMottoSelection] = useState(false);

  const [selectedMotto, setSelectedMotto] = useState("");

  const [showAllianceSelection, setShowAllianceSelection] =
  useState(false);

  const [selectedAlliance, setSelectedAlliance] =
  useState("");
  const [showKingdomName, setShowKingdomName] = useState(false);

  const [kingdomName, setKingdomName] = useState("");

  const [showAliasSelection, setShowAliasSelection] = useState(false);

  const [royalAlias, setRoyalAlias] = useState("");
  
  const [showBiography, setShowBiography] = useState(false);

  const [biography, setBiography] = useState("");

  const [showIdentityReview, setShowIdentityReview] = useState(false);



  /*
   * --------------------------------------------------
   * CHECK GOOGLE REDIRECT
   * --------------------------------------------------
   */

  useEffect(() => {
    const checkGoogleRedirect = async () => {
      try {
        setError("");

        await authPersistence;

        const result = await getRedirectResult(auth);

        if (result?.user) {
          setUser({
            displayName: result.user.displayName ?? "",
            email: result.user.email ?? "",
            photoURL: result.user.photoURL ?? "",
          });
        }
      } catch (error) {
        console.error(
          "Google redirect error:",
          error
        );

        setError(
          "The Kingdom could not complete your entrance. Please try again."
        );
      }
    };

    checkGoogleRedirect();
  }, []);

  /*
   * --------------------------------------------------
   * GOOGLE ENTRANCE
   * --------------------------------------------------
   */

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError("");

      /*
       * Make sure Firebase authentication persistence
       * is ready.
      

      /*
       * First try Google popup.
       */
      try {
        const result = await signInWithPopup(
          auth,
          googleProvider
        );

        setUser({
          displayName: result.user.displayName ?? "",
          email: result.user.email ?? "",
          photoURL: result.user.photoURL ?? "",
        });

        setLoading(false);

        return;
      } catch (popupError: unknown) {
        console.warn(
          "Google popup could not open. Switching to redirect.",
          popupError
        );

        const firebaseError = popupError as {
          code?: string;
        };

        /*
         * If popup is blocked or closed,
         * use redirect authentication.
         */
        if (
          firebaseError.code ===
            "auth/popup-blocked" ||
          firebaseError.code ===
            "auth/popup-closed-by-user" ||
          firebaseError.code ===
            "auth/cancelled-popup-request"
        ) {
          await signInWithRedirect(
            auth,
            googleProvider
          );

          return;
        }

        throw popupError;
      }
    } catch (error) {
      console.error(
        "Google sign-in error:",
        error
      );

      setError(
        "The Kingdom could not complete your entrance. Please try again."
      );

      setLoading(false);
    }
  };

  /*
   * --------------------------------------------------
   * ROYAL ROLE SELECTION
   * --------------------------------------------------
   */

  if (showRoleSelection && user) {
    const roles: RoyalRole[] = [
      {
        name: "King",
        description:
          "Lead with vision, authority, and responsibility.",
      },
      {
        name: "Queen",
        description:
          "Lead with wisdom, strength, and royal grace.",
      },
      {
        name: "Prince",
        description:
          "Grow in leadership and prepare for greater influence.",
      },
      {
        name: "Princess",
        description:
          "Carry vision, creativity, and royal purpose.",
      },
    ];

    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
        <div className="w-full max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

            {/* Logo */}

            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="Curved Kingdom"
                width={75}
                height={75}
                priority
              />
            </div>

            {/* Heading */}

            <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
              Royal Creation
            </p>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Choose Your Royal Role
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Your identity begins with the role
              you choose to carry within the
              Kingdom.
            </p>

            {/* Roles */}

            <div className="mt-8 space-y-3 text-left">
              {roles.map((role) => {
                const selected =
                  selectedRole === role.name;

                return (
                  <button
                    key={role.name}
                    type="button"
                    onClick={() =>
                      setSelectedRole(role.name)
                    }
                    className={`w-full rounded-2xl border p-5 text-left transition ${
                      selected
                        ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_25px_rgba(234,179,8,.10)]"
                        : "border-yellow-500/15 bg-white/2.5 hover:border-yellow-400/40 hover:bg-yellow-400/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h2
                        className={`text-xl font-bold ${
                          selected
                            ? "text-yellow-400"
                            : "text-white"
                        }`}
                      >
                        {role.name}
                      </h2>

                      {selected && (
                        <span className="text-sm font-bold text-yellow-400">
                          Selected
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {role.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Continue */}

            <button
              type="button"
              disabled={!selectedRole || loading}
             onClick={() => {
              if (!selectedRole) return;

               console.log("Selected royal role:", selectedRole);

               setShowMottoSelection(true);
               setShowRoleSelection(false);
            }}
              className="mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue with{" "}
              {selectedRole || "Your Role"}
            </button>

            <p className="mt-6 text-xs leading-6 text-gray-600">
              Your role is only the first step of
              your Royal Identity.
            </p>
          </div>
        </div>
      </main>
    );
  }

  /*
 * --------------------------------------------------
 * ROYAL MOTTO SELECTION
 * --------------------------------------------------
 */

if (showMottoSelection && user) {
  const mottos = [
    {
      title: "Built for Greatness",
      description: "A Kingdom founded to pursue greatness with purpose.",
    },
    {
      title: "Wisdom. Power. Legacy.",
      description: "A path guided by wisdom, strengthened by power, and built for legacy.",
    },
    {
      title: "Rise Beyond Limits",
      description: "A Kingdom determined to rise beyond every limitation.",
    },
    {
      title: "United by Purpose",
      description: "Different identities, one Kingdom, one greater purpose.",
    },
    {
      title: "Courage Creates Legacy",
      description: "Every bold step today becomes part of tomorrow's legacy.",
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-md">

        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* Logo */}

          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Curved Kingdom"
              width={75}
              height={75}
              priority
            />
          </div>

          {/* Heading */}

          <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Royal Creation
          </p>

          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Choose Your Motto
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Every Kingdom needs a declaration that represents
            its vision, character, and purpose.
          </p>

          {/* Selected Role */}

          <div className="mt-6 rounded-xl border border-yellow-500/10 bg-yellow-400/5 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Royal Role
            </p>
            
            <p className="mt-1 font-bold text-yellow-400">
              {selectedRole}
            </p>
          </div>

          {/* Mottos */}

          <div className="mt-8 space-y-3 text-left">

            {mottos.map((motto) => {
              const selected = selectedMotto === motto.title;

              return (
                <button
                  key={motto.title}
                  type="button"
                  onClick={() => setSelectedMotto(motto.title)}
                  className={`w-full rounded-2xl border p-5 transition ${
                    selected
                      ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_25px_rgba(234,179,8,.10)]"
                      : "border-yellow-500/15 bg-white/2.5 hover:border-yellow-400/40 hover:bg-yellow-400/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">

                    <h2
                      className={`text-lg font-bold ${
                        selected
                          ? "text-yellow-400"
                          : "text-white"
                      }`}
                    >
                      {motto.title}
                    </h2>

                    {selected && (
                      <span className="text-xs font-bold text-yellow-400">
                        Selected
                      </span>
                    )}

                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {motto.description}
                  </p>
                </button>
              );
            })}

          </div>

          {/* Continue */}

          <button
            type="button"
            disabled={!selectedMotto || loading}
           onClick={() => {
            if (!selectedMotto) return;

             console.log("Selected role:", selectedRole);
             console.log("Selected motto:", selectedMotto);

             setShowAllianceSelection(true);
             setShowMottoSelection(false);
         }}
            className="mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>

          <p className="mt-6 text-xs leading-6 text-gray-600">
            Your motto becomes part of your Royal Identity.
          </p>

        </div>
      </div>
    </main>
  );
}

/*
 * --------------------------------------------------
 * ROYAL ALLIANCE SELECTION
 * --------------------------------------------------
 */

if (showAllianceSelection && user) {
  const alliances = [
    {
      name: "House of Wisdom",
      description:
        "A path centered on knowledge, learning, and thoughtful leadership.",
    },
    {
      name: "House of Courage",
      description:
        "A path for those who value boldness, strength, and decisive action.",
    },
    {
      name: "House of Vision",
      description:
        "A path focused on imagination, innovation, and building the future.",
    },
    {
      name: "House of Unity",
      description:
        "A path built around cooperation, loyalty, and collective strength.",
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* Logo */}

          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Curved Kingdom"
              width={75}
              height={75}
              priority
            />
          </div>

          {/* Heading */}

          <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Royal Creation
          </p>

          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Choose Your Alliance
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Every citizen may walk with a House whose
            values reflect the Kingdom they want to build.
          </p>

          {/* Identity Summary */}

          <div className="mt-6 rounded-xl border border-yellow-500/10 bg-yellow-400/5 px-4 py-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Royal Role
              </p>

              <p className="mt-1 font-bold text-yellow-400">
                {selectedRole}
              </p>
            </div>

            <div className="mt-3 border-t border-yellow-500/10 pt-3">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Royal Motto
              </p>

              <p className="mt-1 font-bold text-white">
                {selectedMotto}
              </p>
            </div>
          </div>

          {/* Alliances */}

          <div className="mt-8 space-y-3 text-left">
            {alliances.map((alliance) => {
              const selected =
                selectedAlliance === alliance.name;

              return (
                <button
                  key={alliance.name}
                  type="button"
                  onClick={() =>
                    setSelectedAlliance(alliance.name)
                  }
                  className={`w-full rounded-2xl border p-5 transition ${
                    selected
                      ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_25px_rgba(234,179,8,.10)]"
                      : "border-yellow-500/15 bg-white/2.5 hover:border-yellow-400/40 hover:bg-yellow-400/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2
                      className={`text-lg font-bold ${
                        selected
                          ? "text-yellow-400"
                          : "text-white"
                      }`}
                    >
                      {alliance.name}
                    </h2>

                    {selected && (
                      <span className="text-xs font-bold text-yellow-400">
                        Selected
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {alliance.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Continue */}

          <button
            type="button"
            disabled={!selectedAlliance || loading}
            onClick={() => {
             if (!selectedAlliance) return;

                 console.log("Selected role:", selectedRole);
                 console.log("Selected motto:", selectedMotto);
                 console.log("Selected alliance:", selectedAlliance);

                 setShowAllianceSelection(false);
                setShowKingdomName(true);
          }}
            className="mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue with{" "}
            {selectedAlliance || "Your Alliance"}
          </button>

          <p className="mt-6 text-xs leading-6 text-gray-600">
            Your alliance becomes part of your Kingdom identity.
          </p>
        </div>
      </div>
    </main>
  );
}

/*
 * --------------------------------------------------
 * KINGDOM NAME
 * --------------------------------------------------
 */

if (showKingdomName && user) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* Logo */}

          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Curved Kingdom"
              width={75}
              height={75}
              priority
            />
          </div>

          {/* Heading */}

          <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Royal Creation
          </p>

          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Name Your Kingdom
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Your Kingdom needs a name.
            Choose something that represents
            the identity you want to build.
          </p>

          {/* Kingdom Name */}

          <div className="mt-8 text-left">
            <label className="text-sm font-semibold text-gray-300">
              Kingdom Name
            </label>

            <input
              type="text"
              value={kingdomName}
              onChange={(e) =>
                setKingdomName(e.target.value)
              }
              placeholder="Enter your Kingdom name"
              maxLength={40}
              className="mt-3 w-full rounded-2xl border border-yellow-500/20 bg-white/[0.035] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />

            <div className="mt-2 flex justify-between text-xs text-gray-600">
              <span>
                Choose a name you can proudly carry.
              </span>

              <span>
                {kingdomName.length}/40
              </span>
            </div>
          </div>

          {/* Identity Summary */}

          <div className="mt-7 rounded-2xl border border-yellow-500/10 bg-yellow-400/5 p-5 text-left">

            <p className="text-xs uppercase tracking-widest text-gray-600">
              Your Royal Path
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Role
                </span>

                <span className="font-semibold text-yellow-400">
                  {selectedRole}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Motto
                </span>

                <span className="max-w-[60%] text-right font-semibold text-white">
                  {selectedMotto}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Alliance
                </span>

                <span className="max-w-[60%] text-right font-semibold text-white">
                  {selectedAlliance}
                </span>
              </div>
            </div>
          </div>

          {/* Continue */}

          <button
            type="button"
            disabled={!kingdomName.trim() || loading}
           onClick={() => {
            if (!kingdomName.trim()) return;

            console.log("Kingdom name:", kingdomName.trim());
            console.log("Royal role:", selectedRole);
            console.log("Royal motto:", selectedMotto);
            console.log("Royal alliance:", selectedAlliance);

           setShowKingdomName(false);
          setShowAliasSelection(true);
         }}
            className="mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue with{" "}
            {kingdomName.trim() || "Your Kingdom"}
          </button>

          <p className="mt-6 text-xs leading-6 text-gray-600">
            Your Kingdom name will become part of your
            permanent Royal Identity.
          </p>

        </div>
      </div>
    </main>
  );
}

/*
 * --------------------------------------------------
 * ROYAL ALIAS
 * --------------------------------------------------
 */

if (showAliasSelection && user) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* Logo */}

          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Curved Kingdom"
              width={75}
              height={75}
              priority
            />
          </div>

          {/* Heading */}

          <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Royal Creation
          </p>

          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Choose Your Royal Alias
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Your Kingdom has a name.
            Now choose the name by which you will
            be known within the Kingdom.
          </p>

          {/* Alias Input */}

          <div className="mt-8 text-left">
            <label className="text-sm font-semibold text-gray-300">
              Royal Alias
            </label>

            <input
              type="text"
              value={royalAlias}
              onChange={(e) =>
                setRoyalAlias(e.target.value)
              }
              placeholder="Enter your royal alias"
              maxLength={30}
              className="mt-3 w-full rounded-2xl border border-yellow-500/20 bg-white/[0.035] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />

            <div className="mt-2 flex justify-between text-xs text-gray-600">
              <span>
                This is how citizens will know you.
              </span>

              <span>
                {royalAlias.length}/30
              </span>
            </div>
          </div>

          {/* Identity Preview */}

          <div className="mt-7 rounded-2xl border border-yellow-500/10 bg-yellow-400/5 p-5 text-left">

            <p className="text-xs uppercase tracking-widest text-gray-600">
              Royal Identity
            </p>

            <div className="mt-4 space-y-3 text-sm">

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Kingdom
                </span>

                <span className="max-w-[60%] text-right font-semibold text-yellow-400">
                  {kingdomName}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Role
                </span>

                <span className="font-semibold text-white">
                  {selectedRole}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Motto
                </span>

                <span className="max-w-[60%] text-right font-semibold text-white">
                  {selectedMotto}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Alliance
                </span>

                <span className="max-w-[60%] text-right font-semibold text-white">
                  {selectedAlliance}
                </span>
              </div>

            </div>
          </div>

          {/* Continue */}

          <button
            type="button"
            disabled={!royalAlias.trim() || loading}
            onClick={() => {
             if (!royalAlias.trim()) return;

             console.log("Kingdom name:", kingdomName);
             console.log("Royal alias:", royalAlias.trim());
             console.log("Royal role:", selectedRole);
             console.log("Royal motto:", selectedMotto);
             console.log("Royal alliance:", selectedAlliance);

            setShowAliasSelection(false);
            setShowBiography(true);
          }}
            className="mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue with{" "}
            {royalAlias.trim() || "Your Alias"}
          </button>

          <p className="mt-6 text-xs leading-6 text-gray-600">
            Your alias will become part of your
            Royal Identity.
          </p>

        </div>
      </div>
    </main>
  );
}

/*
 * --------------------------------------------------
 * ROYAL BIOGRAPHY
 * --------------------------------------------------
 */

if (showBiography && user) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* Logo */}

          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Curved Kingdom"
              width={75}
              height={75}
              priority
            />
          </div>

          {/* Heading */}

          <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Royal Creation
          </p>

          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Tell Your Story
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Every Kingdom has a story.
            Tell the Kingdom a little about yourself,
            your vision, or the legacy you want to build.
          </p>

          {/* Biography */}

          <div className="mt-8 text-left">
            <label className="text-sm font-semibold text-gray-300">
              Royal Biography
            </label>

            <textarea
              value={biography}
              onChange={(e) =>
                setBiography(e.target.value)
              }
              placeholder="Tell the Kingdom about yourself..."
              maxLength={300}
              rows={6}
              className="mt-3 w-full resize-none rounded-2xl border border-yellow-500/20 bg-white/[0.035] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />

            <div className="mt-2 flex justify-between text-xs text-gray-600">
              <span>
                Your story becomes part of your identity.
              </span>

              <span>
                {biography.length}/300
              </span>
            </div>
          </div>

          {/* Identity Preview */}

          <div className="mt-7 rounded-2xl border border-yellow-500/10 bg-yellow-400/5 p-5 text-left">

            <p className="text-xs uppercase tracking-widest text-gray-600">
              Royal Identity
            </p>

            <div className="mt-4 space-y-3 text-sm">

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Kingdom
                </span>

                <span className="max-w-[60%] text-right font-semibold text-yellow-400">
                  {kingdomName}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Alias
                </span>

                <span className="max-w-[60%] text-right font-semibold text-white">
                  {royalAlias}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Role
                </span>

                <span className="font-semibold text-white">
                  {selectedRole}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Alliance
                </span>

                <span className="max-w-[60%] text-right font-semibold text-white">
                  {selectedAlliance}
                </span>
              </div>

            </div>
          </div>

          {/* Continue */}

          <button
            type="button"
            disabled={!biography.trim() || loading}
           onClick={() => {
            if (!biography.trim()) return;

           console.log("Kingdom name:", kingdomName);
           console.log("Royal alias:", royalAlias);
           console.log("Royal biography:", biography.trim());
           console.log("Royal role:", selectedRole);
           console.log("Royal motto:", selectedMotto);
           console.log("Royal alliance:", selectedAlliance);

           setShowBiography(false);
          setShowIdentityReview(true);
         }}
             
            className="mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>

          <p className="mt-6 text-xs leading-6 text-gray-600">
            Your biography can always be refined later
            through your Royal Identity.
          </p>

        </div>
      </div>
    </main>
  );
}

/*
 * --------------------------------------------------
 * ROYAL IDENTITY REVIEW
 * --------------------------------------------------
 */

if (showIdentityReview && user) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* Logo */}

          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Curved Kingdom"
              width={75}
              height={75}
              priority
            />
          </div>

          {/* Heading */}

          <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Royal Identity Review
          </p>

          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Your Kingdom Awaits
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Review the identity you have created.
            Everything below will become part of your
            Royal Identity.
          </p>

          {/* Google Photo */}

          <div className="mt-8 flex justify-center">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "Citizen"}
                width={100}
                height={100}
                className="h-24 w-24 rounded-full border-2 border-yellow-400/50 object-cover shadow-[0_0_30px_rgba(234,179,8,.15)]"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10">
                <Image
                  src="/logo.png"
                  alt="Curved Kingdom"
                  width={50}
                  height={50}
                />
              </div>
            )}
          </div>

          {/* Google Identity */}

          <h2 className="mt-4 text-xl font-bold text-white">
            {user.displayName || "Citizen"}
          </h2>

          <p className="mt-1 break-all text-sm text-gray-500">
            {user.email}
          </p>

          {/* Identity Details */}

          <div className="mt-8 space-y-3 text-left">

            {/* Kingdom */}

            <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Kingdom Name
              </p>

              <p className="mt-2 text-lg font-bold text-yellow-400">
                {kingdomName}
              </p>
            </div>

            {/* Alias */}

            <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Royal Alias
              </p>

              <p className="mt-2 text-lg font-bold text-white">
                {royalAlias}
              </p>
            </div>

            {/* Role */}

            <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Royal Role
              </p>

              <p className="mt-2 text-lg font-bold text-white">
                {selectedRole}
              </p>
            </div>

            {/* Motto */}

            <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Royal Motto
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                {selectedMotto}
              </p>
            </div>

            {/* Alliance */}

            <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Alliance
              </p>

              <p className="mt-2 text-lg font-bold text-white">
                {selectedAlliance}
              </p>
            </div>

            {/* Biography */}

            <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Royal Biography
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                {biography}
              </p>
            </div>

          </div>

          {/* Confirm */}
           <button
  type="button"
  disabled={loading}
  onClick={async () => {
    try {
      setLoading(true);
      setError("");

      const currentUser = auth.currentUser;

      if (!currentUser) {
        setError(
          "Your Google identity could not be found. Please sign in again."
        );
        return;
      }

      await createCitizenProfile(
        currentUser.uid,
        currentUser.displayName ?? "Citizen",
        currentUser.email ?? "",
        currentUser.photoURL ?? "",
        kingdomName,
        royalAlias,
        selectedRole,
        selectedMotto,
        selectedAlliance,
        biography.trim()
      );

      console.log("ROYAL IDENTITY SAVED SUCCESSFULLY");

      router.push("/palace");
    } catch (error) {
      console.error(
        "Royal identity creation error:",
        error
      );

      setError(
        "The Kingdom could not establish your Royal Identity. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }}
  className="mt-8 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading
    ? "Establishing Your Kingdom..."
    : "Confirm My Royal Identity"}
</button>
          
          {/* Reforge */}

          <button
            type="button"
            onClick={() => {
              setShowIdentityReview(false);

              setShowRoleSelection(true);

              setSelectedRole("");
              setSelectedMotto("");
              setSelectedAlliance("");
              setKingdomName("");
              setRoyalAlias("");
              setBiography("");
            }}
            className="mt-3 w-full rounded-2xl border border-yellow-500/30 bg-transparent py-4 text-base font-bold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400/10"
          >
            Reforge My Kingdom
          </button>

          <p className="mt-6 text-xs leading-6 text-gray-600">
            Your Google identity and photo remain connected
            to your Royal Identity.
          </p>

        </div>
      </div>
    </main>
  );
}

  /*
   * --------------------------------------------------
   * ROYAL IDENTITY GATE
   * --------------------------------------------------
   */

  if (user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
        <div className="w-full max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

            {/* Logo */}

            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="Curved Kingdom"
                width={75}
                height={75}
                priority
              />
            </div>

            {/* Royal Identity */}

            <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
              Royal Identity Gate
            </p>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Your Identity Has Arrived
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              The Kingdom has received your
              Google identity. Would you like to
              enter with this identity?
            </p>

            {/* Google Identity */}

            <div className="mt-8 rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-5">

              {user.photoURL ? (
                <div className="flex justify-center">
                  <img
                    src={user.photoURL}
                    alt={
                      user.displayName ||
                      "Citizen"
                    }
                    width={82}
                    height={82}
                    className="h-20 w-20 rounded-full border-2 border-yellow-400/50 object-cover"
                  />
                </div>
              ) : (
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10">
                  <Image
                    src="/logo.png"
                    alt="Curved Kingdom"
                    width={45}
                    height={45}
                  />
                </div>
              )}

              <h2 className="mt-5 text-2xl font-bold text-white">
                {user.displayName ||
                  "Future Citizen"}
              </h2>

              <p className="mt-2 break-all text-sm text-gray-500">
                {user.email}
              </p>
            </div>

            {/* Continue */}

            <button
              type="button"
              disabled={loading}
              onClick={async () => {
                try {
                  setLoading(true);
                  setError("");

                  const currentUser =
                    auth.currentUser;

                  if (!currentUser) {
                    setError(
                      "Your Google identity could not be found. Please sign in again."
                    );

                    return;
                  }

                  /*
                   * Create the citizen profile.
                   */
                  await createCitizenProfile(
                    currentUser.uid,
                    currentUser.displayName ??
                      "Citizen",
                    currentUser.email ?? "",
                    currentUser.photoURL ?? "",
                    selectedRole,
                    selectedMotto,
                    selectedAlliance,
                    kingdomName,
                    royalAlias,
                    biography
                  );

                  /*
                   * Move to Role Selection.
                   *
                   * We do NOT go to /dashboard
                   * or / yet.
                   */
                  setShowRoleSelection(true);
                } catch (error) {
                  console.error(
                    "Citizen account creation error:",
                    error
                  );

                  setError(
                    "The Kingdom could not establish your citizen account. Please try again."
                  );
                } finally {
                  setLoading(false);
                }
              }}
              className="mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Establishing Identity..."
                : "Continue as "}

              {!loading && (
                <>
                  {user.displayName?.split(
                    " "
                  )[0] || "Citizen"}
                </>
              )}
            </button>

            {/* Reforge */}

            <button
  type="button"
  onClick={() => {
    setShowRoleSelection(true);
  }}
  className="mt-3 w-full rounded-2xl border border-yellow-500/30 bg-transparent py-4 text-base font-bold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400/10"
>
  Reforge My Kingdom
</button>

            <p className="mt-6 text-xs leading-6 text-gray-600">
              Your Google identity remains yours.
              Your Kingdom identity can be shaped
              next.
            </p>

            {/* Error */}

            {error && (
              <p className="mt-5 text-center text-sm text-red-400">
                {error}
              </p>
            )}
          </div>
        </div>
      </main>
    );
  }

  /*
   * --------------------------------------------------
   * GOOGLE ENTRY SCREEN
   * --------------------------------------------------
   */

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="relative rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 shadow-[0_0_60px_rgba(234,179,8,.12)] sm:p-10">

          {/* Logo */}

          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Curved Kingdom"
              width={90}
              height={90}
              priority
            />
          </div>

          {/* Heading */}

          <h1 className="mt-6 text-center text-4xl font-black text-white">
            Become a
          </h1>

          <h2 className="text-center text-4xl font-black text-yellow-400">
            Founding Citizen
          </h2>

          <p className="mt-5 text-center leading-8 text-gray-400">
            Your Kingdom begins today.
            Join Curved Kingdom and become one
            of the first citizens shaping the future
            of this digital civilization.
          </p>

          {/* Google Button */}

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="mt-10 flex w-full items-center justify-center gap-4 rounded-2xl bg-yellow-400 py-4 text-lg font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FcGoogle size={25} />

            {loading
              ? "Entering the Kingdom..."
              : "Continue with Google"}
          </button>

          {/* Error */}

          {error && (
            <p className="mt-4 text-center text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Security */}

          <p className="mt-6 text-center text-sm text-gray-500">
            Secure Google Authentication
          </p>

          {/* Terms */}

          <p className="mt-8 text-center text-sm leading-7 text-gray-500">
            By continuing you agree to our{" "}
            <Link
              href="/terms"
              className="text-yellow-400 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-yellow-400 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}