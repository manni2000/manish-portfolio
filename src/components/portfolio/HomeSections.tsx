import { ArrowRight, Award, Boxes, Code2, Cpu, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export function Introduction() {
  return <section className="section section-rule"><div className="shell intro-layout" data-reveal><div><span className="section-number">01 / INTRODUCTION</span><div className="stat-lockup"><strong>~2</strong><span className="mono">Years building in production</span></div></div><div><p className="intro-copy">{portfolio.introduction}</p><div className="capabilities">{portfolio.capabilities.map(item => <span className="pill" key={item}>{item}</span>)}</div></div></div></section>;
}

export function SelectedProjects() {
  return <section className="section section-rule"><div className="shell"><div className="section-head"><span className="section-number">02</span><div><span className="eyebrow">Selected systems</span><h2 className="section-title">Built for actual use.</h2></div><p>Products across browser utilities, AI, campaign operations and conversational CRM.</p></div><div className="projects-stack">{portfolio.projects.map((project, index) => <article className="project-row" data-project key={project.slug} style={{ "--project-accent": project.accent } as React.CSSProperties}><span className="section-number">0{index+1}</span><div><span className="mono" style={{ color: project.accent }}>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><Link href={`/projects/${project.slug}`} className="button" style={{ marginTop: 20 }}>View case study <ArrowRight size={15}/></Link></div><div className="project-aside"><strong>{project.subtitle}</strong><div className="tags">{project.technologies.slice(0,6).map(tech => <span className="tag" key={tech}>{tech}</span>)}</div></div></article>)}</div><Link href="/projects" className="button" style={{ marginTop: 24 }}>Open project archive <ArrowRight size={15}/></Link></div></section>;
}

export function ExperiencePreview() {
  return <section className="section section-rule"><div className="shell"><div className="section-head"><span className="section-number">03</span><div><span className="eyebrow">Professional path</span><h2 className="section-title">Ownership, end to end.</h2></div><p>From architecture and UI through data pipelines, integration and deployment.</p></div><div className="experience-list">{portfolio.experience.map(exp => <article className="experience-item" key={exp.company} data-reveal><div><span className="mono muted">{exp.period}</span><p className="mono" style={{ color: "var(--cyan)" }}>{exp.type}</p></div><div><h3>{exp.role}</h3><strong>{exp.company}</strong><p className="muted"><MapPin size={13} style={{ display: "inline" }}/> {exp.location} · {exp.mode}</p><div className="tags">{exp.technologies.map(tech => <span className="tag" key={tech}>{tech}</span>)}</div><details><summary>Inspect responsibilities +</summary><ul className="responsibilities">{exp.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></details></div></article>)}</div><Link href="/experience" className="button">Full experience <ArrowRight size={15}/></Link></div></section>;
}

export function Capabilities() {
  const capabilities = [
    { icon: Code2, title: "Product interfaces", text: "Responsive React and Next.js experiences built for clarity, speed and maintainability." },
    { icon: Boxes, title: "Backend systems", text: "REST APIs, authentication, webhooks, service logic and durable data models." },
    { icon: Cpu, title: "AI applications", text: "RAG, LLM integrations, dataset processing and deterministic automation workflows." },
    { icon: Sparkles, title: "Production delivery", text: "Cloud deployment, CI/CD, performance work, caching, monitoring-minded decisions." },
  ];
  return <section className="section section-rule"><div className="shell"><div className="section-head"><span className="section-number">04</span><div><span className="eyebrow">Engineering capabilities</span><h2 className="section-title">Across the entire product surface.</h2></div><p>Manish works between disciplines instead of treating frontend, backend and deployment as isolated concerns.</p></div><div className="achievements">{capabilities.map(({icon: Icon,title,text}, index) => <article className="achievement" key={title} data-reveal><span className="section-number">0{index+1}</span><div><Icon color="var(--cyan)"/><p><strong>{title}</strong><br/><span className="muted" style={{ fontSize: ".72em" }}>{text}</span></p></div></article>)}</div></div></section>;
}

export function SkillsPreview() {
  const list = Object.values(portfolio.skills).flat();
  return <section className="section section-rule"><div className="shell"><div className="section-head"><span className="section-number">05</span><div><span className="eyebrow">Technical field</span><h2 className="section-title">Systems, not percentages.</h2></div><p>A practical map of technologies used across interface, service, data, AI and delivery work.</p></div></div><div className="skills-marquee" aria-hidden="true"><div className="skills-track">{[...list,...list].map((skill,i)=><span key={`${skill}-${i}`}>{skill} ·</span>)}</div></div><div className="shell"><div className="skills-map">{Object.entries(portfolio.skills).map(([group, skills]) => <div className="skill-group" key={group}><h3>{group}</h3><ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div><Link href="/skills" className="button" style={{ marginTop: 28 }}>Explore technical capabilities <ArrowRight size={15}/></Link></div></section>;
}

export function Achievements() {
  return <section className="section section-rule"><div className="shell"><div className="section-head"><span className="section-number">06</span><div><span className="eyebrow">Proof of practice</span><h2 className="section-title">Achievements in context.</h2></div><p>Supporting signals of consistency and technical curiosity, kept secondary to professional work.</p></div><div className="achievements">{portfolio.achievements.map((item,index)=><article className="achievement" key={item} data-reveal><Award color="var(--violet)"/><p><span className="mono muted">0{index+1}</span><br/>{item}</p></article>)}</div></div></section>;
}

export function AssistantPreview() {
  return <section className="section section-rule"><div className="shell"><div className="section-head"><span className="section-number">07</span><div><span className="eyebrow">Local portfolio assistant</span><h2 className="section-title">Ask, then inspect.</h2></div><p>Ask Manish uses deterministic matching against this portfolio’s data—no external AI service, no invented answers.</p></div><div className="archive-grid"><div className="archive-card" style={{minHeight:300}}><span className="mono" style={{color:"var(--cyan)"}}>ASK MANISH / LOCAL</span><h2>Questions with a bounded answer.</h2><p>Open the launcher in the lower-right corner and ask about projects, experience, skills, AI work, availability or contact options.</p></div><div className="archive-card" style={{minHeight:300}}><span className="mono muted">Suggested prompts</span>{portfolio.assistant.slice(0,5).map(item=><p key={item.question} style={{borderBottom:"1px solid var(--line)",paddingBottom:10}}>→ {item.question}</p>)}</div></div></div></section>;
}

export function ContactCTA() {
  return <section className="cta"><div className="shell"><span className="mono">Available for full-time opportunities</span><h2>Let’s build<br/>what’s next.</h2><div className="actions" style={{ justifyContent: "center" }}><Link href="/contact" className="button">Start a conversation <ArrowRight size={16}/></Link></div></div></section>;
}
