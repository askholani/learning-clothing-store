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
  // console.log('hai addCookies')
  // console.log('data', data)
  // const value = JSON.stringify(data)
  const cart = await getCookies()
  const value = data
  const oldCart = cart ? JSON.parse(cart) : []
  const newCart = oldCart.push(value)
  console.log('newCart', newCart)
  deleteCartCookie()
  cookiesStore.set({
    name: 'cart',
    value: JSON.stringify(newCart),
    path: '/',
  })
}
