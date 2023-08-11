'use server'

import { cookies } from 'next/headers'

export async function addCart(data: object[]) {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  cookies().set({
    name: 'cart',
    value: JSON.stringify(data),
    path: '/',
    expires: tomorrow,
  })
}
