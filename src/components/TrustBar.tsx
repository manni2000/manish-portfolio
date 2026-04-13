const items = [
  "Sam Digital Solutions",
  "GreenAI Services",
  "Cartel AI",
  "IIEST Shibpur",
  "2.8M+ Records Processed",
  "400+ DSA Problems",
  "Chegg SME",
];

const TrustBar = () => (
  <section className="py-12 border-y border-border/30">
    <div className="container max-w-6xl mx-auto px-6">
      <p className="text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest text-center">
        Worked With · Built For · Delivered
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="px-5 py-2.5 rounded-lg border border-border/50 bg-card/40 text-sm text-muted-foreground font-medium hover:text-foreground hover:border-primary/30 transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
