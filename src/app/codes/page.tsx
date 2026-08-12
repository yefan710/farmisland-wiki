import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { communityReports } from "@/data/site";
import farmData from "@/data/farm-data.json";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Codes and Rewards", description: "Check Farm an Island codes that worked in an Aug 7 gameplay capture, their rewards, and the in-game redemption path.", alternates: { canonical: "/codes" } };

export default function CodesPage() {
  const faq = [{ question: "Which Farm an Island codes worked in the dated gameplay capture?", answer: "THANKYOU awarded 2 Free Seed Packs and ILOVEGEARS awarded 3 Free Gears in a target-game video published Aug 7, 2026." }, { question: "Do the codes still work today?", answer: "The capture proves both redemptions worked on its recorded build. It does not prove their current active status." }];
  return <>
    <JsonLd data={[webPageSchema({ name: "Farm an Island Codes Status", description: metadata.description as string, path: "/codes" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Codes", path: "/codes" }]), faqSchema(faq)]} />
    <PageHero eyebrow="Codes and rewards" title="Two codes worked in the Aug 7 capture" answer="THANKYOU awarded 2 Free Seed Packs and ILOVEGEARS awarded 3 Free Gears in a target-game video. Treat both as dated results, not a promise that they still work today." nextHref="#status" nextLabel="See codes and rewards" status="Capture published Aug 7, 2026" />
    <section className="section"><div className="page-shell content-layout"><div>
      <article className="content-panel" id="status"><span className="eyebrow">Dated results</span><h2>Codes, rewards, and the check limit</h2><p>Both rows come from successful redemptions shown in the target game. The current server may accept or reject them later.</p>
        <table className="data-table"><thead><tr><th>Code</th><th>Reward shown</th><th>Worked in capture</th><th>Current status</th></tr></thead><tbody>{farmData.codes.map((item) => <tr key={item.code}><td><code>{item.code}</code></td><td>{item.reward}</td><td><a className="text-link" href={item.sourceUrl} target="_blank" rel="noreferrer">{item.workedInCaptureDate}</a></td><td><span className="tag tag-reported">Recheck in game</span></td></tr>)}</tbody></table>
        <SourceNote tone="reported" title="The date matters">The Aug 7 video shows success messages for both codes. It does not establish whether either code remains active on Aug 12.</SourceNote>
      </article>
      <article className="content-panel" id="redeem"><span className="eyebrow">How to redeem</span><h2>Open the code box through Shop</h2><ol className="number-list">{farmData.codeRedemptionPath.map((step) => <li key={step}>{step}</li>)}</ol><p>Enter one code at a time. A success message should name the reward; an error means the dated result no longer applies or the string was entered incorrectly.</p></article>
      <article className="content-panel" id="reports"><span className="eyebrow">Source dates</span><h2>Where the dated result comes from</h2>{communityReports.codes.map((item) => <SourceNote tone="reported" title={item.label} key={item.href}><a className="text-link" href={item.href} target="_blank" rel="noreferrer">Open source</a>. {item.observedAt}. {item.note}</SourceNote>)}<div className="next-card"><h3>Use the rewards in the normal loop</h3><p>Seed Packs feed planting. Gears are separate tools, so check each Gear card before deciding where it helps.</p><Link className="button button-action" href="/beginner-guide">Start the beginner route</Link></div></article>
    </div><GuideRail links={[{ href: "#status", label: "Current status" }, { href: "#redeem", label: "Before you try" }, { href: "#reports", label: "Report log" }]} /></div></section>
  </>;
}
