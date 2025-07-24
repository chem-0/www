import { FeatureSectionProps } from "@/types/landing/features";
import FeatureSection from "./feature-section";

const data: FeatureSectionProps[] = [
  {
    title: "Beyond Prediction - Reaction Discovery and Optimization",
    subtitle: "ChemO Innovate",
    description: [
      "Predict reaction conditions for novel compounds with high accuracy using AI trained on massive datasets from PDBe, PDBe-KB, and AlphaFold DB. Quickly determine reaction feasibility through data-driven predictions and dynamic simulation-based experimentation.",
    ],
    image: "/assets/feature-1.jpg",
    imagePosition: "left",
  },
  {
    title: "LCMS Peak Analysis, at Scale",
    subtitle: "ChemO Experiment",
    description: [
      "Automatically detects, integrates, and deconvolutes overlapping peaks, assigning accurate mass associations for each. Visualizes complete LCMS data in one unified view, saving hours per batch and scaling effortlessly across high-throughput workflows.",
    ],
    image: "/assets/feature-3.jpg",
    imagePosition: "right",
  },
  {
    title: "AI-Driven Reaction Improvement",
    subtitle: "ChemO Innovate",
    description: [
      "Suggests environmentally friendly reactants and safer solvent substitutions to enhance sustainability. Highlights reactions that may pose safety risks, offering safer pathways and mitigating experimental hazards.",
    ],
    image: "/assets/feature-2.jpg",
    imagePosition: "left",
  },
];
export default function Features() {
  return (
    <section id="features" className="flex flex-col items-center justify-center px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto w-full">
        <h3 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-left md:text-center leading-[1.1]">
          Explore Molecular
          <br />
          Possibilities
        </h3>
        <p className="mt-6 md:mt-8 text-base sm:text-xl text-neutral-600 text-left md:text-center">
          View molecular orbitals, vibrational modes UV-Visible absorbance,
          <br className="hidden md:block" /> and reaction processes.
        </p>
      </div>
      
      <div className="max-w-7xl mt-16 md:mt-24">
        {data.map((section) => (
          <FeatureSection
            key={section.title}
            title={section.title}
            subtitle={section.subtitle}
            description={section.description}
            image={section.image}
            imagePosition={section.imagePosition}
          />
        ))}
      </div>
    </section>
  );
}
