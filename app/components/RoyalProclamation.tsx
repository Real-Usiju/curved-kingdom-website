"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export default function RoyalProclamation() {
  return (
    <section
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-130
            w-130
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-yellow-500
            blur-[180px]
          "
        />

      </div>

      {/* Decorative Top Line */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 180 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="mx-auto h-0.5 bg-yellow-500"
      />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Crown */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-10 flex justify-center"
        >

          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-yellow-500/30
              bg-yellow-500/10
            "
          >
            <Crown
              size={44}
              className="text-yellow-400"
            />
          </div>

        </motion.div>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-8 text-center"
        >

          <p className="uppercase tracking-[8px] text-yellow-400">
            The Royal Proclamation
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            A Message
            <br />
            To Every Citizen
          </h2>

        </motion.div>

        {/* Royal Panel */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="
            mt-14
            overflow-hidden
            rounded-[36px]
            border
            border-yellow-500/20
            bg-linear-to-br
            from-[#111111]
            to-[#1b1b1b]
            p-10
            shadow-[0_0_40px_rgba(255,200,0,0.08)]
          "
        >
                    {/* Proclamation Label */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center uppercase tracking-[6px] text-yellow-400"
          >
            Hear The Royal Decree
          </motion.p>

          {/* Main Title */}

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-8 text-center text-4xl font-black leading-tight text-white md:text-6xl"
          >
            We Are Not Building
            <br />

            <span className="text-yellow-400">
              Another Social Platform
            </span>
          </motion.h3>

          {/* Subtitle */}

          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="mt-8 text-center text-2xl font-bold text-yellow-300 md:text-3xl"
          >
            We Are Building A Digital Civilization.
          </motion.h4>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
            className="mx-auto mt-10 max-w-3xl text-center text-lg leading-9 text-gray-300"
          >
            Every citizen deserves a place where identity has meaning,
            every connection has purpose, every idea has value,
            and every contribution becomes part of a lasting legacy.

            <br />
            <br />

            Curved Kingdom exists to unite creators, innovators,
            dreamers, leaders and communities into one digital
            civilization where everyone has a place to belong.
          </motion.p>
        
                  {/* Royal Quote */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-14"
          >
            <div className="mx-auto h-px w-24 bg-yellow-500" />

            <blockquote className="mt-8 text-center text-2xl italic leading-relaxed text-yellow-300 md:text-3xl">
              “The Kingdom is not built by one ruler.
              <br />
              It is built by every citizen.”
            </blockquote>

            <div className="mx-auto mt-8 h-px w-24 bg-yellow-500" />
          </motion.div>

          {/* Call To Action */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(255,200,0,0.45)",
              }}
              whileTap={{ scale: 0.96 }}
              className="
                rounded-full
                bg-yellow-500
                px-10
                py-4
                font-bold
                text-black
                transition
                hover:bg-yellow-400
              "
            >
              Enter The Kingdom
            </motion.button>
          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Decorative Line */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 180 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-16 h-0.5 bg-yellow-500"
      />

    </section>
  );
}