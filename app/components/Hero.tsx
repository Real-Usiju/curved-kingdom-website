"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";


export default function Hero() {
  return (
    <section className="
      relative min-h-screen 
      flex items-center justify-center
      overflow-hidden
      bg-black
    ">

      {/* Background */}
      <div
        className="
        absolute inset-0
        bg-cover bg-center
        opacity-40
        "
        style={{
          backgroundImage:
          "url('/kingdom-bg.jpg')"
        }}
      />

      {/* Golden Glow */}
      <div className="
        absolute
        w-125
        h-125
        bg-yellow-500/20
        rounded-full
        blur-3xl
      "/>


      <motion.div
        initial={{
          opacity:0,
          y:50
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:1
        }}
        className="
        relative z-10
        text-center
        px-6
        "
      >

        {/* Logo */}
        <motion.div
          animate={{
            scale:[1,1.05,1]
          }}
          transition={{
            repeat:Infinity,
            duration:3
          }}
        >

          <Image
            src="/logo.png"
            width={180}
            height={180}
            alt="Curved Kingdom Logo"
            className="mx-auto"
          />

        </motion.div>


        <h1 className="
          mt-8
          text-5xl
          md:text-7xl
          font-bold
          text-yellow-400
        ">
          THE DIGITAL KINGDOM
          <br/>
          IS BEING BUILT
        </h1>


        <p className="
          mt-6
          max-w-2xl
          mx-auto
          text-gray-300
          text-lg
        ">
          A new digital ecosystem where
          creativity, connection, identity,
          and opportunities come together.
        </p>


        <div className="
          mt-10
          flex
          justify-center
          gap-5
          flex-wrap
        ">

          <button className="
            bg-yellow-500
            text-black
            px-8
            py-4
            rounded-full
            font-bold
          ">
            Become An Early Citizen
          </button>


          <button className="
            border
            border-yellow-500
            text-yellow-400
            px-8
            py-4
            rounded-full
          ">
            Discover The Vision
          </button>

        </div>

      </motion.div>

    </section>
  );
}