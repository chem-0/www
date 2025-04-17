import {
  FeatureSectionImageProps,
  FeatureSectionProps,
} from "@/types/landing/features";

const FeatureImage = ({ image, alt }: FeatureSectionImageProps) => (
  <img
    className="rounded-2xl bg-client-lab-secondary w-full h-auto aspect-video"
    src={image}
    alt={alt}
  />
);

export default function FeatureSection({
  title,
  subtitle,
  description,
  image,
  imagePosition = "left",
}: FeatureSectionProps) {
  return (
    <div className="p-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-18">
      {(!imagePosition || imagePosition === "left") && (
        <FeatureImage image={image} alt={title} />
      )}
      <div>
        <p className="text-client-lab-secondary font-semibold mb-4 bg-client-lab-secondary/10 px-4 py-2 rounded-sm w-fit text-sm">
          {subtitle}
        </p>
        <h3 className="text-3xl font-semibold mb-3 tracking-tight">{title}</h3>
        {description.map((desc, index) => (
          <p key={index} className="text-base leading-relaxed  mt-4">
            {desc}
          </p>
        ))}
      </div>
      {imagePosition && imagePosition === "right" && (
        <FeatureImage image={image} alt={title} />
      )}
    </div>
  );
}
