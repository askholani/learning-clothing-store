import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// Products
export const getMain = async () => {
  prisma.products.findFirst({
    select: {
      idProduct: true,
      image: true,
    },
  })
}
