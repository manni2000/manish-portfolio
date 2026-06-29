import { Briefcase, MapPin } from "lucide-react";
import { MotionSection, MotionItem } from "./MotionWrappers";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    period: "Feb 2026 — Present",
    role: "Full Stack Developer",
    type: "Full Time",
    company: "Sam Digital Solutions",
    location: "Dubai, UAE · Remote",
    current: true,
    bullets: [
      "Designed and developed the Trader AI Chatbot on Cartel AI using a scalable RAG architecture, delivering Crypto FAQs, real-time digital asset insights, technical and fundamental analysis, ML-driven price predictions, and a referral program with real-time analytics using Django and Next.js.",
      "Built Goinboxly Cloud, an email marketing platform featuring reliable bulk email delivery, advanced email validation, and real-time analytics using the MERN Stack.",
      "Leading the architecture and development of Merlion Asset Management for a Singapore-based client — a multi-tenant wealth management and portfolio tracking platform featuring a Multi-Currency Asset Ledger, Operations & Admin Approval Dashboard, Partner Agent Portal, and Client Net Worth Tracking System across web and mobile using Next.js and React Native.",
    ],
    highlights: ["RAG architecture", "Multi-tenant SaaS", "Real-time analytics"],
    tech: ["Next.js", "Django", "React Native", "MERN", "RAG"],
  },
  {
    period: "Dec 2024 — Jan 2026",
    role: "Junior Full Stack Engineer",
    type: "Full Time",
    company: "GreenAI Services Private Limited",
    location: "Kolkata, India · Onsite",
    current: false,
    bullets: [
      "Architected and launched a responsive company website, optimized for performance, scalability, and SEO, and deployed on Google Cloud Platform (GCP) with CI/CD automation.",
      "Designed and deployed AI-powered chatbot solutions across legal, enterprise, and healthcare domains, including GreenAI Legal, Incopa (Germany), and Kokilaben Dhirubhai Ambani Hospital.",
      "Built scalable Python automation pipelines to scrape, clean, and process 2.8M+ web records using BeautifulSoup and Requests with proxy rotation; transformed 100K+ Markdown documents into structured JSON datasets for legal-domain LLM training.",
      "Contributed to the development of a multilingual LLM-based grammar checker, delivering high accuracy across real-world evaluation datasets.",
    ],
    highlights: ["2.8M+ records processed", "CI/CD on GCP", "Multi-domain AI bots"],
    tech: ["Python", "Django", "GCP", "CI/CD", "LLMs"],
  },
];

const ExperienceSection = () => (
  <MotionSection id="experience" className="section-padding">
    <div className="container max-w-4xl mx-auto">
      <SectionHeading
        kicker="Career Path · 1.7+ Years"
        title={
          <>
            Engineering <span className="gradient-text">Experience</span>
          </>
        }
        subtitle="Shipping AI-powered, multi-tenant, and real-time systems end to end — from architecture and data pipelines to production deployment."
      />

      <div className="relative">
        <div className="timeline-line hidden sm:block" />
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp) => (
            <MotionItem key={exp.period}>
              <div className="flex gap-4 md:gap-6">
                <div className="timeline-dot shrink-0">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <div className="glass-card-hover p-5 md:p-6 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono text-primary">{exp.period}</span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-accent">
                        <span className="status-dot" /> Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-foreground">
                    {exp.role}
                    <span className="text-muted-foreground font-normal"> · {exp.type}</span>
                  </h3>
                  <p className="text-sm text-primary/90 font-medium">{exp.company}</p>
                  <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/70 mt-1 mb-3 md:mb-4">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </p>

                  {/* Impact highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-[11px] font-medium text-accent"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-accent mt-1 shrink-0">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border/40">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </div>
    </div>
  </MotionSection>
);

export default ExperienceSection;
