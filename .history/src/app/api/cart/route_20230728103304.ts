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
//   const cookieStore = cookies()
//   const coba3 = cookieStore.get('cart')

//   return NextResponse.json({ message: 'success', coba3 })
// }

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')
  return NextResponse.json({ token })
}
