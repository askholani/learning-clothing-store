'use server'

import { addCookieCart, updateCart } from '@components/app/action'
import { cookies } from 'next/headers'
import { useReducer } from 'react'

interface Action {
  type: 'ADD' | 'REMOVE' | 'UPDATE'
  product?: object[]
  payload: {
    id?: number
    qty?: number
  }
}

interface State {
  id?: number
}

export const initialState = {
  id? : number
  qty? : number
}


export function cartReducer(state: object[], action: Action) {
  const cookieStore = cookies()
  const cart = cookieStore.get('cart')?.value // get cart cookie
  let cartValues

  switch (action.type) {
    case 'ADD':
      if (cart) {
        // there are values on cookie cart
        cartValues = JSON.parse(cart)
        let newCartValues = [...cartValues] // copy array
        const indexTheCart = cartValues.findIndex(
          (value: any) => value.id === action.payload.id,
        )
        if (indexTheCart !== -1) {
          // the
          const theCart = newCartValues[indexTheCart]
          let newCart = { ...theCart, qty: action.payload.qty + theCart.qty }
          return updateCart(newCart)
        }

        newCartValues.push(state)
        return updateCart(newCartValues)
      }
      return addCookieCart(state)
  }
}
