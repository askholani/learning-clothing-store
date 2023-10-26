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
  items: []
  totalAmount: number
}
const cookieStore = cookies()
const cart = cookieStore.get('cart')?.value // get cart cookie

const defaultCartState = {
  items: cart ? cart : [],
}

export function cartReducer(state: State[], action: Action) {
  // let cartValues
  // const cart = state.cart

  switch (action.type) {
    case 'ADD':
      return {}
    // if (cart) {
    //   // there are values on cookie cart
    //   cartValues = JSON.parse(cart)
    //   let newCartValues = [...cartValues] // copy array
    //   const indexTheCart = cartValues.findIndex(
    //     (value: any) => value.id === action.payload.id,
    //   )
    //   if (indexTheCart !== -1) {
    //     const theCart = newCartValues[indexTheCart]
    //     let newCart = { ...theCart, qty: action.payload.qty + theCart.qty }
    //     return updateCart(newCart)
    //   }

    //   return newCartValues.push(state)
    // }
    // return
  }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, cart)
}
