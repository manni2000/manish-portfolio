import type { Metadata } from "next";
import PageHero from "@/components/portfolio/PageHero";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = { title: "Skills", description: "Technical capabilities across frontend, backend, databases, AI, automation and cloud deployment.", alternates: { canonical: "/skills" } };
export default function SkillsPage() {
  const featured = ["TypeScript","React","Next.js","Python","Django","Node.js","MongoDB","RAG"];
  return <><PageHero index="03" label="Technical capabilities" title="Engineering Field"><p>Technologies are grouped by where they create value—without arbitrary proficiency percentages.</p></PageHero><section className="section"><div className="shell"><div aria-hidden="true" style={{position:"relative",height:420,border:"1px solid var(--line)",overflow:"hidden",background:"radial-gradient(circle at 50% 50%,rgba(89,231,255,.1),transparent 55%)"}}>{featured.map((skill,index)=>{const angle=(index/featured.length)*Math.PI*2; const x=50+Math.cos(angle)*34; const y=50+Math.sin(angle)*34; return <div key={skill} style={{position:"absolute",left:`${x}%`,top:`${y}%`,transform:"translate(-50%,-50%)"}} className="pill">{skill}</div>})}<div className="brand-mark" style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:70,height:70}}>MK</div></div><div className="skills-map" style={{marginTop:1}}>{Object.entries(portfolio.skills).map(([group,skills])=><section className="skill-group" key={group}><h2>{group}</h2><ul>{skills.map(skill=><li key={skill}>{skill}</li>)}</ul></section>)}</div></div></section></>;
}
