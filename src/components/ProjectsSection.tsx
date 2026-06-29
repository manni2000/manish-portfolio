import { ArrowUpRight } from "lucide-react";
import { MotionSection, MotionItem } from "./MotionWrappers";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Trader AI Chatbot",
    category: "AI · RAG",
    role: "Lead Developer",
    desc: "AI-powered crypto intelligence system using a scalable RAG pipeline and ML price predictions to deliver real-time market analysis, technical/fundamental insights, and a referral program with live analytics.",
    impact: "Real-time insights at production scale",
    tech: ["Next.js", "Django", "RAG Pipeline", "OpenAI", "Redis"],
  },
  {
    title: "Merlion Asset Management",
    category: "FinTech · Multi-tenant",
    role: "Architect & Lead",
    desc: "Multi-tenant wealth management & portfolio platform for a Singapore client — multi-currency asset ledger, admin approval dashboard, partner agent portal, and client net-worth tracking across web and mobile.",
    impact: "Web + mobile, multi-tenant architecture",
    tech: ["Next.js", "React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "Legal AI Data Pipeline",
    category: "Data · LLM",
    role: "Backend Engineer",
    desc: "Python automation pipelines that scraped, cleaned, and processed millions of web records with proxy rotation, transforming Markdown documents into structured JSON datasets for legal-domain LLM training.",
    impact: "2.8M+ records · 100K+ docs structured",
    tech: ["Python", "BeautifulSoup", "GCP", "LLMs"],
  },
  {
    title: "Goinboxly Cloud",
    category: "SaaS · MERN",
    role: "Full Stack Developer",
    desc: "Email marketing platform with reliable bulk delivery, advanced email validation, and real-time campaign analytics — built end to end on the MERN stack.",
    impact: "Bulk delivery with real-time analytics",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
];

const ProjectsSection = () => (
  <MotionSection id="projects" className="section-padding">
    <div className="container max-w-6xl mx-auto">
      <SectionHeading
        kicker="Featured Work"
        title={
          <>
            Systems Built for <span className="gradient-text">Scale</span>
          </>
        }
        subtitle="Selected projects spanning AI/RAG systems, multi-tenant FinTech platforms, and high-volume data pipelines — each shipped to production."
      />

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((p) => (
          <MotionItem key={p.title}>
            <div className="glass-card-hover p-5 md:p-6 group h-full flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                    {p.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors mt-1">
                    {p.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{p.role}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">
                {p.desc}
              </p>

              <div className="flex items-center gap-2 mt-4 mb-4 text-xs font-medium text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {p.impact}
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-border/40">
                {p.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </MotionItem>
        ))}
      </div>
    </div>
  </MotionSection>
);

export default ProjectsSection;
