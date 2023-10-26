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
    cartValues = JSON.parse(cart)
  }
  switch (action.type) {
    case 'ADD':
      const existCart = cartValues.find((value: any) => value.id === action.id)
      // const newExist = {...cartex}
      return
  }
}
