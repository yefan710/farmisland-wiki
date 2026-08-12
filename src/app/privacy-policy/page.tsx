import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy information for the static Farm an Island Wiki, including external Roblox links and live public game statistics.", alternates: { canonical: "/privacy-policy" } };

export default function PrivacyPage() { return <>
  <JsonLd data={[webPageSchema({ name: "Farm an Island Wiki Privacy Policy", description: metadata.description as string, path: "/privacy-policy" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy policy", path: "/privacy-policy" }])]} />
  <PageHero eyebrow="Privacy policy" title="No account or player form" answer="The current site does not ask you to create an account or submit player details through a form." nextHref="#details" nextLabel="Read the details" />
  <section className="section"><div className="page-shell content-panel" id="details"><span className="eyebrow">Effective Aug 11, 2026</span><h2>How the current site works</h2><h3>Information you submit</h3><p>The current version does not include registration, comments, contact forms or a code submission form.</p><h3>Public Roblox data</h3><p>The home page may request public game totals from the Roblox game endpoint in your browser. That request is made to Roblox and is subject to Roblox policies. If the request fails, the page shows a dated local snapshot.</p><h3>External links and video players</h3><p>Links to Roblox leave this site. A YouTube player loads only after you choose to play a walkthrough. Those services can apply their own privacy and cookie practices.</p><h3>Hosting records</h3><p>A hosting provider may process ordinary request information needed to deliver a page, such as an IP address, browser details and timestamps. This site does not use that information to build player profiles.</p><h3>Changes</h3><p>If forms, analytics or account features are added, this page should be updated before those features collect data.</p><div className="next-card"><h3>Return to the guide</h3><p>Continue without creating an account.</p><Link className="button button-action" href="/">Return home</Link></div></div></section>
</>; }
