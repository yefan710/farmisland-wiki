import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import farmData from "@/data/farm-data.json";

export const metadata: Metadata = { title: "Farm an Island Chicken Power and XL Pass", description: "See the Common Chicken card, its displayed 2x Power, the known harvest role, and the official XL Chicken Hunter price.", alternates: { canonical: "/chickens" } };

export default function ChickensPage() { const faq = [{ question: "What does the Common Chicken do in Farm an Island?", answer: "The tutorial says a chicken helps harvest crops. Its card shows Common rarity and 2x Power, but does not define the multiplier formula." }, { question: "How much is XL Chicken Hunter?", answer: "Roblox listed XL Chicken Hunter at 1,499 Robux in the Aug 12, 2026 game-passes API check." }]; return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Chickens Guide", description: metadata.description as string, path: "/chickens" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Chickens", path: "/chickens" }]), faqSchema(faq)]} />
  <PageHero eyebrow="Chicken helpers" title="The Common Chicken card shows 2x Power" answer="The Aug 5 tutorial says a chicken helps harvest crops. The visible card marks it Common with 2x Power, but the screen does not explain whether that multiplier changes amount, speed, range, or another field." nextHref="#confirmed" nextLabel="See known fields" status="Gameplay published Aug 5, 2026" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="confirmed"><span className="eyebrow">Known fields</span><h2>{farmData.chicken.rarity} {farmData.chicken.name}, Power {farmData.chicken.displayedPower}</h2><table className="data-table"><tbody><tr><th>Role stated by tutorial</th><td>{farmData.chicken.knownRole}</td></tr><tr><th>Rarity</th><td>{farmData.chicken.rarity}</td></tr><tr><th>Power shown</th><td>{farmData.chicken.displayedPower}</td></tr><tr><th>Formula limit</th><td>{farmData.chicken.formulaStatus}</td></tr></tbody></table></article>
    <article className="content-panel" id="unknown"><span className="eyebrow">Official pass</span><h2>XL Chicken Hunter was listed at 1,499 Robux</h2><p>The Roblox game-passes API listed XL Chicken Hunter for sale at 1,499 Robux on Aug 12, 2026. The pass name and price are known; probability, eligible chickens, and the resulting XL effect are not.</p><SourceNote tone="unknown" title="Do not infer odds from the pass name">None of the reviewed sources shows an XL Chicken probability or a complete Chicken catalog.</SourceNote></article>
    <article className="content-panel" id="check"><span className="eyebrow">Use the live game</span><h2>Inspect before you spend</h2><p>If the current game offers a chicken purchase or choice, read the displayed effect and cost before making the decision. The site does not fill missing details with assumptions.</p><div className="next-card"><h3>Return to the stable route</h3><p>Planting, harvesting, the Bank and land expansion have clearer official support.</p><Link className="button button-action" href="/beginner-guide">Open the beginner route</Link></div></article>
  </div><GuideRail links={[{ href: "#confirmed", label: "Confirmed statement" }, { href: "#unknown", label: "Unknown details" }, { href: "#check", label: "Before spending" }]} /></div></section>
</>; }
