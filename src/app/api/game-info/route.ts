import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const ids = url.searchParams.get('id');

  if (!ids) {
    return NextResponse.json({ error: 'Missing game ID(s)' }, { status: 400 });
  }

  try {
    const robloxAPI = `https://games.roblox.com/v1/games?universeIds=${ids}`;
    const response = await fetch(robloxAPI);
    const data = await response.json();

    return NextResponse.json(data.data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch game info' }, { status: 500 });
  }
}