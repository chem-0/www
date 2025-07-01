import { Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundGradient from "../commons/background-gradient";

export default function Cta() {
  return (
    <section className="relative max-w-7xl mx-auto max-h-[500px] bg-gradient-to-br from-slate-50 to-slate-100 p-12 text-center flex flex-col items-center justify-center gap-8 w-full py-16 md:py-32">
      <div className="inset-0 bg-white/40 absolute z-20 backdrop-blur-2xl" />
      <BackgroundGradient className="translate-y-[-40px]" />

      <div className="relative z-40 flex flex-col items-center gap-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Push the boundaries <br className="hidden sm:block" /> of what is
          possible.
        </h2>

        <div className="flex flex-col items-center gap-6">
          <Button
            variant={"outline"}
            size={"lg"}
            className="bg-black hover:bg-neutral-800 text-white hover:text-neutral-200"
            asChild
          >
            <a href="https://cal.com/chem0/secret" target="_blank">Schedule a Call</a>
          </Button>
        </div>
      </div>

      <Atom className="absolute z-40 text-slate-300/40 w-24 h-24 md:w-32 md:h-32 top-10 left-10 animate-pulse" />
      <Atom
        className="absolute z-40 text-slate-400/50 w-16 h-16 md:w-20 md:h-20 bottom-10 right-32 animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <Atom
        className="absolute z-40 text-slate-300/30 w-20 h-20 md:w-24 md:h-24 top-1/3 right-10 animate-pulse"
        style={{ animationDuration: "5s" }}
      />
      <Atom
        className="absolute z-40 text-slate-400/20 w-28 h-28 md:w-36 md:h-36 bottom-1/3 left-32 animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <Atom
        className="absolute z-40 text-slate-300/20 w-10 h-10 top-1/4 left-1/4 animate-pulse"
        style={{ animationDuration: "3s" }}
      />
      <Atom
        className="absolute z-40 text-slate-400/30 w-12 h-12 bottom-1/4 right-1/4 animate-pulse"
        style={{ animationDuration: "7s" }}
      />
    </section>
  );
}
