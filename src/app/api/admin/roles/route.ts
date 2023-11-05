import { db } from '@lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const roles = await db.role.findMany();

  return NextResponse.json(roles);
}
