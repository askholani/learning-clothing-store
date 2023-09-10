'use server'

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

  let result

  try {
    if (key === 'page') {
      const itemOffset = (value - 1) * 10
      result = await prisma.products.findMany({
        skip: itemOffset,
        take: 12,
        select: {
          id: true,
          name: true,
          image: true,
          price: true,
        },
      })
    } else {
      result = await prisma.products.findMany({
        take: 15,
        orderBy: { created_at: 'desc' },
        select: {
          id: true,
          name: true,
          image: true,
          price: true,
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
