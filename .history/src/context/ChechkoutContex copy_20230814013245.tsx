'use client'
import { createContext, useContext, useReducer } from 'react'
import { itemType } from './CartContex'

type CartAction = { type: 'SET'; items: itemType } | { type: 'GET' }

const intialState: itemType[] = []

interface CheckoutContextType {
  state: itemType[]
  dispatch: React.Dispatch<CartAction>
}

const CartContext = createContext<CheckoutContextType | undefined>(undefined)

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CounterProvider')
  }
  return context
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(CheckoutReducer, intialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

function CheckoutReducer(
  state: itemType[],
  action: CartAction,
): any | itemType[] {
  if (typeof window !== 'undefined') {
    switch (action.type) {
      case 'SET':
        const checkoutSET = action.items as itemType
        window.localStorage.setItem('checkout', JSON.stringify(checkoutSET))
        return [checkoutSET]
      case 'GET':
        const checkoutGET = window.localStorage.getItem('checkout')
        return JSON.parse(checkoutGET ? checkoutGET : 'error')
    }
  }
  return state
}
