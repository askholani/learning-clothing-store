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
