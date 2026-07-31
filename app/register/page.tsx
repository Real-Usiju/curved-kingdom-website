"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      await setDoc(doc(db, "users", userCredential.user.uid), {
  uid: userCredential.user.uid,

  // Personal
  fullName,
  email,

  // Kingdom Identity
  kingdomName: fullName,
  alias: "",
  motto: "Strength Through Unity",
  profileImage: "",
  bannerImage: "",

  // Kingdom Status
  royalRank: "Early Citizen",
  power: 0,
  citizens: 0,
  glory: 0,
  proclamations: 0,

  // Social
  followers: 0,
  following: 0,
  totalSupport: 0,

  verified: false,

  createdAt: serverTimestamp(),
});


      router.push("/welcome");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black flex items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md rounded-3xl border border-yellow-500/30 bg-black/70 backdrop-blur-lg p-8 shadow-2xl"
      >
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Curved Kingdom Logo"
            width={120}
            height={120}
            priority
          />

          <h1 className="mt-4 text-center text-4xl font-bold text-yellow-400">
            Welcome to Curved Kingdom
          </h1>

          <p className="mt-2 text-center text-yellow-500 font-semibold">
            Become an Early Citizen
          </p>

          <p className="mt-4 text-center text-gray-300 leading-7">
            The Kingdom where every voice matters, every creator belongs, and
            every citizen helps shape the future.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 text-white placeholder-gray-400 outline-none transition focus:border-yellow-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 text-white placeholder-gray-400 outline-none transition focus:border-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 text-white placeholder-gray-400 outline-none transition focus:border-yellow-400"
          />

          {error && (
            <p className="text-center text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-yellow-500 py-4 text-lg font-bold text-black transition hover:bg-yellow-400 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Start Your Journey"}
          </button>
        </form>

        {/* Sign In */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Already an Early Citizen?
          </p>

          <Link
            href="/login"
            className="mt-2 inline-block font-semibold text-yellow-400 hover:text-yellow-300"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </main>
  );
}