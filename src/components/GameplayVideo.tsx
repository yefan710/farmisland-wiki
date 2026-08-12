"use client";

import Image from "next/image";
import { useState } from "react";

type GameplayVideoProps = {
  actionLabel: string;
  poster: string;
  posterAlt: string;
  startAt?: number;
  title: string;
  videoId: string;
};

export function GameplayVideo({ actionLabel, poster, posterAlt, startAt = 0, title, videoId }: GameplayVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&start=${startAt}`;

  return (
    <div className="gameplay-video">
      {isPlaying ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          src={playerUrl}
          title={title}
        />
      ) : (
        <button
          aria-label={`Play ${title}`}
          className="gameplay-video-poster"
          onClick={() => setIsPlaying(true)}
          type="button"
        >
          <Image alt={posterAlt} fill sizes="(max-width: 900px) 100vw, 720px" src={poster} />
          <span className="gameplay-video-action"><strong>{actionLabel}</strong><small>Plays here without leaving the guide</small></span>
        </button>
      )}
    </div>
  );
}
