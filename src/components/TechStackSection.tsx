import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Django", "WebSockets"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "AI / Data",
    items: ["OpenAI", "RAG", "LLM", "Python", "Scraping"],
    gradient: "from-primary/15 to-accent/10",
  },
  {
    title: "Infrastructure",
    items: ["AWS", "GCP", "Redis", "MongoDB", "Firebase"],
    gradient: "from-accent/15 to-primary/10",
  },
];

const TechStackSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="stack" className="section-padding">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <div className="mb-16 text-center">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Technology</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Systems <span className="gradient-text">Arsenal</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.title} className="glass-card-hover p-6 group">
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">{cat.title}</h3>
                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </div>
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

export default TechStackSection;
