'use server'
import { cookies } from 'next/headers'

const cookiesStore = cookies()

export async function getCookies() {
  let cart
  try {
    cart = cookiesStore.get('cart')?.value
  } catch (error) {
    console.log(error)
  }
  return cart
}

export async function addCookies(data: object[]) {
  const value = JSON.stringify(data)
  const cart = getCookies()
  console.log('value', value)
  console.log('cart', cart)
  // const newCart = value
  // cookiesStore.set
}
