import axios from 'axios'
import useSWR from 'swr'

const urlApiBase = process.env.NEXT_LOCAL_DEV
export const api = urlApiBase ? urlApiBase : ''

export async function getProducts(query?: string) {
  // console.log(query)
  try {
    const response = await axios.get(`${api}/shop`)
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

export async function getCart() {
  try {
    const response = await axios.get(`http://localhost:3000/api/cart`)
    console.log('response', response)
    return response.data
  } catch (error) {
    return error
  }
}
