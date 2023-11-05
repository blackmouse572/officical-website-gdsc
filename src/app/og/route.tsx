import BasicOgImage from '@/app/og/basic-og';
import { OG_IMAGE_SIZE } from '@/app/og/constraint';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');

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
      width: OG_IMAGE_SIZE.width,
      height: OG_IMAGE_SIZE.height,
      fonts: [
        {
          name: 'Poppins',
          data: await getPopinsFont(),
          style: 'normal',
        },
      ],
    }
  );
}

async function getPopinsFont() {
  const res = await fetch(new URL('../../../public/fonts/SVN-Poppins-Bold.woff', import.meta.url));

  const font = await res.arrayBuffer();
  return font;
}
