'use server'
import { cookies } from 'next/headers'

type State = {
  items: []
  totalAmount: number
}

const cookieStore = cookies()
export const cart = cookieStore.get('cart')?.value
console.log('cart', cart)

export let cartValues: any
try {
  cartValues = cart ? JSON.parse(cart) : []
} catch (error) {
  console.log(error)
}

export const defaultCartState: State = {
  items: cartValues,
  totalAmount: 0,
}
