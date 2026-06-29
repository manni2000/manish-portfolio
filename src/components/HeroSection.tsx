import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Mail, MapPin } from "lucide-react";

// Core stack as inline brand SVGs (single-path, from Simple Icons) — no extra deps.
type TechLogo = { name: string; color: string; path: string };

const techLogos: TechLogo[] = [
  { name: "React", color: "#61DAFB", path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.929.31 1.32.475 1.74.74 2.86 1.708 2.86 2.477-.005.768-1.125 1.74-2.865 2.476-.387.165-.81.32-1.245.466a23.943 23.943 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.03-2.914zm-13.395.004c.22.91.58 1.895 1.04 2.915-.456 1.022-.81 2.02-1.03 2.913-.484-.15-.93-.31-1.318-.475-1.74-.74-2.86-1.708-2.86-2.478 0-.768 1.12-1.742 2.86-2.476.388-.164.813-.32 1.265-.464zm5.405 6.66c.435.02.885.034 1.34.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.355-1.565zm-3.78.86c.708.106 1.378.234 2.018.386a26.04 26.04 0 0 1-1.36 2.32c-.685-.103-1.355-.23-2.0-.386.18-.632.408-1.282.668-1.933zm9.05.003c.26.65.487 1.3.668 1.93-.642.157-1.317.286-2.018.39a26.114 26.114 0 0 0 1.35-2.32zm-4.32.586c.44.572.892 1.094 1.345 1.564-1.59 1.483-3.087 2.295-4.105 2.295-.225 0-.406-.044-.558-.127-.666-.382-.955-1.835-.73-3.704.054-.46.142-.945.25-1.44.847-.21 1.74-.355 2.667-.453z" },
  { name: "TypeScript", color: "#3178C6", path: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" },
  { name: "Python", color: "#3776AB", path: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" },
  { name: "Node.js", color: "#5FA04E", path: "M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.05-.139.146-.139.241v10.146c0 .097.055.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.071c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.242c.557-.315 1.296-.315 1.848 0l8.794 5.076c.570.329.924.944.924 1.603v10.150c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zm2.717-6.993c-3.849 0-4.654-1.767-4.654-3.25 0-.14.114-.253.256-.253h1.136c.127 0 .233.092.253.216.171 1.156.683 1.74 3.009 1.74 1.852 0 2.64-.419 2.64-1.402 0-.566-.224-.986-3.101-1.267-2.406-.238-3.894-.768-3.894-2.692 0-1.774 1.497-2.831 4.004-2.831 2.817 0 4.211.978 4.388 3.077a.256.256 0 0 1-.255.278h-1.141a.254.254 0 0 1-.249-.2c-.273-1.215-.937-1.605-2.744-1.605-2.022 0-2.257.704-2.257 1.232 0 .64.278.827 3.006 1.187 2.7.357 3.99.86 3.99 2.756-.001 1.918-1.6 3.017-4.388 3.017z" },
  { name: "PostgreSQL", color: "#4169E1", path: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7757-3.5237.0683-4.7325a1.07 1.07 0 0 0-.1006-.1546C21.4949 1.0393 18.7651-.5273 15.7708.157c-.0114.0023-.0228.0048-.0342.0066a8.5894 8.5894 0 0 0-.7117.1685 5.4458 5.4458 0 0 0-1.3636.5572 7.2606 7.2606 0 0 0-2.1801-.2899C9.3838.6042 7.5331.9525 5.9292 2.014 5.0954 1.7048 2.6048.8475.9466 2.2767-.0913 3.1709-.215 4.5917.099 6.5042c.0683.4115.4256 2.3325 1.0223 4.0717.3038.8854.6258 1.6188.9618 2.1934.2588.4422.5167.7536.7754.9491.146.1102.3134.1942.4937.2483-.6258.6258-.7771 1.2531-.5905 1.9091.2231.7846.9282 1.0916 1.6395 1.2451.6593.1425 1.3478.155 1.9669.155.0846 0 .1683-.0017.2515-.0042 1.5318-.0461 3.0103-.4675 4.2575-.9991.3582.5132.7942 1.0078 1.3162 1.4534.6258.5341 1.3478.9991 2.1369 1.3478 0 0 .0114.0114.0228.0228a.3438.3438 0 0 0 .0228.0228c.4878.3924 1.0349.5905 1.6049.5905.8854 0 1.7251-.5341 2.1597-1.3478.4878-.9105.4651-2.0709.0114-3.0928z" },
  { name: "Redis", color: "#FF4438", path: "M10.5 2.661l.54.997-1.797.644 2.409.218.748 1.246.467-1.121 2.077.218-1.515-1.246 1.495-.997-1.997.643-1.495-.892zm-7.516 8.74l8.91 3.458 2.282-.94 8.842-3.448-2.282-.94-8.91 3.448-2.282-.94zm0 4.296l8.91 3.458 2.282-.94 8.842-3.448-2.282-.94-8.91 3.448-2.282-.94zm-.001-2.139v-.002l.001-.002.001.001-.001.001-.001.002z" },
  { name: "Django", color: "#0C9D58", path: "M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.083 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.06h3.924zM17.39.021h3.924v4.026H17.39z" },
  { name: "Tailwind", color: "#06B6D4", path: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" },
];

const quickStats = [
  { value: "1.7+", label: "Years Exp." },
  { value: "2.8M+", label: "Records Processed" },
  { value: "10+", label: "Systems Shipped" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-24 md:pt-32 relative overflow-hidden">
      {/* Grid + aurora background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[120px] animate-aurora" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-[120px] animate-aurora [animation-delay:-9s]" />

      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="space-y-7 text-center sm:text-left flex flex-col items-center sm:items-start"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Availability + role badge */}
          <motion.div
            className="flex flex-wrap items-center justify-center sm:justify-start gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-xs font-medium text-accent">
              <span className="status-dot" />
              Open to opportunities
            </span>
            <span className="meta-pill">
              <MapPin className="w-3 h-3" /> Remote · India
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              className="text-base font-semibold text-primary font-mono"
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
              Full Stack Engineer specializing in AI-powered platforms, real-time
              systems, and scalable architecture. Currently building wealth-management
              & AI products at{" "}
              <span className="text-foreground font-medium">Sam Digital Solutions</span>.
              B.Tech in IT from IIEST Shibpur.
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
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-[0_0_30px_-8px_hsl(var(--primary))]"
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
              href="https://drive.google.com/file/d/14eCznyyXVEjO7mdU1uBaEz-vnkPwlbKP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Resume
            </a>
          </motion.div>

          {/* Quick impact stats */}
          <motion.div
            className="grid grid-cols-3 gap-3 w-full max-w-md pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {quickStats.map((s) => (
              <div
                key={s.label}
                className="text-center sm:text-left rounded-lg border border-border/40 bg-card/30 px-3 py-2.5"
              >
                <div className="text-lg md:text-xl font-black gradient-text leading-none">
                  {s.value}
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="glass-card p-5 md:p-6 rounded-xl animate-pulse-glow"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Core Stack
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-mono text-accent">
              <span className="status-dot" /> production
            </span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {techLogos.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="group relative flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-border/50 bg-card/40 hover:bg-card/70 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110 fill-muted-foreground group-hover:fill-[var(--logo-color)]"
                  style={{ ["--logo-color" as string]: tech.color }}
                  aria-hidden="true"
                >
                  <path d={tech.path} />
                </svg>
                <span className="text-[9px] md:text-[10px] text-muted-foreground group-hover:text-foreground transition-colors text-center leading-none px-1">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="mt-5 text-xs text-muted-foreground text-center font-mono">
            + RAG · Gemini · WebSocket · AWS / GCP
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
