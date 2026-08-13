"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Castle,
  Globe,
  Crown,
  Landmark,
} from "lucide-react";

const navigation = [
  {
    name: "Kingdom",
    href: "/kingdom",
    icon: Castle,
  },
  {
    name: "Dominion",
    href: "/dominion",
    icon: Globe,
  },
  {
    name: "Temple",
    href: "/temple",
  },
  {
    name: "Palace",
    href: "/palace",
    icon: Crown,
  },
  {
    name: "Capital",
    href: "/capital",
    icon: Landmark,
  },
];

function FlyingDove({ active }: { active: boolean }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="4 10 56 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "text-yellow-400" : "text-gray-500"}
    >
      {/* Flying dove */}
      <path
        d="M7 34C15 30 22 23 27 15C29 12 33 12 34 16C35 20 34 24 32 28C39 24 47 20 56 21C53 25 49 28 44 30C50 31 55 34 58 38C51 39 44 38 38 35C34 39 29 43 22 45C16 47 11 44 7 40C11 39 15 37 18 34C14 35 10 35 7 34Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wing */}
      <path
        d="M20 34C27 32 33 28 38 24C34 31 30 36 24 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dove tail */}
      <path
        d="M18 34L10 28M18 35L9 41"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function RoyalNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-500/20 bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-md items-center justify-around px-1">
        {navigation.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative flex h-full min-w-[60px] flex-col items-center justify-center gap-1"
            >
              {item.name === "Temple" ? (
                <FlyingDove active={active} />
              ) : (
                item.icon && (
                  <item.icon
                    size={22}
                    strokeWidth={active ? 2.5 : 1.8}
                    className={
                      active
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }
                  />
                )
              )}

              <span
                className={`text-[9px] font-semibold uppercase tracking-wider ${
                  active
                    ? "text-yellow-400"
                    : "text-gray-500"
                }`}
              >
                {item.name}
              </span>

              {active && (
                <span className="absolute bottom-0 h-[2px] w-8 rounded-full bg-yellow-400" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}