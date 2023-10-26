import axios from 'axios'
import { cookies } from 'next/headers'
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

const config = {
  method: 'get',
  url: `http://localhost:3000/api/cart`,
  withCredentials: true, // Menambahkan kredensial (termasuk cookie) ke permintaan
}

export async function getCart() {
  const nextCookies = cookies()
  const token = nextCookies.get('cart')
  if (!token) {
    // throw new Error('mission cart')
    console.log('error !token')
  }
  try {
    const response = await axios(config)
    return response.data
  } catch (error: any) {
    console.log(token)
    console.log(error.response.data)
    return null
  }
}

function setCookie(
  name: string,
  value: string | number,
  timesToExpire: TimeRanges,
) {
  const expires = new Date()
  expires.setTime(expires.getTime() + 1000 * 60 * 5)
  const cookieValue =
    encodeURIComponent(value) +
    '; expires=' +
    expires.toUTCString() +
    '; path=/'
}
