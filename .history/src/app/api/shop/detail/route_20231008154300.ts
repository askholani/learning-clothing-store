import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '../../../../utils/api/api'

export async function GET(req: NextRequest, res: NextResponse) {
  const queryString = req.nextUrl.searchParams
  const key = queryString.keys().next().value
  const value = queryString.values().next().value

  try {
    const result = await prisma.products.findUnique({
      where: {
        id: parseInt(value),
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        stock: true,
        price: true,
        id_category: true,
        id_rating: true,
        id_review: true,
      },
    })
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
