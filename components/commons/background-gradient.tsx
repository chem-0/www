"use client";

import { motion } from "motion/react";

export default function BackgroundGradient ({ className }: { className?: string }) {
  return (
    <motion.svg
      className={`absolute max-w-[500px] opacity-80 scale-75 top-1/2 left-1/2 -translate-y-2/3 -translate-x-1/2 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#a896ff">
            <animate
              attributeName="stop-color"
              values="#a896ff; #67e8f9; #a896ff"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="33%" stopColor="#9370db">
            <animate
              attributeName="stop-color"
              values="#9370db; #70D7F6; #9370db"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="66%" stopColor="#70D7F6">
            <animate
              attributeName="stop-color"
              values="#70D7F6; #9370db; #70D7F6"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#67e8f9">
            <animate
              attributeName="stop-color"
              values="#67e8f9; #a896ff; #67e8f9"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="white" />
      <circle cx="400" cy="300" r="300" fill="url(#grad)" filter="url(#blur)" />
    </motion.svg>
  );
};
