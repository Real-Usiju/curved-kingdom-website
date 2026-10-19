
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2, Landmark } from "lucide-react";

const navigationItems = [
  {
    label: "Kingdom",
    href: "/kingdom",
    icon: Globe2,
  },
  {
    label: "Palace",
    href: "/palace",
    icon: Landmark,
  },
];

export default function RoyalNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Royal Navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#020914] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto grid max-w-xl grid-cols-2">
        {navigationItems.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="flex min-h-[68px] flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#35E8FF]"
            >
              <Icon
                aria-hidden="true"
                className={`h-6 w-6 transition-colors duration-200 ${
                  active ? "text-[#35E8FF]" : "text-white/50"
                }`}
                strokeWidth={active ? 2.2 : 1.7}
              />

              <span
                className={`text-xs tracking-wide transition-colors duration-200 ${
                  active
                    ? "font-bold text-[#35E8FF]"
                    : "font-medium text-white/50"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

