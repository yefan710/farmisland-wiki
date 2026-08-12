import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Official Links and Guide Dates", description: "Open the official Farm an Island Roblox experience and understand the dates shown beside changing codes, values and passes.", alternates: { canonical: "/sources" } };

export default function SourcesPage() { return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Official Links and Guide Dates", description: metadata.description as string, path: "/sources" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Game links", path: "/sources" }])]} />
  <PageHero eyebrow="Game links" title="Use the live game as the final check" answer="Codes can expire, Bank deals can change and pass details can move. The date beside a value tells you when it was last useful, while the current game screen gives the final answer." nextHref="#official" nextLabel="Open the game links" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="official"><span className="eyebrow">Official game</span><h2>Farm an Island on Roblox</h2><p>Use the official experience to play, inspect current passes and confirm the value shown before spending Robux or in-game cash.</p><a className="button button-action" href={site.gameUrl} target="_blank" rel="noreferrer">Open Farm an Island</a></article>
    <article className="content-panel" id="dates"><span className="eyebrow">Reading guide dates</span><h2>What each date means for your next move</h2><div className="feature-grid"><div className="feature-card"><strong>Last worked</strong><p>A code succeeded on that date. It can still expire later, so try it in your current server.</p></div><div className="feature-card"><strong>Last checked</strong><p>A cost, card or public total matched the listed value on that date. Compare it with the current screen.</p></div><div className="feature-card"><strong>Not known yet</strong><p>The guide does not have enough information to give a reliable number or formula. Use the live game instead.</p></div></div></article>
    <article className="content-panel" id="next"><span className="eyebrow">Choose a guide</span><h2>Continue with the task in front of you</h2><div className="feature-grid"><div className="feature-card"><strong>Redeem a code</strong><p>Try both reward strings and watch the redemption walkthrough.</p><Link href="/codes">Open codes</Link></div><div className="feature-card"><strong>Build more cash</strong><p>Read the Bank deal before transferring a crop batch.</p><Link href="/bank-and-money">Open Bank guide</Link></div><div className="feature-card"><strong>Check crops and XL</strong><p>Review the available crop details and play the XL Durian example.</p><Link href="/seeds-and-crops">Open crop guide</Link></div></div></article>
  </div><GuideRail links={[{ href: "#official", label: "Official game" }, { href: "#dates", label: "How dates work" }, { href: "#next", label: "Choose a guide" }]} nextActions={[{ href: "/codes", label: "Try the codes", description: "Check the rewards and redemption path." }, { href: "/beginner-guide", label: "Start the farm loop", description: "Plant, harvest, use the Bank and expand." }]} /></div></section>
</>; }
