import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";

const terminalLines = [
  "$ initializing system...",
  "✓ loading modules",
  "✓ connecting to services",
  "✓ AI engine ready",
  "✓ system operational",
  "",
  "const build = async () => {",
  "  return scalableSystem({",
  '    AI: true,',
  '    performance: "high",',
  '    scale: "production"',
  "  });",
  "};",
];

const HeroSection = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-primary">Available for opportunities</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
              Building{" "}
              <span className="gradient-text">production-grade</span>{" "}
              systems where AI, scale, and performance converge.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Full Stack Engineer specializing in AI-powered platforms, real-time systems, and scalable architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>

        {/* Right - Terminal */}
        <div className="glass-card p-1 rounded-xl animate-pulse-glow">
          <div className="bg-background/80 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-[hsl(45,93%,47%,0.6)]" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">system.ts</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-1 min-h-[320px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="flex">
                  {line.startsWith("$") ? (
                    <span className="text-accent">{line}</span>
                  ) : line.startsWith("✓") ? (
                    <span className="text-accent/70">{line}</span>
                  ) : line.startsWith("const") || line.startsWith("  return") ? (
                    <span>
                      <span className="text-primary">{line.split("(")[0]}</span>
                      <span className="text-muted-foreground">{line.includes("(") ? "(" + line.split("(").slice(1).join("(") : ""}</span>
                    </span>
                  ) : (
                    <span className="text-muted-foreground">{line}</span>
                  )}
                </div>
              ))}
              {visibleLines < terminalLines.length && (
                <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
