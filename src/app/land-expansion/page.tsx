import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Land Expansion Guide", description: "See where land expansion fits the Farm an Island progression loop and which dated price or plot fields still need processing.", alternates: { canonical: "/land-expansion" } };

export default function LandPage() { return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Land Expansion Guide", description: metadata.description as string, path: "/land-expansion" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Land expansion", path: "/land-expansion" }])]} />
  <PageHero eyebrow="Land expansion" title="Cash leads to more land" answer="Buying more land is part of the Farm an Island loop. Exact plot order, prices, and capacity gains can come from dated web, video, or screenshot sources, but this revision has not processed a complete same-build set." nextHref="#role" nextLabel="See the expansion role" image={{ src: "/island-expansion.png", alt: "Official Farm an Island image showing an expanded island" }} status="Cost fields not processed" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="role"><span className="eyebrow">Known role</span><h2>Expansion follows cash</h2><p>The Roblox description names a clear sequence: harvest crops, trade at the Bank for cash, and use that cash to buy more land.</p><SourceNote title="Known system, open fields">A competitor page, video, screenshot, or community guide may supply plot count, cost, and unlock fields. Each value needs its source date and game-build context.</SourceNote></article>
    <article className="content-panel" id="before"><span className="eyebrow">Before buying</span><h2>Check the live purchase panel</h2><ol className="number-list"><li>Take harvested crops to the Bank so you can see your current cash.</li><li>Inspect the land purchase option shown in the current game.</li><li>Compare its displayed cost with the cash you have now.</li><li>Confirm what the plot adds before accepting the purchase.</li></ol><p>These are decision steps, not claims about a specific price or benefit.</p></article>
    <article className="content-panel" id="unknown"><span className="eyebrow">Open fields</span><h2>No processed price list yet</h2><table className="data-table"><thead><tr><th>Detail</th><th>Status</th></tr></thead><tbody><tr><td>Land prices</td><td><span className="tag tag-unknown">Not processed</span></td></tr><tr><td>Plot order</td><td><span className="tag tag-unknown">Not processed</span></td></tr><tr><td>Capacity gained</td><td><span className="tag tag-unknown">Not processed</span></td></tr></tbody></table><div className="next-card"><h3>Review the source method</h3><p>The source page explains how an external value becomes a dated fact without copying another guide&apos;s presentation.</p><Link className="button button-action" href="/sources">Open sources</Link></div></article>
  </div><GuideRail links={[{ href: "#role", label: "Expansion role" }, { href: "#before", label: "Before buying" }, { href: "#unknown", label: "Missing data" }]} /></div></section>
</>; }
