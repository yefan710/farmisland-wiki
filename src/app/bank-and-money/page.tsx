import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import farmData from "@/data/farm-data.json";

export const metadata: Metadata = { title: "Farm an Island Bank and Money Guide", description: "Learn how the Bank transfer works, why the current deal can change, and which missing crop fields prevent a reliable profit ranking.", alternates: { canonical: "/bank-and-money" } };

export default function BankPage() { const faq = [{ question: "What does the Bank do in Farm an Island?", answer: "The official description says players trade harvested crops at the Bank to earn cash." }, { question: "What should cash be used for?", answer: "The official description says cash can be used to buy more land." }]; return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Bank and Money Guide", description: metadata.description as string, path: "/bank-and-money" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bank and money", path: "/bank-and-money" }]), faqSchema(faq)]} />
  <PageHero eyebrow="Bank and money" title="Turn crops into expansion cash" answer="The Bank connects harvested crops to cash. The official description then connects cash to buying more land." nextHref="#loop" nextLabel="See the money loop" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="loop"><span className="eyebrow">Bank screen</span><h2>Check the deal, then use Transfer</h2><ol className="number-list"><li>Harvest crops and open the Bank.</li><li>Read the current deal and its countdown.</li><li>Use Transfer when you are ready to convert the held batch.</li><li>Use the resulting cash for land or another visible cost.</li></ol><p className="player-note">On Aug 5, the Bank showed an Average deal of 7 with 15 seconds remaining. Your current deal may be different.</p></article>
    <article className="content-panel" id="values"><span className="eyebrow">Bank examples</span><h2>Read the result without treating it as a crop price</h2><table className="data-table"><thead><tr><th>Screen event</th><th>Value shown</th><th>How to use it</th><th>Last checked</th></tr></thead><tbody>{farmData.bankExamples.map((item) => <tr key={item.label}><td>{item.label}</td><td><strong>{item.value}</strong></td><td>{item.context}</td><td>{item.sourceDate}</td></tr>)}</tbody></table><p className="player-note"><strong>No per-crop calculator yet.</strong> The 513 transfer did not show the crop mix or quantity.</p></article>
    <article className="content-panel" id="decision"><span className="eyebrow">Practical decision</span><h2>Bank before comparing a land cost</h2><p>The Bank is the point where harvested inventory becomes spendable cash. Finish the transfer, then compare your cash with the exact number displayed on the land pad you want.</p><div className="next-card"><h3>Where does the cash go next?</h3><p>The land page lists the early costs that were visible in the same dated tutorial.</p><Link className="button button-action" href="/land-expansion">Continue to land expansion</Link></div></article>
  </div><GuideRail links={[{ href: "#loop", label: "Money loop" }, { href: "#values", label: "Bank examples" }, { href: "#decision", label: "Spending decision" }]} nextActions={[{ href: "/land-expansion", label: "Compare land costs", description: "See what early expansion pads cost." }, { href: "/seeds-and-crops", label: "Review crops", description: "Check the available crop details." }]} /></div></section>
</>; }
