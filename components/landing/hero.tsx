import BackgroundGradient from "../commons/background-gradient";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="w-full z-10 min-h-screen relative flex flex-col items-center justify-center px-6 py-20 md:py-28">
      <div className="inset-0 bg-white/40 absolute z-20 backdrop-blur-2xl" />
      <BackgroundGradient />
      
      <div className="max-w-4xl mx-auto z-30 flex flex-col items-center">
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl relative font-semibold text-center tracking-tighter leading-[1.1] md:leading-[1.2]">
          Experience{" "}
          <span className="inline-block">
            <span className="carbon cursor-pointer">C</span>hemistry
          </span>
          <br />
          <span className="block mt-1">Like Never Before.</span>
        </h1>
        
        <p className="text-base sm:text-lg relative mt-6 md:mt-8 text-center max-w-[90%] md:max-w-2xl mx-auto">
          Building Al-Powered simulations Engine for chemical reactions to
          <br className="hidden md:block" /> visualize, experiment, and innovate.
        </p>

        <Button
          size={"lg"}
          className="bg-client-lab-secondary border-none relative font-bold text-white hover:bg-client-lab-secondary/70 hover:text-white mt-8 md:mt-12 w-full sm:w-auto"
          variant="outline"
          asChild
        >
          <a 
            href="https://cal.com/chem0/secret" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6"
          >
            Book a Demo
          </a>
        </Button>
      </div>
    </div>
  );
}

