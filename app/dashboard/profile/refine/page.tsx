"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";
import { useKingdom } from "@/hooks/useKingdom";
import { updateKingdomProfile } from "@/lib/kingdom";

export default function RefineRoyalIdentityPage() {
  const router = useRouter();

  const { kingdom } = useKingdom();

  const [kingdomName, setKingdomName] = useState("");
  const [alias, setAlias] = useState("");
  const [motto, setMotto] = useState("");
  const [biography, setBiography] = useState("");

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!kingdom) return;

    setKingdomName(kingdom.kingdomName || "");
    setAlias(kingdom.alias || "");
    setMotto(kingdom.motto || "");
    setBiography(kingdom.biography || "");
  }, [kingdom]);

  const saveRoyalDecree = async () => {
    
    if (!auth.currentUser) return;

    try {
      setSaving(true);

      await updateKingdomProfile(auth.currentUser.uid, {
        kingdomName,
        alias,
        motto,
        biography,
      } as any);

      alert(" Royal Decree has been recorded.");

      router.push("/profile");
    } catch (error) {
      console.error(error);
      alert("Unable to save your Royal Identity.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#081221] px-6 py-10">

      <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-500/20 bg-[#0b1422] p-8">

        {/* Back Button */}
        <Link
          href="/profile"
          className="text-yellow-400 hover:text-yellow-300"
        >
          ← Back to Royal Identity
        </Link>

        {/* Header */}
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold text-yellow-300">
            👑 Refine Royal Identity
          </h1>

          <p className="mt-3 text-gray-400 italic">
            The Kingdom remembers every royal decree.
          </p>
        </div>

        {/* Kingdom Banner */}
        <section className="mt-10">

          <h2 className="mb-4 text-xl font-semibold text-yellow-300">
            🏰 Kingdom Banner
          </h2>

          <div className="h-56 rounded-3xl border border-yellow-500/20 bg-[#081221] flex items-center justify-center text-gray-500">
            Current Kingdom Banner
          </div>

          <button className="mt-4 rounded-xl border border-yellow-500 px-6 py-3 text-yellow-300 hover:bg-yellow-500/10">
            Change Kingdom Banner
          </button>

        </section>

        {/* Royal Portrait */}
        <section className="mt-12 text-center">

          <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-yellow-500 bg-[#081221] text-5xl">
            👑
          </div>

          <button className="mt-5 rounded-xl border border-yellow-500 px-6 py-3 text-yellow-300 hover:bg-yellow-500/10">
            Change Royal Portrait
          </button>

        </section>

        {/* Information */}
        <section className="mt-12 grid gap-6">

          <div>
            <label className="mb-2 block text-yellow-300">
              Kingdom Name
            </label>

            <input
  type="text"
  value={kingdomName}
  onChange={(e) => setKingdomName(e.target.value)}
  className="w-full rounded-2xl border border-yellow-500/20 bg-[#081221] p-4 text-white outline-none focus:border-yellow-400"
/>
          </div>

          <div>
            <label className="mb-2 block text-yellow-300">
              Alias
            </label>

            <input
  type="text"
  value={alias}
  onChange={(e) => setAlias(e.target.value)}
  className="w-full rounded-2xl border border-yellow-500/20 bg-[#081221] p-4 text-white outline-none focus:border-yellow-400"
/>
          </div>

          <div>
            <label className="mb-2 block text-yellow-300">
              Kingdom Motto
            </label>

            <input
  type="text"
  value={motto}
  onChange={(e) => setMotto(e.target.value)}
  className="w-full rounded-2xl border border-yellow-500/20 bg-[#081221] p-4 text-white outline-none focus:border-yellow-400"
/>
          </div>

          <div>
            <label className="mb-2 block text-yellow-300">
              Kingdom Biography
            </label>

            <textarea
  rows={5}
  value={biography}
  onChange={(e) => setBiography(e.target.value)}
  className="w-full rounded-2xl border border-yellow-500/20 bg-[#081221] p-4 text-white outline-none focus:border-yellow-400"
/>
          </div>

        </section>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <button className="flex-1 rounded-2xl border border-yellow-500 py-4 text-yellow-300 hover:bg-yellow-500/10">
            Cancel
          </button>

         <button
  onClick={saveRoyalDecree}
  disabled={saving}
  className="flex-1 rounded-2xl bg-yellow-500 py-4 font-bold text-black hover:bg-yellow-400 disabled:opacity-50"
>
  {saving ? "Saving..." : "👑 Save Royal Decree"}
</button>

        </div>

      </div>

    </main>
  );
}