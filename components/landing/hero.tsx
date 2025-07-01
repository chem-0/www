import BackgroundGradient from "../commons/background-gradient";
import { Button } from "../ui/button";

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
        <a href="https://cal.com/chem0/secret" target="_blank">Book a Demo</a>
      </Button>
    </div>
  );
}

