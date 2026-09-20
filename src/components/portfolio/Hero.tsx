"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import IdentityBadge from "./IdentityBadge";

const line = { hidden: { y: "115%", opacity: 0 }, show: { y: 0, opacity: 1 } };

export default function Hero() {
  return <section className="hero grid-bg">
    <div className="ambient" style={{ right: "-15%", top: "-10%" }} />
    <div className="shell hero-grid">
      <div>
        <motion.p className="mono" style={{ color: "var(--cyan)", marginBottom: 18 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>Hi, I’m {portfolio.personal.name}.</motion.p>
        <motion.div className="hero-overline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}><span className="pill"><span className="status-dot" /> {portfolio.availability.message}</span><span className="pill">{portfolio.personal.experienceLabel}</span></motion.div>
        <motion.div className="hero-title display" initial="hidden" animate="show" transition={{ staggerChildren: .12, delayChildren: .15 }}>
          <span><motion.span variants={line}>FULL STACK</motion.span></span>
          <span><motion.em variants={line}>&amp; AI</motion.em></span>
          <span><motion.span variants={line}>ENGINEER</motion.span></span>
        </motion.div>
        <motion.p className="hero-intro" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .7 }}><strong style={{color:"var(--paper)"}}>I build scalable full-stack products powered by AI.</strong><br/>{portfolio.heroCopy}</motion.p>
        <motion.div className="actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .82 }}>
          <Link href="/projects" className="button button-primary">Explore my work <ArrowRight size={16}/></Link>
          <Link href="/resume" className="button"><FileText size={15}/> View resume</Link>
          <Link href="/contact" className="button"><Mail size={15}/> Contact me</Link>
          <a className="button" href={portfolio.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16}/></a>
          <a className="button" href={portfolio.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16}/></a>
        </motion.div>
        <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <div><span className="mono muted">Location</span><span>{portfolio.personal.shortLocation}</span></div>
          <div><span className="mono muted">Work mode</span><span>Remote · On-site · Hybrid</span></div>
          <div><span className="mono muted">System</span><span>Portfolio / {new Date().getFullYear()}</span></div>
        </motion.div>
      </div>
      <div className="badge-stage"><IdentityBadge /></div>
    </div>
    <div className="scroll-cue mono"><ArrowDown size={13}/><span>Scroll to inspect</span><span className="scroll-line" /></div>
  </section>;
}
