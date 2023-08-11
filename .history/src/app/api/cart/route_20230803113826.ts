import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
  console.log('req', req)
  console.log('res', res)
  console.log('cookies', cookies())
  const cart = cookies().get('cart')?.value
  const res = cart ? cart : []
  return res
}
