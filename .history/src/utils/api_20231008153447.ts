import axios from 'axios'
import { PrismaClient } from '@prisma/client'
import useSWR from 'swr'
export const prisma = new PrismaClient()

const urlApiBase = process.env.NEXT_LOCAL_DEV
export const api = urlApiBase ? urlApiBase : ''

// product
// server side
export async function getProducts(query?: string) {
  try {
    const response = await axios.get(`${api}/shop?${query}`)
    if (response.status !== 200) {
      throw new Error('Network response was not ok')
    }
    return response.data
  } catch (error) {
    return error
  }
}

// client side
export function useProduct(page?: number) {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const urlPage = page ? page : '1'
  const { data, error, isLoading } = useSWR(
    `/api/shop?page=${urlPage}`,
    fetcher,
  )
  return {
    products: data,
    isLoading,
    isError: error,
  }
}

// category
export async function getCategories() {
  try {
    const response = await axios.get(`${api}/categories`)
    if (response.status !== 200) {
      throw new Error('Network response was not ok')
    }
    return response.data
  } catch (error) {
    return error
  }
}

// collection
export async function getCollections() {
  try {
    const response = await axios.get(`${api}/collections`)
    if (response.status !== 200) {
      throw new Error('Network response was not ok')
    }
    return response.data
  } catch (error) {
    return error
  }
}

// cart
export async function sendCart() {
  try {
    const data = [
      {
        name: 'cart',
        telephone: '083898045398',
      },
      {
        name: 'cart2',
        telephone: '083898045398',
      },
    ]
    const sendReq = await axios.post(`${api}/cart`, data)
    return sendReq
  } catch (error) {
    return error
  }
}
