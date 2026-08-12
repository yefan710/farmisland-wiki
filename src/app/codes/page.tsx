import type { Metadata } from "next";
import Link from "next/link";
import { GameplayVideo } from "@/components/GameplayVideo";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { site, videoDemos } from "@/data/site";
import farmData from "@/data/farm-data.json";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Codes and Rewards", description: "Try two Farm an Island codes that last worked on Aug 7, see their rewards, and follow the in-game redemption path.", alternates: { canonical: "/codes" } };

export default function CodesPage() {
  const faq = [{ question: "Which Farm an Island codes can I try?", answer: "THANKYOU last awarded 2 Free Seed Packs and ILOVEGEARS last awarded 3 Free Gears on Aug 7, 2026." }, { question: "Do the codes still work today?", answer: "Codes can expire. Try each code in the current game and use the on-screen result as the final answer." }];
  return <>
    <JsonLd data={[webPageSchema({ name: "Farm an Island Codes Status", description: metadata.description as string, path: "/codes" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Codes", path: "/codes" }]), faqSchema(faq)]} />
    <PageHero eyebrow="Codes and rewards" title="Try these two reward codes" answer="THANKYOU last awarded 2 Free Seed Packs and ILOVEGEARS last awarded 3 Free Gears. Both can expire, so enter them in the current game before planning around the reward." nextHref="#status" nextLabel="See codes and rewards" status="Last worked Aug 7, 2026" />
    <section className="section"><div className="page-shell content-layout"><div>
      <article className="content-panel" id="status"><span className="eyebrow">Codes to try</span><h2>Enter each code once</h2><p>These rewards were last seen on Aug 7. If the game rejects a code now, treat it as expired rather than repeatedly submitting it.</p>
        <table className="data-table"><thead><tr><th>Code</th><th>Last reward</th><th>Last worked</th><th>What to do now</th></tr></thead><tbody>{farmData.codes.map((item) => <tr key={item.code}><td><code>{item.code}</code></td><td>{item.reward}</td><td>{item.lastWorked}</td><td><span className="tag tag-caution">Try in game</span></td></tr>)}</tbody></table>
      </article>
      <article className="content-panel" id="redeem"><span className="eyebrow">How to redeem</span><h2>Open the code box through Shop</h2><ol className="number-list">{farmData.codeRedemptionPath.map((step) => <li key={step}>{step}</li>)}</ol><p>Enter one code at a time. A success message names the reward. An error usually means the code expired or the string was entered incorrectly.</p></article>
      <article className="content-panel" id="demo"><span className="eyebrow">Video walkthrough</span><h2>Watch the code entry path</h2><p>Play the short example if you cannot find the Codes box or want to compare the success message with your screen.</p><GameplayVideo actionLabel="Play the code redemption demo" poster="/beginner-guide.png" posterAlt="Farm an Island farm scene used as the code demo cover" startAt={videoDemos.codes.startAt} title="Farm an Island code redemption demo" videoId={videoDemos.codes.videoId} /><div className="next-card"><h3>Use the rewards in the normal loop</h3><p>Seed Packs feed planting. Gears are separate tools, so read each Gear card before deciding where it helps.</p><Link className="button button-action" href="/beginner-guide">Start the beginner route</Link></div></article>
    </div><GuideRail links={[{ href: "#status", label: "Codes to try" }, { href: "#redeem", label: "How to redeem" }, { href: "#demo", label: "Video walkthrough" }]} nextActions={[{ href: "/beginner-guide", label: "Start the farm loop", description: "Use the rewards while planting and expanding." }, { href: site.gameUrl, label: "Try the codes now", description: "Open Farm an Island on Roblox." }]} /></div></section>
  </>;
}
