"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

const BadgeCanvas = dynamic(() => import("./IdentityBadgeCanvas"), { ssr: false });

export function StaticIdentityBadge() {
  return <div className="badge-fallback" role="img" aria-label="Manish Kumar engineering identity badge">
    <div className="lanyard" aria-hidden="true" />
    <div className="identity-card">
      <div className="card-top"><span className="mono">Engineering access</span><span className="status-dot" /></div>
      <div className="card-name"><strong>{portfolio.personal.name}</strong><div className="card-role"><span>Full Stack Developer</span><span>AI Application Engineer</span></div></div>
      <div className="card-bottom"><span className="card-details"><span>{portfolio.personal.institution}</span><span>{portfolio.personal.shortLocation}</span><b>Available for opportunities</b></span><Image className="card-qr" src="/qrcode.png" width={84} height={84} alt="QR code for Manish Kumar's portfolio" priority unoptimized /></div>
    </div>
  </div>;
}

export default function IdentityBadge() {
  const [mode, setMode] = useState<"loading" | "full" | "static">("loading");
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = innerWidth < 850;
    const touch = navigator.maxTouchPoints > 0;
    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
    setMode(gl && !reduced && !small && !touch && cores >= 4 && memory >= 4 ? "full" : "static");
  }, []);
  if (mode === "full") return <BadgeCanvas />;
  return <StaticIdentityBadge />;
}
