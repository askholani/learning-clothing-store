import axios from 'axios'
import useSWR from 'swr'

const urlApiBase = process.env.NEXT_LOCAL_DEV
export const api = urlApiBase ? urlApiBase : ''

export async function getProducts(query: string) {
  // console.log(query)
  try {
    const response = await axios.get(`${api}/shop${query}`)
    if (response.status !== 200) {
      throw new Error('Network response was not ok')
    }
    return response.data
  } catch (error) {
    return error
  }
}

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

export default function useProduct(id?: string) {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data, error, isLoading } = useSWR(`/api/shop/${id}`, fetcher)
  console.log(data)
  return {
    products: data,
    isLoading,
    isError: error,
  }
}
