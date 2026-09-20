import { ReactNode } from "react";

export default function PageHero({ index, label, title, children }: { index: string; label: string; title: string; children?: ReactNode }) {
  return <header className="page-hero grid-bg"><div className="shell"><div className="eyebrow"><span>{index}</span>{label}</div><h1>{title}</h1>{children && <div>{children}</div>}</div></header>;
}
