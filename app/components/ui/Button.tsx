import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-yellow-500 text-black hover:bg-yellow-400",
    secondary:
      "border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black",
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        px-8 py-4 rounded-full
        font-semibold transition-all duration-300
        ${styles[variant]}
      `}
    >
      {children}
    </Link>
  );
}