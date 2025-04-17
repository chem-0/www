export interface FeatureSectionProps {
  title: string
  subtitle: string
  description: string[]
  image: string
  imagePosition?: "left" | "right"
}

export interface FeatureSectionImageProps {
  image: string
  alt: string
}
