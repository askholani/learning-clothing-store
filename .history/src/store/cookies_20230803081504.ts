'use server'
import { cookies } from 'next/headers'

const cookieStore = cookies()
const cart = cookieStore.get('cart')?.value
export const cartValues = cart ? JSON.parse(cart) : []
