import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LiveGameStats } from "@/components/LiveGameStats";
import { RouteCard } from "@/components/RouteCard";
import { SourceNote } from "@/components/SourceNote";
import { confirmedSystems, homeRoutes, site } from "@/data/site";
import { webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Farm an Island Wiki, Codes and Beginner Guide",
  description: "Start Farm an Island with a confirmed game loop, careful code status, official Roblox stats and focused guides for crops, money, land and chickens.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "Farm an Island Wiki", description: metadata.description as string, path: "/" })} />
      <section className="hero" data-surface="image-veil">
        <Image className="hero-image" src="/hero-bg.jpg" alt="Farm an Island experience artwork showing a farm surrounded by water" fill priority sizes="100vw" />
        <div className="hero-veil" />
        <div className="hero-content">
          <span className="eyebrow">Independent player guide</span>
          <h1>Build your <span>island farm</span></h1>
          <p>Plant seeds, harvest crops, trade at the Bank and buy more land. Start with the loop confirmed by the official Roblox description.</p>
          <div className="hero-actions">
            <Link className="button button-action" href="/beginner-guide">Start the beginner route</Link>
            <Link className="button button-quiet" href="/codes">Check code status</Link>
            <a className="button button-quiet" href={site.gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a>
          </div>
          <div className="hero-proof"><span>Boiler Games</span><span>Place ID {site.placeId}</span><span>Checked Aug 11, 2026</span></div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell story-grid">
          <div className="story-media"><Image src="/beginner-guide.png" alt="Official Farm an Island image used for the beginner route" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
          <div className="story-copy">
            <span className="eyebrow">Your first session</span>
            <h2>Follow the confirmed loop</h2>
            <p>The official game description gives a useful route without requiring a crop value chart or a hidden mechanic.</p>
            <ol className="step-list">
              {confirmedSystems.slice(0, 4).map((item) => <li key={item.step}><b>{item.step}</b><span>{item.title}: {item.detail}</span></li>)}
            </ol>
            <Link className="button button-action" href="/beginner-guide">Open the full beginner guide</Link>
          </div>
        </div>
      </section>

      <section className="section-tight section-rail">
        <div className="page-shell">
          <LiveGameStats universeId={site.universeId} gameUrl={site.gameUrl} fallback={{ playing: site.playing, favorites: site.favorites, checkedAt: site.checkedAt }} />
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <div className="section-heading">
            <div><span className="eyebrow">Solve one question</span><h2>Pick the guide you need</h2></div>
            <p>Each page marks confirmed facts, community reports and missing details separately. You can use the answer without guessing which parts were checked.</p>
          </div>
          <div className="route-grid">{homeRoutes.map((route) => <RouteCard key={route.href} {...route} />)}</div>
        </div>
      </section>

      <section className="section section-rail">
        <div className="page-shell">
          <div className="section-heading">
            <div><span className="eyebrow">Useful game data</span><h2>What is confirmed today</h2></div>
            <p>The experience description confirms the broad systems. Exact prices, rewards, rates and crop tables stay unpublished until they can be checked.</p>
          </div>
          <div className="feature-grid">
            {confirmedSystems.map((item) => <article className="feature-card" key={item.step}><span>Step {item.step}</span><strong>{item.title}</strong><p>{item.detail}</p></article>)}
            <article className="feature-card"><span>Official snapshot</span><strong>{site.visits.toLocaleString("en-US")} visits</strong><p>Roblox game data checked Aug 11, 2026. Player and favorite totals can change.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <div className="section-heading">
            <div><span className="eyebrow">Latest and sources</span><h2>Current, with limits shown</h2></div>
            <p>The developer says the experience receives regular updates. This site records dated checks instead of inventing patch details.</p>
          </div>
          <div className="source-grid">
            <article className="source-card"><span className="tag tag-checked">Checked</span><h2>Official game loop</h2><p>Identity, description and metrics come from Roblox game data for universe {site.universeId}.</p><Link href="/sources">See the source policy</Link></article>
            <article className="source-card"><span className="tag tag-reported">Reported</span><h2>Code chatter</h2><p>Community pages report code-related information, but no code is listed here as active without an in-game check.</p><Link href="/codes">Review code status</Link></article>
            <article className="source-card"><span className="tag tag-unknown">Unknown</span><h2>Detailed values</h2><p>Crop prices, land costs, chicken effects and XL plant mechanics are not confirmed in the available official data.</p><Link href="/updates">See the latest check</Link></article>
          </div>
          <SourceNote title="How this site handles uncertainty">A dated community report can show that players are discussing a topic. It does not turn the reported detail into a confirmed game fact.</SourceNote>
        </div>
      </section>
    </>
  );
}
