import { NextRequest, NextResponse } from 'next/server'
import { faker } from '@faker-js/faker'

import { PrismaClient } from '@prisma/client'
import axios from 'axios'
import { api } from '@components/utils/db'

const prisma = new PrismaClient()

const productImages = [
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
      faker.image.urlPicsumPhotos({
        width: 354,
        height: 472,
      }),
      faker.image.urlPicsumPhotos({
        width: 354,
        height: 472,
      }),
    ],
    descriptions: [
      faker.commerce.productDescription(),
      faker.commerce.productDescription(),
      faker.commerce.productDescription(),
      faker.commerce.productDescription(),
      faker.commerce.productDescription(),
    ],
  },
]

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const newProducts = await prisma.product_images.createMany({
      data: productImages.map((product) => ({
        id_product: product.id,
        images: product.images,
        descriptions: product.descriptions,
      })),
    })

    return NextResponse.json(
      {
        message: 'success',
        result: newProducts,
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
