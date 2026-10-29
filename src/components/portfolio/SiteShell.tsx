"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { ArrowUpRight, Bot, Github, Linkedin, Menu, Send, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";
import MotionSystem from "./MotionSystem";

const nav = [
  ["Home", "/"], ["Projects", "/projects"], ["Experience", "/experience"],
  ["Skills", "/skills"], ["About", "/about"], ["Resume", "/resume"], ["Contact", "/contact"],
] as const;

function LoadingSequence() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("mk-intro")) return;
    setVisible(true);
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const value = Math.min(100, Math.round(((now - started) / 1050) * 100));
      setProgress(value);
      if (value < 100) frame = requestAnimationFrame(tick);
      else {
        localStorage.setItem("mk-intro", "seen");
        window.setTimeout(() => setVisible(false), 250);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  const message = progress < 35 ? "INITIALIZING INTERFACE" : progress < 75 ? "CALIBRATING EXPERIENCE" : "SYSTEM READY";
  return <AnimatePresence>{visible && (
    <motion.div className="loader" exit={{ y: "-100%" }} transition={{ duration: .75, ease: [.76, 0, .24, 1] }} aria-label="Loading portfolio">
      <div className="loader-inner">
        <motion.div className="loader-mark" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>MK</motion.div>
        <div className="loader-row mono"><span>{message}</span><span>{progress}%</span></div>
        <div className="loader-track"><div className="loader-progress" style={{ width: `${progress}%` }} /></div>
      </div>
    </motion.div>
  )}</AnimatePresence>;
}

function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && open) {
        const menu = document.getElementById("mobile-menu");
        const controls = menu?.querySelectorAll<HTMLElement>("a, button, input, [tabindex]:not([tabindex='-1'])");
        if (!controls?.length) return;
        const first = controls[0]; const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [open]);
  return <>
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="shell nav-inner">
        <Link href="/" className="brand" aria-label="Manish Kumar home"><span className="brand-mark">MK</span><span>Manish Kumar</span></Link>
        <nav className="nav-links" aria-label="Main navigation">
          {nav.map(([label, href]) => <Link key={href} className={`nav-link ${pathname === href ? "active" : ""}`} href={href}>{label}</Link>)}
          <a className="nav-link" href={portfolio.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
          <a className="nav-link" href={portfolio.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
          <span className="pill"><span className="status-dot" /> Available</span>
        </nav>
        <button className="menu-button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Open menu"><Menu /></button>
      </div>
    </header>
    <AnimatePresence>
      {open && <motion.div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .55, ease: [.76,0,.24,1] }}>
        <button ref={closeRef} className="menu-button" style={{ display: "block", position: "absolute", top: 20, right: 20 }} onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
        <nav aria-label="Mobile navigation">
          {nav.map(([label, href], index) => <motion.div key={href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 + index * .045 }}><Link href={href}>{label}</Link></motion.div>)}
        </nav>
        <div className="mobile-menu-meta"><div className="pill"><span className="status-dot" /> {portfolio.availability.message}</div><div className="actions mobile-socials"><a href={portfolio.social.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={portfolio.social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </motion.div>}
    </AnimatePresence>
  </>;
}

function Assistant() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const stickToBottomRef = useRef(true);
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; text: string }[]>([
    { role: "assistant", text: "Hi — I’m Ask Manish. I can answer questions about Manish’s projects, experience, skills and availability using this portfolio’s verified information." },
  ]);
  const answer = (question: string) => {
    const clean = question.toLowerCase();
    const match = portfolio.assistant.map(item => ({ item, score: item.keywords.filter(k => clean.includes(k)).length })).sort((a,b) => b.score-a.score)[0];
    const text = match?.score ? match.item.answer : "I only know about Manish’s portfolio, projects, skills, experience and availability. Try asking what he has built or about his AI experience.";
    setMessages(prev => [...prev, { role: "user", text: question }, { role: "assistant", text }]);
  };
  const submit = (event: FormEvent) => { event.preventDefault(); const q = value.trim(); if (!q) return; answer(q); setValue(""); };
  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => {
      bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
      stickToBottomRef.current = true;
    });
    return () => cancelAnimationFrame(frame);
  }, [messages, open]);
  useEffect(() => {
    if (!open) return;
    const keepLatestVisible = () => {
      if (!stickToBottomRef.current) return;
      requestAnimationFrame(() => bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight }));
    };
    window.addEventListener("resize", keepLatestVisible);
    window.visualViewport?.addEventListener("resize", keepLatestVisible);
    return () => {
      window.removeEventListener("resize", keepLatestVisible);
      window.visualViewport?.removeEventListener("resize", keepLatestVisible);
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 180);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  return <>
    <button ref={launcherRef} className="assistant-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="ask-manish" aria-label={open ? "Close Ask Manish assistant" : "Open Ask Manish assistant"}><Bot size={17} /><span className="assistant-button-label">{open ? "Close assistant" : "Ask Manish"}</span></button>
    <AnimatePresence>{open && <motion.section id="ask-manish" className="assistant-panel" role="dialog" aria-modal="false" aria-labelledby="assistant-title" data-lenis-prevent data-lenis-prevent-wheel data-lenis-prevent-touch initial={{ opacity: 0, y: 20, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }}>
      <div className="assistant-head"><div><strong id="assistant-title">Ask Manish</strong><div className="mono muted" style={{ marginTop: 4 }}>Local portfolio assistant</div></div><button className="menu-button" style={{ display: "block" }} onClick={() => { setOpen(false); launcherRef.current?.focus(); }} aria-label="Close assistant"><X size={18}/></button></div>
      <div ref={bodyRef} className="assistant-body" role="log" aria-live="polite" aria-relevant="additions" tabIndex={0} onScroll={(event) => { const element = event.currentTarget; stickToBottomRef.current = element.scrollHeight - element.clientHeight - element.scrollTop < 80; }}>
        {messages.map((message, i) => <div key={i} className={`message ${message.role === "user" ? "user" : ""}`}>{message.text}</div>)}
        {messages.length === 1 && <div className="quick-questions">{portfolio.assistant.slice(0,4).map(item => <button key={item.question} onClick={() => answer(item.question)}>{item.question}</button>)}</div>}
      </div>
      <form className="assistant-form" onSubmit={submit}><input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} placeholder="Ask about Manish…" aria-label="Question" autoComplete="off"/><button aria-label="Send question" disabled={!value.trim()}><Send size={16}/></button></form>
    </motion.section>}</AnimatePresence>
  </>;
}

function Footer() {
  return <footer className="footer">
    <div className="shell">
      <div className="footer-grid">
        <div><Link href="/" className="brand"><span className="brand-mark">MK</span><span>Manish Kumar</span></Link><p className="muted" style={{ maxWidth: 340, lineHeight: 1.7, marginTop: 20 }}>{portfolio.personal.title}. Building practical products from architecture to production.</p></div>
        <div><div className="mono muted">Navigate</div><div style={{ display: "grid", gap: 9, marginTop: 18 }}>{nav.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div></div>
        <div><div className="mono muted">Elsewhere</div><div style={{ display: "grid", gap: 9, marginTop: 18 }}><a href={portfolio.social.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href={portfolio.social.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a></div></div>
      </div>
      <div className="footer-bottom mono"><span>© {new Date().getFullYear()} Manish Kumar</span><span>Kolkata, India · Designed &amp; engineered with intent</span></div>
    </div>
  </footer>;
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let rafId = 0;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    const onVisibility = () => document.hidden ? lenis.stop() : lenis.start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => { cancelAnimationFrame(rafId); document.removeEventListener("visibilitychange", onVisibility); lenis.destroy(); };
  }, []);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <LoadingSequence />
    <MotionSystem />
    <motion.div className="progress" style={{ scaleX }} />
    <Navigation />
    <AnimatePresence mode="wait"><motion.main id="main-content" key={pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .35 }}>{children}</motion.main></AnimatePresence>
    <Footer />
    <Assistant />
  </>;
}
