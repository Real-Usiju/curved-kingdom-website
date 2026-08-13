"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function ReforgePreviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const role = searchParams.get("role") || "";
  const motto = searchParams.get("motto") || "";
  const alliance = searchParams.get("alliance") || "";
  const kingdom = searchParams.get("kingdom") || "";
  const alias = searchParams.get("alias") || "";
  const biography = searchParams.get("biography") || "";

  const royalRank = "Early Citizen";
  const glory = 0;

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
              width={80}
              height={80}
              priority
            />
          </div>

          {/* Heading */}

          <div className="relative">

            <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
              Royal Identity Preview
            </p>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Your Kingdom Awaits
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Review the identity you have created.
              This is how your Kingdom will enter
              the world.
            </p>

          </div>

          {/* Kingdom Identity */}

          <section className="relative mt-8 text-left">

            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
                Kingdom Identity
              </h2>

              <span className="text-xs text-gray-600">
                Identity
              </span>
            </div>

            <div className="space-y-3">

              {/* Kingdom Name */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  Kingdom Name
                </p>

                <p className="mt-2 text-xl font-bold text-yellow-400">
                  {kingdom || "Your Kingdom"}
                </p>

              </div>

              {/* Royal Alias */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  Royal Alias
                </p>

                <p className="mt-2 text-lg font-bold text-white">
                  {alias || "Your Alias"}
                </p>

              </div>

              {/* Royal Rank */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  Royal Rank
                </p>

                <p className="mt-2 text-lg font-bold text-yellow-400">
                  {royalRank}
                </p>

              </div>

            </div>

          </section>

          {/* Royal Voice */}

          <section className="relative mt-8 text-left">

            <div className="mb-3">
              <h2 className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
                Royal Voice
              </h2>
            </div>

            <div className="space-y-3">

              {/* Motto */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  Royal Motto
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {motto || "Your Motto"}
                </p>

              </div>

              {/* Alliance */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  Alliance
                </p>

                <p className="mt-2 text-lg font-bold text-white">
                  {alliance || "Your Alliance"}
                </p>

              </div>

              {/* Biography */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  Royal Biography
                </p>

                <p className="mt-2 text-sm leading-7 text-gray-300">
                  {biography || "Your story"}
                </p>

              </div>

            </div>

          </section>

          {/* Royal Legacy */}

          <section className="relative mt-8 text-left">

            <div className="mb-3">
              <h2 className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
                Royal Legacy
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">

              {/* Achievements */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  Achievements
                </p>

                <p className="mt-2 text-lg font-bold text-white">
                  0
                </p>

              </div>

              {/* Glory */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-4">

                <p className="text-xs uppercase tracking-widest text-gray-600">
                  Glory
                </p>

                <p className="mt-2 text-lg font-bold text-yellow-400">
                  {glory}
                </p>

              </div>

            </div>

          </section>

          {/* Royal Rank */}

          <div className="relative mt-7 rounded-2xl border border-yellow-500/20 bg-yellow-400/5 p-5">

            <p className="text-xs uppercase tracking-[3px] text-gray-600">
              Your Beginning
            </p>

            <p className="mt-2 text-xl font-black text-yellow-400">
              {royalRank}
            </p>

            <p className="mt-2 text-xs leading-6 text-gray-500">
              Your journey begins here.
              Your Kingdom will grow through
              your actions, achievements, and legacy.
            </p>

          </div>

          {/* Save */}

          <button
            type="button"
            onClick={() => {
              console.log("ROYAL IDENTITY READY TO SAVE");

              router.push(
                `/reforge/save?role=${encodeURIComponent(
                  role
                )}&motto=${encodeURIComponent(
                  motto
                )}&alliance=${encodeURIComponent(
                  alliance
                )}&kingdom=${encodeURIComponent(
                  kingdom
                )}&alias=${encodeURIComponent(
                  alias
                )}&biography=${encodeURIComponent(
                  biography
                )}`
              );
            }}
            className="relative mt-8 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300"
          >
            Save Royal Identity
          </button>

          {/* Footer */}

          <p className="relative mt-6 text-xs leading-6 text-gray-600">
            Review carefully before establishing
            your Royal Identity.
          </p>

        </div>

      </div>
    </main>
  );
}