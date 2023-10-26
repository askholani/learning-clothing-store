import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

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

export const getDetailProduct = async (value: string) => {
  // console.log('value', value)
  return prisma.products.findUnique({
    where: {
      idProduct: value,
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
    },
  })
}
//
// collections
export const getCollection = async () => prisma.collections.findMany()
