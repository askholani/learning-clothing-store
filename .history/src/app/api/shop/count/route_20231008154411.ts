import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

import { prisma } from '../../../../utils/api/server'
import { api } from '../../../../utils/api/server'

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
