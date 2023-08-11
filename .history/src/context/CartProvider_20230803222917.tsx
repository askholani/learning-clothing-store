'use client'
import { StateCart, ActionCart } from '@components/types/reducer'
import { useReducer } from 'react'

const defaultCartState: StateCart = {
  items: [],
  totalAmount: 0,
}

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
