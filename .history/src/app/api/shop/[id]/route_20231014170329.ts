import { NextRequest, NextResponse } from 'next/server'

import { getDetailProduct } from '../../../../models/allModels'

export async function GET(req: NextRequest, res: NextResponse) {
  const pathId = req.nextUrl.pathname.match(/\/shop\/(.+)/)![1]

  try {
    const result = await getDetailProduct(pathId)
    return NextResponse.json(
      {
        message: 'Success',
        result,
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed',
        error,
      },
      {
        status: 500,
      },
    )
  }
}
