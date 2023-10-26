import { cookies } from 'next/headers'
import exp from '@components/hooks/exp'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const reqData = await req.json()
  const experiment = exp(reqData)
  const coba = cookies().get('cart')?.value
  return NextResponse.json({ coba })
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('cart')
  console.log(request.cookies)
  return NextResponse.json({ message: 'success', token })
}
