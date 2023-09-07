import BasicOgImage from '@/app/og/basic-og';
import { ImageResponse, NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const font = fetch(new URL('../../../public/fonts/KaiseiTokumin-Bold.ttf', import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
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
        }}
      >
        <BasicOgImage title={postTitle} />
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Poppins',
          data: await getPopinsFont(),
          style: 'normal',
        },
        {
          name: 'Kaisei Tokumin',
          data: await getKaiseiFont(),
          style: 'normal',
        },
      ],
    }
  );
}

async function getPopinsFont() {
  const res = await fetch(new URL('../../../public/fonts/SVN-Poppins-Bold.ttf', import.meta.url));
  const font = await res.arrayBuffer();
  return font;
}

async function getKaiseiFont() {
  const res = await fetch(new URL('../../../public/fonts/KaiseiTokumin-Bold.woff', import.meta.url));
  const font = await res.arrayBuffer();
  return font;
}
