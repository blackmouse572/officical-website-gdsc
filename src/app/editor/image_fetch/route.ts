import { env } from '@env';
import { bucketAdmin } from '@lib/adminApp';
import { getSessionServerSide, isUserAuthenticated } from '@lib/auth';
import { ROLE } from '@prisma/client';
import { nanoid } from 'nanoid';
import { NextRequest, NextResponse } from 'next/server';
import { Readable } from 'stream';
import { z } from 'zod';

type UploadFileResponse = {
  success: number; // 0 | 1 (0 means there was an error, 1 means all good)
  file: Record<string, string> & {
    url: string;
  }; // The file object
};

const uploadUrlSchema = z.object({
  url: z.string().url(),
  additionalRequestData: z.any().optional(),
});

//This route will receive the image from the editor and save it to the server (firebase storage)
export async function POST(req: NextRequest) {
  const json = await req.json();
  const data = uploadUrlSchema.parse(json);
  const session = await getSessionServerSide();
  if (!isUserAuthenticated(session, [ROLE.USER]))
    return NextResponse.json<UploadFileResponse>(
      {
        success: 0,
        file: {
          url: '',
        },
      },
      {
        status: 401,
      }
    );

  //Get the image from the url
  const response = await fetch(data.url);

  const isFile = response.ok && response.headers.get('content-type')?.startsWith('image/');

  if (isFile) {
    const blob = await response.blob();
    //Save the image to firebase storage in `public_images` folder
    const filename = `public_images/${nanoid()}`;

    //Convert blob to stream
    //Docs: https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    const buffer = Buffer.from(await blob.arrayBuffer());
    const stream = Readable.from(buffer);

    const fileRef = bucketAdmin.file(filename, {});

    const uploadStream = fileRef.createWriteStream({
      contentType: blob.type,
      resumable: false,
    });

    //Upload the image to firebase storage
    await new Promise((resolve, reject) => {
      stream
        .pipe(uploadStream)
        .on('error', reject)
        .on('finish', () => {
          console.log('New image uploaded to firebase storage: ', filename);
          resolve(null);
        });
    });

    const url = getDownloadUrl(filename);

    return NextResponse.json<UploadFileResponse>({
      success: 1,
      file: {
        url,
      },
    });
  }
}

function getDownloadUrl(filename: string) {
  //Convert all `/` to `%2F`
  const encodedFilename = filename.replaceAll('/', '%2F');

  //Remove gs://
  const bucket = env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET.replace('gs://', '');

  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodedFilename}?alt=media`;
}
