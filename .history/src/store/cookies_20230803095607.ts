'use server'
import { cookies } from 'next/headers'

const cookieStore = cookies()
export const cart = cookieStore.get('cart')?.value
console.log('cart', cart)
export const cartValues = cart ? JSON.parse(cart) : []
