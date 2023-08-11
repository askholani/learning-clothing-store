'use client'

import { CartContext } from './cart-context'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import useSWR from 'swr'

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
  items: [] | string
  totalAmount: number
}

const defaultCartState: State = {
  items: [],
  totalAmount: 0,
}

export function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return {
        items: [],
        totalAmount: 0,
      }
  }
  return defaultCartState
}

const CartProvider = async ({ children }: { children: React.ReactNode }) => {
  const cart = localStorage.getItem('cart')
  const cartData = cart ? cart : ''

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}
export default CartProvider
