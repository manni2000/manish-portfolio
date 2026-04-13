import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container max-w-3xl mx-auto text-center">
      <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Connect</p>
      <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
        Let's build something{" "}
        <span className="gradient-text">exceptional</span>.
      </h2>
      <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
        I'm always open to discussing new opportunities, interesting projects, or ways to create measurable impact through engineering.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" /> Email Me <ArrowUpRight className="w-3 h-3" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
