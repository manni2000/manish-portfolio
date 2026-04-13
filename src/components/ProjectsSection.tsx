import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Trader AI Chatbot",
    desc: "AI-powered crypto intelligence system using RAG + ML predictions for real-time market analysis.",
    tech: ["React", "Node.js", "RAG", "OpenAI", "Redis"],
    live: "#",
    code: "#",
  },
  {
    title: "Legal AI Assistant",
    desc: "Intelligent document analysis platform processing 100K+ legal documents with NLP pipelines.",
    tech: ["Python", "Django", "OpenAI", "PostgreSQL", "AWS"],
    live: "#",
    code: "#",
  },
  {
    title: "Real-time Analytics Dashboard",
    desc: "High-performance analytics platform with 60s refresh cycles processing 2.8M+ records.",
    tech: ["React", "TypeScript", "WebSockets", "Redis", "D3.js"],
    live: "#",
    code: "#",
  },
  {
    title: "Referral & Rewards System",
    desc: "Multi-tier referral system with real-time commission tracking and automated payouts.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
    live: "#",
    code: "#",
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <div className="mb-16 text-center">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Systems Built for <span className="gradient-text">Scale</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={p.live} className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={p.code} className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
