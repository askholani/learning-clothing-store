import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const cookiesStore = cookies()
    const cart = cookiesStore.get('cart')?.value

    return cart
  } catch (error) {
    return error
  }
}
