import { MotionDiv } from "./MotionWrappers";

interface SectionHeadingProps {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

const SectionHeading = ({
  kicker,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) => (
  <MotionDiv
    className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
  >
    <span className={`kicker mb-3 ${align === "center" ? "kicker-center justify-center" : ""}`}>
      {kicker}
    </span>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mt-3">
      {title}
    </h2>
    {subtitle && (
      <p
        className={`text-sm md:text-base text-muted-foreground mt-4 max-w-2xl leading-relaxed ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {subtitle}
      </p>
    )}
  </MotionDiv>
);

export default SectionHeading;
