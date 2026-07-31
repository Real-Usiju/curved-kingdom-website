import Image from "next/image";
import Link from "next/link";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl border border-yellow-500/20 p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Curved Kingdom Logo"
            width={140}
            height={140}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-yellow-400 text-center">
          Join Curved Kingdom
        </h1>

        {/* Description */}
        <p className="text-center text-gray-400 mt-4">
          Become one of the first citizens of the Curved Kingdom ecosystem.
        </p>

        {/* Buttons */}
        <div className="mt-10 space-y-4">

          <Link href="/register">
            <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold hover:bg-yellow-400 transition">
              Continue with Email
            </button>
          </Link>

          <button className="w-full border border-yellow-500 text-yellow-400 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition">
            Continue with Phone Number
          </button>

        </div>

      </div>
    </main>
  );
}