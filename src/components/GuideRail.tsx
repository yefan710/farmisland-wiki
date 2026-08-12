import Link from "next/link";
import { site } from "@/data/site";

export function GuideRail({ links }: { links: { href: string; label: string }[] }) {
  return (
    <aside className="side-rail">
      <div className="side-card"><h2>In this route</h2>{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
      <div className="side-card"><h2>Evidence status</h2><p className="lede">Official facts are marked checked. Reports and missing details keep their own labels.</p><Link href="/sources">Read the source policy</Link></div>
      <a className="button button-action" href={site.gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a>
    </aside>
  );
}
