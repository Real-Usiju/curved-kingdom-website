"use client";

import {
  Mail,
  ShieldCheck,
  LogOut,
  KeyRound,
  Settings,
  ChevronRight,
  LockKeyhole,
} from "lucide-react";

import ProtectedApp from "../../components/ProtectedApp";
import RoyalNavigation from "../../components/RoyalNavigation";

export default function AccountPage() {
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
              Account
            </p>

            <h1 className="mt-1 text-3xl font-black tracking-tight">
              Account
            </h1>

            <p className="mt-1.5 text-xs leading-5 text-gray-500">
              Manage your account and security.
            </p>

          </section>


          {/* ACCOUNT STATUS */}

          <section className="mt-6 rounded-2xl border border-yellow-500/15 bg-white/[0.025] p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.06]">

                <ShieldCheck
                  size={20}
                  className="text-yellow-400"
                />

              </div>

              <div className="min-w-0 flex-1">

                <p className="text-sm font-bold">
                  Account Protected
                </p>

                <p className="mt-1 text-[11px] text-gray-600">
                  Your Kingdom account is currently active.
                </p>

              </div>

              <div className="h-2 w-2 rounded-full bg-yellow-400" />

            </div>

          </section>


          {/* ACCOUNT */}

          <section className="mt-7">

            <div className="mb-3 flex items-center gap-3">

              <div className="h-px flex-1 bg-yellow-500/15" />

              <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[2.5px] text-yellow-400">
                Account Controls
              </p>

              <div className="h-px flex-1 bg-yellow-500/15" />

            </div>


            <div className="space-y-3">

              {/* EMAIL */}

              <button
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
                "
              >

                <div className="
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
                ">

                  <Mail
                    size={19}
                    className="text-yellow-400"
                  />

                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-sm font-bold">
                    Email
                  </p>

                  <p className="mt-0.5 text-[11px] text-gray-600">
                    Manage your account email.
                  </p>

                </div>

                <ChevronRight
                  size={17}
                  className="shrink-0 text-gray-600"
                />

              </button>


              {/* PASSWORD */}

              <button
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
                "
              >

                <div className="
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
                ">

                  <KeyRound
                    size={19}
                    className="text-yellow-400"
                  />

                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-sm font-bold">
                    Password & Security
                  </p>

                  <p className="mt-0.5 text-[11px] text-gray-600">
                    Manage your account security.
                  </p>

                </div>

                <ChevronRight
                  size={17}
                  className="shrink-0 text-gray-600"
                />

              </button>


              {/* ACCOUNT SETTINGS */}

              <button
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
                "
              >

                <div className="
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
                ">

                  <Settings
                    size={19}
                    className="text-yellow-400"
                  />

                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-sm font-bold">
                    Account Preferences
                  </p>

                  <p className="mt-0.5 text-[11px] text-gray-600">
                    More account controls will appear here.
                  </p>

                </div>

                <LockKeyhole
                  size={17}
                  className="shrink-0 text-gray-600"
                />

              </button>

            </div>

          </section>


          {/* FUTURE */}

          <section className="mt-7 rounded-2xl border border-yellow-500/10 bg-white/[0.02] p-5">

            <p className="text-[9px] font-semibold uppercase tracking-[2px] text-yellow-400">
              Coming Soon
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-600">
              Additional account, privacy and security controls
              will be introduced as the Kingdom evolves.
            </p>

          </section>


          {/* SIGN OUT */}

          <section className="mt-7">

            <button
              type="button"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-red-500/10
                bg-red-500/[0.03]
                px-4
                py-3.5
                text-sm
                font-semibold
                text-red-400
              "
            >

              <LogOut size={17} />

              Sign Out

            </button>

          </section>


          {/* FOOTER */}

          <div className="pb-5 pt-8 text-center">

            <p className="text-[9px] uppercase tracking-[2px] text-gray-700">
              Protect your Kingdom. Protect your identity.
            </p>

          </div>

        </div>


        <RoyalNavigation />

      </main>
    </ProtectedApp>
  );
}