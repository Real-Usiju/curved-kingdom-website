"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  Crown,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import ProtectedApp from "../../components/ProtectedApp";
import RoyalNavigation from "../../components/RoyalNavigation";

import { auth } from "../../../lib/firebase";
import {
  CitizenProfile,
  getCitizenProfile,
} from "../../services/user";


const royalStandards: Record<string, string> = {
  "Early Citizen":
    "/royal-standards/early-citizen.jpg",

  Guardian:
    "/royal-standards/guardian.jpg",

  "Kingdom Lord":
    "/royal-standards/kingdom-lord.jpg",

  "Celestial Empire":
    "/royal-standards/celestial-empire.jpg",
};


export default function AppearancePage() {

  const [citizen, setCitizen] =
    useState<CitizenProfile | null>(null);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (currentUser) => {

          if (!currentUser) {
            setCitizen(null);
            setLoading(false);
            return;
          }


          try {

            const profile =
              await getCitizenProfile(
                currentUser.uid
              );

            setCitizen(profile);

          } catch (error) {

            console.error(
              "Appearance profile error:",
              error
            );

          } finally {

            setLoading(false);

          }

        }
      );


    return () => unsubscribe();

  }, []);


  /* =========================
     LOADING
  ========================= */

  if (loading) {

    return (
      <ProtectedApp>

        <main className="min-h-screen bg-black text-white">

          <div className="flex min-h-screen items-center justify-center">

            <p className="text-sm text-yellow-400">
              Entering Appearance...
            </p>

          </div>

          <RoyalNavigation />

        </main>

      </ProtectedApp>
    );

  }


  /* =========================
     NO PROFILE
  ========================= */

  if (!citizen) {

    return (
      <ProtectedApp>

        <main className="min-h-screen bg-black pb-24 text-white">

          <div className="flex min-h-[80vh] items-center justify-center px-6">

            <p className="text-center text-sm text-gray-500">
              Your Royal Identity could not be found.
            </p>

          </div>

          <RoyalNavigation />

        </main>

      </ProtectedApp>
    );

  }


  /* =========================
     KINGDOM DATA
  ========================= */

  const role =
    citizen.royalRank ||
    "Early Citizen";


  const kingdomName =
    citizen.kingdomName ||
    citizen.fullName ||
    "Citizen";


  const currentStandard =
    royalStandards[role] ||
    "/royal-standards/early-citizen.jpg";


  return (
    <ProtectedApp>

      <main className="min-h-screen bg-black pb-28 text-white">

        <div className="mx-auto w-full max-w-md px-4">


          {/* HEADER */}

          <section className="pt-7">

            <button
              type="button"
              onClick={() =>
                window.history.back()
              }
              className="mb-5 text-xs text-gray-500"
            >
              ← Capital
            </button>


            <p className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[3px]
              text-yellow-400
            ">
              Appearance
            </p>


            <h1 className="
              mt-1
              text-3xl
              font-black
            ">
              Kingdom Appearance
            </h1>


            <p className="
              mt-1.5
              text-xs
              leading-5
              text-gray-500
            ">
              Shape the visual identity of your Kingdom.
            </p>

          </section>



          {/* CURRENT STANDARD */}

          <section className="mt-6">


            <div className="
              mb-3
              flex
              items-center
              gap-3
            ">

              <div className="
                h-px
                flex-1
                bg-yellow-500/15
              " />


              <p className="
                whitespace-nowrap
                text-[9px]
                font-semibold
                uppercase
                tracking-[2.5px]
                text-yellow-400
              ">
                Current Standard
              </p>


              <div className="
                h-px
                flex-1
                bg-yellow-500/15
              " />

            </div>



            <div className="
              relative
              h-48
              overflow-hidden
              rounded-2xl
              border
              border-yellow-500/20
            ">


              <Image
                src={currentStandard}
                alt="Current Royal Standard"
                fill
                priority
                className="object-cover"
              />


              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/95
                via-black/45
                to-black/10
              " />


              <div className="
                absolute
                bottom-4
                left-4
                right-4
              ">


                <div className="
                  flex
                  items-center
                  gap-2
                ">

                  <Crown
                    size={17}
                    className="text-yellow-400"
                  />

                  <p className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-yellow-400
                  ">
                    {role}
                  </p>

                </div>


                <h2 className="
                  mt-1
                  text-2xl
                  font-black
                ">
                  {kingdomName}
                </h2>


              </div>

            </div>


          </section>



          {/* AVAILABLE STANDARDS */}

          <section className="mt-7">


            <div className="
              mb-3
              flex
              items-center
              gap-3
            ">

              <div className="
                h-px
                flex-1
                bg-yellow-500/15
              " />


              <p className="
                whitespace-nowrap
                text-[9px]
                font-semibold
                uppercase
                tracking-[2.5px]
                text-yellow-400
              ">
                Royal Standards
              </p>


              <div className="
                h-px
                flex-1
                bg-yellow-500/15
              " />

            </div>



            <div className="space-y-3">


              {/* CURRENT */}

              <div className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-yellow-400/25
                bg-yellow-400/[0.04]
                p-3
              ">


                <div className="
                  relative
                  h-16
                  w-20
                  shrink-0
                  overflow-hidden
                  rounded-xl
                ">

                  <Image
                    src={currentStandard}
                    alt={role}
                    fill
                    className="object-cover"
                  />

                </div>


                <div className="min-w-0 flex-1">

                  <p className="
                    text-[9px]
                    uppercase
                    tracking-[1.5px]
                    text-yellow-400
                  ">
                    Equipped
                  </p>


                  <h3 className="
                    mt-1
                    text-sm
                    font-bold
                  ">
                    {role}
                  </h3>


                </div>


                <Crown
                  size={18}
                  className="shrink-0 text-yellow-400"
                />

              </div>



              {/* LOCKED FUTURE */}

              {[
                "Guardian",
                "Kingdom Lord",
                "Celestial Empire",
              ]
                .filter(
                  (rank) => rank !== role
                )
                .map((rank) => (

                  <div
                    key={rank}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      p-3
                      opacity-70
                    "
                  >

                    <div className="
                      relative
                      h-16
                      w-20
                      shrink-0
                      overflow-hidden
                      rounded-xl
                    ">

                      <Image
                        src={royalStandards[rank]}
                        alt={rank}
                        fill
                        className="
                          object-cover
                          grayscale
                        "
                      />

                      <div className="
                        absolute
                        inset-0
                        bg-black/45
                      " />

                    </div>


                    <div className="min-w-0 flex-1">

                      <p className="
                        text-[9px]
                        uppercase
                        tracking-[1.5px]
                        text-gray-600
                      ">
                        Locked
                      </p>


                      <h3 className="
                        mt-1
                        text-sm
                        font-bold
                        text-gray-400
                      ">
                        {rank}
                      </h3>


                    </div>


                    <LockKeyhole
                      size={18}
                      className="shrink-0 text-gray-600"
                    />

                  </div>

                ))}

            </div>

          </section>



          {/* COMING SOON */}

          <section className="mt-7">


            <div className="
              rounded-2xl
              border
              border-yellow-500/10
              bg-white/[0.02]
              p-5
            ">


              <div className="
                flex
                items-center
                gap-3
              ">

                <div className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-yellow-500/15
                  bg-yellow-500/[0.06]
                ">

                  <Sparkles
                    size={18}
                    className="text-yellow-400"
                  />

                </div>


                <div>

                  <p className="text-sm font-bold">
                    More Appearance Features
                  </p>

                  <p className="
                    mt-1
                    text-[11px]
                    leading-4
                    text-gray-600
                  ">
                    New Kingdom visual features will
                    be introduced in future updates.
                  </p>

                </div>

              </div>

            </div>

          </section>



          {/* FOOTER */}

          <div className="
            pb-5
            pt-8
            text-center
          ">

            <p className="
              text-[9px]
              uppercase
              tracking-[2px]
              text-gray-700
            ">
              Your Kingdom. Your Appearance.
            </p>

          </div>


        </div>


        <RoyalNavigation />

      </main>

    </ProtectedApp>
  );
}