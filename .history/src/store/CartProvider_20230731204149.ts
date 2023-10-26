'use server'

import { addCookieCart, updateCart } from '@components/app/action'
import { cookies } from 'next/headers'
import { useReducer } from 'react'

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
const cookieStore = cookies()
const cart = cookieStore.get('cart')?.value // get cart cookie

const defaultCartState = {
  items: cart ? cart : [],
  totalAmount: 0,
}

export function cartReducer(state: State, action: Action) {
  // let cartValues
  // const cart = state.cart

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
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )
}
