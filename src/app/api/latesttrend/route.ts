import data from '@/constants/data.json'
import { NextResponse } from 'next/server'
export async function GET() {
  const response = NextResponse.json(data);

  response.headers.set('Cache-Control', 'no-store, must-revalidate');
  return response
}