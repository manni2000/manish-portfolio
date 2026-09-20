import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import { portfolio } from "@/data/portfolio";
import SiteShell from "@/components/portfolio/SiteShell";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono", display: "swap" });
const siteUrl = "https://i-manish-kumar.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: portfolio.seo.title, template: "%s | Manish Kumar" },
  description: portfolio.seo.description,
  alternates: { canonical: "/" },
  openGraph: { title: portfolio.seo.title, description: portfolio.seo.description, type: "website", url: siteUrl, siteName: "Manish Kumar Portfolio" },
  twitter: { card: "summary_large_image", title: portfolio.seo.title, description: portfolio.seo.description },
};

export const viewport: Viewport = { themeColor: "#050607", colorScheme: "dark", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    { "@context": "https://schema.org", "@type": "Person", name: portfolio.personal.name, jobTitle: portfolio.personal.title, address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressCountry: "IN" }, sameAs: [portfolio.social.github, portfolio.social.linkedin] },
    { "@context": "https://schema.org", "@type": "WebSite", name: "Manish Kumar Portfolio", url: siteUrl, description: portfolio.seo.description },
  ];
  return <html lang="en" className={`${sans.variable} ${mono.variable}`}><body><Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/><SiteShell>{children}</SiteShell></body></html>;
}
