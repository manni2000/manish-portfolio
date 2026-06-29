import { Code2, Boxes, Database, Wrench } from "lucide-react";
import { MotionSection, MotionItem } from "./MotionWrappers";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Languages & Web",
    icon: Code2,
    items: ["Python", "JavaScript", "C++", "C", "HTML", "CSS"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Frameworks",
    icon: Boxes,
    items: ["React", "Next.js", "TypeScript", "Django", "Node.js", "Express", "WebSocket", "Tailwind CSS"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Google Cloud", "AWS", "Firebase", "Vercel"],
    gradient: "from-primary/15 to-accent/10",
  },
  {
    title: "Dev Tools & AI",
    icon: Wrench,
    items: ["OpenAI GPT", "Google Gemini", "RAG", "REST APIs", "Git/GitHub", "CI/CD", "Cursor IDE", "GitHub Copilot"],
    gradient: "from-accent/15 to-primary/10",
  },
];

const TechStackSection = () => (
  <MotionSection id="stack" className="section-padding">
    <div className="container max-w-6xl mx-auto">
      <SectionHeading
        kicker="Technology"
        title={
          <>
            Systems <span className="gradient-text">Arsenal</span>
          </>
        }
        subtitle="A full-stack toolkit spanning AI/RAG, real-time systems, multi-tenant backends, and cloud deployment."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <MotionItem key={cat.title}>
              <div className="glass-card-hover relative overflow-hidden p-4 md:p-6 group h-full">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-card/60 border border-border/50 text-xs text-muted-foreground group-hover:text-foreground group-hover:border-primary/30 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionItem>
          );
        })}
      </div>
    </div>
  </MotionSection>
);

export default TechStackSection;
