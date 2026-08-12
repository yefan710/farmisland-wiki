import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { confirmedSystems } from "@/data/site";
import farmData from "@/data/farm-data.json";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Beginner Guide and Early Costs", description: "Follow the first Farm an Island loop with dated Bank, land, Chicken and code details from target-game footage.", alternates: { canonical: "/beginner-guide" } };

export default function BeginnerGuidePage() {
  const faq = [{ question: "What should a new Farm an Island player do first?", answer: "Plant seeds, harvest crops, trade the crops at the Bank for cash and use cash to buy more land." }, { question: "Are chickens part of Farm an Island?", answer: "Yes. The official description says chickens help on the journey, but it does not explain the exact effect." }];
  return <>
    <JsonLd data={[webPageSchema({ name: "Farm an Island Beginner Guide", description: metadata.description as string, path: "/beginner-guide" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Beginner guide", path: "/beginner-guide" }]), faqSchema(faq)]} />
    <PageHero eyebrow="Beginner route" title="Plant, harvest, bank, expand" answer="The official description gives a four-part progression loop. Start there, then inspect chickens as a separate helper system." nextHref="#route" nextLabel="Follow the route" image={{ src: "/beginner-guide.png", alt: "Official Farm an Island image for the beginner route" }} />
    <section className="section"><div className="page-shell content-layout"><div>
      <article className="content-panel" id="route"><span className="eyebrow">First session</span><h2>Your confirmed route</h2><ol className="number-list">{confirmedSystems.slice(0, 4).map((item) => <li key={item.step}><b>{item.title}.</b> {item.detail}</li>)}</ol><SourceNote title="Official game description">These steps come from the Roblox experience description. Exact crop values, land prices and timing are not stated there.</SourceNote></article>
      <article className="content-panel" id="decisions"><span className="eyebrow">Simple decisions</span><h2>Use each system for one job</h2><div className="feature-grid"><div className="feature-card"><span>Grow</span><strong>Seeds and crops</strong><p>Use planting and harvesting to produce the crops mentioned in the official loop.</p><Link href="/seeds-and-crops">Open crop guide</Link></div><div className="feature-card"><span>Convert</span><strong>The Bank</strong><p>The Bank is where the official description says harvested crops become cash.</p><Link href="/bank-and-money">Open Bank guide</Link></div><div className="feature-card"><span>Expand</span><strong>More land</strong><p>Cash can buy more land. This guide does not guess the price or order of plots.</p><Link href="/land-expansion">Open land guide</Link></div></div></article>
      <article className="content-panel" id="limits"><span className="eyebrow">Useful dated details</span><h2>Check these numbers against your current server</h2><table className="data-table"><tbody><tr><th>Early land costs seen</th><td>65, 110, 100, 130, 170 and 220 cash</td></tr><tr><th>Chicken card seen</th><td>{farmData.chicken.rarity}, Power {farmData.chicken.displayedPower}; harvest formula still open</td></tr><tr><th>Codes that worked in Aug 7 capture</th><td>{farmData.codes.map((item) => item.code).join(" and ")}</td></tr></tbody></table><SourceNote tone="reported" title="Dated gameplay, not permanent constants">The footage provides useful starting points. Updates, timed Bank deals and code expiry can change what your server shows.</SourceNote><div className="next-card"><h3>Claim the dated code rewards first</h3><p>The codes page gives the exact strings, rewards, menu path and date limit.</p><Link className="button button-action" href="/codes">Open codes and rewards</Link></div></article>
    </div><GuideRail links={[{ href: "#route", label: "First session" }, { href: "#decisions", label: "System choices" }, { href: "#limits", label: "Known limits" }]} /></div></section>
  </>;
}
