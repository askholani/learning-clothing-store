'use server'

import { cookies } from 'next/headers'
import { useReducer } from 'react'

interface Action {
  type: 'ADD' | 'REMOVE' | 'UPDATE'
  product?: object[]
  id?: number
  qty?: number
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
      let newCartValues = [...cartValues] // copy array
      const indexTheCart = cartValues.findIndex(
        (value: any) => value.id === action.id,
      )
      if (indexTheCart !== -1) {
        const theCart = newCartValues[indexTheCart]
        let newCart = { ...theCart, qty: action.qty + theCart.qty }
        return
      }

      return
  }
}
