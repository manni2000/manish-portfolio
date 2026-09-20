import Link from "next/link";
export default function NotFound(){return <div className="page-hero grid-bg"><div className="shell"><span className="eyebrow">404 / Route not found</span><h1>Off the map.</h1><p>The requested route does not exist or has moved.</p><Link className="button button-primary" href="/">Return home</Link></div></div>}
