import Link from "next/link";
import { site } from "@/data/site";

type RailLink = { href: string; label: string };
type NextAction = RailLink & { description: string };

export function GuideRail({ links, nextActions }: { links: RailLink[]; nextActions: NextAction[] }) {
  return (
    <aside className="side-rail">
      <div className="side-card"><h2>In this guide</h2>{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
      <div className="side-card side-card-next"><h2>Up next</h2>{nextActions.map((action) => action.href.startsWith("http") ? <a className="rail-action" key={action.href} href={action.href} target="_blank" rel="noreferrer"><strong>{action.label}</strong><span>{action.description}</span></a> : <Link className="rail-action" key={action.href} href={action.href}><strong>{action.label}</strong><span>{action.description}</span></Link>)}</div>
      <a className="button button-action" href={site.gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a>
    </aside>
  );
}
