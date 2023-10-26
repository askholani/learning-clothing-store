'use server'
import { cookies } from 'next/headers'

type State = {
  items: []
  totalAmount: number
}

async function cobaCookie() {
  const cookieStore = cookies()
  const cart = cookieStore.get('cart')?.value
  console.log('cart', cart)

  let cartValues: any
  try {
    cartValues = cart ? JSON.parse(cart) : []
  } catch (error) {
    console.log(error)
  }

  const defaultCartState: State = {
    items: cartValues,
    totalAmount: 0,
  }
}
