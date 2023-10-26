'use server'

import { cookies } from 'next/headers'

type State = {
  items: [] | string
  totalAmount: number
}

export function cobaCookie() {
  const cookieStore = cookies()
  const cart = cookieStore.get('cart')?.value
  const coba = cart ? cart : ''
  console.log('cart', cart)

  let cartValues: any
  try {
    cartValues = cart ? JSON.parse(cart) : []
  } catch (error) {
    console.log(error)
  }

  const defaultCartState: State = {
    items: coba,
    totalAmount: 0,
  }

  return defaultCartState
}
