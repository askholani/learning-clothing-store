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

const config = {
  method: 'get',
  url: `http://localhost:3000/api/cart`,
  withCredentials: true, // Menambahkan kredensial (termasuk cookie) ke permintaan
}

export async function getCart() {
  try {
    // const response = await axios(config)
    const response = await fetch(config.url, {
      method: config.method,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    return error
  }
}
