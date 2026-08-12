import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { communityReports } from "@/data/site";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Codes Status", description: "Check dated Farm an Island code listings and see which active, reward, and redemption fields are still open.", alternates: { canonical: "/codes" } };

export default function CodesPage() {
  const faq = [{ question: "What Farm an Island code has been listed online?", answer: "A Reddit post dated Aug 3, 2026 lists THANKYOU. The current active status and reward are not established in this site's processed fields." }, { question: "Is THANKYOU active now?", answer: "The source supports the dated code string. It does not provide a current Aug 11 active or expired result for this guide." }];
  return <>
    <JsonLd data={[webPageSchema({ name: "Farm an Island Codes Status", description: metadata.description as string, path: "/codes" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Codes", path: "/codes" }]), faqSchema(faq)]} />
    <PageHero eyebrow="Codes status" title="THANKYOU is listed; its current activity is open" answer="A Reddit post dated Aug 3, 2026 lists THANKYOU. That makes the string a dated external fact. This source set does not establish its current active status, reward, or redemption path as of Aug 11, 2026." nextHref="#status" nextLabel="See the status table" status="Checked Aug 11, 2026" />
    <section className="section"><div className="page-shell content-layout"><div>
      <article className="content-panel" id="status"><span className="eyebrow">Current answer</span><h2>The string is known; the current status is not</h2><p>Use the table as a dated code record. It does not promise that a reward can be redeemed today.</p>
        <table className="data-table"><thead><tr><th>String</th><th>Status</th><th>Source and date</th><th>Open fields</th></tr></thead><tbody><tr><td><code>THANKYOU</code></td><td><span className="tag tag-reported">Listed Aug 3; activity open</span></td><td><a className="text-link" href={communityReports.codes[1].href} target="_blank" rel="noreferrer">Reddit post, Aug 3, 2026</a></td><td>Current active or expired result, reward, and redemption path</td></tr></tbody></table>
        <SourceNote tone="reported" title="Dated external fact">The source supports the string THANKYOU on Aug 3. The missing activity, reward, and redemption fields stay open instead of being guessed.</SourceNote>
      </article>
      <article className="content-panel" id="redeem"><span className="eyebrow">Before you try a code</span><h2>Keep the check simple</h2><ol className="number-list"><li>Open the correct Farm an Island experience from the Roblox button.</li><li>Look for a code or settings control in the current game interface.</li><li>Enter the dated string exactly if a code box is available.</li><li>Record the result, reward, and check date so the open fields can be updated.</li></ol><p>The processed source set does not yet contain a redemption-control field, so this route does not claim that one exists.</p></article>
      <article className="content-panel" id="reports"><span className="eyebrow">Source log</span><h2>What each external record contains</h2>{communityReports.codes.map((item) => <SourceNote tone="reported" title={item.label} key={item.href}><a className="text-link" href={item.href} target="_blank" rel="noreferrer">Open source</a>. {item.observedAt}. {item.note}</SourceNote>)}<div className="next-card"><h3>New to the game?</h3><p>Use the plant, harvest, Bank, and expansion loop while the current code status remains open.</p><Link className="button button-action" href="/beginner-guide">Start the beginner route</Link></div></article>
    </div><GuideRail links={[{ href: "#status", label: "Current status" }, { href: "#redeem", label: "Before you try" }, { href: "#reports", label: "Report log" }]} /></div></section>
  </>;
}
