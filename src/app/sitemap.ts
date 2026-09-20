import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

export default function sitemap():MetadataRoute.Sitemap{const base="https://i-manish-kumar.tech";const paths=["","/projects","/experience","/skills","/about","/resume","/contact"];return [...paths.map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path===""?"monthly" as const:"yearly" as const,priority:path===""?1:.8})),...projects.map(project=>({url:`${base}/projects/${project.slug}`,lastModified:new Date(),changeFrequency:"yearly" as const,priority:.75}))]}
