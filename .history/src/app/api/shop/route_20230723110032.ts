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

const queryBase = 'SELECT * FROM public.products'
const queryBaseDateNew =
  'SELECT * FROM public.products order by created_at desc limit 10'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const result = await prisma.products.findMany()

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
