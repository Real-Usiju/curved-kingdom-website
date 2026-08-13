"use client";

import {
  Crown,
  Trophy,
  ChevronRight,
  Shield,
  Lock,
} from "lucide-react";
import { GiCrossedSwords } from "react-icons/gi";

import ProtectedApp from "../../components/ProtectedApp";
import RoyalNavigation from "../../components/RoyalNavigation";

const royalRanks = [
  {
    name: "Early Citizen",
    banner: "/royal-standards/early-citizen.jpg",
    unlocked: true,
  },
  {
    name: "Guardian",
    banner: "/royal-standards/guardian.jpg",
    unlocked: false,
  },
  {
    name: "Kingdom Lord",
    banner: "/royal-standards/kingdom-lord.jpg",
    unlocked: false,
  },
  {
    name: "Celestial Empire",
    banner: "/royal-standards/celestial-empire.jpg",
    unlocked: false,
  },
];

export default function KingdomPage() {
  const currentRank = "Early Citizen";

  const currentRankIndex = royalRanks.findIndex(
    (rank) => rank.name === currentRank
  );

  const nextRank =
    royalRanks[currentRankIndex + 1] || null;

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
              Kingdom
            </p>

            <h1 className="mt-1 text-3xl font-black tracking-tight">
              Kingdom
            </h1>

            <p className="mt-1.5 text-xs leading-5 text-gray-500">
              Understand your Kingdom's growth and progression.
            </p>

          </section>


          {/* CURRENT ROYAL RANK */}

          <section className="mt-6 rounded-2xl border border-yellow-500/15 bg-white/[0.025] p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.06]">

                <Crown
                  size={21}
                  className="text-yellow-400"
                />

              </div>

              <div className="min-w-0 flex-1">

                <p className="text-[9px] uppercase tracking-[2px] text-gray-600">
                  Current Royal Rank
                </p>

                <p className="mt-1 text-base font-black text-white">
                  {currentRank}
                </p>

              </div>

              <div className="rounded-full border border-yellow-400/20 bg-yellow-400/[0.05] px-2.5 py-1">

                <p className="text-[8px] font-bold uppercase tracking-[1px] text-yellow-400">
                  Active
                </p>

              </div>

            </div>

          </section>


          {/* PROGRESSION */}

          <section className="mt-7">

            <div className="mb-3 flex items-center gap-3">

              <div className="h-px flex-1 bg-yellow-500/15" />

              <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[2.5px] text-yellow-400">
                Kingdom Progression
              </p>

              <div className="h-px flex-1 bg-yellow-500/15" />

            </div>


            <div className="space-y-3">

              {royalRanks.map((rank, index) => {

                const isCurrent =
                  rank.name === currentRank;

                const isNext =
                  nextRank?.name === rank.name;

                return (
                  <div
                    key={rank.name}
                    className={`
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      p-4
                      ${
                        isCurrent
                          ? "border-yellow-400/25 bg-yellow-400/[0.05]"
                          : "border-yellow-500/10 bg-white/[0.025]"
                      }
                    `}
                  >

                    {/* ICON */}

                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        ${
                          isCurrent
                            ? "border-yellow-400/25 bg-yellow-400/[0.08]"
                            : "border-yellow-500/10 bg-white/[0.02]"
                        }
                      `}
                    >

                      {isCurrent ? (
                        <Crown
                          size={20}
                          className="text-yellow-400"
                        />
                      ) : (
                        <Lock
                          size={18}
                          className="text-gray-600"
                        />
                      )}

                    </div>


                    {/* TEXT */}

                    <div className="min-w-0 flex-1">

                      <p
                        className={`
                          text-sm
                          font-bold
                          ${
                            isCurrent
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }
                        `}
                      >
                        {rank.name}
                      </p>

                      <p className="mt-0.5 text-[10px] text-gray-700">
                        {isCurrent
                          ? "Your current Royal Rank."
                          : isNext
                          ? "The next Royal Rank awaits."
                          : "Future Royal Rank."}
                      </p>

                    </div>


                    {/* STATUS */}

                    {isCurrent ? (
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    ) : (
                      <Lock
                        size={15}
                        className="shrink-0 text-gray-700"
                      />
                    )}

                  </div>
                );
              })}

            </div>

          </section>


          {/* ROYAL STANDARD */}

          <section className="mt-7">

            <div className="mb-3 flex items-center gap-3">

              <div className="h-px flex-1 bg-yellow-500/15" />

              <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[2.5px] text-yellow-400">
                Royal Standard
              </p>

              <div className="h-px flex-1 bg-yellow-500/15" />

            </div>


            <div className="overflow-hidden rounded-2xl border border-yellow-500/15 bg-white/[0.025]">

              <div className="relative h-44 w-full">

                <img
                  src={royalRanks[currentRankIndex].banner}
                  alt={currentRank}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4">

                  <p className="text-[9px] uppercase tracking-[2px] text-yellow-400">
                    Your Royal Standard
                  </p>

                  <p className="mt-1 text-lg font-black">
                    {currentRank}
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* ROYAL LEGACY */}

          <section className="mt-7">

            <div className="mb-3 flex items-center gap-3">

              <div className="h-px flex-1 bg-yellow-500/15" />

              <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[2.5px] text-yellow-400">
                Royal Legacy
              </p>

              <div className="h-px flex-1 bg-yellow-500/15" />

            </div>


            <div className="grid grid-cols-2 gap-3">

              {/* GLORY */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.025] p-4">

                <Trophy
                  size={20}
                  className="text-yellow-400"
                />

                <p className="mt-3 text-xl font-black">
                  0
                </p>

                <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-gray-600">
                  Glory
                </p>

              </div>


              {/* POWER */}

              <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.025] p-4">

                <GiCrossedSwords
                  size={21}
                  className="text-yellow-400"
                />

                <p className="mt-3 text-xl font-black">
                  0
                </p>

                <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-gray-600">
                  Power
                </p>

              </div>

            </div>

          </section>


          {/* ROYAL ACHIEVEMENTS */}

          <section className="mt-7 rounded-2xl border border-yellow-500/10 bg-white/[0.02] p-5">

            <div className="flex items-start gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.06]">

                <Shield
                  size={19}
                  className="text-yellow-400"
                />

              </div>

              <div>

                <p className="text-sm font-bold">
                  Royal Achievements
                </p>

                <p className="mt-1.5 text-[11px] leading-5 text-gray-600">
                  Your Royal Achievements will appear here as
                  you progress through the Kingdom.
                </p>

              </div>

            </div>

          </section>


          {/* COMING SOON */}

          <section className="mt-7 rounded-2xl border border-yellow-500/10 bg-white/[0.02] p-5">

            <p className="text-[9px] font-semibold uppercase tracking-[2px] text-yellow-400">
              Coming Soon
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-600">
              New Royal Ranks, Royal Standards and Kingdom
              progression events will be introduced as the
              Kingdom evolves.
            </p>

          </section>


          {/* FOOTER */}

          <div className="pb-5 pt-8 text-center">

            <p className="text-[9px] uppercase tracking-[2px] text-gray-700">
              Build your Kingdom. Earn your place.
            </p>

          </div>

        </div>


        <RoyalNavigation />

      </main>
    </ProtectedApp>
  );
}