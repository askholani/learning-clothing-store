import { cookies } from 'next/headers'
import exp from '@components/hooks/exp'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const reqData = await req.json()
  const experiment = exp(reqData)
  const coba = cookies().get('cart')?.value
  return NextResponse.json({ coba })
}

// export async function GET(req: NextRequest, res: NextResponse) {
//   const coba = cookies().get('cart')
//   const coba2 = cookies().has('cart')
  const cookieStore = cookies()
  const coba3 = cookieStore.get('cart')
//   console.log(coba2)

  return NextResponse.json({ message: 'success', coba3 })
}
