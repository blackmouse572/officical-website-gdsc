import { getSessionServerSide } from '@lib/auth';
import { db } from '@lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const blog = await db.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return NextResponse.json(blog);
}

export async function PATCH(request: Request, { params }: { params: { slug: string } }) {
  //Check if user is logged in
  const session = await getSessionServerSide();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  //Check if user is admin/author
  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  const blog = await db.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  if (blog.authorId !== user.id && user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { title, content, mode } = body;

  if (!title || !content || !mode) return NextResponse.json({ error: 'Missing data' }, { status: 400 });

  const updatedBlog = await db.post.update({
    where: {
      slug: params.slug,
    },
    data: {
      title,
      content,
      published: mode === 'publish',
    },
  });

  return NextResponse.json({
    success: 1,
    data: updatedBlog,
  });
}
