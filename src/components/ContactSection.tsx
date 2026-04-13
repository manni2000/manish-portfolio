import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => (
  <motion.section
    id="contact"
    className="section-padding"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="container max-w-3xl mx-auto text-center px-4">
      <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Connect</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6">
        Let's build something{" "}
        <span className="gradient-text">exceptional</span>.
      </h2>
      <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-lg mx-auto">
        I'm always open to discussing new opportunities, interesting projects, or ways to create measurable impact through engineering.
      </p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        <a
          href="mailto:manishmandal9734@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" /> <span className="hidden sm:inline">manishmandal9734@gmail.com</span><span className="sm:hidden">Email</span> <ArrowUpRight className="w-3 h-3" />
        </a>
        <a
          href="https://www.linkedin.com/in/manish-kr-mandal/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a
          href="https://github.com/manni2000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>
    </div>
  </motion.section>
);

export default ContactSection;
