import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LiveGameStats } from "@/components/LiveGameStats";
import { RouteCard } from "@/components/RouteCard";
import { gameplayLoop, homeRoutes, site } from "@/data/site";
import { webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Farm an Island Wiki, Codes and Beginner Guide",
  description: "Start Farm an Island with a clear beginner route, code status, Roblox stats and focused guides for crops, money, land and chickens.",
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
          <p>Plant seeds, harvest crops, trade at the Bank and buy more land. Use the guides to decide what to do next without leaving the game loop.</p>
          <div className="hero-actions">
            <Link className="button button-action" href="/beginner-guide">Start the beginner route</Link>
            <Link className="button button-quiet" href="/codes">Check code status</Link>
            <a className="button button-quiet" href={site.gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a>
          </div>
          <div className="hero-proof"><span>Boiler Games</span><span>Place ID {site.placeId}</span><span>Checked Aug 12, 2026</span></div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell story-grid">
          <div className="story-media"><Image src="/beginner-guide.png" alt="Official Farm an Island image used for the beginner route" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
          <div className="story-copy">
            <span className="eyebrow">Your first session</span>
            <h2>Follow the first farm loop</h2>
            <p>Finish one complete planting, Bank and expansion cycle before comparing upgrades or harder-to-check values.</p>
            <ol className="step-list">
              {gameplayLoop.slice(0, 4).map((item) => <li key={item.step}><b>{item.step}</b><span>{item.title}: {item.detail}</span></li>)}
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
            <p>Choose the page that matches your next decision, from redeeming a code to buying land or checking an XL plant.</p>
          </div>
          <div className="route-grid">{homeRoutes.map((route) => <RouteCard key={route.href} {...route} />)}</div>
        </div>
      </section>

      <section className="section section-rail">
        <div className="page-shell">
          <div className="section-heading">
            <div><span className="eyebrow">Useful game data</span><h2>Plan the next farm step</h2></div>
            <p>Use the basic loop first, then check the current date beside codes, land costs, Bank screens, crops, chickens and XL examples.</p>
          </div>
          <div className="feature-grid">
            {gameplayLoop.map((item) => <article className="feature-card" key={item.step}><span>Step {item.step}</span><strong>{item.title}</strong><p>{item.detail}</p></article>)}
            <article className="feature-card"><span>Official snapshot</span><strong>{site.visits.toLocaleString("en-US")} visits</strong><p>Roblox game data checked Aug 12, 2026. Player and favorite totals can change.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <div className="section-heading">
            <div><span className="eyebrow">Continue playing</span><h2>Move from one decision to the next</h2></div>
            <p>Start with the question blocking your current session, then follow the suggested next guide.</p>
          </div>
          <div className="source-grid">
            <article className="source-card"><span className="eyebrow">Codes</span><h2>Try two reward codes</h2><p>See what each code last awarded, where to enter it and a playable redemption example.</p><Link href="/codes">Open codes and rewards</Link></article>
            <article className="source-card"><span className="eyebrow">Money</span><h2>Compare Bank and land costs</h2><p>Check the changing Bank deal, finish the transfer and compare your cash with the next land pad.</p><Link href="/bank-and-money">Open the money route</Link></article>
            <article className="source-card"><span className="eyebrow">Crops</span><h2>Review crops and XL plants</h2><p>Read the available crop card fields and watch fertilizer turn a Durian into an XL Durian.</p><Link href="/seeds-and-crops">Open crops and XL plants</Link></article>
          </div>
        </div>
      </section>
    </>
  );
}
