import type { Metadata } from "next";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Updates", description: "Check the latest Farm an Island update date, public totals and the official Roblox experience.", alternates: { canonical: "/updates" } };

export default function UpdatesPage() { return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Updates", description: metadata.description as string, path: "/updates" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Updates", path: "/updates" }])]} />
  <PageHero eyebrow="Game updates" title="No patch details are listed yet" answer="The Farm an Island game record changed on Aug 11, but it did not include a list of features or balance changes. Open the live experience for the newest game state." nextHref="#latest" nextLabel="See the latest date" status="Checked Aug 11, 2026" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="latest"><span className="eyebrow">Latest date</span><h2>The game record changed on Aug 11</h2><p>The update timestamp does not explain what changed inside the game, so there is no feature or balance list on this page yet.</p><p className="player-note">Use the official experience as the final check for current gameplay.</p></article>
    <article className="content-panel" id="snapshot"><span className="eyebrow">Official snapshot</span><h2>Dated public totals</h2><table className="data-table"><thead><tr><th>Field</th><th>Value</th><th>Checked</th></tr></thead><tbody><tr><td>Playing</td><td>{site.playing.toLocaleString("en-US")}</td><td>Aug 11, 2026</td></tr><tr><td>Favorites</td><td>{site.favorites.toLocaleString("en-US")}</td><td>Aug 11, 2026</td></tr><tr><td>Visits</td><td>{site.visits.toLocaleString("en-US")}</td><td>Aug 11, 2026</td></tr></tbody></table><p>These totals are a snapshot and can change after the check.</p></article>
    <article className="content-panel" id="play"><span className="eyebrow">Current game</span><h2>Check the experience before planning around an update</h2><p>Look at the live description, current passes and in-game screens before spending cash or Robux on a value that may have changed.</p><div className="next-card"><h3>Open Farm an Island</h3><p>Use the official Roblox page for the newest public game state.</p><a className="button button-action" href={site.gameUrl} target="_blank" rel="noreferrer">Open on Roblox</a></div></article>
  </div><GuideRail links={[{ href: "#latest", label: "Latest date" }, { href: "#snapshot", label: "Public totals" }, { href: "#play", label: "Check the current game" }]} nextActions={[{ href: site.gameUrl, label: "Open Farm an Island", description: "Check the newest game state on Roblox." }, { href: "/codes", label: "Try the reward codes", description: "See the last rewards and redemption path." }]} /></div></section>
</>; }
