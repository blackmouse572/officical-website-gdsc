import { DEFAULT_ALLOWED_CREATE_POSTS, DEFAULT_SALT_ROUNDS } from '@/app/api/admin/users/constraints';
import { createdResponse } from '@/app/api/api-helper';
import { RegisterSchema } from '@/validations/auth.validator';
import { getSessionServerSide } from '@lib/auth';
import { db } from '@lib/db';
import { genSalt, hashPassword } from '@lib/hashHelper';
import { Session } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const json = await req.json();
  const { name, email, password: rawPassword, role, image } = RegisterSchema.parse(json);

  // TODO: check if user is authenticated and is operator
  const session = await getSessionServerSide();
  const isAllowedToCreate = checkAllowToCreate(session);

  if (isAllowedToCreate) {
    return NextResponse.json(
      {
        isSuccess: false,
        message: 'You are not allowed to create user',
      },
      {
        status: 401,
      }
    );
  }

  const existingUser = await db.user.findFirst({
    where: {
      email,
    },
  });

  if (existingUser) {
    return NextResponse.json(
      {
        isSuccess: false,
        message: 'Email is already existed',
      },
      {
        status: 400,
      }
    );
  }

  const salt = genSalt(DEFAULT_SALT_ROUNDS);
  const password = hashPassword(rawPassword, salt);

  //Create new user
  const newUser = await db.user.create({
    data: {
      name,
      email,
      password,
      image,
      role: {
        connect: {
          id: role,
        },
      },
    },
  });

  const res: NextResponse = createdResponse({
    data: newUser,
  });
  console.log(res);

  return NextResponse.json(
    {
      isSuccess: true,
      message: 'Created successfully',
      data: newUser,
    },
    {
      status: 201,
    }
  );
}

function checkAllowToCreate(session: Session | null) {
  if (!session) {
    return false;
  }
  return DEFAULT_ALLOWED_CREATE_POSTS.includes(session.user.role.id);
}
