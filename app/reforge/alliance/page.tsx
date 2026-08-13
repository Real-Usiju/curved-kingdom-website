"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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

export default function ReforgeAlliancePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedRole =
    searchParams.get("role") || "";

  const selectedMotto =
    searchParams.get("motto") || "";

  const [selectedAlliance, setSelectedAlliance] =
    useState("");

  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    if (!selectedAlliance) return;

    try {
      setLoading(true);

      router.push(
        `/reforge/identity?role=${encodeURIComponent(
          selectedRole
        )}&motto=${encodeURIComponent(
          selectedMotto
        )}&alliance=${encodeURIComponent(
          selectedAlliance
        )}`
      );
    } catch (error) {
      console.error(
        "Royal Alliance navigation error:",
        error
      );

      setLoading(false);
    }
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
              Royal Creation
            </p>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Choose Your Alliance
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Every citizen may walk with a House
              whose values reflect the Kingdom
              they want to build.
            </p>

          </div>

          {/* Identity Summary */}

          <div className="relative mt-6 rounded-2xl border border-yellow-500/10 bg-yellow-400/5 px-4 py-4">

            <div>

              <p className="text-xs uppercase tracking-widest text-gray-500">
                Royal Role
              </p>

              <p className="mt-1 font-bold text-yellow-400">
                {selectedRole || "Your Role"}
              </p>

            </div>

            <div className="mt-3 border-t border-yellow-500/10 pt-3">

              <p className="text-xs uppercase tracking-widest text-gray-500">
                Royal Motto
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                {selectedMotto || "Your Motto"}
              </p>

            </div>

          </div>

          {/* Alliances */}

          <div className="relative mt-8 space-y-3 text-left">

            {alliances.map((alliance) => {
              const selected =
                selectedAlliance === alliance.name;

              return (
                <button
                  key={alliance.name}
                  type="button"
                  disabled={loading}
                  onClick={() =>
                    setSelectedAlliance(
                      alliance.name
                    )
                  }
                  className={`w-full rounded-2xl border p-5 transition ${
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
                      {alliance.name}
                    </h2>

                    {selected && (
                      <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
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
            onClick={handleContinue}
            className="relative mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading
              ? "Preparing the Next Step..."
              : `Continue with ${
                  selectedAlliance || "Your Alliance"
                }`}
          </button>

          {/* Footer */}

          <p className="relative mt-6 text-xs leading-6 text-gray-600">
            Your alliance becomes part of your
            Kingdom identity.
          </p>

        </div>

      </div>

    </main>
  );
}