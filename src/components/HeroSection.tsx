import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";

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
    <section className="min-h-screen flex items-center section-padding pt-24 md:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="space-y-8 text-center sm:text-left items-center sm:items-start"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="space-y-4">
            <motion.p
              className="text-lg font-semibold text-primary font-mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hi, I'm Manish Kumar
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Building{" "}
              <span className="gradient-text">production-grade</span>{" "}
              systems where AI, scale, and performance converge.
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Full Stack Engineer specializing in AI-powered platforms, real-time systems, and scalable architecture. B.Tech in IT from IIEST Shibpur.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1EGSHN-wgPM13XhMPrlBdNnL653QfpUAM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="glass-card p-1 rounded-xl animate-pulse-glow"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-background/80 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-[hsl(45,93%,47%,0.6)]" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <span className="ml-2 text-[10px] md:text-xs font-mono text-muted-foreground">system.ts</span>
            </div>
            <div className="p-4 md:p-5 font-mono text-xs md:text-sm space-y-1 min-h-[280px] md:min-h-[320px]">
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
