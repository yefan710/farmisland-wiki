import type { Metadata } from "next";
import Link from "next/link";
import { GuideRail } from "@/components/GuideRail";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SourceNote } from "@/components/SourceNote";
import { sourceGroups } from "@/data/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Farm an Island Sources", description: "Review the Roblox, video, screenshot, competitor, and community sources used by Farm an Island Wiki, plus how facts are processed and dated.", alternates: { canonical: "/sources" } };

export default function SourcesPage() { return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Sources", description: metadata.description as string, path: "/sources" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Sources", path: "/sources" }])]} />
  <PageHero eyebrow="Source policy" title="Source type does not decide whether a fact is usable" answer="Roblox, gameplay videos, screenshots, competitor wikis, and community pages can all support facts. Each value keeps its date, context, and source before this site writes an original answer." nextHref="#register" nextLabel="Open the source list" />
  <section className="section"><div className="page-shell content-layout"><div>
    <article className="content-panel" id="policy"><span className="eyebrow">Fact states</span><h2>Read the date and field limit before the value</h2><div className="feature-grid"><div className="feature-card"><span className="tag tag-checked">Current fact</span><strong>Context complete</strong><p>The value, object, unit or ingredients, conditions, source, and check date are recorded with no known conflict.</p></div><div className="feature-card"><span className="tag tag-reported">Dated fact</span><strong>Useful for a named build</strong><p>A video, screenshot, competitor page, or community record can support the fields visible at its date.</p></div><div className="feature-card"><span className="tag tag-unknown">Status open</span><strong>Some fields are missing</strong><p>The site publishes what the source shows and names the missing status, reward, condition, or version instead of filling it in.</p></div></div></article>
    <article className="content-panel" id="register"><span className="eyebrow">Source list</span><h2>Records used by this guide</h2>{sourceGroups.map((group) => <section key={group.title}><h3>{group.title}</h3><p>{group.status}</p><div className="source-grid">{group.items.map((item) => <div className="source-card" key={item.href}><strong>{item.label}</strong><p>{item.detail}</p><a href={item.href} target="_blank" rel="noreferrer">Open source</a></div>)}</div></section>)}</article>
    <article className="content-panel" id="dates"><span className="eyebrow">Freshness and originality</span><h2>Keep the facts, rebuild the answer</h2><p>Game identity, description, and totals were checked Aug 11, 2026. External pages keep their observed or published dates. A later game build can make an older value historical.</p><SourceNote tone="reported" title="External facts are eligible">A competitor table, video frame, or community page can support a recipe, value, Tier, cost, probability, or code. We first extract the fields, then write from the player&apos;s task. We do not reproduce the source&apos;s sentences, heading order, table layout, or images.</SourceNote><div className="next-card"><h3>See a field limit in practice</h3><p>The codes page publishes the dated THANKYOU string while keeping its current activity and reward open.</p><Link className="button button-action" href="/codes">Review code status</Link></div></article>
  </div><GuideRail links={[{ href: "#policy", label: "Fact states" }, { href: "#register", label: "Source list" }, { href: "#dates", label: "Freshness and originality" }]} /></div></section>
</>; }
