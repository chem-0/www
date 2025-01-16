"use client";

import Scaffold from "../shared/scaffold";
import TitleBadge from "../shared/title-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    title:
      "What is the 3D Virtual Lab, and how does it differ from traditional labs?",
    description:
      "Our 3D Virtual Lab is an immersive, interactive platform that replicates the hands-on experience of traditional labs. Unlike conventional setups, it allows unlimited, risk-free experimentation in a digital environment—perfect for practicing procedures without the cost or safety concerns of real-world labs.",
  },
  {
    title:
      "Do I need special hardware or software to access the 3D Virtual Lab?",
    description:
      "No specialized hardware is required. You only need a computer or tablet with an internet connection, a modern web browser, and the latest version of Unity WebGL support (or equivalent technology). For the best experience, we recommend using a laptop or desktop with updated graphics drivers.",
  },
  {
    title: "Is there a free trial or demo available?",
    description:
      "Yes! We offer a limited free trial for students and instructors to explore basic experiments. You can sign up on our website to gain access and see how the platform fits your learning or teaching needs before committing to a subscription.",
  },
  {
    title: "Can I track my progress and receive feedback?",
    description:
      "Absolutely. Our platform provides detailed analytics on your performance, including completion times, accuracy, and areas for improvement. Instructors can also monitor student progress to offer targeted guidance.",
  },
  {
    title: "Does it support advanced or specialized experiments?",
    description:
      "We have a growing library of advanced experiments in fields like pharmaceutical analysis, biochemistry, and microbiology. These modules are designed for upper-level coursework and can be tailored to specific learning objectives.",
  },
];

export function FAQs() {
  return (
    <Scaffold>
      <div className="text-center mb-12 px-4 w-full">
        <TitleBadge title="FAQ's" />
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="w-full px-4 lg:w-[58rem] md:w-[45rem] sm:w-[35rem] mx-auto">
        <Accordion type="single" collapsible defaultValue="faq-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              className="
                border 
                hover:bg-[#f8fafc]
                data-[state=open]:bg-[#f8fafc]
                transition 
                mt-4 
                border-[#e2e8f0]  
                rounded-xl 
                px-4
              "
              key={index}
              value={`faq-${index}`}
            >
              <AccordionTrigger className="text-left text-[#020617]">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#475569]">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Scaffold>
  );
}
