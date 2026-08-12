import Link from "next/link";

export default function NotFound() { return <section className="section"><div className="page-shell content-panel"><span className="eyebrow">404</span><h1>That field is not planted</h1><p className="lede">The page may have moved, or the route may not exist.</p><div className="hero-actions"><Link className="button button-action" href="/">Return home</Link><Link className="button button-quiet" href="/beginner-guide">Open beginner guide</Link></div></div></section>; }
