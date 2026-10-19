import type { Metadata } from "next";

import BackgroundGradient from "@/components/commons/background-gradient";
import ContactForm from "@/components/landing/contact-form";
import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";

export const metadata: Metadata = {
  title: "Contact | Chem0",
  description:
    "Request a demo of Chem0, the AI-powered 3D virtual chemistry lab. Tell us what you're building and we'll get back within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative flex w-full flex-col items-center px-6 py-20 md:py-28">
        <div className="absolute inset-0 z-20 bg-white/40 backdrop-blur-2xl" />
        <BackgroundGradient />

        <div className="relative z-30 w-full max-w-2xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[2.5rem] font-semibold tracking-tighter sm:text-5xl md:text-6xl">
              Let&apos;s talk.
            </h1>
            <p className="mt-5 max-w-lg text-base text-slate-600 sm:text-lg">
              Tell us what you&apos;re building and we&apos;ll get back within
              24 hours.
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-10">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
