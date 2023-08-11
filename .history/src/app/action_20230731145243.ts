'use server'

import { cookies } from 'next/headers'

export async function addCookieCart(data: object[]) {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  cookies().set({
    name: 'cart',
    value: JSON.stringify(data),
    path: '/',
    expires: tomorrow,
  })
}

export async function deleteCookieCart(nameCookie: string) {
  cookies().set({
    name: nameCookie,
    value: '',
    expires: new Date('2016-10-05'),
    path: '/',
  })
}

export async function updateCart(name: string) {}
