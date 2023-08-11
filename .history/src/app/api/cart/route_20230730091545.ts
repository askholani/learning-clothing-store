import { cookies } from 'next/headers'
import exp from '@components/hooks/exp'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const reqData = await req.json()
  const date = new Date()
  const minutes_5 = date.getTime() + 300000
  cookies().set({
    name: 'cart',
    value: JSON.stringify(reqData),
    expires: date,
    path: '/',
  })
  const result = cookies().get('cart')?.value
  return NextResponse.json({ result })
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('cart')
  console.log('cookies request ', request.cookies)
  return NextResponse.json({ message: 'success', token })
}
