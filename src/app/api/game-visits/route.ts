// src/app/api/game-visits/route.ts
import { NextResponse } from "next/server";
import { games } from "@/data/games";

function formatNumber(n: number): string {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

export async function GET() {
  const universeIds = games
    .filter((game) => game.universeId)
    .map((game) => game.universeId)
    .join(",");

  try {
    const res = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeIds}`);
    const data = await res.json();

    if (!data.data) {
      return NextResponse.json({ totalVisits: 0, error: "Invalid response from Roblox API" }, { status: 500 });
    }

    const totalVisits = data.data.reduce((sum: number, game: any) => sum + (game.visits || 0), 0);
    const formatted = formatNumber(totalVisits);

    return NextResponse.json({ formatted });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch game data" }, { status: 500 });
  }
}
