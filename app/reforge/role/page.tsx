"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../../lib/firebase";
import { RoyalLoader } from "../../components/RoyalLoader";

type RoyalRole = {
  name: "King" | "Queen";
  description: string;
  symbol: string;
};

const roles: RoyalRole[] = [
  {
    name: "King",
    description: "Lead with vision, authority, and responsibility.",
    symbol: "I",
  },
  {
    name: "Queen",
    description: "Lead with wisdom, strength, and royal grace.",
    symbol: "II",
  },
];

function ReforgeRoleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const kingdomName = searchParams.get("kingdom")?.trim() || "";

  const [selectedRole, setSelectedRole] = useState<"King" | "Queen" | "">(
    searchParams.get("role") === "King" ||
      searchParams.get("role") === "Queen"
      ? (searchParams.get("role") as "King" | "Queen")
      : ""
  );

  const [loading, setLoading] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");

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

  useEffect(() => {
    const role = searchParams.get("role");

    if (role === "King" || role === "Queen") {
      setSelectedRole(role);
    } else {
      setSelectedRole("");
    }
  }, [searchParams]);

  const handleContinue = () => {
    if (!auth.currentUser) {
      router.replace("/register");
      return;
    }

    if (!kingdomName) {
      router.replace("/reforge/identity");
      return;
    }

    if (selectedRole !== "King" && selectedRole !== "Queen") {
      setError("Choose King or Queen before continuing.");
      return;
    }

    setLoading(true);
    setError("");

    router.push(
      `/reforge/save?kingdom=${encodeURIComponent(
        kingdomName
      )}&role=${encodeURIComponent(selectedRole)}`
    );
  };

  if (authChecking || !authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020914]">
        <RoyalLoader />
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

      <div className="relative z-10 w-full max-w-[500px]">
        <section className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#071321]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:rounded-[32px] sm:p-9">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#45B8E8]" />

          <div className="relative flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#278DBB]/25 bg-gradient-to-br from-[#D4AF37]/[0.07] to-[#278DBB]/[0.09]">
              <Image
                src="/curved-kingdom-logo.png"
                alt="Curved Kingdom emblem"
                width={90}
                height={90}
                priority
                className="h-[70px] w-[70px] object-contain"
              />
            </div>
          </div>

          <div className="relative mt-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#45B8E8]">
              Step Two · Royal Identity
            </p>

            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#E6C75B] to-[#45B8E8] bg-clip-text text-transparent">
                Choose Your Royal Role
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#9AAEC3]">
              Choose the royal title that represents you within Curved
              Kingdom.
            </p>
          </div>

          <div className="relative mt-7 rounded-2xl border border-[#278DBB]/20 bg-[#020914]/70 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#71869C]">
              Your Kingdom Name
            </p>
            <p className="mt-2 break-words text-lg font-bold text-[#E6C75B]">
              {kingdomName || "No Kingdom Name selected"}
            </p>
          </div>

          <div className="relative mt-5 space-y-3">
            {roles.map((role) => {
              const selected = selectedRole === role.name;

              return (
                <button
                  key={role.name}
                  type="button"
                  disabled={loading}
                  aria-pressed={selected}
                  onClick={() => {
                    setSelectedRole(role.name);
                    setError("");
                  }}
                  className={`w-full rounded-2xl border p-4 text-left transition duration-200 sm:p-5 ${
                    selected
                      ? "border-[#45B8E8]/70 bg-[#278DBB]/[0.12] shadow-[0_0_25px_rgba(39,141,187,0.08)]"
                      : "border-white/[0.08] bg-white/[0.025] hover:border-[#D4AF37]/40 hover:bg-white/[0.04]"
                  } disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-sm font-black ${
                        selected
                          ? "border-[#D4AF37]/40 bg-[#D4AF37]/[0.08] text-[#E6C75B]"
                          : "border-white/10 bg-white/[0.025] text-[#71869C]"
                      }`}
                    >
                      {role.symbol}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2
                        className={`text-lg font-bold ${
                          selected ? "text-[#45B8E8]" : "text-white"
                        }`}
                      >
                        {role.name}
                      </h2>

                      <p className="mt-1 text-sm leading-5 text-[#9AAEC3]">
                        {role.description}
                      </p>
                    </div>

                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                        selected
                          ? "border-[#45B8E8] bg-[#45B8E8] text-[#020914]"
                          : "border-white/20 text-transparent"
                      }`}
                    >
                      {selected && <Check size={15} strokeWidth={3} />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {error && (
            <p
              role="alert"
              className="mt-4 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm text-red-300"
            >
              {error}
            </p>
          )}

          <button
            type="button"
            disabled={
              (selectedRole !== "King" && selectedRole !== "Queen") ||
              loading ||
              !kingdomName
            }
            onClick={handleContinue}
            className="relative mt-7 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37] via-[#E6C75B] to-[#45B8E8] px-5 py-4 text-sm font-extrabold text-[#020914] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <RoyalLoader />
                Preparing Your Royal Identity...
              </span>
            ) : (
              <>
                Continue
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={() => router.push("/reforge/identity")}
            className="mt-3 min-h-[48px] w-full rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-[#9AAEC3] transition hover:border-[#278DBB]/40 hover:text-white disabled:opacity-50"
          >
            Back to Kingdom Name
          </button>

          <p className="relative mt-5 text-center text-xs leading-5 text-[#71869C]">
            Your Royal Role becomes part of your Royal Identity.
          </p>
        </section>

        <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
          Your Kingdom. Your Power. Your Legacy.
        </p>
      </div>
    </main>
  );
}

export default function ReforgeRolePage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#020914]">
          <RoyalLoader />
        </main>
      }
    >
      <ReforgeRoleContent />
    </Suspense>
  );
}

