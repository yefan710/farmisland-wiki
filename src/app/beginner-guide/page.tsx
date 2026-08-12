import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { gameplayLoop } from "@/data/site";
import farmData from "@/data/farm-data.json";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Beginner Guide and Early Costs", description: "Follow the first Farm an Island loop, then check early Bank, land, Chicken and code details before choosing the next step.", alternates: { canonical: "/beginner-guide" } };

export default function BeginnerGuidePage() {
  const faq = [{ question: "What should a new Farm an Island player do first?", answer: "Plant seeds, harvest crops, trade the crops at the Bank for cash and use cash to buy more land." }, { question: "Are chickens part of Farm an Island?", answer: "Yes. The official description says chickens help on the journey, but it does not explain the exact effect." }];
  return <>
    <JsonLd data={[webPageSchema({ name: "Farm an Island Beginner Guide", description: metadata.description as string, path: "/beginner-guide" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Beginner guide", path: "/beginner-guide" }]), faqSchema(faq)]} />
    <PageHero eyebrow="Beginner route" title="Plant, harvest, bank, expand" answer="The official description gives a four-part progression loop. Start there, then inspect chickens as a separate helper system." nextHref="#route" nextLabel="Follow the route" image={{ src: "/beginner-guide.png", alt: "Official Farm an Island image for the beginner route" }} />
    <section className="section"><div className="page-shell content-layout"><div>
      <article className="content-panel" id="route"><span className="eyebrow">First session</span><h2>Your first farm route</h2><ol className="number-list">{gameplayLoop.slice(0, 4).map((item) => <li key={item.step}><b>{item.title}.</b> {item.detail}</li>)}</ol><p className="player-note">Exact crop values, land prices and timing can change. Read the number shown in your current server before spending cash.</p></article>
      <article className="content-panel" id="decisions"><span className="eyebrow">Simple decisions</span><h2>Use each system for one job</h2><div className="feature-grid"><div className="feature-card"><span>Grow</span><strong>Seeds and crops</strong><p>Use planting and harvesting to produce the crops mentioned in the official loop.</p><Link href="/seeds-and-crops">Open crop guide</Link></div><div className="feature-card"><span>Convert</span><strong>The Bank</strong><p>The Bank is where the official description says harvested crops become cash.</p><Link href="/bank-and-money">Open Bank guide</Link></div><div className="feature-card"><span>Expand</span><strong>More land</strong><p>Cash can buy more land. This guide does not guess the price or order of plots.</p><Link href="/land-expansion">Open land guide</Link></div></div></article>
      <article className="content-panel" id="limits"><span className="eyebrow">Numbers to check</span><h2>Compare these with your current server</h2><table className="data-table"><tbody><tr><th>Early land costs last seen</th><td>65, 110, 100, 130, 170 and 220 cash</td></tr><tr><th>Chicken card</th><td>{farmData.chicken.rarity}, Power {farmData.chicken.displayedPower}; the harvest effect is not explained</td></tr><tr><th>Codes last working Aug 7</th><td>{farmData.codes.map((item) => item.code).join(" and ")}</td></tr></tbody></table><p className="player-note">Bank deals can change and codes can expire. Use these as starting points, then follow the value or message shown in your current server.</p><div className="next-card"><h3>Try the reward codes first</h3><p>The codes page gives the exact strings, rewards, menu path and a playable walkthrough.</p><Link className="button button-action" href="/codes">Open codes and rewards</Link></div></article>
    </div><GuideRail links={[{ href: "#route", label: "First session" }, { href: "#decisions", label: "Choose a system" }, { href: "#limits", label: "Numbers to check" }]} nextActions={[{ href: "/codes", label: "Try the reward codes", description: "Enter both strings before they expire." }, { href: "/seeds-and-crops", label: "Check crops and XL plants", description: "Review the available crop details." }]} /></div></section>
  </>;
}
