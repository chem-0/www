import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="w-full z-10 h-dvh max-h-[1000px]  relative flex flex-col pt-[100px] items-center justify-center">
      <div className="inset-0 bg-white/40 absolute z-20 backdrop-blur-2xl" />
      <BackgroundGradient />
      <h1 className="text-7xl z-30 relative font-semibold text-center tracking-tighter leading-[1.3]  mb-4">
        Experience <span className="carbon cursor-pointer">C</span>
        hemistry <br /> Like Never Before.
      </h1>
      <p className="text-lg z-30 relative mt-2 mb-8 text-center">
        Building Al-Powered simulations Engine for chemical reactions to <br />
        visualize, experiment, and innovate.
      </p>

      <Button
        size={"lg"}
        className="bg-client-lab-secondary border-none z-30 relative font-bold text-white hover:bg-client-lab-secondary/70 hover:text-white mb-36"
        variant="outline"
        asChild
      >
        <a href="https://form.typeform.com/to/rFg5lg5E" target="_blank">Contact Us</a>
      </Button>
    </div>
  );
}

export const BackgroundGradient = ({ className }: { className?: string }) => {
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
          <stop offset="0%" stop-color="#a896ff">
            <animate
              attributeName="stop-color"
              values="#a896ff; #67e8f9; #a896ff"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="33%" stop-color="#9370db">
            <animate
              attributeName="stop-color"
              values="#9370db; #70D7F6; #9370db"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="66%" stop-color="#70D7F6">
            <animate
              attributeName="stop-color"
              values="#70D7F6; #9370db; #70D7F6"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stop-color="#67e8f9">
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
