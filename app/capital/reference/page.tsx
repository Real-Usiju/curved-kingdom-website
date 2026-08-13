"use client";

import {
  BookOpen,
  Crown,
  Globe2,
  Languages,
  ScrollText,
  ChevronRight,
} from "lucide-react";

import ProtectedApp from "../../components/ProtectedApp";
import RoyalNavigation from "../../components/RoyalNavigation";

const referenceSections = [
  {
    title: "Kingdom Language",
    description:
      "Learn the language and terminology of Curved Kingdom.",
    icon: Languages,
  },
  {
    title: "The Kingdom",
    description:
      "Understand how the Curved Kingdom ecosystem works.",
    icon: Crown,
  },
  {
    title: "Royal Roles",
    description:
      "Learn about ranks, roles and Kingdom progression.",
    icon: ScrollText,
  },
  {
    title: "Kingdom Principles",
    description:
      "Discover the principles that guide the Kingdom.",
    icon: BookOpen,
  },
  {
    title: "The World",
    description:
      "Explore how Curved Kingdom connects its citizens.",
    icon: Globe2,
  },
];

export default function ReferencePage() {
  return (
    <ProtectedApp>
      <main className="min-h-screen bg-black pb-28 text-white">

        <div className="mx-auto w-full max-w-md px-4">

          {/* HEADER */}

          <section className="pt-7">

            <button
              type="button"
              onClick={() => window.history.back()}
              className="mb-5 text-xs text-gray-500"
            >
              ← Capital
            </button>

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-yellow-400">
              Reference
            </p>

            <h1 className="mt-1 text-3xl font-black tracking-tight">
              Kingdom Reference
            </h1>

            <p className="mt-1.5 text-xs leading-5 text-gray-500">
              Your guide to the language, structure and
              principles of Curved Kingdom.
            </p>

          </section>


          {/* INTRODUCTION */}

          <section className="mt-6 rounded-2xl border border-yellow-500/15 bg-white/[0.025] p-5">

            <div className="flex items-start gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.06]">

                <Crown
                  size={20}
                  className="text-yellow-400"
                />

              </div>

              <div className="min-w-0">

                <p className="text-sm font-bold text-white">
                  Welcome to the Kingdom
                </p>

                <p className="mt-1.5 text-[11px] leading-5 text-gray-500">
                  Curved Kingdom has its own language,
                  structure and way of connecting citizens.
                  This reference will guide you through it.
                </p>

              </div>

            </div>

          </section>


          {/* REFERENCE SECTIONS */}

          <section className="mt-7">

            <div className="mb-3 flex items-center gap-3">

              <div className="h-px flex-1 bg-yellow-500/15" />

              <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[2.5px] text-yellow-400">
                Kingdom Guide
              </p>

              <div className="h-px flex-1 bg-yellow-500/15" />

            </div>


            <div className="space-y-3">

              {referenceSections.map((section) => {
                const Icon = section.icon;

                return (
                  <button
                    key={section.title}
                    type="button"
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-yellow-500/10
                      bg-white/[0.025]
                      p-4
                      text-left
                      transition
                      active:scale-[0.98]
                    "
                  >

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-yellow-500/15
                        bg-yellow-500/[0.06]
                      "
                    >

                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        className="text-yellow-400"
                      />

                    </div>


                    {/* TEXT */}

                    <div className="min-w-0 flex-1">

                      <h2 className="text-sm font-bold text-white">
                        {section.title}
                      </h2>

                      <p className="mt-0.5 text-[11px] leading-4 text-gray-500">
                        {section.description}
                      </p>

                    </div>


                    {/* ARROW */}

                    <ChevronRight
                      size={17}
                      className="shrink-0 text-gray-600"
                    />

                  </button>
                );
              })}

            </div>

          </section>


          {/* KINGDOM LANGUAGE */}

          <section className="mt-7 rounded-2xl border border-yellow-500/10 bg-white/[0.02] p-5">

            <div className="flex items-center gap-3">

              <Languages
                size={19}
                className="shrink-0 text-yellow-400"
              />

              <div className="min-w-0">

                <p className="text-sm font-bold text-white">
                  Kingdom Language
                </p>

                <p className="mt-1 text-[11px] leading-4 text-gray-600">
                  More Kingdom terminology and explanations
                  will continue to be introduced.
                </p>

              </div>

            </div>

          </section>


          {/* FOOTER */}

          <div className="pb-5 pt-8 text-center">

            <p className="text-[9px] uppercase tracking-[2px] text-gray-700">
              Learn the Kingdom. Understand the Kingdom.
            </p>

          </div>

        </div>


        {/* BOTTOM NAVIGATION */}

        <RoyalNavigation />

      </main>
    </ProtectedApp>
  );
}