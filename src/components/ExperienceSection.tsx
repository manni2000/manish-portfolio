import { Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    period: "2026 — Present",
    role: "Full Stack Developer",
    company: "Sam Digital Solutions",
    bullets: [
      "Built Trader AI Chatbot — RAG-powered crypto intelligence platform",
      "Designed referral system with real-time analytics & commission tracking",
      "Architected scalable microservices handling production-grade traffic",
    ],
  },
  {
    period: "2024 — 2026",
    role: "Junior Full Stack Engineer",
    company: "GreenAI Services",
    bullets: [
      "Engineered data pipeline processing 2.8M+ records with 99.9% uptime",
      "Built AI chatbots for legal & healthcare verticals using LLM + RAG",
      "Structured 100K+ documents using NLP pipelines",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section-padding">
      <div className="container max-w-4xl mx-auto" ref={ref}>
        <div className="mb-16 text-center">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Career Path</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Engineering <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.period} className="flex gap-6">
                <div className="timeline-dot">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <div className="glass-card p-6 flex-1">
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
