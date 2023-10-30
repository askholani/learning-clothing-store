import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

// Products
export const getMain = async () =>
  prisma.products.findFirst({
    select: {
      idProduct: true,
      image: true,
    },
  })

export const getAbout = async () =>
  prisma.products.findMany({
    skip: 1,
    take: 2,
    select: {
      idProduct: true,
      image: true,
    },
  })

export const getNewIn = async () =>
  prisma.products.findMany({
    skip: 3,
    take: 10,
    select: {
      idProduct: true,
      image: true,
    },
  })

export const getPage = async (value: number) => {
  const itemOffset = (value - 1) * 10
  return prisma.products.findMany({
    skip: itemOffset,
    take: 10,
    select: {
      idProduct: true,
      image: true,
      name: true,
      price: true,
    },
  })
}

export const getDetailProduct = async (id: string) => {
  // console.log(value)
  // console.log('typeof value', typeof value)
  return prisma.products.findUnique({
    where: {
      idProduct: id,
    },
    select: {
      idProduct: true,
      name: true,
      description: true,
      image: true,
      stock: true,
      price: true,
      categories: true,
      collections: true,
      colors: true,
      productImages: true,
      sizes: true,
    },
  })
}
//
// collections
export const getCollection = async () => prisma.collections.findMany()
