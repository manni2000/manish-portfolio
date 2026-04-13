import { useEffect, useRef, useState } from "react";

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
  <section className="section-padding border-y border-border/30">
    <div className="container max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Impact</p>
        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          Engineering <span className="gradient-text">Metrics</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m) => (
          <div key={m.label} className="text-center space-y-2">
            <AnimatedCounter target={m.value} suffix={m.suffix} />
            <p className="text-sm text-muted-foreground font-medium">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
