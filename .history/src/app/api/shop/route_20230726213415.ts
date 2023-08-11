import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const requestData = await req.json()
    const result = await prisma.products.create({ data: requestData })
    return NextResponse.json(
      {
        message: 'Success',
        result,
      },
      {
        status: 201,
      },
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Error',
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

export async function GET(req: NextRequest, res: NextResponse) {
  const queryString = req.nextUrl.searchParams
  const key = queryString.keys().next().value
  const value = queryString.values().next().value
  console.log('key', key)
  console.log('value', typeof value)

  let result

  try {
    if (key === 'page') {
      console.log('hai page')

      const itemOffset = (value - 1) * 12
      result = await prisma.products.findMany({
        skip: itemOffset,
        take: 12,
      })
    } else {
      result = await prisma.products.findMany({
        take: 15,
        orderBy: { created_at: 'desc' },
      })
    }

    if (key === 'id') {
      console.log('value', value)

      await prisma.products.findFirst({
        where: {
          id: parseInt(value),
        },
      })
      console.log(result)
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
