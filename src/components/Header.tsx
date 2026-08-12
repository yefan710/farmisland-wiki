import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Header() {
  return (
    <header className="site-header" data-surface="arena-raised">
      <div className="nav-shell">
        <Link className="brand-lockup" href="/" aria-label={`${site.gameName} Wiki home`}>
          <Image src="/site-mark.png" width={44} height={44} alt="" priority />
          <span><b>FARM AN ISLAND</b><small>INDEPENDENT PLAYER WIKI</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {site.navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <a className="nav-play" href={site.gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a>
        <details className="mobile-nav">
          <summary aria-label="Open menu"><Image src="/icons/menu.svg" width={20} height={20} alt="" /></summary>
          <nav>
            {site.navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            <a href={site.gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
