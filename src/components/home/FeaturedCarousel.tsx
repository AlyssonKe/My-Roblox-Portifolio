"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { games } from "@/data/games";

type Game = (typeof games)[number];
type LiveStats = { visits: number; playing: number };

const AUTOPLAY_MS = 7000;

function formatNumber(n: number): string {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

export default function FeaturedCarousel() {
  const [stats, setStats] = useState<Record<number, LiveStats> | null>(null);
  const [thumbs, setThumbs] = useState<Record<number, string>>({});
  const [active, setActive] = useState(0);

  useEffect(() => {
    const universeIds = games
      .map((game) => game.universeId)
      .filter((id): id is number => !!id);

    fetch(`/api/game-info?id=${universeIds.join(",")}`)
      .then((res) => res.json())
      .then((data) => {
        const map: Record<number, LiveStats> = {};
        if (Array.isArray(data)) {
          for (const game of data) map[game.id] = { visits: game.visits, playing: game.playing };
        }
        setStats(map);
      })
      .catch(() => setStats({}));

    universeIds.forEach((id) => {
      fetch(`/api/thumbnail?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.imageUrl) setThumbs((prev) => ({ ...prev, [id]: data.imageUrl }));
        })
        .catch(() => {});
    });
  }, []);

  // Contributions first, then my own games, each ordered by live visits (games without stats keep their data order)
  const slides = useMemo(() => {
    if (!stats) return null;
    const visitsOf = (game: Game) => (game.universeId && stats[game.universeId]?.visits) || 0;
    return [...games].sort((a, b) => {
      const groupA = a.contribuition ? 0 : 1;
      const groupB = b.contribuition ? 0 : 1;
      if (groupA !== groupB) return groupA - groupB;
      return visitsOf(b) - visitsOf(a);
    });
  }, [stats]);

  const count = slides?.length ?? 0;
  const goTo = (index: number) => setActive(((index % count) + count) % count);

  const current = slides?.[active];
  const currentStats = current?.universeId ? stats?.[current.universeId] : undefined;
  const imageOf = (game: Game) => (game.universeId && thumbs[game.universeId]) || game.image;

  // Position of a slide relative to the active one, in the range [-count/2, count/2)
  const offsetOf = (index: number) => {
    const half = Math.floor(count / 2);
    return ((index - active + count + half) % count) - half;
  };

  return (
    <div id="featured" className="h-fit bg-primary-gray px-6 py-20 sm:px-12 sm:py-28 md:px-20 xl:px-40">
      <div className="text-center sm:text-left">
        <h1 className="text-secondary uppercase text-6xl font-bold">My Projects</h1>
        <p className="text-secondary w-full text-base my-4 sm:w-3/5">
          Some of the games I've worked on, from my own creations to contributions to some of the biggest games on Roblox. The numbers below come straight from Roblox and update on their own.
        </p>
      </div>

      {!slides || !current ? (
        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="bg-primary p-2 lg:col-span-3">
            <div className="aspect-video bg-secondary-gray animate-pulse" />
          </div>
        </div>
      ) : (
        <>
          {/* Featured game */}
          <div className="mt-8 grid gap-8 lg:grid-cols-5 lg:items-center">
            <a
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary p-2 lg:col-span-3"
            >
              <div className="relative aspect-video overflow-hidden">
                {slides.map((game, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={game.id}
                    src={imageOf(game)}
                    alt={game.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            </a>

            <div key={current.id} className="carousel-fade text-center lg:col-span-2 lg:text-left">
              <h3 className="text-gray text-lg font-light">
                {current.current ? "Currently working on" : current.contribuition ? "Contribution" : "My game"}
              </h3>
              <h2 className="text-secondary uppercase text-4xl font-bold">{current.title}</h2>

              {currentStats && (
                <div className="my-4 flex items-start justify-center gap-8 sm:gap-12 lg:justify-start">
                  <div className="w-fit flex flex-col items-center">
                    <h1 className="text-primary-blue text-5xl font-black sm:text-6xl">{formatNumber(currentStats.visits)}</h1>
                    <h3 className="text-center text-base font-semibold">Game Visits</h3>
                  </div>
                  {currentStats.playing > 0 && (
                    <div className="w-fit flex flex-col items-center">
                      <h1 className="text-primary-blue text-5xl font-black sm:text-6xl">{formatNumber(currentStats.playing)}</h1>
                      <h3 className="text-center text-base font-semibold">Playing Now</h3>
                    </div>
                  )}
                </div>
              )}

              <p
                className="text-secondary w-full text-base my-4 line-clamp-5"
                dangerouslySetInnerHTML={{ __html: current.description }}
              />

              <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-play-button px-5 py-3 font-bold uppercase text-primary duration-200 hover:brightness-110"
                >
                  <svg className="h-4 w-4 fill-primary" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  Play on Roblox
                </a>
                <Link
                  href="/works"
                  className="rounded-xl bg-secondary px-5 py-3 font-bold uppercase text-primary duration-200 hover:bg-primary-blue"
                >
                  More Works
                </Link>
              </div>
            </div>
          </div>

          {/* Timer bar: the next game shows when it fills up, and it keeps counting no matter what the visitor is doing */}
          <div className="mt-12 flex items-center gap-4">
            <button
              onClick={() => goTo(active - 1)}
              aria-label="Previous game"
              className="shrink-0 text-5xl font-base text-secondary duration-200 hover:text-primary-blue"
            >
              &lt;
            </button>

            <div className="h-1 flex-1 overflow-hidden rounded-full bg-secondary-gray">
              <div
                key={active}
                className="carousel-progress h-full bg-primary-blue"
                style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                onAnimationEnd={() => goTo(active + 1)}
              />
            </div>

            <span className="shrink-0 text-base font-semibold tabular-nums text-secondary">
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>

            <button
              onClick={() => goTo(active + 1)}
              aria-label="Next game"
              className="shrink-0 text-5xl font-base text-secondary duration-200 hover:text-primary-blue"
            >
              &gt;
            </button>
          </div>

          {/* Slide picker */}
          <div className="relative mt-4">
            <div className="relative overflow-hidden py-2">
              {/* Invisible copy of one slide so the row gets the right height */}
              <div className="invisible mx-auto w-[60%] sm:w-[34%]">
                <div className="bg-primary p-2">
                  <div className="aspect-video" />
                  <p className="px-1 py-1 text-base font-semibold">&nbsp;</p>
                </div>
              </div>

              {slides.map((game, index) => {
                const offset = offsetOf(index);
                const distance = Math.abs(offset);
                const visible = distance <= 3;
                return (
                  <button
                    key={game.id}
                    onClick={() => goTo(index)}
                    aria-label={`Show ${game.title}`}
                    className={`absolute left-1/2 top-2 w-[60%] bg-primary p-2 text-left transition-all duration-500 ease-in-out sm:w-[34%] ${visible ? '' : 'pointer-events-none'}`}
                    style={{
                      transform: `translateX(calc(-50% + ${offset * 62}%)) scale(${1 - distance * 0.13})`,
                      zIndex: 10 - distance,
                      opacity: visible ? 1 : 0,
                    }}
                  >
                    <div className="aspect-video overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={imageOf(game)} alt="" className="h-full w-full object-cover" />
                    </div>
                    {/* Only the middle card shows its name */}
                    {offset === 0 && (
                      <p className="truncate px-1 py-1 text-base font-semibold text-secondary">{game.title}</p>
                    )}
                    {/* Cards further back get a light veil on top, so nothing behind them shows through */}
                    <div className="pointer-events-none absolute inset-0 bg-primary-gray" style={{ opacity: distance * 0.2 }} />
                  </button>
                );
              })}
            </div>

          </div>
        </>
      )}
    </div>
  );
}
