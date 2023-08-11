import axios from 'axios'

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
