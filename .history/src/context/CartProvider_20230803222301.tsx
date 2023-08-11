'use client'

import { CartContext } from './cart-context'
import { useReducer } from 'react'

type Action =
  | {
      type: 'ADD'
      payload?: {
        id: number
        data: object[]
      }
    }
  | {
      type: 'REMOVE'
      payload?: {
        id: number
        data: object[]
      }
    }
  | {
      type: 'GET'
      payload?: {
        data: object[]
      }
    }

type State = {
  items: []
  totalAmount: number
}

const defaultCartState: State = {
  items: [],
  totalAmount: 0,
}

export function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'GET':
      console.log('state', state)
      console.log('action', action)
      return {
        items: [],
        totalAmount: 1,
      }
  }
  return state
}

const CartProvider = async ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )

  const getItemFromCookiesHandler = () => {
    dispatchCartAction({ type: 'GET' })
    return 'hai'
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    getItem: getItemFromCookiesHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}
export default CartProvider
