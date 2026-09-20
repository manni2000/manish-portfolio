import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{return{rules:{userAgent:"*",allow:"/",disallow:"/api/"},sitemap:"https://i-manish-kumar.tech/sitemap.xml"}}
