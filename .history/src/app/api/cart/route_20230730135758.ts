import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
const request = req.cookies.set(({
  name: 'myCookieName',
  value: 'some-value',
  httpOnly: true,
})

  const reqData = await req.json()
  console.log('reqData', reqData)
  const date = new Date()
  const minutes_5 = date.getTime() + 300000
  cookies().set({
    name: 'cart',
    value: JSON.stringify(reqData),
    expires: minutes_5,
    path: '/',
  })
  const result = cookies().get('cart')?.value
  console.log('result', result)
  return NextResponse.json({ result })
}
