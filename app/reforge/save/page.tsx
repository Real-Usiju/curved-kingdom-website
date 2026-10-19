"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { doc, getDoc, runTransaction, serverTimestamp } from "firebase/firestore";

import { auth, db, storage } from "../../../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  createCitizenProfile,
  updateCitizenProfile,
} from "../../services/user";
import RoyalPortrait from "../components/RoyalPortrait";

const VALID_ROLES = ["King", "Queen", "Prince", "Princess"];

function SaveRoyalIdentityContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const kingdom = searchParams.get("kingdom")?.trim() || "";
  const role = searchParams.get("role") || "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedPortraitFile, setSelectedPortraitFile] =
    useState<File | undefined>();
  const [selectedPortrait, setSelectedPortrait] = useState("");
  const [checkingUser, setCheckingUser] = useState(true);
  const [userReady, setUserReady] = useState(false);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      router.replace("/register");
      return;
    }

    if (!kingdom || !VALID_ROLES.includes(role)) {
      router.replace("/reforge/identity");
      return;
    }

    setSelectedPortrait(currentUser.photoURL || "");
    setUserReady(true);
    setCheckingUser(false);
  }, [kingdom, role, router]);

  const saveIdentity = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setError("Your session has expired. Please return to the Kingdom.");
      router.replace("/register");
      return;
    }

    if (!kingdom || !VALID_ROLES.includes(role)) {
      setError("Your Kingdom Name or Royal Role is missing.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let profileImage = selectedPortrait || currentUser.photoURL || "";

      if (selectedPortraitFile) {
        if (!selectedPortraitFile.type.startsWith("image/")) {
          throw new Error("Please select a valid image file.");
        }

        if (selectedPortraitFile.size > 5 * 1024 * 1024) {
          throw new Error("Your Royal Portrait must be 5 MB or smaller.");
        }

        const extension =
          selectedPortraitFile.name.split(".").pop()?.toLowerCase() || "jpg";

        const portraitRef = ref(
          storage,
          `users/${currentUser.uid}/royal-portrait-${Date.now()}.${extension}`
        );

        await uploadBytes(portraitRef, selectedPortraitFile);
        profileImage = await getDownloadURL(portraitRef);
      }

      const normalizedName = kingdom.toLowerCase();
      const nameRef = doc(db, "kingdom_names", normalizedName);
      const userRef = doc(db, "users", currentUser.uid);

      const existingProfile = await getDoc(userRef);
      const existingNameReservation = await getDoc(nameRef);

      if (
        existingNameReservation.exists() &&
        existingNameReservation.data().uid !== currentUser.uid
      ) {
        throw new Error(
          "This Kingdom Name has already been claimed. Return and choose another name."
        );
      }

      if (existingProfile.exists()) {
        const previousProfile = existingProfile.data();
        const previousKingdom = String(previousProfile.kingdomName || "");
        const previousNormalizedName = previousKingdom.toLowerCase();

        if (
          previousNormalizedName &&
          previousNormalizedName !== normalizedName
        ) {
          const previousNameRef = doc(
            db,
            "kingdom_names",
            previousNormalizedName
          );

          const previousNameSnapshot = await getDoc(previousNameRef);

          if (
            previousNameSnapshot.exists() &&
            previousNameSnapshot.data().uid === currentUser.uid
          ) {
            await runTransaction(db, async (transaction) => {
              const latestNewName = await transaction.get(nameRef);

              if (
                latestNewName.exists() &&
                latestNewName.data().uid !== currentUser.uid
              ) {
                throw new Error(
                  "This Kingdom Name has already been claimed. Choose another."
                );
              }

              transaction.set(
                nameRef,
                {
                  uid: currentUser.uid,
                  kingdomName: kingdom,
                  kingdomNameLower: normalizedName,
                  updatedAt: serverTimestamp(),
                },
                { merge: true }
              );

              transaction.delete(previousNameRef);
            });
          } else {
            await runTransaction(db, async (transaction) => {
              const latestNewName = await transaction.get(nameRef);

              if (
                latestNewName.exists() &&
                latestNewName.data().uid !== currentUser.uid
              ) {
                throw new Error(
                  "This Kingdom Name has already been claimed. Choose another."
                );
              }

              transaction.set(
                nameRef,
                {
                  uid: currentUser.uid,
                  kingdomName: kingdom,
                  kingdomNameLower: normalizedName,
                  updatedAt: serverTimestamp(),
                },
                { merge: true }
              );
            });
          }
        } else {
          await runTransaction(db, async (transaction) => {
            const latestName = await transaction.get(nameRef);

            if (
              latestName.exists() &&
              latestName.data().uid !== currentUser.uid
            ) {
              throw new Error(
                "This Kingdom Name has already been claimed. Choose another."
              );
            }

            transaction.set(
              nameRef,
              {
                uid: currentUser.uid,
                kingdomName: kingdom,
                kingdomNameLower: normalizedName,
                updatedAt: serverTimestamp(),
              },
              { merge: true }
            );
          });
        }

        await updateCitizenProfile(currentUser.uid, {
          fullName: currentUser.displayName || "Citizen",
          email: currentUser.email || "",
          photoURL: profileImage,
          profileImage,
          kingdomName: kingdom,
          royalRank: role,
          alias: "",
          motto: "",
          alliance: "",
          biography: "",
        });
      } else {
        await runTransaction(db, async (transaction) => {
          const latestName = await transaction.get(nameRef);

          if (
            latestName.exists() &&
            latestName.data().uid !== currentUser.uid
          ) {
            throw new Error(
              "This Kingdom Name has already been claimed. Return and choose another."
            );
          }

          transaction.set(
            nameRef,
            {
              uid: currentUser.uid,
              kingdomName: kingdom,
              kingdomNameLower: normalizedName,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            },
            { merge: true }
          );
        });

        await createCitizenProfile(
          currentUser.uid,
          currentUser.displayName || "Citizen",
          currentUser.email || "",
          profileImage,
          kingdom,
          "",
          role,
          "",
          "",
          ""
        );
      }

      router.replace("/palace");
    } catch (err) {
      console.error("Royal Identity save error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "The Kingdom could not establish your identity. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (checkingUser || !userReady) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020914] px-5 text-[#45B8E8]">
        Preparing your Royal Identity...
      </main>
    );
  }

  const currentUser = auth.currentUser;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020914] px-4 py-10 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#278DBB]/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#D4AF37]/[0.07] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020914_80%)]" />
      </div>

      <div className="relative z-10 w-full max-w-125">
        <section className="relative overflow-hidden rounded-[28px] border border-white/9 bg-[#071321]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:rounded-4xl sm:p-9">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#D4AF37] to-[#45B8E8]" />

          <div className="relative flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#278DBB]/25 bg-linear-to-br from-[#D4AF37]/[0.07] to-[#278DBB]/9">
              <Image
                src="/curved-kingdom-logo.png"
                alt="Curved Kingdom emblem"
                width={90}
                height={90}
                priority
                className="h-17.5 w-17.5 object-contain"
              />
            </div>
          </div>

          <div className="relative mt-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#45B8E8]">
              Final Step · Royal Identity
            </p>

            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              <span className="bg-linear-to-r from-[#D4AF37] via-[#E6C75B] to-[#45B8E8] bg-clip-text text-transparent">
                Establish Your Kingdom
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#9AAEC3]">
              Review your identity, choose your Royal Portrait, and establish
              your place within Curved Kingdom.
            </p>
          </div>

          <div className="relative mt-7 rounded-2xl border border-[#278DBB]/20 bg-[#020914]/70 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#71869C]">
              Kingdom Name
            </p>
            <p className="mt-2 wrap-break-word text-xl font-black text-[#E6C75B]">
              {kingdom}
            </p>

            <div className="my-4 h-px bg-white/[0.07]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#71869C]">
              Royal Role
            </p>
            <p className="mt-2 text-lg font-bold text-[#45B8E8]">{role}</p>
          </div>

          <div className="relative mt-6 rounded-2xl border border-white/8 bg-white/2.5 p-5">
            <h2 className="mb-4 text-left text-sm font-bold text-white">
              Your Royal Portrait
            </h2>

            <RoyalPortrait
              googlePhotoURL={currentUser?.photoURL || ""}
              displayName={currentUser?.displayName || "Citizen"}
              onPortraitChange={(photoURL, file) => {
                setSelectedPortrait(photoURL);
                setSelectedPortraitFile(file);
              }}
            />

            <p className="mt-4 text-left text-xs leading-5 text-[#71869C]">
              Your Google photo is selected by default. You may upload a
              different image, up to 5 MB.
            </p>
          </div>

          <div className="relative mt-5 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/4 p-4">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-[#E6C75B]"
              />
              <div>
                <p className="text-sm font-bold text-white">
                  Your identity, your legacy
                </p>
                <p className="mt-1 text-xs leading-5 text-[#9AAEC3]">
                  Your Royal Motto and Biography can be added later from your
                  Palace. Your Power, Citizens, and Glory records are preserved
                  when an existing identity is updated.
                </p>
              </div>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              aria-live="polite"
              className="mt-5 rounded-xl border border-red-400/20 bg-red-400/6 px-4 py-3 text-sm leading-6 text-red-300"
            >
              {error}
            </p>
          )}

          <button
            type="button"
            disabled={loading}
            onClick={() => void saveIdentity()}
            className="relative mt-7 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/40 bg-linear-to-rrom-[#D4AF37] via-[#E6C75B] to-[#45B8E8] px-5 py-4 text-sm font-extrabold text-[#020914] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#020914]/30 border-t-[#020914]" />
                Establishing Your Kingdom...
              </>
            ) : (
              <>
                <CheckCircle2 size={18} />
                Save Royal Identity
              </>
            )}
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={() =>
              router.push(
                `/reforge/role?kingdom=${encodeURIComponent(
                  kingdom
                )}&role=${encodeURIComponent(role)}`
              )
            }
            className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-[#9AAEC3] transition hover:border-[#278DBB]/40 hover:text-white disabled:opacity-50"
          >
            <ArrowLeft size={16} />
            Back to Royal Role
          </button>

          <p className="relative mt-5 text-center text-xs leading-5 text-[#71869C]">
            Your Kingdom. Your Power. Your Legacy.
          </p>
        </section>
      </div>
    </main>
  );
}

export default function SaveRoyalIdentityPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#020914] text-sm text-[#45B8E8]">
          Preparing your Royal Identity...
        </main>
      }
    >
      <SaveRoyalIdentityContent />
    </Suspense>
  );
}