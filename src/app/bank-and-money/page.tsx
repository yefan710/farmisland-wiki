import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Bank and Money Guide", description: "Understand the Bank and cash loop in Farm an Island, plus what a dated crop-value and profit table still needs.", alternates: { canonical: "/bank-and-money" } };

export default function BankPage() { const faq = [{ question: "What does the Bank do in Farm an Island?", answer: "The official description says players trade harvested crops at the Bank to earn cash." }, { question: "What should cash be used for?", answer: "The official description says cash can be used to buy more land." }]; return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Bank and Money Guide", description: metadata.description as string, path: "/bank-and-money" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bank and money", path: "/bank-and-money" }]), faqSchema(faq)]} />
  <PageHero eyebrow="Bank and money" title="Turn crops into expansion cash" answer="The Bank connects harvested crops to cash. The official description then connects cash to buying more land." nextHref="#loop" nextLabel="See the money loop" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="loop"><span className="eyebrow">Known connection</span><h2>Harvest, trade, expand</h2><ol className="number-list"><li>Harvest crops from planted seeds.</li><li>Trade the harvested crops at the Bank.</li><li>Receive cash through that trade.</li><li>Use cash to buy more land.</li></ol><SourceNote title="System-level fact">Exact crop payouts and land costs may come from dated competitor pages, videos, screenshots, or other web guides. This revision has not yet processed those fields into one same-build table.</SourceNote></article>
    <article className="content-panel" id="values"><span className="eyebrow">Value tables</span><h2>No same-build profit ranking is published yet</h2><p>A useful profit table needs crop names, sale values, growth times, and every condition that changes the result. External sources are eligible, but the current field set is incomplete.</p><table className="data-table"><thead><tr><th>Needed input</th><th>Current status</th></tr></thead><tbody><tr><td>Crop sale values</td><td><span className="tag tag-unknown">Not processed</span></td></tr><tr><td>Growth times</td><td><span className="tag tag-unknown">Not processed</span></td></tr><tr><td>Bank bonuses or fees</td><td><span className="tag tag-unknown">Not processed</span></td></tr></tbody></table></article>
    <article className="content-panel" id="decision"><span className="eyebrow">Practical decision</span><h2>Use the Bank as a checkpoint</h2><p>When your inventory contains harvested crops, the Bank is the confirmed place to connect that work to cash. Check the current game interface for the actual payout before planning around a target amount.</p><div className="next-card"><h3>Where does the cash go next?</h3><p>More land is the confirmed expansion use named in the official description.</p><Link className="button button-action" href="/land-expansion">Continue to land expansion</Link></div></article>
  </div><GuideRail links={[{ href: "#loop", label: "Money loop" }, { href: "#values", label: "Value status" }, { href: "#decision", label: "Practical decision" }]} /></div></section>
</>; }
