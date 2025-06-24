
// This API route has been disabled as database functionality was removed.
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  return NextResponse.json({ message: 'This feature is currently disabled.' }, { status: 503 });
}
