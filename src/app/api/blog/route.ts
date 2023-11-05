import { getSessionServerSide, isUserAuthenticated } from '@lib/auth';
import { db } from '@lib/db';
import { generateOgImage, slugtify } from '@lib/helper';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createPostSchema = z.object({
  title: z.string().min(3).max(255),
  ogImage: z.string().optional(),
  description: z.string().max(255).optional(),
});

export async function POST(req: NextRequest) {
  const json = await req.json();
  const data = createPostSchema.parse(json);

  const session = await getSessionServerSide();
  const roles = await db.role.findMany({
    where: {
      slug: {
        in: ['author', 'admin'],
      },
    },
  });
  const isAuth = isUserAuthenticated(session, roles);
  if (!isAuth) {
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
      description: data.description,
      ogImage: data.ogImage || generateOgImage(data.title),
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

const getQuery = z.object({
  author: z.string().optional(),
  published: z.boolean().optional(),
  publishedAt: z.string().optional(),
  title: z.string().optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});

export async function GET(req: NextRequest) {
  const query = getQuery.parse(req.nextUrl.searchParams);

  const blogs = await db.post.findMany({
    where: {
      ...(query.author && { authorId: query.author }),
      ...(query.published && { published: query.published }),
      ...(query.publishedAt && { publishedAt: new Date(query.publishedAt) }),
      ...(query.title && { title: query.title }),
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },

    orderBy: {
      createdAt: 'desc',
    },

    take: query.take || 10,
    skip: query.skip || 0,
  });

  return NextResponse.json(
    {
      success: 1,
      data: blogs,
    },
    {
      status: 200,
    }
  );
}
