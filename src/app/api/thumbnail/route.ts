import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  
  console.log(id)
  if (!id) {
    return NextResponse.json({ error: 'Missing game ID' }, { status: 400 });
  }

  try {
    // Primeira tentativa: Thumbnail principal
    const thumbURL = `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${id}&countPerUniverse=1&size=768x432&format=png&isCircular=false`;
    const thumbRes = await fetch(thumbURL);
    const thumbData = await thumbRes.json();

    const imageUrl =
      thumbData?.data?.[0]?.thumbnails?.[0]?.imageUrl ?? null;

    if (imageUrl) {
      return NextResponse.json({ imageUrl });
    }

    const iconURL = `https://thumbnails.roblox.com/v1/games/icons?universeIds=${id}&size=512x512&format=png&isCircular=false`;
    const iconRes = await fetch(iconURL);
    const iconData = await iconRes.json();

    const fallbackImageUrl = iconData?.data?.[0]?.imageUrl ?? null;

    if (fallbackImageUrl) {
      return NextResponse.json({ imageUrl: fallbackImageUrl });
    }

    // Nenhum dos dois funcionou
    return NextResponse.json({ error: 'Thumbnail and icon not found' }, { status: 404 });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch thumbnail' }, { status: 500 });
  }
}
