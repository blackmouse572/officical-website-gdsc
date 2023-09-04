import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });
  console.log(
    '====================================\nFirebase Admin App Initialized\n===================================='
  );
}

export const firebaseAdmin = admin;
export const bucketAdmin = admin.storage().bucket();
export const storageAdmin = admin.storage();
