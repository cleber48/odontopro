import { readFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  if (!name) return new NextResponse('Missing name param', { status: 400 });

  const filePath = join(process.cwd(), 'public', name);
  try {
    const file = readFileSync(filePath);
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
}
