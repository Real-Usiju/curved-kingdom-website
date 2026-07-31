"use client";

import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Crown, ShieldCheck, Star } from "lucide-react";

export default function EarlyCitizen() {
  return (
    <section className="relative py-32 bg-linear-to-b from-[#070b15] to-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-125 h-125 bg-yellow-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            rounded-3xl
            border border-yellow-500/20
            bg-white/5
            backdrop-blur-xl
            p-12
            text-center
          "
        >

          <Crown
            size={60}
            className="mx-auto text-yellow-400 mb-6"
          />

          <p className="uppercase tracking-[0.3em] text-yellow-400">
            Early Citizen Program
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Become One Of The First Citizens
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Every great kingdom begins with its first citizens.
            Join Curved Kingdom before launch and help shape the future
            of a new digital world.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-black/30 rounded-2xl p-6 border border-yellow-500/20">
              <ShieldCheck className="mx-auto text-yellow-400 mb-4" size={36}/>
              <h3 className="text-white font-semibold">
                Founder Recognition
              </h3>
              <p className="text-gray-400 mt-3">
                Be remembered as one of the first citizens.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 border border-yellow-500/20">
              <Star className="mx-auto text-yellow-400 mb-4" size={36}/>
              <h3 className="text-white font-semibold">
                Early Access
              </h3>
              <p className="text-gray-400 mt-3">
                Experience new features before the public launch.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 border border-yellow-500/20">
              <Crown className="mx-auto text-yellow-400 mb-4" size={36}/>
              <h3 className="text-white font-semibold">
                Exclusive Badge
              </h3>
              <p className="text-gray-400 mt-3">
                Receive a special Early Citizen badge on your profile.
              </p>
            </div>

          </div>

          <div className="mt-12">
            <Button href="/early-citizen">
              👑 Claim Your Place
            </Button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}