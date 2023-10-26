'use server'
import { cookies } from 'next/headers'

export async function getCookies() {
  const cookiesStore = cookies()
  let cart
  try {
    cart = cookiesStore.get('cart')?.value
  } catch (error) {
    console.log(error)
  }
  return cart
}

export async function addCookies(data?: object) {
  console.log('hai addCookies')
  console.log('data', data)
  const value = JSON.stringify(data)
  const cart = await getCookies()
  console.log('value', value)
  console.log('cart', cart)
  // const newCart = value
  // cookiesStore.set
}
