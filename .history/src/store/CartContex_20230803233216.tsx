'use client'
import { createContext, useContext, useReducer } from 'react'

interface CartCookies {
  cart: string
}

type CartAction = { type: 'GET' } | { type: 'ADD' }

interface CartContextType {
  state: CartCookies
  dispatch: React.Dispatch<CartAction>
}

const intialState: CartCookies = {
  cart: '',
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CounterProvider')
  }
  return context
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, intialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

function cartReducer(state: CartCookies, action: CartAction): CartCookies {
  switch (action.type) {
    case 'ADD':
      return { ...state }
  }
  return state
}
