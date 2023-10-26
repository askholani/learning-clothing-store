'use server'

import { cookies } from 'next/headers'

export async function addCart(data: object[]) {
  cookies().set({
    name: 'cart',
    value: JSON.stringify(),
  })
}
