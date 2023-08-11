'use client'

import { CartContext } from './cart-context'
import { useReducer } from 'react'
import { cobaCookie } from './cookies'
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

// const defaultCartState = cobaCookie()

export function useCart() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data, error, isLoading } = useSWR(`/api/cart`, fetcher)
  return {
    data,
    isLoading,
    isError: error,
  }
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
  return ''
}

const CartProvider = async ({ children }: { children: React.ReactNode }) => {
  const { data } = useCart()

  const [cartState, dispatchCartAction] = useReducer(cartReducer, data)

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    // <main></main>
  )
}
export default CartProvider
