import { MotionSection, MotionDiv, MotionItem } from "./MotionWrappers";

const projects = [
  {
    title: "Trader AI Chatbot",
    desc: "AI-powered crypto intelligence system using RAG + ML predictions for real-time market analysis.",
    tech: ["Next.js", "Node.js", "RAG Pipeline", "OpenAI", "Redis"],
  },
  {
    title: "Legal AI Assistant",
    desc: "Intelligent document analysis platform processing 100K+ legal documents with NLP pipelines.",
    tech: ["Python", "Django", "OpenAI", "PostgreSQL", "GCP"],
  },
  {
    title: "Real-time Analytics Dashboard",
    desc: "High-performance analytics platform with 60s refresh cycles processing 2.8M+ records.",
    tech: ["React", "TypeScript", "WebSockets", "Redis", "Chart.js"],
  },
  {
    title: "Referral & Rewards System",
    desc: "Multi-tier referral system with real-time commission tracking and automated payouts.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
  },
];

const ProjectsSection = () => (
  <MotionSection id="projects" className="section-padding">
    <div className="container max-w-6xl mx-auto">
      <MotionDiv className="mb-12 md:mb-16 text-center">
        <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Featured Work</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
          Systems Built for <span className="gradient-text">Scale</span>
        </h2>
      </MotionDiv>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((p) => (
          <MotionItem key={p.title}>
            <div className="glass-card-hover p-5 md:p-6 group h-full">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex gap-2">
                  </div>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </MotionItem>
        ))}
      </div>
    </div>
  </MotionSection>
);

export default ProjectsSection;
