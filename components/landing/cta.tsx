import Image from "next/image";
import Scaffold from "../shared/scaffold";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <Scaffold className="relative py-20 flex items-center justify-center">
      <div className="absolute flex-col items-center justify-center text-center text-white scale-[0.8] sm:scale-100">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1">Transform Your Learning Today</h2>
        <p>Empower your education with AI-driven 3D labs.</p>
        <Button className="mt-4">Request a Demo</Button>
      </div>
      <Image className="w-full h-auto" src="/hero/cta.svg" alt="cta" width={645} height={638} />
    </Scaffold>
  )
}
