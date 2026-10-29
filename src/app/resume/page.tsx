import type { Metadata } from "next";
import PageHero from "@/components/portfolio/PageHero";
import ResumeViewer from "@/components/portfolio/ResumeViewer";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = { title: "Resume", description: "Resume of Manish Kumar, Full Stack Developer and AI Application Engineer.", alternates: { canonical: "/resume" } };
export default function ResumePage(){return <><PageHero index="05" label="Resume" title="Experience, condensed"><p>View, zoom, open or download Manish’s resume when the source PDF is configured.</p></PageHero><section className="section"><div className="shell"><ResumeViewer path={portfolio.resumePath} downloadName={portfolio.resumeDownloadName}/></div></section></>}
