import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import OgTailwind from '@/components/og/OgTailwind';

export const config = {
  runtime: 'edge',
};

const fontHeading = fetch(
  new URL('../../../public/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const topicTitle = searchParams.get('title');
  const fontData = await fontHeading;

  return new ImageResponse(<OgTailwind caption={topicTitle} />, {
    width: 1200,
    height: 630,
    emoji: 'twemoji',
    fonts: [
      {
        name: 'Inter',
        data: fontData,
        style: 'normal',
      },
    ],
  });
}
