"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signIn = async () => {
  setError("");

  if (!email || !password) {
    setError("Please enter your email and password.");
    return;
  }

  try {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password);

    router.push("/dashboard");
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8">

        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Curved Kingdom"
            width={90}
            height={90}
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-yellow-400">
          Welcome Back
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Enter the Kingdom
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 rounded-xl bg-black border border-gray-700 p-4 text-white outline-none focus:border-yellow-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 rounded-xl bg-black border border-gray-700 p-4 text-white outline-none focus:border-yellow-500"
        />

        <>
  {error && (
    <p className="text-red-400 text-sm mb-4">
      {error}
    </p>
  )}

  <button
    onClick={signIn}
    disabled={loading}
    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition disabled:opacity-50"
  >
    {loading ? "Signing In..." : "Sign In"}
  </button>
</>
        <Link href="/register">
          <button className="w-full mt-4 border border-yellow-500 text-yellow-400 py-4 rounded-xl hover:bg-yellow-500/10 transition">
            Create Account
          </button>
        </Link>
      </div>
    </main>
  );
}