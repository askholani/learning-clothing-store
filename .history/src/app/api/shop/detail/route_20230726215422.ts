import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: NextRequest, res: NextResponse) {
  const queryString = req.nextUrl.searchParams
  const key = queryString.keys().next().value
  const value = queryString.values().next().value
  let result
  console.log('key', key)
  console.log('value', value)

  try {
    if (key === 'id') {
      await prisma.products.findFirst({
        where: {
          id: parseInt(value),
        },
      })
    }

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
  } finally {
    await prisma.$disconnect()
  }
}
