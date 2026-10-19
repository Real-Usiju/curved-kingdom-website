"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type RoyalLoaderProps = {
  size?: number;
  showMessage?: boolean;
  message?: string;
  fullScreen?: boolean;
};

const COLORS = ["#35E8FF", "#FFD700", "#35E8FF", "#FFD700"];

function KingdomLoader({ size = 120 }: { size?: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      setProgress(((time - startTime) % 2000) / 2000);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const radius = 38;
  const dotRadius = 7;
  const center = 60;

  const positions = [
    { x: center, y: center - radius },
    { x: center + radius, y: center },
    { x: center, y: center + radius },
    { x: center - radius, y: center },
  ];

  const easeInOut = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const dots = positions.map((_, i) => {
    const current = (progress * 4 + i) % 4;
    const fromIndex = Math.floor(current);
    const toIndex = (fromIndex + 1) % 4;
    const movement = current - fromIndex;
    const smoothMovement = easeInOut(movement);

    const from = positions[fromIndex];
    const to = positions[toIndex];

    return {
      x: from.x + (to.x - from.x) * smoothMovement,
      y: from.y + (to.y - from.y) * smoothMovement,
      color: COLORS[i],
      opacity: 0.25 + (1 - Math.sin(movement * Math.PI)) * 0.75,
    };
  });

  const gradientId = React.useId().replace(/:/g, "");
  const scaledSize = Math.max(24, size);

  return (
    <svg
      width={scaledSize}
      height={scaledSize}
      viewBox="0 0 120 120"
      className="block shrink-0 overflow-visible"
      role="img"
      aria-label="Loading Curved Kingdom"
    >
      <defs>
        {COLORS.map((color, i) => (
          <React.Fragment key={i}>
            <filter
              id={`${gradientId}-glow-${i}`}
              x="-150%"
              y="-150%"
              width="400%"
              height="400%"
            >
              <feGaussianBlur stdDeviation="7" />
            </filter>

            <filter
              id={`${gradientId}-inner-glow-${i}`}
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="2.5" />
            </filter>

            <radialGradient
              id={`${gradientId}-gradient-${i}`}
              cx="35%"
              cy="30%"
              r="70%"
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="45%" stopColor={color} />
              <stop offset="100%" stopColor={color} stopOpacity="0.7" />
            </radialGradient>
          </React.Fragment>
        ))}
      </defs>

      {dots.map((dot, i) => (
        <g key={i} opacity={dot.opacity}>
          <circle
            cx={dot.x}
            cy={dot.y}
            r={dotRadius + 8}
            fill={dot.color}
            filter={`url(#${gradientId}-glow-${i})`}
            opacity="0.3"
          />

          <circle
            cx={dot.x}
            cy={dot.y}
            r={dotRadius + 3}
            fill={dot.color}
            filter={`url(#${gradientId}-inner-glow-${i})`}
            opacity="0.22"
          />

          <circle
            cx={dot.x}
            cy={dot.y}
            r={dotRadius}
            fill={`url(#${gradientId}-gradient-${i})`}
          />

          <circle
            cx={dot.x - dotRadius * 0.3}
            cy={dot.y - dotRadius * 0.3}
            r={dotRadius * 0.2}
            fill="white"
            opacity="0.85"
          />
        </g>
      ))}
    </svg>
  );
}

export function RoyalLoader({
  size = 120,
  showMessage = false,
  message = "Preparing Your Kingdom...",
  fullScreen = false,
}: RoyalLoaderProps) {
  const content = (
    <div
      className="flex flex-col items-center justify-center gap-4 text-center"
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <KingdomLoader size={size} />

      {showMessage && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-full text-sm font-medium text-[#35E8FF] sm:text-base"
        >
          {message}
        </motion.p>
      )}
    </div>
  );

  if (!fullScreen) return content;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-[#020914] px-5 py-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8,126,155,0.16), transparent 65%)",
        }}
      />

      <div className="relative z-10">{content}</div>
    </div>
  );
}

const messages = [
  "Awakening the Kingdom...",
  "Forging the Royal Gates...",
  "Preparing Your Arrival...",
  "Welcome, Future Citizen.",
];

export default function RoyalIntro({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setMessageIndex(1), 1800),
      window.setTimeout(() => setMessageIndex(2), 3600),
      window.setTimeout(() => setMessageIndex(3), 5000),
    ];

    const finishTimer = window.setTimeout(onFinish, 6500);

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="kingdom-intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-[#020914] px-5 py-8 text-center"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(8,126,155,0.16), transparent 65%)",
          }}
        />

        <div className="relative z-10 flex w-full max-w-md flex-col items-center">
          <Image
            src="/curved-kingdom-logo.png"
            alt="Curved Kingdom"
            width={240}
            height={240}
            priority
            className="h-32 w-32 shrink-0 object-contain sm:h-40 sm:w-40"
          />

          <h1 className="mt-5 max-w-full wrap-break-wordword text-2xl font-bold tracking-[0.12em] text-[#FFD700] sm:text-3xl">
            CURVED KINGDOM
          </h1>

          <p className="mt-2 text-xs font-medium tracking-[0.25em] text-[#35E8FF] sm:text-sm">
            DIGITAL CIVILIZATION
          </p>

          <div className="mt-7 flex h-30 w-30 shrink-0 items-center justify-center">
            <KingdomLoader />
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-5 min-h-6 max-w-full wrap-break-word text-sm font-medium text-[#35E8FF] sm:text-base"
            >
              {messages[messageIndex]}
            </motion.p>
          </AnimatePresence>

          <div className="mt-7 h-1.5 w-full max-w-65 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-linear-to-r from-[#087E9B] via-[#35E8FF] to-[#FFD700]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6.2, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}