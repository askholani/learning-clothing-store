'use server'
import { cookies } from 'next/headers'

export default async function exp(data: object[]) {
  const minutes_5 = new Date()
  const date = minutes_5.getTime() + 300000
  cookies().set({
    name: 'cart',
    value: JSON.stringify(data),
    expires: date,
    path: '/',
  })
}
