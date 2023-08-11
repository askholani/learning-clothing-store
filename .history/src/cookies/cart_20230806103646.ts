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

export async function deleteCartCookie() {
  cookies().set({
    name: 'cart',
    value: '',
    path: '/',
    expires: new Date('2016-10-5'),
  })
  return cookies().get('cart')?.value
}

export async function addCookies(data?: object) {
  const cookiesStore = cookies()
  const value = data
  const res = await deleteCartCookie()
  cookiesStore.set({
    name: 'cart',
    value: JSON.stringify(value),
    path: '/',
  })
}
