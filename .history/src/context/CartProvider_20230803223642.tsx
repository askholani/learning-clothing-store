'use client'
import { StateCart, ActionCart } from '@components/types/reducer'
import { defaultCartState, cartReducer } from '@components/hooks/useCart'

import { createContext, useReducer } from 'react'

const CartContext = createContext(defaultCartState)

const CartProvider = async ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )

  return (
    <CartContext.Provider value={{ cartState, dispatchCartAction }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
