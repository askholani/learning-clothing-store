'use client'

import { cartValues as cookiesCart } from './cookies'

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

export function useCookies() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  const { data, error, isLoading } = useSWR('/api/cart', fetcher)

  return {
    data,
    isLoading,
    error,
  }
}

const CartProvider = async ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )

  console.log('hai')

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}
export default CartProvider
