"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  Crown,
  ShieldCheck,
  Zap,
  Users,
  Trophy,
  RefreshCw,
  UserRound,
} from "lucide-react";

import { auth, db } from "../../lib/firebase";
import { RoyalLoader } from "../components/RoyalLoader";
import RoyalNavigation from "../components/RoyalNavigation";

type CitizenProfile = {
  uid?: string;
  fullName?: string;
  email?: string;
  photoURL?: string;
  kingdomName?: string;
  alias?: string;
  royalRank?: string;
  motto?: string;
  alliance?: string;
  biography?: string;
  profileImage?: string;
  bannerImage?: string;
  power?: number;
  citizens?: number;
  glory?: number;
  verified?: boolean;
};

export default function PalacePage() {
  const router = useRouter();

  const [profile, setProfile] = useState<CitizenProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [imageFailed, setImageFailed] = useState(false);

  const loadProfile = useCallback(
    async (uid: string) => {
      setLoading(true);
      setError("");
      setImageFailed(false);

      try {
        const profileSnapshot = await getDoc(doc(db, "users", uid));
        const user = auth.currentUser;

        if (!profileSnapshot.exists()) {
          router.replace("/reforge/identity");
          return;
        }

        const savedProfile = profileSnapshot.data() as CitizenProfile;

        setProfile({
          ...savedProfile,
          uid,
          profileImage:
            savedProfile.profileImage ||
            user?.photoURL ||
            savedProfile.photoURL ||
            "",
          photoURL: user?.photoURL || savedProfile.photoURL || "",
          fullName: savedProfile.fullName || user?.displayName || "",
          email: savedProfile.email || user?.email || "",
        });
      } catch (err) {
        console.error("Unable to load Palace:", err);
        setError("Your Palace could not be opened. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [router],
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
        return;
      }

      void loadProfile(user.uid);
    });

    return () => unsubscribe();
  }, [loadProfile, router]);

  const displayName =
    profile?.kingdomName ||
    profile?.fullName ||
    profile?.alias ||
    "Unnamed Citizen";

  const royalRole = profile?.royalRank || "Citizen";
  const portrait = profile?.profileImage || profile?.photoURL || "";
  const banner = profile?.bannerImage || "";

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020914] px-6 pb-24 text-center text-white">
        <div className="flex flex-col items-center">
          <RoyalLoader size={64} />
          <p className="mt-4 text-sm text-white/60">
            Opening your Palace...
          </p>
        </div>
        <RoyalNavigation />
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#020914] px-6 pb-28 text-center text-white">
        <ShieldCheck className="mb-4 h-10 w-10 text-[#35E8FF]" />
        <p className="max-w-sm text-sm text-white/70">{error}</p>

        <button
          type="button"
          onClick={() => {
            const user = auth.currentUser;
            if (user) void loadProfile(user.uid);
          }}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#35E8FF] transition-colors hover:text-[#FFD700]"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>

        <RoyalNavigation />
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="min-h-screen bg-[#020914] pb-28 text-white">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <Crown className="mx-auto h-10 w-10 text-[#FFD700]" />

          <h1 className="mt-5 text-2xl font-bold">Your Palace Awaits</h1>

          <p className="mt-3 text-sm text-white/60">
            Your Royal Identity is not available yet. Forge your identity to
            establish your Palace.
          </p>

          <button
            type="button"
            onClick={() => router.push("/reforge/identity")}
            className="mt-7 min-h-11 font-semibold text-[#FFD700] transition-colors hover:text-[#35E8FF]"
          >
            Forge Your Royal Identity
          </button>
        </div>

        <RoyalNavigation />
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020914] pb-28 text-white">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
        <header className="mb-7">
          <h1 className="text-3xl font-bold tracking-tight text-[#FFD700] sm:text-4xl">
            Palace
          </h1>

          <p className="mt-2 text-sm text-white/60">
            Your identity, power and legacy.
          </p>
        </header>

        <section className="animate-in fade-in duration-500">
          {banner && (
            <div className="h-28 overflow-hidden sm:h-44">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={banner}
                alt="Palace banner"
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="mt-5 flex items-center gap-4 sm:gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 sm:h-28 sm:w-28">
              {portrait && !imageFailed ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={portrait}
                  src={portrait}
                  alt={`${displayName} portrait`}
                  referrerPolicy="no-referrer"
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <UserRound className="h-9 w-9 text-[#35E8FF]" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="break-words text-xl font-bold sm:text-3xl">
                  {displayName}
                </h2>

                {profile.verified && (
                  <ShieldCheck
                    className="h-5 w-5 shrink-0 text-[#35E8FF]"
                    aria-label="Verified Royal Identity"
                  />
                )}
              </div>

              <p className="mt-2 text-sm font-medium text-[#FFD700]">
                <Crown className="mr-2 inline h-4 w-4" />
                {royalRole}
              </p>

              {profile.motto && (
                <p className="mt-2 whitespace-pre-wrap break-words text-sm italic leading-6 text-white/70">
                  {profile.motto}
                </p>
              )}
            </div>
          </div>

          {profile.biography && (
            <p className="mt-5 whitespace-pre-wrap break-words text-sm leading-6 text-white/70">
              {profile.biography}
            </p>
          )}

          {profile.alliance && (
            <p className="mt-3 text-sm text-white/60">
              Alliance:{" "}
              <span className="text-[#35E8FF]">{profile.alliance}</span>
            </p>
          )}
        </section>

        <section
          aria-label="Palace achievements and statistics"
          className="mt-9 grid grid-cols-3 gap-1 sm:gap-6"
        >
          <div className="min-w-0 py-2">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <Zap className="h-4 w-4 shrink-0 text-[#35E8FF] sm:h-5 sm:w-5" />
              <h3 className="text-xs font-semibold text-white/80 sm:text-sm">
                Power
              </h3>
            </div>

            <p className="mt-3 break-words text-xl font-bold text-[#35E8FF] sm:text-3xl">
              {(profile.power ?? 0).toLocaleString()}
            </p>
          </div>

          <div className="min-w-0 py-2">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <Users className="h-4 w-4 shrink-0 text-[#35E8FF] sm:h-5 sm:w-5" />
              <h3 className="text-xs font-semibold text-white/80 sm:text-sm">
                Citizens
              </h3>
            </div>

            <p className="mt-3 break-words text-xl font-bold text-[#35E8FF] sm:text-3xl">
              {(profile.citizens ?? 0).toLocaleString()}
            </p>
          </div>

          <div className="min-w-0 py-2">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <Trophy className="h-4 w-4 shrink-0 text-[#FFD700] sm:h-5 sm:w-5" />
              <h3 className="text-xs font-semibold text-white/80 sm:text-sm">
                Glory
              </h3>
            </div>

            <p className="mt-3 break-words text-xl font-bold text-[#FFD700] sm:text-3xl">
              {(profile.glory ?? 0).toLocaleString()}
            </p>
          </div>
        </section>
      </div>

      <RoyalNavigation />
    </main>
  );
}