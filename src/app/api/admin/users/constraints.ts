import { ROLE } from '@prisma/client';

export const DEFAULT_SALT_ROUNDS = 10;
export const DEFAULT_ALLOWED_CREATE_POSTS: ROLE[] = [ROLE.AUTHOR, ROLE.OPERATOR, ROLE.ADMIN];
