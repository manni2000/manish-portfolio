"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";

const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))] as string[];

export default function ProjectArchive() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => projects.filter(project => (category === "All" || project.category === category) && [project.title, project.description, ...project.technologies].join(" ").toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <>
    <div className="filters"><div className="shell filter-bar project-filter-bar"><label className="project-filter-search"><Search size={14} aria-hidden="true"/><span className="sr-only">Search projects</span><input className="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects or technology"/></label><div className="project-filter-options" aria-label="Project categories">{categories.map(item => <button key={item} className={`filter-button ${category === item ? "active" : ""}`} onClick={()=>setCategory(item)} aria-pressed={category===item}>{item}</button>)}</div></div></div>
    <section className="section"><div className="shell"><AnimatePresence mode="popLayout"><div className="archive-grid">{filtered.map((project,index)=><motion.article layout key={project.slug} className="archive-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .96 }} style={{ "--project-accent": project.accent } as React.CSSProperties}><div className="archive-visual" data-code={`0${index+1}`}/><div className="mono" style={{ color: project.accent, marginTop: 25 }}>{project.category} · Featured</div><h2>{project.title}</h2><p>{project.description}</p><div className="tags" style={{ marginTop: 10 }}>{project.technologies.slice(0,6).map(tech=><span className="tag" key={tech}>{tech}</span>)}</div><div className="actions" style={{ marginTop: "auto", paddingTop: 30 }}><Link className="button" href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={15}/></Link>{project.liveUrl && <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={15}/></a>}{project.sourceUrl && <a className="button" href={project.sourceUrl} target="_blank" rel="noreferrer">Source <ArrowUpRight size={15}/></a>}</div></motion.article>)}</div></AnimatePresence>{filtered.length === 0 && <div className="resume-viewer"><div><Search size={30}/><h2>No matching systems</h2><p className="muted">Try a broader technology or reset the category filter.</p><button className="button" onClick={()=>{setQuery("");setCategory("All");}}>Clear filters</button></div></div>}</div></section>
  </>;
}
