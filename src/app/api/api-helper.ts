import { NextResponse } from 'next/server';

export const unAuthroizedResponse = {
  status: 401,
  json: {
    success: 0,
    message: 'You are not authorized',
  },
};
export const notFoundResponse = {
  status: 404,
  json: {
    success: 0,
    message: 'Not found',
  },
};

export const createdResponse = (data: any): NextResponse => {
  return NextResponse.json(
    {
      success: 1,
      data,
    },
    {
      status: 201,
    }
  );
};

export const badRequestResponse = (message: string): NextResponse => {
  return NextResponse.json(
    {
      success: 0,
      message,
    },
    {
      status: 400,
    }
  );
};
