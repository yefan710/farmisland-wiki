import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import farmData from "@/data/farm-data.json";

export const metadata: Metadata = { title: "Farm an Island Land Costs and Expansion", description: "See early Farm an Island land costs visible in dated gameplay and how to compare a pad with your cash after using the Bank.", alternates: { canonical: "/land-expansion" } };

export default function LandPage() { return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Land Expansion Guide", description: metadata.description as string, path: "/land-expansion" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Land expansion", path: "/land-expansion" }])]} />
  <PageHero eyebrow="Land expansion" title="Early pads showed costs from 65 to 220" answer="A dated beginner video shows a tutorial pad at 65, an adjacent pad at 110, and four visible pads at 100, 130, 170, and 220. The footage does not establish permanent plot names or a universal purchase order." nextHref="#costs" nextLabel="See visible costs" image={{ src: "/island-expansion.png", alt: "Official Farm an Island image showing an expanded island" }} status="Gameplay published Aug 5, 2026" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="role"><span className="eyebrow">Known role</span><h2>Expansion follows a Bank transfer</h2><p>Harvest crops, use the Bank, then inspect the number on the expansion pad. This sequence lets you compare a visible cost with cash you can actually spend.</p></article>
    <article className="content-panel" id="costs"><span className="eyebrow">Visible costs</span><h2>Early land numbers from the Aug 5 tutorial</h2><table className="data-table"><thead><tr><th>Where it appeared</th><th>Cost shown</th><th>Source date</th></tr></thead><tbody>{farmData.landCosts.map((item) => <tr key={item.label}><td>{item.label}</td><td><strong>{item.cost}</strong> cash</td><td>{item.sourceDate}</td></tr>)}</tbody></table><SourceNote tone="reported" title="Position, not a universal price ladder">The video shows these values on visible pads. It does not name every plot or prove that every account sees them in the same order after later updates.</SourceNote></article>
    <article className="content-panel" id="before"><span className="eyebrow">Before buying</span><h2>Check the live purchase panel</h2><ol className="number-list"><li>Take harvested crops to the Bank so you can see your current cash.</li><li>Inspect the land purchase option shown in the current game.</li><li>Compare its displayed cost with the cash you have now.</li><li>Confirm what the plot adds before accepting the purchase.</li></ol><p>These are decision steps, not claims about a specific price or benefit.</p></article>
    <article className="content-panel" id="unknown"><span className="eyebrow">Still open</span><h2>Plot names and capacity gains need a clearer source</h2><p>The reviewed footage does not provide a complete named plot list or the exact capacity added by each purchase. Use the visible cost as the final check in your current server.</p><div className="next-card"><h3>Need cash first?</h3><p>The Bank page shows why its Deal value must be checked before you plan a purchase.</p><Link className="button button-action" href="/bank-and-money">Open Bank guide</Link></div></article>
  </div><GuideRail links={[{ href: "#role", label: "Expansion role" }, { href: "#costs", label: "Visible costs" }, { href: "#before", label: "Before buying" }, { href: "#unknown", label: "Still open" }]} /></div></section>
</>; }
