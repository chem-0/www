import Image from "next/image";
import Scaffold from "../shared/scaffold";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <Scaffold className="!w-full max-w-none relative -z-10 pt-36 bg-gradient-to-b from-blue-500 to-white from-30% to-100% text-white">
      <div className="mx-auto max-w-screen-md flex flex-col gap-2 lg:gap-4 items-center justify-center text-center">
        <span className="text-sm px-2 py-1 bg-white/10 border-white/15 border-2 rounded-full">Pioneering AI-Driven Lab Simulations</span>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">AI-Powered 3D Virtual Labs for Pharmaceutical Education</h1>
        <p>Learn, experiment, and innovate with immersive AI-driven simulations.</p>
        <div className="flex items-center gap-2 mt-4">
          <Button variant={"secondary"}>Request a Demo</Button>
          <Button variant={"ghost"}>Explore Features</Button>
        </div>
        <div className="mt-12 border-2 border-white/15 w-full max-w-screen-sm rounded-[25px] overflow-hidden bg-white/15 p-2">
          <Image className="w-full h-auto" src="/landing.png" alt="hero" width={648} height={497} />
        </div>
      </div>
      
      <Image className="-z-10 absolute top-1/3 -translate-y-1/2 left-0 w-1/2 lg:w-1/3 h-auto object-cover" src="/hero/molecule.svg" width={50} height={50} alt="decorations-1"/>
      <Image className="-z-10 absolute top-1/3 -translate-y-1/2 right-0 w-1/2 lg:w-1/3 h-auto object-cover scale-x-[-1]" src="/hero/molecule.svg" width={50} height={50} alt="decorations-1"/>

      <Image className="-z-10 absolute bottom-0 left-4 w-[200px] lg:w-[300px] h-auto object-cover hidden md:block" src="/hero/col-1.svg" width={50} height={50} alt="decorations-1"/>
      <Image className="-z-10 absolute bottom-0 right-4 w-[200px] lg:w-[300px] h-auto object-cover hidden md:block" src="/hero/col-2.svg" width={50} height={50} alt="decorations-1"/>
    </Scaffold>
  )
}
