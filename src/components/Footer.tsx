const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
      <span className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} · Engineered with precision
      </span>
      <span className="font-mono text-xs text-muted-foreground">
        Built with React + TypeScript
      </span>
    </div>
  </footer>
);

export default Footer;
