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
    <section className="flex flex-col items-center justify-center">
      <h3 className="mb-4 text-5xl font-semibold tracking-tight">
        Explore Molecular Possibilities
      </h3>
      <p className="mb-12 text-center text-neutral-700">
        View molecular orbitals, vibrational modes UV-Visible absorbance, <br />
        and reaction processes.
      </p>
      <div className="max-w-7xl">
        {" "}
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
