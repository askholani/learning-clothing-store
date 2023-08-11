'use server'

import { cookies } from 'next/headers'
import { useReducer } from 'react'

interface Action {
  type: 'ADD' | 'REMOVE' | 'UPDATE'
  product?: object[]
  id?: number
  count?: number
}

function cartReducer(state: object[], action: Action) {
  const cookieStore = cookies()
  const cart = cookieStore.get('cart')?.value
  let cartValues
  if (cart) {
    cartValues = cart
  }
  switch (action.type) {
    case 'ADD':
      const existCartValues = length !== 0 ? true : false
      cartValues
      return
  }
}
