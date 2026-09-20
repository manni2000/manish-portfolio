"use client";

import { Github, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type GithubData = { configured: boolean; profile?: { login: string; name: string | null; bio: string | null; publicRepos: number; htmlUrl: string }; repos?: { name: string; description: string | null; language: string | null; stars: number; url: string; updatedAt: string }[]; message?: string };

export default function GithubActivity() {
  const [data, setData] = useState<GithubData | null>(null);
  useEffect(() => { const controller = new AbortController(); fetch("/api/github", { signal: controller.signal }).then(r => r.json()).then(setData).catch(() => setData({ configured: false, message: "GitHub activity is temporarily unavailable." })); return () => controller.abort(); }, []);
  return <section className="section section-rule"><div className="shell">
    <div className="section-head"><span className="section-number">06</span><div><span className="eyebrow">Open source signal</span><h2 className="section-title">Public GitHub activity.</h2></div><p>Only current public data is shown. No contribution totals or private activity are inferred.</p></div>
    {!data ? <div className="archive-visual" aria-label="Loading GitHub data" style={{ minHeight: 220 }} /> : !data.configured ? <div className="archive-card" style={{ minHeight: 240 }}><Github size={28}/><h3>GitHub data not configured</h3><p>{data.message ?? "Add GITHUB_USERNAME to show public repositories here."}</p><Link className="button" style={{ alignSelf: "start", marginTop: "auto" }} href="/projects">Browse case studies</Link></div> : <div className="archive-grid">
      <div className="archive-card" style={{ minHeight: 360 }}><Github size={26}/><span className="mono muted" style={{ marginTop: 30 }}>@{data.profile?.login}</span><h2>{data.profile?.name ?? data.profile?.login}</h2><p>{data.profile?.bio ?? "Public GitHub profile"}</p><strong style={{ marginTop: "auto" }}>{data.profile?.publicRepos} public repositories</strong></div>
      <div className="archive-card" style={{ minHeight: 360 }}>{data.repos?.slice(0,3).map(repo => <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" style={{ padding: "14px 0", borderBottom: "1px solid var(--line)" }}><strong>{repo.name}</strong><div className="mono muted" style={{ marginTop: 7 }}>{repo.language ?? "Repository"} · <Star size={10} style={{ display: "inline" }}/> {repo.stars} · Updated {new Date(repo.updatedAt).toLocaleDateString()}</div></a>)}</div>
    </div>}
  </div></section>;
}
