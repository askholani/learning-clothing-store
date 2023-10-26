import { cookies } from 'next/headers'
import exp from '@components/hooks/exp'
import { NextRequest, NextResponse } from 'next/server'

const cookieStore = cookies()

export async function POST(req: NextRequest, res: NextResponse) {
  const reqData = await req.json()
  const a = exp(reqData)
  const coba = cookieStore.get('cart')
  return NextResponse.json({ coba })
}

export async function GET(req: NextRequest, res: NextResponse) {
  const coba = cookieStore.get('cart')

  return NextResponse.json({ message: 'success', coba })
}
