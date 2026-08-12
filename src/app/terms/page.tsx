import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Terms of Use", description: "Terms for using the independent Farm an Island Wiki and its changing game information and external links.", alternates: { canonical: "/terms" } };

export default function TermsPage() { return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Wiki Terms", description: metadata.description as string, path: "/terms" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }])]} />
  <PageHero eyebrow="Terms of use" title="Check the live game before spending" answer="This independent guide can become outdated as Farm an Island changes. Use the current Roblox experience as the final check before spending Robux or acting on a changing value." nextHref="#details" nextLabel="Read the terms" />
  <section className="section"><div className="page-shell content-panel" id="details"><span className="eyebrow">Effective Aug 11, 2026</span><h2>Use of this guide</h2><h3>Independent fan site</h3><p>This site is not operated, endorsed or maintained by Roblox or Boiler Games.</p><h3>Changing information</h3><p>Player totals, code status, values, mechanics and update details can change. A listed date is not a permanent guarantee.</p><h3>No transaction guarantee</h3><p>Confirm the displayed cost, reward and effect in the live experience before spending Robux, in-game cash or other resources.</p><h3>External services</h3><p>Roblox and embedded YouTube players have their own terms. This site does not control their content or availability.</p><h3>Reasonable use</h3><p>You may use the guide for personal reference. Do not present its fan-made material as an official Boiler Games or Roblox publication.</p><div className="next-card"><h3>Open the current game</h3><p>Use the official Roblox experience as the final check for changing values.</p><Link className="button button-action" href="/sources">Open game links</Link></div></div></section>
</>; }
