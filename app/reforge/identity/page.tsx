"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import { auth, db } from "../../../lib/firebase";

function ReforgeIdentityContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [kingdomName, setKingdomName] = useState("");
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");
  const [available, setAvailable] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/register");
        return;
      }

      setAuthorized(true);
      setAuthChecking(false);
    });

    return unsubscribe;
  }, [router]);

  const validateName = (name: string) => {
    if (name.length < 3 || name.length > 30) {
      return "Your Kingdom Name must contain 3–30 characters.";
    }

    if (!/^[a-zA-Z]/.test(name)) {
      return "Your Kingdom Name must begin with a letter.";
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(name)) {
      return "Use only letters, numbers, hyphens, and underscores.";
    }

    if (/[-_]{2}|[-_]$/.test(name)) {
      return "Avoid repeated separators or ending with a hyphen or underscore.";
    }

    return "";
  };

  const handleNameChange = (value: string) => {
    setKingdomName(value);
    setAvailable(false);
    setError("");
  };

  const handleContinue = async () => {
    const name = kingdomName.trim();
    const validationError = validateName(name);

    if (validationError) {
      setError(validationError);
      setAvailable(false);
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      router.replace("/register");
      return;
    }

    setChecking(true);
    setError("");
    setAvailable(false);

    try {
      const normalizedName = name.toLowerCase();

      const nameQuery = query(
        collection(db, "kingdom_names"),
        where("kingdomNameLower", "==", normalizedName),
        limit(1)
      );

      const snapshot = await getDocs(nameQuery);

      if (!snapshot.empty) {
        setError(
          "This Kingdom Name has already been claimed. Choose another name."
        );
        return;
      }

      setAvailable(true);

      const existingRole = searchParams.get("role") || "";

      router.push(
        `/reforge/role?kingdom=${encodeURIComponent(name)}${
          existingRole
            ? `&role=${encodeURIComponent(existingRole)}`
            : ""
        }`
      );
    } catch (err) {
      console.error("Kingdom Name availability check failed:", err);

      setError(
        "The Kingdom could not check this name. Please check your internet connection and try again."
      );
    } finally {
      setChecking(false);
    }
  };

  if (authChecking || !authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020914] px-4 text-center text-sm text-[#45B8E8]">
        Preparing your Royal Identity...
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020914] px-4 py-10 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#278DBB]/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#D4AF37]/[0.07] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020914_80%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[460px]">
        <section className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#071321]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:rounded-[32px] sm:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#45B8E8]" />

          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#278DBB]/[0.08] blur-[80px]" />

          <div className="relative flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#278DBB]/25 bg-gradient-to-br from-[#D4AF37]/[0.07] to-[#278DBB]/[0.09] sm:h-24 sm:w-24">
              <Image
                src="/curved-kingdom-logo.png"
                alt="Curved Kingdom emblem"
                width={90}
                height={90}
                priority
                className="h-[70px] w-[70px] object-contain sm:h-[78px] sm:w-[78px]"
              />
            </div>
          </div>

          <div className="relative mt-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#45B8E8]">
              Forge Your Royal Identity
            </p>

            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#E6C75B] to-[#45B8E8] bg-clip-text text-transparent">
                Name Your Kingdom
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#9AAEC3]">
              Every Kingdom begins with a name. Choose yours carefully. It
              will become your unique Royal Identity within Curved Kingdom.
            </p>
          </div>

          <div className="relative mt-8">
            <label
              htmlFor="kingdomName"
              className="text-sm font-bold text-white"
            >
              Kingdom Name
            </label>

            <input
              id="kingdomName"
              type="text"
              value={kingdomName}
              onChange={(event) => handleNameChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !checking) {
                  event.preventDefault();
                  void handleContinue();
                }
              }}
              placeholder="Choose your unique name"
              maxLength={30}
              autoComplete="off"
              disabled={checking}
              aria-describedby="kingdom-name-hint"
              aria-invalid={Boolean(error)}
              className="mt-3 min-h-[56px] w-full rounded-2xl border border-[#278DBB]/30 bg-[#020914]/80 px-4 py-4 text-base text-white outline-none transition placeholder:text-[#526579] focus:border-[#45B8E8] focus:ring-2 focus:ring-[#45B8E8]/15 disabled:opacity-60"
            />

            <div
              id="kingdom-name-hint"
              className="mt-2 flex flex-wrap justify-between gap-2 text-xs text-[#71869C]"
            >
              <span>Letters, numbers, - and _ only.</span>
              <span>{kingdomName.length}/30</span>
            </div>

            {error && (
              <p
                role="alert"
                className="mt-3 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm leading-5 text-red-300"
              >
                {error}
              </p>
            )}

            {available && !error && (
              <p className="mt-3 text-sm font-semibold text-[#45B8E8]">
                Kingdom Name available.
              </p>
            )}
          </div>

          <div className="relative mt-7 rounded-2xl border border-[#278DBB]/15 bg-[#020914]/60 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#71869C]">
              Your Royal Identity
            </p>

            <div className="mt-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] text-lg font-bold text-[#E6C75B]">
                1
              </div>

              <div>
                <p className="text-sm font-bold text-white">Unique Name</p>
                <p className="mt-1 text-xs leading-5 text-[#9AAEC3]">
                  Choose a name that no other citizen has claimed.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg font-bold text-[#71869C]">
                2
              </div>

              <div>
                <p className="text-sm font-bold text-white">Royal Role</p>
                <p className="mt-1 text-xs leading-5 text-[#9AAEC3]">
                  Choose King, Queen, Prince, or Princess in the next step.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg font-bold text-[#71869C]">
                3
              </div>

              <div>
                <p className="text-sm font-bold text-white">Royal Portrait</p>
                <p className="mt-1 text-xs leading-5 text-[#9AAEC3]">
                  Use your Google photo or upload a portrait when establishing
                  your identity.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            disabled={!kingdomName.trim() || checking}
            onClick={() => void handleContinue()}
            className="relative mt-7 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37] via-[#E6C75B] to-[#45B8E8] px-5 py-4 text-sm font-extrabold text-[#020914] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {checking ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#020914]/30 border-t-[#020914]" />
                Checking Kingdom Name...
              </>
            ) : (
              "Check Name & Continue"
            )}
          </button>

          <p className="relative mt-5 text-center text-xs leading-5 text-[#71869C]">
            Your Kingdom Name is your unique username. Your Royal Motto and
            Biography can be added later from your Palace.
          </p>
        </section>

        <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
          Your Kingdom. Your Power. Your Legacy.
        </p>
      </div>
    </main>
  );
}

export default function ReforgeIdentityPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#020914] text-sm text-[#45B8E8]">
          Preparing your Royal Identity...
        </main>
      }
    >
      <ReforgeIdentityContent />
    </Suspense>
  );
}