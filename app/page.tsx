import CTA from "@/components/landing/cta";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-28">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
