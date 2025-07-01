export interface FeatureSectionImageProps {
  image: string;
  alt: string;
}

export interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  imagePosition?: "left" | "right";
}