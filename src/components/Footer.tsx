import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer" data-surface="arena-raised">
      <div className="footer-grid">
        <div className="footer-intro">
          <b>{site.name}</b>
          <p>An independent fan-made guide. Roblox and Boiler Games do not operate this site.</p>
          <p className="footer-check">Game identity checked Aug 11, 2026</p>
        </div>
        <div><span>Play</span><Link href="/beginner-guide">Beginner guide</Link><Link href="/codes">Codes status</Link><Link href="/seeds-and-crops">Seeds and crops</Link></div>
        <div><span>Learn</span><Link href="/bank-and-money">Bank and money</Link><Link href="/land-expansion">Land expansion</Link><Link href="/chickens">Chickens</Link><Link href="/updates">Updates</Link></div>
        <div><span>Site</span><Link href="/sources">Game links</Link><Link href="/about">About</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div>
        <div><span>Official</span><a href={site.gameUrl} target="_blank" rel="noreferrer">Roblox experience</a></div>
      </div>
    </footer>
  );
}
