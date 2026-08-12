import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Chickens Guide", description: "Learn the known role of chickens in Farm an Island and which effect, cost, Tier, and probability fields still need processing.", alternates: { canonical: "/chickens" } };

export default function ChickensPage() { const faq = [{ question: "Do chickens help in Farm an Island?", answer: "The Roblox description says chickens help on the journey, but the current processed source set does not state the exact effect." }, { question: "What are the chicken odds or bonuses?", answer: "No dated same-build odds, bonus, cost, or effect table has been processed for this page yet. External web and video sources are eligible inputs." }]; return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Chickens Guide", description: metadata.description as string, path: "/chickens" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Chickens", path: "/chickens" }]), faqSchema(faq)]} />
  <PageHero eyebrow="Chicken helpers" title="Known helpers, open effect fields" answer="Chickens are part of the Roblox game description. Exact effects, odds, Tiers, and costs can come from dated external sources, but this revision has not processed a complete same-build table." nextHref="#confirmed" nextLabel="See the current limit" status="Effect fields not processed" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="confirmed"><span className="eyebrow">Known role</span><h2>Chickens help on the journey</h2><p>That is the limit of the Roblox statement available for this page. A detailed effect guide can use videos, screenshots, competitor pages, or community guides after the fields are extracted and dated.</p><SourceNote title="Source field limit">This revision keeps the statement broad because the processed field set is broad.</SourceNote></article>
    <article className="content-panel" id="unknown"><span className="eyebrow">Open fields</span><h2>Effects, odds, Tiers, and values need processing</h2><table className="data-table"><thead><tr><th>Question</th><th>Status</th></tr></thead><tbody><tr><td>What does each chicken do?</td><td><span className="tag tag-unknown">Not processed</span></td></tr><tr><td>Are there rarity odds?</td><td><span className="tag tag-unknown">Not processed</span></td></tr><tr><td>Do chickens change crop results?</td><td><span className="tag tag-unknown">Not processed</span></td></tr><tr><td>What do chickens cost?</td><td><span className="tag tag-unknown">Not processed</span></td></tr></tbody></table></article>
    <article className="content-panel" id="check"><span className="eyebrow">Use the live game</span><h2>Inspect before you spend</h2><p>If the current game offers a chicken purchase or choice, read the displayed effect and cost before making the decision. The site does not fill missing details with assumptions.</p><div className="next-card"><h3>Return to the stable route</h3><p>Planting, harvesting, the Bank and land expansion have clearer official support.</p><Link className="button button-action" href="/beginner-guide">Open the beginner route</Link></div></article>
  </div><GuideRail links={[{ href: "#confirmed", label: "Confirmed statement" }, { href: "#unknown", label: "Unknown details" }, { href: "#check", label: "Before spending" }]} /></div></section>
</>; }
