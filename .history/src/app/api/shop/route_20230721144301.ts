import pool from '@components/utils/db'
import { NextRequest, NextResponse } from 'next/server'

const client = async () => await pool.connect()

export async function POST(req: NextRequest, res: NextResponse) {
  const dbClient = await client()
  try {
    const query =
      'INSERT INTO products (id, name, description, image, stock, price) VALUES ($1, $2, $3, $4, $5, $6)'
    const { id, name, description, image, stock, price } = await req.json()
    const values = [id, name, description, image, stock, price]

    await dbClient.query(query, values)
    return NextResponse.json(
      {
        message: 'Success',
        values,
      },
      {
        status: 201,
      },
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Error',
        error,
      },
      {
        status: 500,
      },
    )
  } finally {
    if (dbClient) {
      dbClient.release()
    }
  }
}

const queryBase = 'SELECT * FROM public.products'
const queryBaseDateNew =
  'SELECT * FROM public.products order by created_at desc limit 10'

export async function GET(req: NextRequest, res: NextResponse) {
  let query
  const dbClient = await client()
  const request = req.nextUrl.search.split('=')[1]
  console.log(request)

  if (request === 'new') {
    console.log('hai')

    query = queryBase
  } else {
    query = queryBaseDateNew
  }

  try {
    const result = (await dbClient.query(query)).rows
    return NextResponse.json(
      {
        message: 'Success',
        result,
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed',
        error,
      },
      {
        status: 500,
      },
    )
  } finally {
    dbClient.release()
  }
}
