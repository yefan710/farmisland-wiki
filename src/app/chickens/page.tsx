import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import farmData from "@/data/farm-data.json";

export const metadata: Metadata = { title: "Farm an Island Chicken Power and XL Pass", description: "See the Common Chicken card, its displayed 2x Power, the known harvest role, and the official XL Chicken Hunter price.", alternates: { canonical: "/chickens" } };

export default function ChickensPage() { const faq = [{ question: "What does the Common Chicken do in Farm an Island?", answer: "The tutorial says a chicken helps harvest crops. Its card shows Common rarity and 2x Power, but does not define the multiplier formula." }, { question: "How much is XL Chicken Hunter?", answer: "Roblox listed XL Chicken Hunter at 1,499 Robux in the Aug 17, 2026 game-passes API check." }]; return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Chickens Guide", description: metadata.description as string, path: "/chickens" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Chickens", path: "/chickens" }]), faqSchema(faq)]} />
  <PageHero eyebrow="Chicken helpers" title="The Common Chicken card shows 2x Power" answer="A chicken helps harvest crops. The Common card shows 2x Power, but the game screen checked on Aug 5 did not explain whether that changes amount, speed, range or another field." nextHref="#card" nextLabel="See the card details" status="Card checked Aug 5, 2026" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="card"><span className="eyebrow">Chicken card</span><h2>{farmData.chicken.rarity} {farmData.chicken.name}, Power {farmData.chicken.displayedPower}</h2><table className="data-table"><tbody><tr><th>Job</th><td>{farmData.chicken.knownRole}</td></tr><tr><th>Rarity</th><td>{farmData.chicken.rarity}</td></tr><tr><th>Power shown</th><td>{farmData.chicken.displayedPower}</td></tr><tr><th>Effect not explained</th><td>{farmData.chicken.formulaStatus}</td></tr></tbody></table></article>
    <article className="content-panel" id="pass"><span className="eyebrow">Robux pass</span><h2>XL Chicken Hunter was listed at 1,499 Robux</h2><p>Roblox listed XL Chicken Hunter for sale at 1,499 Robux on Aug 17, 2026. The pass page did not specify the XL chance, eligible chickens or resulting XL effect.</p><p className="player-note">Do not assume the odds from the pass name. Read the current Roblox purchase panel before spending Robux.</p></article>
    <article className="content-panel" id="check"><span className="eyebrow">Use the live game</span><h2>Inspect before you spend</h2><p>If the current game offers a chicken purchase or choice, read the displayed effect and cost before deciding. If the panel does not explain what 2x Power changes, do not buy based on the multiplier alone.</p><div className="next-card"><h3>Return to the farm loop</h3><p>Continue with planting, harvesting, the Bank and land expansion.</p><Link className="button button-action" href="/beginner-guide">Open the beginner route</Link></div></article>
  </div><GuideRail links={[{ href: "#card", label: "Chicken card" }, { href: "#pass", label: "XL Chicken Hunter" }, { href: "#check", label: "Before spending" }]} nextActions={[{ href: "/beginner-guide", label: "Return to the farm loop", description: "Continue planting, banking and expanding." }, { href: site.gameUrl, label: "Check the current pass", description: "Open the live Roblox experience." }]} /></div></section>
</>; }

