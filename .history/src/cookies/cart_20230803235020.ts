'use server'
import { cookies } from 'next/headers'

export async function cartCookies() {
  const cookiesStore = cookies()
  let cart
  try {
    cart = cookiesStore.get('cart')?.value
  } catch (error) {
    console.log(error)
  }
  return cart
}
