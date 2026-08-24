"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ReforgePreviewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedRole = searchParams.get("role") || "";
  const selectedMotto = searchParams.get("motto") || "";
  const selectedAlliance = searchParams.get("alliance") || "";
  const kingdomName = searchParams.get("kingdom") || "";
  const royalAlias = searchParams.get("alias") || "";
  const biography = searchParams.get("biography") || "";

  const handleEdit = () => {
    const params = new URLSearchParams();

    if (selectedRole) params.set("role", selectedRole);
    if (selectedMotto) params.set("motto", selectedMotto);
    if (selectedAlliance) params.set("alliance", selectedAlliance);
    if (kingdomName) params.set("kingdom", kingdomName);
    if (royalAlias) params.set("alias", royalAlias);

    router.push(`/reforge/voice?${params.toString()}`);
  };

  const handleSave = () => {
    const params = new URLSearchParams();

    if (selectedRole) params.set("role", selectedRole);
    if (selectedMotto) params.set("motto", selectedMotto);
    if (selectedAlliance) params.set("alliance", selectedAlliance);
    if (kingdomName) params.set("kingdom", kingdomName);
    if (royalAlias) params.set("alias", royalAlias);
    if (biography) params.set("biography", biography);

    router.push(`/reforge/save?${params.toString()}`);
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
              Royal Identity
            </p>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Your Kingdom Awaits
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Review the identity you have forged before
              presenting your Kingdom to the world.
            </p>
          </div>

          {/* Identity Card */}
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-yellow-500/20 bg-black/40 text-left">

            {/* Kingdom Header */}
            <div className="border-b border-yellow-500/10 bg-yellow-400/5 p-6 text-center">
              <p className="text-[10px] uppercase tracking-[4px] text-gray-500">
                Kingdom
              </p>

              <h2 className="mt-3 wrap-break-word text-2xl font-black text-yellow-400">
                {kingdomName || "Your Kingdom"}
              </h2>

              <p className="mt-2 wrap-break-word text-sm text-gray-400">
                {royalAlias || "Your Royal Alias"}
              </p>
            </div>

            {/* Identity Details */}
            <div className="space-y-5 p-6">

              {/* Role */}
              <div>
                <p className="text-[10px] uppercase tracking-[3px] text-gray-600">
                  Royal Rank
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {selectedRole || "Your Royal Rank"}
                </p>
              </div>

              {/* Motto */}
              <div>
                <p className="text-[10px] uppercase tracking-[3px] text-gray-600">
                  Royal Motto
                </p>

                <p className="mt-2 text-sm leading-6 text-white">
                  {selectedMotto || "Your Royal Motto"}
                </p>
              </div>

              {/* Alliance */}
              <div>
                <p className="text-[10px] uppercase tracking-[3px] text-gray-600">
                  Alliance
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {selectedAlliance || "Your Alliance"}
                </p>
              </div>

              {/* Biography */}
              <div>
                <p className="text-[10px] uppercase tracking-[3px] text-gray-600">
                  Royal Biography
                </p>

                <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-gray-300">
                  {biography || "Your Royal Biography"}
                </p>
              </div>

            </div>
          </div>

          {/* Confirmation */}
          <div className="relative mt-6 rounded-2xl border border-yellow-500/10 bg-yellow-400/5 p-4 text-left">
            <p className="text-xs leading-6 text-gray-400">
              This identity will become the foundation of your
              Kingdom and can be refined later through your Capital.
            </p>
          </div>

          {/* Edit */}
          <button
            type="button"
            onClick={handleEdit}
            className="relative mt-6 w-full rounded-2xl border border-yellow-500/30 bg-transparent py-4 text-sm font-semibold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400/5"
          >
            Refine My Identity
          </button>

          {/* Save */}
          <button
            type="button"
            onClick={handleSave}
            className="relative mt-3 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300"
          >
            Save Royal Identity
          </button>

          {/* Footer */}
          <p className="relative mt-6 text-xs leading-6 text-gray-600">
            Once saved, your Kingdom identity will be ready
            to enter the Kingdom.
          </p>

        </div>
      </div>
    </main>
  );
}

export default function ReforgePreviewPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-black text-yellow-400">
          <p className="text-sm tracking-widest">
            PREPARING YOUR IDENTITY...
          </p>
        </main>
      }
    >
      <ReforgePreviewContent />
    </Suspense>
  );
}