import { NextRequest, NextResponse } from 'next/server'

import { PrismaClient } from '@prisma/client'
import axios from 'axios'
import { api } from '../../../../utils/db'

const prisma = new PrismaClient()

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const productsCount = await prisma.products.count()
    return NextResponse.json(
      {
        message: 'success',
        result: productsCount,
      },
      {
        status: 200,
      },
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'failed',
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

export async function getPageCount() {
  try {
    const response = await axios.get(`${api}/shop/count`)
    return response.data
  } catch (error) {
    return error
  }
}
