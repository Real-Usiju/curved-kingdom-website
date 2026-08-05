"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Shield,
  Sparkles,
  ScrollText,
} from "lucide-react";

const benefits = [
  {
    title: "Royal Recognition",
    description:
      "Be remembered as one of the first citizens who believed in Curved Kingdom.",
    icon: Crown,
  },
  {
    title: "Exclusive Access",
    description:
      "Receive early access to new Kingdom features before the public.",
    icon: Shield,
  },
  {
    title: "Shape The Future",
    description:
      "Help influence the direction of the Kingdom with your ideas and feedback.",
    icon: Sparkles,
  },
  {
    title: "Leave A Legacy",
    description:
      "Your name becomes part of the Kingdom's founding history.",
    icon: ScrollText,
  },
];

export default function FoundingCitizen() {
  return (
    <section
      id="founding"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-162.5
            w-162.5
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-yellow-500
            blur-[220px]
          "
        />

      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[8px] text-yellow-400">
            Founding Citizens
          </p>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Join The First Generation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Every great civilization remembers those who stood at the beginning.
            Become one of the first citizens to shape the future of Curved Kingdom.
          </p>

        </motion.div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6">
                    {benefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (

              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
  group
  rounded-[28px]
  border
  border-yellow-500/20
  bg-linear-to-br
  from-[#111111]
  to-[#1b1b1b]
  p-6
  shadow-[0_0_25px_rgba(255,200,0,0.08)]
  transition-all
  duration-500
  hover:border-yellow-400/50
  hover:shadow-[0_0_35px_rgba(255,200,0,0.15)]
  sm:p-8
"
                
              >

                <div className="flex flex-col items-center text-center">

                  <div
                    className="
  flex
  h-16
  w-16
  items-center
  justify-center
  rounded-full
  border
  border-yellow-500/30
  bg-yellow-500/10
  transition-all
  duration-500
  group-hover:bg-yellow-500/20
  group-hover:scale-110
  sm:h-20
  sm:w-20
"
                  >
                    <Icon
  size={30}
                      className="
                        text-yellow-400
                        transition-transform
                        duration-500
                        group-hover:rotate-6
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <p className="mt-5 text-xs uppercase tracking-[5px] text-yellow-400">
                    Founding Benefit
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:mt-5 sm:text-lg sm:leading-8">
                    {benefit.description}
                  </p>

                </div>

              </motion.div>

            );

          })}
                  </div>

        {/* Bottom Call To Action */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto h-0.5 bg-yellow-500"
          />

          <h3 className="mt-8 text-2xl font-black text-white sm:text-3xl md:text-4xl lg:text-5xl">
            The Kingdom Awaits You
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
            This is more than joining a platform. It is becoming part of the
            beginning of a digital civilization. The first citizens will always
            be remembered as those who helped shape the future of Curved Kingdom.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(255,200,0,0.45)",
            }}
            whileTap={{ scale: 0.96 }}
            className="
  mt-8
  w-full
  rounded-full
  bg-yellow-500
  px-8
  py-4
  text-base
  font-bold
  text-black
  transition
  hover:bg-yellow-400
  sm:mt-10
  sm:w-auto
  sm:px-10
"
          >
            Become A Founding Citizen
          </motion.button>

          <p className="mt-6 text-sm tracking-[3px] uppercase text-yellow-400/80">
            The Kingdom remembers its first citizens.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-12 h-0.5 bg-yellow-500"
          />
        </motion.div>

      </div>
    </section>
  );
}