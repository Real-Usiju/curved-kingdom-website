"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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

export default function CapitalMottoPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentMotto =
    searchParams.get("motto") || "";

  const [selectedMotto, setSelectedMotto] =
    useState(currentMotto);

  const [loading, setLoading] =
    useState(false);

  const handleSelectMotto = () => {
    if (!selectedMotto) return;

    try {
      setLoading(true);

      router.push(
        `/capital/profile?motto=${encodeURIComponent(
          selectedMotto
        )}`
      );
    } catch (error) {
      console.error(
        "Royal Motto selection error:",
        error
      );

      setLoading(false);
    }
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


          {/* HEADER */}

          <div className="relative">

            <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
              Royal Reforge
            </p>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Choose Your Motto
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Choose the declaration that
              represents your Kingdom's vision,
              character, and purpose.
            </p>

          </div>


          {/* MOTTO OPTIONS */}

          <div className="relative mt-8 space-y-3 text-left">

            {mottos.map((motto) => {

              const selected =
                selectedMotto === motto.title;

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
                  className={`w-full rounded-2xl border p-5 text-left transition ${
                    selected
                      ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_25px_rgba(234,179,8,.10)]"
                      : "border-yellow-500/15 bg-white/[0.025] hover:border-yellow-400/40 hover:bg-yellow-400/5"
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
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-yellow-400">
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


          {/* CONFIRM */}

          <button
            type="button"
            disabled={
              !selectedMotto || loading
            }
            onClick={handleSelectMotto}
            className="relative mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading
              ? "Returning to Reforge..."
              : "Choose This Motto"}
          </button>


          {/* CANCEL */}

          <button
            type="button"
            disabled={loading}
            onClick={() =>
              router.push("/capital/profile")
            }
            className="relative mt-3 w-full rounded-2xl border border-yellow-500/20 bg-transparent py-4 text-sm font-semibold text-gray-500 transition hover:border-yellow-400/30 hover:text-yellow-400 disabled:opacity-50"
          >
            Return to Reforge
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