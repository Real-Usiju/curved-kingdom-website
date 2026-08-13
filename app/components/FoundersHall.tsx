"use client";

import { motion } from "framer-motion";
import {
  Crown,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const founders = [
  {
    number: "001",
    title: "Founding Citizen",
  },
  {
    number: "002",
    title: "Founding Citizen",
  },
  {
    number: "003",
    title: "Founding Citizen",
  },
];

export default function FoundersHall() {
  return (
    <section
      id="founders"
      className="relative overflow-hidden bg-[#050505] py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-125
            w-125
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-yellow-500
            blur-[190px]
            sm:h-162.5
            sm:w-162.5
          "
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-yellow-500/30
                bg-yellow-500/10
                shadow-[0_0_30px_rgba(234,179,8,0.12)]
              "
            >
              <Crown
                size={27}
                className="text-yellow-400"
              />
            </div>
          </div>

          <p
            className="
              mt-7
              text-[10px]
              font-semibold
              uppercase
              tracking-[5px]
              text-yellow-400
              sm:text-xs
              sm:tracking-[8px]
            "
          >
            Founder's Hall
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            THE FIRST CITIZENS
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Those who enter during the foundation
            of Curved Kingdom will forever be part
            of its beginning.
          </p>
        </motion.div>

        {/* Founder Cards */}

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-3 lg:gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.number}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-yellow-500/20
                bg-white/[0.035]
                p-7
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-yellow-400/50
                hover:bg-white/5.5
                hover:shadow-[0_0_40px_rgba(234,179,8,0.12)]
                sm:p-8
              "
            >
              {/* Gold Line */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-0.5
                  w-full
                  bg-linear-to-r
                  from-transparent
                  via-yellow-400
                  to-transparent
                  opacity-60
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Crown */}

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-500/30
                  bg-yellow-500/10
                  shadow-[0_0_30px_rgba(234,179,8,0.1)]
                "
              >
                <Crown
                  size={28}
                  className="text-yellow-400"
                />
              </div>

              {/* Founder */}

              <p
                className="
                  mt-7
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-yellow-400
                "
              >
                {founder.title}
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-black
                  text-white
                "
              >
                Citizen #{founder.number}
              </h3>

              {/* Badge */}

              <div
                className="
                  mx-auto
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-yellow-500/20
                  bg-yellow-500/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-yellow-400
                "
              >
                <ShieldCheck size={15} />
                Founder Badge
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-gray-500
                "
              >
                This place is reserved for one
                of the citizens who helped lay
                the foundation of the Kingdom.
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 text-center sm:mt-20"
        >
          <div
            className="
              mx-auto
              h-px
              w-24
              bg-yellow-500
            "
          />

          <div className="mt-8 flex justify-center">
            <Sparkles
              size={22}
              className="text-yellow-400"
            />
          </div>

          <h3
            className="
              mt-5
              text-2xl
              font-black
              text-white
              sm:text-3xl
            "
          >
            Your Place In History Awaits.
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-gray-500
              sm:text-base
            "
          >
            Become one of the citizens who
            helped establish the foundation
            of Curved Kingdom.
          </p>

          <motion.a
            href="/register"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 35px rgba(234,179,8,0.4)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-yellow-500
              px-8
              py-4
              text-sm
              font-bold
              text-black
              transition-all
              duration-300
              hover:bg-yellow-400
              sm:px-10
            "
          >
            Claim Your Place
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}