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
