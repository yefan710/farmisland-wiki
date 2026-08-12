import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "About Farm an Island Wiki", description: "Learn how this independent Farm an Island guide processes Roblox and external web facts without copying another guide's expression or structure.", alternates: { canonical: "/about" } };

export default function AboutPage() { return <>
  <JsonLd data={[webPageSchema({ name: "About Farm an Island Wiki", description: metadata.description as string, path: "/about" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]} />
  <PageHero eyebrow="About the guide" title="Independent and evidence-aware" answer="Farm an Island Wiki is a fan-made guide for the Boiler Games Roblox experience. It is not operated by Roblox or Boiler Games." nextHref="/beginner-guide" nextLabel="Start the guide" />
  <section className="section"><div className="page-shell legal-grid">
    <article className="legal-card"><span className="eyebrow">Purpose</span><h2>Answer player tasks</h2><p>The site starts with the confirmed beginner loop, then provides focused pages for codes, crops, the Bank, land and chickens.</p></article>
    <article className="legal-card"><span className="eyebrow">Method</span><h2>Process external facts</h2><p>Videos, screenshots, competitor wikis, and community pages can supply game data. Each field keeps its source, context, and date.</p></article>
    <article className="legal-card"><span className="eyebrow">Boundary</span><h2>Rebuild the answer</h2><p>Names and values stay exact. The site does not copy another guide&apos;s sentences, heading order, table layout, or images.</p></article>
  </div><div className="page-shell"><SourceNote title="Trademark note">Roblox and related names belong to their respective owners. References identify the experience being discussed.</SourceNote><div className="next-card"><h3>Want to inspect the evidence?</h3><p>The source page lists the official and community records used by the guide.</p><Link className="button button-action" href="/sources">Open sources</Link></div></div></section>
</>; }
