"use client";

import Link from "next/link";

import {
  Crown,
  Palette,
  ScrollText,
  Shield,
  UserRound,
  ChevronRight,
  Trophy,
} from "lucide-react";

import { FiUsers } from "react-icons/fi";
import { GiCrossedSwords } from "react-icons/gi";

import ProtectedApp from "../components/ProtectedApp";
import RoyalNavigation from "../components/RoyalNavigation";

const sections = [
  {
    title: "Kingdom",
    description: "Manage your Kingdom identity and progression.",
    icon: Crown,
    href: "/capital/kingdom",
  },
  {
    title: "Appearance",
    description: "Customize the look and atmosphere of your Kingdom.",
    icon: Palette,
    href: "/capital/appearance",
  },
  {
    title: "Reference",
    description: "Kingdom guides, language and information.",
    icon: ScrollText,
    href: "/capital/reference",
  },
  {
    title: "Account",
    description: "Manage security and account controls.",
    icon: Shield,
    href: "/capital/account",
  },
  {
    title: "Profile",
    description: "Refine and manage your Royal Identity.",
    icon: UserRound,
    href: "/capital/profile",
  },
];

export default function CapitalPage() {
  return (
    <ProtectedApp>
      <main className="min-h-screen bg-black pb-28 text-white">

        {/* MOBILE CONTAINER */}

        <div className="mx-auto w-full max-w-md px-4">

          {/* HEADER */}

          <section className="pt-7">

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-yellow-400">
              Royal Control Center
            </p>

            <h1 className="mt-1 text-3xl font-black tracking-tight">
              CAPITAL
            </h1>

            <p className="mt-1.5 text-xs leading-5 text-gray-500">
              Manage your Kingdom and Royal experience.
            </p>

          </section>


          {/* ROYAL STATS */}

          <section className="mx-auto mt-6 w-full max-w-85 overflow-hidden rounded-2xl border border-yellow-500/15 bg-white/2.5">

            <div className="grid grid-cols-3">

              {/* POWER */}

              <div className="flex flex-col items-center justify-center px-2 py-4 text-center">

                <GiCrossedSwords
                  size={22}
                  className="text-yellow-400"
                />

                <p className="mt-1 text-lg font-black text-white">
                  0
                </p>

                <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-gray-500">
                  Power
                </p>

              </div>


              {/* CITIZENS */}

              <div className="flex flex-col items-center justify-center border-x border-yellow-400/10 px-2 py-4 text-center">

                <FiUsers
                  size={18}
                  strokeWidth={1.8}
                  className="text-yellow-400"
                />

                <p className="mt-1 text-lg font-black text-white">
                  0
                </p>

                <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-gray-500">
                  Citizens
                </p>

              </div>


              {/* GLORY */}

              <div className="flex flex-col items-center justify-center px-2 py-4 text-center">

                <Trophy
                  size={18}
                  strokeWidth={1.8}
                  className="text-yellow-400"
                />

                <p className="mt-1 text-lg font-black text-white">
                  0
                </p>

                <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-gray-500">
                  Glory
                </p>

              </div>

            </div>

          </section>


          {/* SECTION TITLE */}

          <div className="mb-4 mt-7 flex items-center gap-3">

            <div className="h-px flex-1 bg-yellow-500/15" />

            <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[2.5px] text-yellow-400">
              Kingdom Management
            </p>

            <div className="h-px flex-1 bg-yellow-500/15" />

          </div>


          {/* CAPITAL SECTIONS */}

          <section className="space-y-3">

            {sections.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    flex w-full items-center gap-3
                    rounded-2xl
                    border border-yellow-500/10
                    bg-white/2.5
                    p-4
                    transition
                    active:scale-[0.98]
                    active:border-yellow-400/30
                  "
                >

                  {/* ICON */}

                  <div className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-yellow-500/15
                    bg-yellow-500/[0.07]
                  ">

                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="text-yellow-400"
                    />

                  </div>


                  {/* TEXT */}

                  <div className="min-w-0 flex-1">

                    <h2 className="text-sm font-bold text-white">
                      {item.title}
                    </h2>

                    <p className="mt-0.5 text-[11px] leading-4 text-gray-500">
                      {item.description}
                    </p>

                  </div>


                  {/* ARROW */}

                  <ChevronRight
                    size={17}
                    className="shrink-0 text-gray-600"
                  />

                </Link>
              );
            })}

          </section>


          {/* FOOTER */}

          <div className="pb-5 pt-7 text-center">

            <p className="text-[9px] uppercase tracking-[2px] text-gray-700">
              Your Kingdom. Your Authority.
            </p>

          </div>

        </div>


        {/* BOTTOM NAVIGATION */}

        <RoyalNavigation />

      </main>
    </ProtectedApp>
  );
}