import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { AppInfo } from '@/configs';

export const config = {
  runtime: 'edge',
};

const font = fetch(
  new URL('../../../public/fonts/kaisei-tokumin-bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const topicTitle = searchParams.get('title');
  const category = searchParams.get('category');
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(${AppInfo.url}/og-bg.png)`,
        }}
      >
        {category && (
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: 'flex',
              fontSize: 60,
              fontFamily: 'Kaisei Tokumin',
              marginBottom: 20,
              letterSpacing: '-0.05em',
              fontStyle: 'normal',
              color: 'white',
              lineHeight: '40px',
              whiteSpace: 'pre-wrap',
            }}
          >
            #{category}
          </div>
        )}
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Kaisei Tokumin',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {topicTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Kaisei Tokumin',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
