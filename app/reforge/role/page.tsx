"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type RoyalRole = {
  name: string;
  description: string;
};

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

export default function ReforgeRolePage() {
  const router = useRouter();

  const [selectedRole, setSelectedRole] =
    useState("");

  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    if (!selectedRole) return;

    try {
      setLoading(true);

      /*
       * We will persist the selected Role
       * into the Reforge identity state next.
       *
       * For now we pass it through the URL
       * so we can test the page-to-page flow.
       */

      router.push(
        `/reforge/motto?role=${encodeURIComponent(
          selectedRole
        )}`
      );
    } catch (error) {
      console.error(
        "Royal Role navigation error:",
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
              Choose Your Royal Role
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Your identity begins with the role
              you choose to carry within the
              Kingdom.
            </p>

          </div>

          {/* Roles */}

          <div className="relative mt-8 space-y-3 text-left">

            {roles.map((role) => {
              const selected =
                selectedRole === role.name;

              return (
                <button
                  key={role.name}
                  type="button"
                  disabled={loading}
                  onClick={() =>
                    setSelectedRole(role.name)
                  }
                  className={`w-full rounded-2xl border p-5 text-left transition ${
                    selected
                      ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_25px_rgba(234,179,8,.10)]"
                      : "border-yellow-500/15 bg-white/[0.025] hover:border-yellow-400/40 hover:bg-yellow-400/5"
                  }`}
                >

                  <div className="flex items-center justify-between gap-3">

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
                      <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
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
            onClick={handleContinue}
            className="relative mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading
              ? "Preparing the Next Step..."
              : `Continue with ${
                  selectedRole || "Your Role"
                }`}
          </button>

          {/* Footer */}

          <p className="relative mt-6 text-xs leading-6 text-gray-600">
            Your role is only the first step of
            your Royal Identity.
          </p>

        </div>

      </div>

    </main>
  );
}