import { Pool } from 'pg'
import axios from 'axios'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'clothing_store',
  password: 'postgres',
  port: 5432,
})

export default pool

const urlApiBase = process.env.NEXT_LOCAL_DEV
export const api = urlApiBase ? urlApiBase : ''

export async function getProducts(query: string) {
  const { query } = props

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
