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

export async function addCookies(
  data?: object,
  time: number = 1,
  cookieName: string = 'cart',
) {
  const now = new Date()
  const day = 24 * 60 * 60 * 1000

  const cookiesStore = cookies()
  const value = data
  await deleteCartCookie()
  cookiesStore.set({
    name: cookieName,
    value: JSON.stringify(value),
    path: '/',
    expires: new Date(now.getTime() + day * time),
  })
}
