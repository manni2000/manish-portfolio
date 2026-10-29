import type { Metadata } from "next";
import { Github, Linkedin, MapPin } from "lucide-react";
import PageHero from "@/components/portfolio/PageHero";
import ContactForm from "@/components/portfolio/ContactForm";
import { portfolio } from "@/data/portfolio";
import { serverConfig } from "@/lib/server-config";

export const metadata: Metadata = { title: "Contact", description: "Contact Manish Kumar about full-time full-stack and AI application engineering opportunities.", alternates: { canonical: "/contact" } };
export default function ContactPage(){return <><PageHero index="06" label="Contact" title="Start a conversation"><p>For full-time opportunities, product engineering and AI application work.</p></PageHero><section className="section"><div className="shell about-grid"><aside><div className="pill"><span className="status-dot"/>{portfolio.availability.message}</div><p className="muted" style={{fontSize:15,marginTop:30}}><MapPin size={14} style={{display:"inline"}}/> {portfolio.personal.location}</p><div className="actions"><a className="button" href={portfolio.social.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a><a className="button" href={portfolio.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a></div></aside><ContactForm email={serverConfig.contactEmail}/></div></section></>}
