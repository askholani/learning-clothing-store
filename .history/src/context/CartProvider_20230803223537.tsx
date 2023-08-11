'use client'
import { StateCart, ActionCart } from '@components/types/reducer'
import { defaultCartState } from '@components/hooks/useCart'

import { createContext, useReducer } from 'react'

const CartContext = createContext(defaultCartState)

const CartProvider = async ({ children }: { children: React.ReactNode }) => {
  // const [cartState, dispatchCartAction] = useReducer(
  //   ,
  //   defaultCartState,
  // )

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}
export default CartProvider
