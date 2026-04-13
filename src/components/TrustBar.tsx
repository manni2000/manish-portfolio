const items = [
  "TheCartel AI",
  "Sam Digital Solutions",
  "GreenAI Services Pvt Ltd",
  "IIEST Shibpur"
];

const TrustBar = () => (
  <section className="py-8 md:py-12 border-y border-border/30">
    <div className="container max-w-6xl mx-auto px-4 md:px-6">
      <p className="text-[10px] md:text-xs font-mono text-muted-foreground mb-4 md:mb-6 uppercase tracking-widest text-center">
        Worked With · Built For · Delivered
      </p>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="px-3 py-2 md:px-5 md:py-2.5 rounded-lg border border-border/50 bg-card/40 text-xs md:text-sm text-muted-foreground font-medium hover:text-foreground hover:border-primary/30 transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
