import { useEffect, useRef, useState } from "react";
import { MotionSection, MotionDiv } from "./MotionWrappers";

const metrics = [
  { value: 2.8, suffix: "M+", label: "Records Processed" },
  { value: 100, suffix: "K+", label: "Documents Structured" },
  { value: 60, suffix: "s", label: "Real-time Refresh" },
  { value: 400, suffix: "+", label: "DSA Problems Solved" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = target < 10 ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <div ref={ref} className="metric-number">
      {display}{suffix}
    </div>
  );
};

const MetricsSection = () => (
  <MotionSection className="section-padding border-y border-border/30">
    <div className="container max-w-6xl mx-auto">
      <MotionDiv className="mb-12 md:mb-16 text-center">
        <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Impact</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
          Engineering <span className="gradient-text">Metrics</span>
        </h2>
      </MotionDiv>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {metrics.map((m) => (
          <MotionDiv key={m.label}>
            <div className="text-center space-y-2">
              <AnimatedCounter target={m.value} suffix={m.suffix} />
              <p className="text-xs md:text-sm text-muted-foreground font-medium">{m.label}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  </MotionSection>
);

export default MetricsSection;
