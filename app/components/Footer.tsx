"use client";

import {
  
  Mail
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              👑 Curved Kingdom
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              The digital kingdom where people connect,
              create, discover, and grow.
            </p>
          </div>


          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Explore
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Vision</li>
              <li>Features</li>
              <li>Roadmap</li>
              <li>Community</li>
            </ul>
          </div>


          {/* Social */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Follow The Kingdom
            </h3>

            <div className="flex gap-4">

      
                  
              
              <Mail className="text-yellow-400" />

            </div>

          </div>

        </div>


        <div className="
          mt-12
          pt-8
          border-t
          border-white/10
          text-center
          text-gray-500
        ">

          © {new Date().getFullYear()} Curved Kingdom.
          The Kingdom Is Only Beginning.

        </div>

      </div>

    </footer>
  );
}