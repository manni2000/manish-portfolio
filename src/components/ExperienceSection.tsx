import { Briefcase } from "lucide-react";
import { MotionSection, MotionDiv, MotionItem } from "./MotionWrappers";

const experiences = [
  {
    period: "Feb 2026 — Present",
    role: "Full Stack Developer — Full Time",
    company: "Sam Digital Solutions",
    location: "UAE, Dubai - Remote",
    bullets: [
      "Designed and developed the Trader AI Chatbot on Cartel AI using a scalable RAG architecture, delivering Crypto FAQs, real-time digital asset insights, technical and fundamental analysis, ML-driven price predictions, and a referral program with real-time analytics using Django and Next.js.",
      "Built Goinboxly Cloud, an email marketing platform featuring reliable bulk email delivery, advanced email validation, and real-time analytics using the MERN Stack.",
      "Leading the architecture and development of Merlion Asset Management for a Singapore-based client, a multi-tenant wealth management and portfolio tracking platform featuring a Multi-Currency Asset Ledger, Operations and Admin Approval Dashboard, Partner Agent Portal, and Client Net Worth Tracking System across web and mobile platforms using Next.js and React Native.",
    ],
  },
  {
    period: "Dec 2024 — Jan 2026",
    role: "Junior Full Stack Engineer — Full Time",
    company: "GreenAI Services Private Limited",
    location: "Kolkata, West Bengal, India - Onsite",
    bullets: [
      "Architected and launched a responsive company website, optimized for performance, scalability, and SEO, and deployed on Google Cloud Platform (GCP) with CI/CD automation.",
      "Designed and deployed AI-powered chatbot solutions across legal, enterprise, and healthcare domains, including GreenAI Legal, Incopa (Germany), and Kokilaben Dhirubhai Ambani Hospital.",
      "Built scalable Python automation pipelines to scrape, clean, and process 2.8M+ web records using BeautifulSoup and Requests with proxy rotation; transformed 100K+ Markdown documents into structured JSON datasets for legal-domain LLM training.",
      "Contributed to the development of a multilingual LLM-based grammar checker, delivering high accuracy across real-world evaluation datasets.",
    ],
  },
];

const ExperienceSection = () => (
  <MotionSection id="experience" className="section-padding">
    <div className="container max-w-4xl mx-auto">
      <MotionDiv className="mb-16 text-center">
        <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Career Path · 1.7 Years of Experience</p>
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
