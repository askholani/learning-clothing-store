import axios from 'axios'

const urlApiBase = process.env.NEXT_LOCAL_DEV
export const api = urlApiBase ? urlApiBase : ''

// product
export async function getProducts(query?: string) {
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

export async function getCookies(name?: string) {
  try {
    const getReq = await axios.get('http://localhost:3000/api/cart')
    return getReq
  } catch (error) {
    return error
  }
}
