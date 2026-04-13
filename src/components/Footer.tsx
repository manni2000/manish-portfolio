import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="container max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Manish Kumar Mandal · Engineered with precision
      </span>
      <div className="flex items-center gap-4">
        <a href="https://github.com/manni2000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github className="w-4 h-4" />
        </a>
        <a href="https://www.linkedin.com/in/manish-kr-mandal/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="mailto:manishmandal9734@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
