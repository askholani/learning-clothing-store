import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const collections = [
  { id: 1, name: 'spring' },
  { id: 2, name: 'summer' },
  { id: 3, name: 'autumn' },
  { id: 4, name: 'winter' },
  { id: 5, name: 'collaboration' },
]

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const requestData = await req.json()
    const result = await prisma.collections.createMany({
      data: categories,
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
