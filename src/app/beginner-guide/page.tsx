import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { confirmedSystems } from "@/data/site";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Beginner Guide", description: "A short Farm an Island beginner route based on the official plant, harvest, Bank, cash and land expansion loop.", alternates: { canonical: "/beginner-guide" } };

export default function BeginnerGuidePage() {
  const faq = [{ question: "What should a new Farm an Island player do first?", answer: "Plant seeds, harvest crops, trade the crops at the Bank for cash and use cash to buy more land." }, { question: "Are chickens part of Farm an Island?", answer: "Yes. The official description says chickens help on the journey, but it does not explain the exact effect." }];
  return <>
    <JsonLd data={[webPageSchema({ name: "Farm an Island Beginner Guide", description: metadata.description as string, path: "/beginner-guide" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Beginner guide", path: "/beginner-guide" }]), faqSchema(faq)]} />
    <PageHero eyebrow="Beginner route" title="Plant, harvest, bank, expand" answer="The official description gives a four-part progression loop. Start there, then inspect chickens as a separate helper system." nextHref="#route" nextLabel="Follow the route" image={{ src: "/beginner-guide.png", alt: "Official Farm an Island image for the beginner route" }} />
    <section className="section"><div className="page-shell content-layout"><div>
      <article className="content-panel" id="route"><span className="eyebrow">First session</span><h2>Your confirmed route</h2><ol className="number-list">{confirmedSystems.slice(0, 4).map((item) => <li key={item.step}><b>{item.title}.</b> {item.detail}</li>)}</ol><SourceNote title="Official game description">These steps come from the Roblox experience description. Exact crop values, land prices and timing are not stated there.</SourceNote></article>
      <article className="content-panel" id="decisions"><span className="eyebrow">Simple decisions</span><h2>Use each system for one job</h2><div className="feature-grid"><div className="feature-card"><span>Grow</span><strong>Seeds and crops</strong><p>Use planting and harvesting to produce the crops mentioned in the official loop.</p><Link href="/seeds-and-crops">Open crop guide</Link></div><div className="feature-card"><span>Convert</span><strong>The Bank</strong><p>The Bank is where the official description says harvested crops become cash.</p><Link href="/bank-and-money">Open Bank guide</Link></div><div className="feature-card"><span>Expand</span><strong>More land</strong><p>Cash can buy more land. This guide does not guess the price or order of plots.</p><Link href="/land-expansion">Open land guide</Link></div></div></article>
      <article className="content-panel" id="limits"><span className="eyebrow">Known limits</span><h2>Do not plan around missing numbers</h2><p>No verified crop catalog, profit table, land price list or chicken odds are available in the current official data used here. Check the live game before making a purchase around a specific number.</p><SourceNote tone="unknown" title="Details still need a game check">Use the guides to understand the role of each system. Treat precise values as unknown until a dated check can support them.</SourceNote><div className="next-card"><h3>Need the current code answer?</h3><p>No working code is confirmed for this guide on Aug 11, 2026.</p><Link className="button button-action" href="/codes">Review code status</Link></div></article>
    </div><GuideRail links={[{ href: "#route", label: "First session" }, { href: "#decisions", label: "System choices" }, { href: "#limits", label: "Known limits" }]} /></div></section>
  </>;
}
