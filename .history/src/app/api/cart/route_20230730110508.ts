import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const reqData = await req.json()
  const date = new Date()
  const minutes_5 = date.getTime() + 300000
  cookies().set({
    name: 'cart',
    value: JSON.stringify(reqData),
    expires: minutes_5,
    path: '/',
  })
  const result = cookies().get('cart')?.value
  return NextResponse.json({ result })
}

export async function GET(request: NextRequest) {
  const token = cookies().get('cart')
  console.log('cookies request ', request.cookies)
  console.log('hai')
  console.log('token', token)

  return NextResponse.json({ message: 'success', token })
}
