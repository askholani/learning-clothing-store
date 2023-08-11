import { NextRequest, NextResponse } from 'next/server'
import { faker } from '@faker-js/faker'

import { PrismaClient } from '@prisma/client'
import axios from 'axios'
import { api } from '@components/utils/db'

const prisma = new PrismaClient()

const dummy = [
  { id: 58, images: [], descriptions: [faker.commerce.productDescription] },
]

const producImages = [
  {
    id: 58,
    images: [
      faker.image.urlPicsumPhotos({
        width: 354,
        height: 472,
      }),
      faker.image.urlPicsumPhotos({
        width: 354,
        height: 472,
      }),
      faker.image.urlPicsumPhotos({
        width: 354,
        height: 472,
      }),
    ],
    descriptions: ['ada macan', 'ada singa', 'ad rusa'],
  },
]

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const productsCount = await prisma.product_images.createMany({
      data,
    })
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
