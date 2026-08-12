import type { Metadata } from "next";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { site } from "@/data/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Updates", description: "See the latest dated Farm an Island source check and the difference between a game data update and a confirmed patch record.", alternates: { canonical: "/updates" } };

export default function UpdatesPage() { return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Updates", description: metadata.description as string, path: "/updates" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Updates", path: "/updates" }])]} />
  <PageHero eyebrow="Update record" title="No dated patch details confirmed" answer="Boiler Games says the experience receives regular updates. This page does not name a patch, feature or balance change without a dated official record." nextHref="#latest" nextLabel="See the latest check" status="Checked Aug 11, 2026" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="latest"><span className="eyebrow">Latest check</span><h2>Game data changed on Aug 11</h2><p>The Roblox game record showed an updated timestamp of Aug 11, 2026. That timestamp shows the experience record changed, but it does not explain what changed inside the game.</p><SourceNote title="Update signal, not patch notes">A data timestamp cannot support a feature list. The official experience remains the final place to check current gameplay.</SourceNote></article>
    <article className="content-panel" id="snapshot"><span className="eyebrow">Official snapshot</span><h2>Dated public totals</h2><table className="data-table"><thead><tr><th>Field</th><th>Value</th><th>Checked</th></tr></thead><tbody><tr><td>Playing</td><td>{site.playing.toLocaleString("en-US")}</td><td>Aug 11, 2026</td></tr><tr><td>Favorites</td><td>{site.favorites.toLocaleString("en-US")}</td><td>Aug 11, 2026</td></tr><tr><td>Visits</td><td>{site.visits.toLocaleString("en-US")}</td><td>Aug 11, 2026</td></tr></tbody></table><p>These totals are a snapshot and can change after the check.</p></article>
    <article className="content-panel" id="policy"><span className="eyebrow">Publishing rule</span><h2>What will appear here</h2><p>A dated entry needs an official update note or another direct record that states the change. Community discussion may be linked as a report, but it will keep that label.</p><div className="next-card"><h3>Check the current experience</h3><p>Open the official Roblox page for the newest public game state.</p><a className="button button-action" href={site.gameUrl} target="_blank" rel="noreferrer">Open on Roblox</a></div></article>
  </div><GuideRail links={[{ href: "#latest", label: "Latest check" }, { href: "#snapshot", label: "Official totals" }, { href: "#policy", label: "Publishing rule" }]} /></div></section>
</>; }
