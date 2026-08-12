import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "About Farm an Island Wiki", description: "Learn what the independent Farm an Island guide covers and where to start playing.", alternates: { canonical: "/about" } };

export default function AboutPage() { return <>
  <JsonLd data={[webPageSchema({ name: "About Farm an Island Wiki", description: metadata.description as string, path: "/about" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]} />
  <PageHero eyebrow="About the guide" title="An independent Farm an Island guide" answer="Farm an Island Wiki is a fan-made guide for the Boiler Games Roblox experience. It is not operated by Roblox or Boiler Games." nextHref="/beginner-guide" nextLabel="Start the guide" />
  <section className="section"><div className="page-shell legal-grid">
    <article className="legal-card"><span className="eyebrow">Start here</span><h2>Finish the first farm loop</h2><p>Plant, harvest, use the Bank and compare your cash with the next land purchase.</p></article>
    <article className="legal-card"><span className="eyebrow">Find an answer</span><h2>Open one focused guide</h2><p>Use separate pages for codes, crops, the Bank, land, chickens and game updates.</p></article>
    <article className="legal-card"><span className="eyebrow">Changing values</span><h2>Check the date before acting</h2><p>Codes, costs and passes can change. The live game remains the final check before you spend anything.</p></article>
  </div><div className="page-shell"><p className="player-note">Roblox and related names belong to their respective owners. This fan guide uses those names only to identify the experience being discussed.</p><div className="next-card"><h3>Start with the beginner route</h3><p>Complete one full cycle before opening the deeper guides.</p><Link className="button button-action" href="/beginner-guide">Open beginner guide</Link></div></div></section>
</>; }
