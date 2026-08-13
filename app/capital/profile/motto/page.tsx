"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

function ReforgeMottoContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedRole =
    searchParams.get("role") || "";

  const [selectedMotto, setSelectedMotto] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleContinue = () => {
    if (!selectedMotto) return;

    setLoading(true);

    router.push(
      `/capital/profile/alliance?role=${encodeURIComponent(
        selectedRole
      )}&motto=${encodeURIComponent(
        selectedMotto
      )}`
    );
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">

      <div className="w-full max-w-md">

        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* ROYAL GLOW */}

          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

          {/* LOGO */}

          <div className="relative flex justify-center">

            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={75}
              height={75}
              priority
            />

          </div>

          {/* HEADING */}

          <div className="relative">

            <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
              Royal Creation
            </p>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Choose Your Motto
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Every Kingdom needs a declaration
              that represents its vision,
              character, and purpose.
            </p>

          </div>

          {/* SELECTED ROLE */}

          <div className="relative mt-6 rounded-xl border border-yellow-500/10 bg-yellow-400/5 px-4 py-3">

            <p className="text-xs uppercase tracking-widest text-gray-500">
              Royal Role
            </p>

            <p className="mt-1 font-bold text-yellow-400">
              {selectedRole || "Your Role"}
            </p>

          </div>

          {/* MOTTOS */}

          <div className="relative mt-8 space-y-3 text-left">

            {mottos.map((motto) => {

              const selected =
                selectedMotto ===
                motto.title;

              return (
                <button
                  key={motto.title}
                  type="button"
                  disabled={loading}
                  onClick={() =>
                    setSelectedMotto(
                      motto.title
                    )
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
                      {motto.title}
                    </h2>

                    {selected && (
                      <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
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

          {/* CONTINUE */}

          <button
            type="button"
            disabled={
              !selectedMotto ||
              loading
            }
            onClick={handleContinue}
            className="relative mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading
              ? "Preparing the Next Step..."
              : "Continue"}
          </button>

          {/* FOOTER */}

          <p className="relative mt-6 text-xs leading-6 text-gray-600">
            Your motto becomes part of your
            Royal Identity.
          </p>

        </div>

      </div>

    </main>
  );
}


/*
|--------------------------------------------------------------------------
| PAGE
|--------------------------------------------------------------------------
|
| Next.js requires useSearchParams() to be
| rendered inside a Suspense boundary during
| production builds.
|
*/

export default function ReforgeMottoPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-black text-white">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[4px] text-yellow-400">
              Royal Creation
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Preparing Royal Motto...
            </p>

          </div>

        </main>
      }
    >
      <ReforgeMottoContent />
    </Suspense>
  );
}