import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const collections = [
  { id: 1, name: 'spring' },
  { id: 2, name: 'summer' },
  { id: 3, name: 'autumn' },
  { id: 4, name: 'winter' },
  { id: 5, name: 'collaboration' },
  { id: 6, name: 'limited series' },
  { id: 7, name: 'sports' },
  { id: 8, name: 'beach' },
  { id: 9, name: 'formal' },
]

export async function POST(req: NextRequest, res: NextResponse) {
  const prisma = new PrismaClient()
  try {
    const result = await prisma.collections.createMany({
      data: collections,
    })
    return NextResponse.json(
      {
        message: 'success',
        result,
      },
      {
        status: 201,
      },
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'error',
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
  const prisma = new PrismaClient()
  try {
    const result = await prisma.collections.findMany()
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
