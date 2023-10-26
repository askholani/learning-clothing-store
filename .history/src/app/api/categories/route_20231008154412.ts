import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../utils/api/server'

const categories = [
  { id: 1, name: 'all' },
  { id: 2, name: 'outwear' },
  { id: 3, name: 'shorts' },
  { id: 4, name: 'shirt' },
  { id: 5, name: 'sweatshirts' },
  { id: 6, name: 'pants' },
  { id: 7, name: 'jewelry' },
]

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const requestData = await req.json()
    const result = await prisma.categories.createMany({
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
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const result = await prisma.categories.findMany()
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
