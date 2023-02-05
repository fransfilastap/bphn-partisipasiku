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
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          /*           backgroundColor:'#FF3CAC',
          backgroundImage: `linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)`, */
          backgroundImage: `url(${AppInfo.url}/og-exp.jpg)`,
        }}
      >
        <div
          style={{
            marginLeft: 100,
            marginRight: 100,
            display: 'flex',
            fontSize: 60,
            fontFamily: 'Kaisei Tokumin',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '60px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {topicTitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
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
