"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Crown,
  Mail,
  Globe,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="h-100 w-400 rounded-full bg-yellow-500/10 blur-[160px]" />
      </div>


      <div className="relative mx-auto max-w-7xl px-6 py-20">


        <div className="grid gap-12 lg:grid-cols-4">


          {/* Brand */}
          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/curved-kingdom-logo.png"
                alt="Curved Kingdom"
                width={65}
                height={65}
              />

              <div>

                <h3 className="text-2xl font-bold text-yellow-400">
                  Curved Kingdom
                </h3>

                <p className="text-sm text-gray-500">
                  Digital Civilization
                </p>

              </div>

            </div>


            <p className="mt-6 leading-8 text-gray-400">
              Curved Kingdom is a digital ecosystem where citizens build
              identity, create meaningful connections, discover opportunities,
              and leave a legacy for generations to come.
            </p>

          </div>



          {/* Navigation */}
          <div>

            <h4 className="text-lg font-bold text-white">
              Kingdom Navigation
            </h4>


            <div className="mt-6 flex flex-col gap-4 text-gray-400">

              <a href="#vision">
                Vision
              </a>

              <a href="#features">
                Foundations
              </a>

              <a href="#roadmap">
                Royal Journey
              </a>

              <a href="#community">
                Community
              </a>


              <Link href="/register">
                Claim Your Citizenship
              </Link>

            </div>

          </div>


{/* Social Media */}
<div>

  <h4 className="text-lg font-bold text-white">
    Follow The Kingdom
  </h4>

  <p className="mt-6 text-gray-400 leading-7">
    Join our royal network and stay connected with the journey of
    Curved Kingdom.
  </p>

  <div className="mt-6 flex gap-5">

    <a
      href="https://facebook.com/CurvedKingdomOfficial"
      target="_blank"
      className="text-gray-400 hover:text-yellow-400 transition"
    >
      <FaFacebook size={26} />
    </a>


    <a
      href="https://instagram.com/CurvedKingdomOfficial"
      target="_blank"
      className="text-gray-400 hover:text-yellow-400 transition"
    >
      <FaInstagram size={26} />
    </a>


    <a
      href="https://tiktok.com/@CurvedKingdomOfficial"
      target="_blank"
      className="text-gray-400 hover:text-yellow-400 transition"
    >
      <FaTiktok size={26} />
    </a>


    <a
      href="https://youtube.com/@CurvedKingdomOfficial"
      target="_blank"
      className="text-gray-400 hover:text-yellow-400 transition"
    >
      <FaYoutube size={26} />
    </a>

  </div>

</div>

          
          {/* Contact */}
          <div>


            <h4 className="text-lg font-bold text-white">
              Kingdom Information
            </h4>


            <div className="mt-6 space-y-5 text-gray-400">


              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                future@curvedkingdom.com
              </div>



              <div className="flex items-center gap-3">
                <Globe size={18} className="text-yellow-400" />
                Global Digital Ecosystem
              </div>



              <div className="flex items-center gap-3">
                <Crown size={18} className="text-yellow-400" />
                Building The Future Together
              </div>


            </div>


          </div>


        </div>





        {/* Bottom */}
        <div className="mt-16 border-t border-yellow-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">


          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Curved Kingdom. All Rights Reserved.
          </p>



          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-yellow-500
            px-5
            py-2
            text-yellow-400
            transition
            hover:bg-yellow-500
            hover:text-black
            "
          >

            <ArrowUp size={18} />

            Back to Top

          </button>


        </div>


      </div>


    </footer>
  );
}