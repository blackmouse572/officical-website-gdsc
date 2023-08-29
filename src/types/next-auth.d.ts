import { ROLE } from '@prisma/client';
import { User } from 'next-auth';
import 'next-auth/jwt';

type UserId = string;

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId;
    role: ROLE;
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId;
      role: ROLE;
    };
  }
}
