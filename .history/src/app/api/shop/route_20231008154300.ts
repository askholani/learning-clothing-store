'use server'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../utils/api/api'
import { getAbout, getMain, getNewIn, getPage } from '../../../models/allModels'

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
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const queryString = req.nextUrl.searchParams
  const key = queryString.keys().next().value
  const value = queryString.values().next().value

  let result

  try {
    if (key === 'main') {
      result = await getMain()
    }

    if (key === 'about') {
      result = await getAbout()
    }

    if (key === 'newIn') {
      result = await getNewIn()
    }

    if (key === 'page') {
      result = await getPage(value)
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
  }
}
