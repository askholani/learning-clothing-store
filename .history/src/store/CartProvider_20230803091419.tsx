'use client'

import { cartValues as cookiesCart, cart as theCart } from './cookies'

import { CartContext } from './cart-context'
import { useReducer } from 'react'
import { getCookies } from '@components/utils/db'

type Action =
  | {
      type: 'ADD'
      payload: {
        id: number
        data: object[]
      }
    }
  | {
      type: 'REMOVE'
      payload: {
        id: number
        data: object[]
      }
    }

type State = {
  items: []
  totalAmount: number
}

const defaultCartState: State = {
  items: cookiesCart,
  totalAmount: 0,
}

export function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return {
        items: [],
        totalAmount: 0,
      }
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
  return defaultCartState
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const resCookies = getCookies()
  console.log(resCookies)

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )

  console.log('cookiesCart', cookiesCart)
  console.log('theCart', theCart)

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}
export default CartProvider
