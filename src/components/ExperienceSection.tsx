import { Briefcase } from "lucide-react";
import { MotionSection, MotionDiv, MotionItem } from "./MotionWrappers";

const experiences = [
  {
    period: "Feb 2026 — Present",
    role: "Full Stack Developer",
    company: "Sam Digital Solutions",
    location: "Kolkata, West Bengal, India",
    bullets: [
      "Designed and deployed a Trader AI Chatbot on Cartel AI — delivering crypto FAQs, real-time digital asset insights, technical & fundamental analysis, and ML-driven price predictions using scalable RAG architecture.",
      "Architected and implemented a Referral Program System with real-time analytics, enhancing user acquisition, engagement, and ecosystem growth for the Trader AI platform.",
    ],
  },
  {
    period: "Dec 2024 — Jan 2026",
    role: "Junior Full Stack Engineer",
    company: "GreenAI Services Private Limited",
    location: "Kolkata, West Bengal, India",
    bullets: [
      "Architected and launched a responsive company website, optimized for performance, scalability, and SEO, deployed on GCP with CI/CD automation.",
      "Engineered a real-time internal analytics dashboard using Redis, featuring auto-refreshing usage metrics every 60 seconds with Google Cloud Scheduler pipeline.",
      "Designed and deployed AI-powered chatbot solutions across legal, enterprise, and healthcare domains — GreenAI Legal, Incopa (Germany), and Kokilaben Hospital.",
      "Built scalable Python automation pipelines to scrape, clean, and process 2.8M+ web records; transformed 100K+ Markdown documents into structured JSON datasets for legal-domain LLM training.",
      "Contributed to a multilingual LLM-based grammar checker with high accuracy across real-world evaluation datasets.",
      "Developed a GST Customer Compliance Chatbot using end-to-end RAG-based LLM pipeline including government data scraping and retrieval architecture.",
    ],
  },
];

const ExperienceSection = () => (
  <MotionSection id="experience" className="section-padding">
    <div className="container max-w-4xl mx-auto">
      <MotionDiv className="mb-16 text-center">
        <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Career Path · 1 Year 5 Months</p>
        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          Engineering <span className="gradient-text">Experience</span>
        </h2>
      </MotionDiv>

      <div className="relative">
        <div className="timeline-line hidden sm:block" />
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp) => (
            <MotionItem key={exp.period}>
              <div className="flex gap-4 md:gap-6">
                <div className="timeline-dot shrink-0">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <div className="glass-card p-4 md:p-6 flex-1">
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                  <h3 className="text-base md:text-lg font-bold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-xs text-muted-foreground/70 mb-3 md:mb-4">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1 shrink-0">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
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
