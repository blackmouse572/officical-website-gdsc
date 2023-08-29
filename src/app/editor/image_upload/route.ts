import { ROLE } from '@prisma/client';
import { nanoid } from 'nanoid';
import { Session } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { Readable } from 'stream';
import { firebaseAdmin } from '../../../lib/adminApp';
import { getSessionServerSide } from '../../../lib/auth';

//This route will receive the image from the editor and save it to the server (firebase storage)
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.formData();
  const session = await getSessionServerSide();

  if (!isUserUploadable(session))
    return NextResponse.json(
      {
        status: 'error',
        message: 'You are not authorized to upload images',
      },
      {
        status: 401,
      }
    );

  //Extract the key-value pairs from the form data
  for (const entry of Array.from(data.entries())) {
    const [key, value] = entry;

    const isFile = typeof value === 'object';

    if (isFile) {
      const blob = value as Blob;
      const filename = nanoid();

      //Convert blob to stream
      //Docs: https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
      const buffer = Buffer.from(await blob.arrayBuffer());
      const stream = Readable.from(buffer);

      const uploadStream = firebaseAdmin
        .storage()
        .bucket('gs://dev-official-website.appspot.com')
        .file(filename)
        .createWriteStream({
          contentType: blob.type,
          resumable: false,
        });

      //Upload the image to firebase storage
      await new Promise((resolve, reject) => {
        stream.pipe(uploadStream).on('error', reject).on('finish', resolve);
      });

      //Return the image url
      const url = `https://storage.googleapis.com/dev-official-website.
        appspot.com/${filename}`;

      return NextResponse.json({
        status: 'success',
        url,
      });
    }
  }
}

function isUserUploadable(session: Session | null) {
  if (!session) return false;
  const user = session.user;
  if (user.role === ROLE.ADMIN || user.role === ROLE.AUTHOR) return true;

  return false;
}
