import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '../../../../utils/api/server'
import { getDetailProduct } from '../../../../models/allModels'

export async function GET(req: NextRequest, res: NextResponse) {
  const queryString = req.nextUrl.searchParams
  const key = queryString.keys().next().value
  const value = queryString.values().next().value
  console.log('value route ', value)
  console.log('queryString', queryString)

  try {
    const result = getDetailProduct(value)
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
