import { ROLE } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getSessionServerSide, isUserAuthenticated } from '@lib/auth';
import { slugtify } from '@lib/helper';
import { db } from '@lib/db';

export async function POST(req: NextRequest) {
  const json = await req.json();
  const data = json;

  const session = await getSessionServerSide();
  if (!isUserAuthenticated(session, [ROLE.USER])) {
    return NextResponse.json(
      {
        success: 0,
        message: 'You are not authorized',
      },
      {
        status: 401,
      }
    );
  }

  //Create new blog
  const newBlog = await db.post.create({
    data: {
      title: data.title,
      published: false,
      authorId: session!.user.id,
      slug: slugtify(data.title),
    },
  });

  return NextResponse.json(
    {
      success: 1,
      data: newBlog,
    },
    {
      status: 200,
    }
  );
}

export async function GET(req: NextRequest) {}
