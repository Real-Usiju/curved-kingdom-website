"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ReforgeAliasContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedRole =
    searchParams.get("role") || "";

  const selectedMotto =
    searchParams.get("motto") || "";

  const selectedAlliance =
    searchParams.get("alliance") || "";

  const kingdomName =
    searchParams.get("kingdom") || "";

  const [royalAlias, setRoyalAlias] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleContinue = () => {
    if (!royalAlias.trim()) return;

    setLoading(true);

    router.push(
      `/reforge/voice?role=${encodeURIComponent(
        selectedRole
      )}&motto=${encodeURIComponent(
        selectedMotto
      )}&alliance=${encodeURIComponent(
        selectedAlliance
      )}&kingdom=${encodeURIComponent(
        kingdomName
      )}&alias=${encodeURIComponent(
        royalAlias.trim()
      )}`
    );
  };
  

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">

      <div className="w-full max-w-md">

        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* Royal Glow */}

          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

          {/* Logo */}

          <div className="relative flex justify-center">

            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={75}
              height={75}
              priority
            />

          </div>

          {/* Heading */}

          <div className="relative">

            <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
              Kingdom Identity
            </p>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Choose Your Royal Alias
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Your Kingdom has a name.
              Now choose the name by which you
              will be known within the Kingdom.
            </p>

          </div>

          {/* Alias Input */}

          <div className="relative mt-8 text-left">

            <label
              htmlFor="royalAlias"
              className="text-sm font-semibold text-gray-300"
            >
              Royal Alias
            </label>

            <input
              id="royalAlias"
              type="text"
              value={royalAlias}
              onChange={(event) =>
                setRoyalAlias(event.target.value)
              }
              placeholder="Enter your royal alias"
              maxLength={30}
              disabled={loading}
              className="mt-3 w-full rounded-2xl border border-yellow-500/20 bg-white/[0.035] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 disabled:opacity-60"
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

          <div className="relative mt-7 rounded-2xl border border-yellow-500/10 bg-yellow-400/5 p-5 text-left">

            <p className="text-xs uppercase tracking-widest text-gray-600">
              Kingdom Identity
            </p>

            <div className="mt-4 space-y-3 text-sm">

              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Kingdom
                </span>

                <span className="max-w-[60%] text-right font-semibold text-yellow-400">
                  {kingdomName || "Your Kingdom"}
                </span>

              </div>

              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Role
                </span>

                <span className="font-semibold text-white">
                  {selectedRole || "Your Role"}
                </span>

              </div>

              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Motto
                </span>

                <span className="max-w-[60%] text-right font-semibold text-white">
                  {selectedMotto || "Your Motto"}
                </span>

              </div>

              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Alliance
                </span>

                <span className="max-w-[60%] text-right font-semibold text-white">
                  {selectedAlliance || "Your Alliance"}
                </span>

              </div>

            </div>

          </div>

          {/* Continue */}

          <button
            type="button"
            disabled={!royalAlias.trim() || loading}
            onClick={handleContinue}
            className="relative mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading
              ? "Preparing the Next Step..."
              : "Continue"}
          </button>

          {/* Footer */}

          <p className="relative mt-6 text-xs leading-6 text-gray-600">
            Your alias will become part of your
            Royal Identity.
          </p>

        </div>

      </div>

    </main>
  );
}

export default function ReforgeAlliancePage() {
  return (
    <Suspense fallback={null}>
      <ReforgeAliasContent />
    </Suspense>
  );
}