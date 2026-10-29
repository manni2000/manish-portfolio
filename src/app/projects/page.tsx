import type { Metadata } from "next";
import PageHero from "@/components/portfolio/PageHero";
import ProjectArchive from "@/components/portfolio/ProjectArchive";

export const metadata: Metadata = { title: "Projects", description: "Selected full-stack, AI, SaaS and API integration projects by Manish Kumar.", alternates: { canonical: "/projects" } };
export default function ProjectsPage() { return <><PageHero index="01" label="Project archive" title="Selected Work"><p>Production-focused systems across full-stack engineering, AI applications, SaaS and API integrations.</p></PageHero><ProjectArchive/></>; }
