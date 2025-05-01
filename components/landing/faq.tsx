"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleItemClick = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  const faqItems = [
    {
      id: "item-1",
      question: "Is there a free trial or demo available?",
      answer:
        "Yes! We offer a limited free trial for students and instructors to explore basic experiments. You can sign up on our website to gain access and see how the platform fits your learning or teaching needs before committing to a subscription.",
    },
    {
      id: "item-2",
      question: "What subjects and topics are covered?",
      answer:
        "Chem0 covers a wide range of chemistry topics, from basic principles to advanced concepts. Our virtual labs include organic chemistry, inorganic chemistry, biochemistry, analytical chemistry, and more.",
    },
    {
      id: "item-3",
      question: "How does the AI guidance work?",
      answer:
        "Our AI system observes your actions and provides real-time guidance based on your skill level and learning objectives. It can suggest next steps, identify errors, and offer explanations to help you understand the underlying concepts.",
    },
    {
      id: "item-4",
      question: "Can I use Chem0 for classroom teaching?",
      answer:
        "Chem0 is designed for both individual learning and classroom use. Educators can create custom experiments, monitor student progress, and integrate the platform with existing learning management systems.",
    },
    {
      id: "item-5",
      question: "Is Chem0 free for students?",
      answer:
        "Yes, Chem0 is free for students. For enterprise solutions and additional features, please contact our sales team for pricing information.",
    },
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="border rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`px-4 py-3 flex justify-between items-center cursor-pointer ${openItem === item.id ? "bg-client-lab-secondary/10" : "bg-white"}`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <h3 className="font-medium text-base">{item.question}</h3>
                  <motion.div
                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-client-lab-secondary"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 text-sm bg-white border-t">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
