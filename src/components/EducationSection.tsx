import { GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EducationSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="education" className="section-padding">
      <div className="container max-w-4xl mx-auto" ref={ref}>
        <div className="mb-16 text-center">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Foundation</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="glass-card-hover p-8 flex items-start gap-6">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">
              Indian Institute of Engineering Science and Technology (IIEST), Shibpur
            </h3>
            <p className="text-sm font-medium text-primary font-mono">
              Bachelor of Technology (B.Tech) — Information Technology
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                CGPA: 7.8
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Dec 2020 — June 2024
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Howrah, West Bengal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
