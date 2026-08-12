import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import farmData from "@/data/farm-data.json";

export const metadata: Metadata = { title: "Farm an Island Land Costs and Expansion", description: "See early Farm an Island land costs visible in dated gameplay and how to compare a pad with your cash after using the Bank.", alternates: { canonical: "/land-expansion" } };

export default function LandPage() { return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Land Expansion Guide", description: metadata.description as string, path: "/land-expansion" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Land expansion", path: "/land-expansion" }])]} />
  <PageHero eyebrow="Land expansion" title="Early pads cost from 65 to 220" answer="The early costs last checked were 65, 110, 100, 130, 170 and 220 cash. Plot names and purchase order may differ, so inspect the pad in your current server." nextHref="#costs" nextLabel="See early costs" image={{ src: "/island-expansion.png", alt: "Official Farm an Island image showing an expanded island" }} status="Costs checked Aug 5, 2026" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="role"><span className="eyebrow">Known role</span><h2>Expansion follows a Bank transfer</h2><p>Harvest crops, use the Bank, then inspect the number on the expansion pad. This sequence lets you compare a visible cost with cash you can actually spend.</p></article>
    <article className="content-panel" id="costs"><span className="eyebrow">Early costs</span><h2>Land numbers checked on Aug 5</h2><table className="data-table"><thead><tr><th>Where it appeared</th><th>Cost shown</th><th>Last checked</th></tr></thead><tbody>{farmData.landCosts.map((item) => <tr key={item.label}><td>{item.label}</td><td><strong>{item.cost}</strong> cash</td><td>{item.sourceDate}</td></tr>)}</tbody></table><p className="player-note">These positions are useful starting points, not a universal price ladder. Check the number on the pad before buying.</p></article>
    <article className="content-panel" id="before"><span className="eyebrow">Before buying</span><h2>Check the live purchase panel</h2><ol className="number-list"><li>Take harvested crops to the Bank so you can see your current cash.</li><li>Inspect the land purchase option shown in the current game.</li><li>Compare its displayed cost with the cash you have now.</li><li>Confirm what the plot adds before accepting the purchase.</li></ol><p>These are decision steps, not claims about a specific price or benefit.</p></article>
    <article className="content-panel" id="check"><span className="eyebrow">Check in game</span><h2>Confirm the benefit before buying</h2><p>A complete named plot list and the exact capacity added by each purchase are not available. Use the live purchase panel to check both the cost and what the land adds.</p><div className="next-card"><h3>Need cash first?</h3><p>The Bank page shows why its Deal value must be checked before you plan a purchase.</p><Link className="button button-action" href="/bank-and-money">Open Bank guide</Link></div></article>
  </div><GuideRail links={[{ href: "#role", label: "Expansion route" }, { href: "#costs", label: "Early costs" }, { href: "#before", label: "Before buying" }, { href: "#check", label: "Check the benefit" }]} nextActions={[{ href: "/bank-and-money", label: "Build more cash", description: "Check the Bank deal before transferring." }, { href: "/chickens", label: "Review chicken helpers", description: "See the available Common Chicken details." }]} /></div></section>
</>; }
