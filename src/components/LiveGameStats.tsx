"use client";

import { useEffect, useState } from "react";

type RobloxGame = { playing?: number; favoritedCount?: number };

function compact(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

export function LiveGameStats({ universeId, gameUrl, fallback }: { universeId: string; gameUrl: string; fallback: { playing: number; favorites: number; checkedAt: string } }) {
  const [stats, setStats] = useState({ playing: fallback.playing, favorites: fallback.favorites });
  const [live, setLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Roblox request failed")))
      .then((payload: { data?: RobloxGame[] }) => {
        const game = payload.data?.[0];
        if (!game) return;
        setStats({ playing: game.playing ?? fallback.playing, favorites: game.favoritedCount ?? fallback.favorites });
        setLive(true);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [fallback.favorites, fallback.playing, universeId]);

  const checked = new Date(fallback.checkedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div className="game-status-bar" aria-label="Official Roblox game statistics">
      <div className="game-stat"><strong>{compact(stats.playing)}</strong><span><i className={live ? "live-dot" : "snapshot-dot"} />Playing now</span></div>
      <div className="game-stat"><strong>{compact(stats.favorites)}</strong><span>Favorites</span></div>
      <div className="game-check"><b>{live ? "Live Roblox data" : `Snapshot checked ${checked}`}</b><span>Official universe {universeId}</span></div>
      <a className="button button-action" href={gameUrl} target="_blank" rel="noreferrer">Play on Roblox</a>
    </div>
  );
}
