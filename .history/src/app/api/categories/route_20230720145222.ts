import pool from '@components/utils/db'
import { NextRequest, NextResponse } from 'next/server'

const client = async () => await pool.connect()

export async function POST(req: NextRequest, res: NextResponse) {
  const dbClient = await client()
}

export async function GET(req: NextRequest, res: NextResponse) {
  const dbClient = await client()
  try {
    console.log(dbClient)
    const query = 'SELECT * FROM categories'
    const result = (await dbClient.query(query)).rows
    console.log(result)
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
