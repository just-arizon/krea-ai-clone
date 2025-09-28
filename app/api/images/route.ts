// app/api/images/route.ts  (or pages/api/images.ts)
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = Math.max(1, Number(searchParams.get('page') ?? 1));
  const limit = Math.min(50, Math.max(1, Number(searchParams.get('limit') ?? 12)));

  // seed per page so SSR + client match (avoids hydration mismatch)
  const seed = page * 997; // 997 is just a large prime

  const photos = Array.from({ length: limit }, (_, i) => {
    const id = seed + i;
    const width = 400 + (id % 3) * 100; // 400-600
    const height = 500 + (id % 5) * 80; // 500-820
    return {
      id,
      url: `https://picsum.photos/${width}/${height}?random=${id}`,
      width,
      height,
    };
  });

  return Response.json({ photos, nextPage: page + 1 });
}