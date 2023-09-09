import { DEFAULT_SALT_ROUNDS } from '@/app/api/admin/users/constraints';
import { badRequestResponse, createdResponse, unAuthroizedResponse } from '@/app/api/api-helper';
import { db } from '@lib/db';
import { genSalt, hashPassword } from '@lib/hashHelper';
import { NextRequest } from 'next/server';
import { z } from 'zod';

export const CreateNewUserSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .max(255)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'Minimum six characters, at least one uppercase letter, one lowercase letter and one number'
    ), //Minimum six characters, at least one uppercase letter, one lowercase letter and one number
  role: z.enum(['ADMIN', 'USER', 'AUTHOR'], {
    description: 'ADMIN | USER | AUTHOR',
    required_error: 'Role is required',
  }),
  image: z.string().url().optional(),
});

export async function POST(req: NextRequest) {
  const json = await req.json();
  const { name, email, password: rawPassword, role, image } = CreateNewUserSchema.parse(json);

  // TODO: check if user is authenticated and is operator
  const isAllowedToCreate = true;

  if (!isAllowedToCreate) {
    return unAuthroizedResponse;
  }

  const existingUser = await db.user.findFirst({
    where: {
      email,
    },
  });

  if (existingUser) {
    return badRequestResponse('User already exists');
  }

  const salt = genSalt(DEFAULT_SALT_ROUNDS);
  const password = hashPassword(rawPassword, salt);

  //Create new user
  const newUser = await db.user.create({
    data: {
      name,
      email,
      password,
      role,
      image,
    },
  });

  return createdResponse(newUser);
}
