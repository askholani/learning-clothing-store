'use client'
import { createContext, useContext, useReducer } from 'react'

interface CartCookies {
  cart: object[] | string
}

type CartAction =
  | { type: 'GET'; item?: string }
  | { type: 'ADD'; item?: string }

interface CartContextType {
  state: CartCookies
  dispatch: React.Dispatch<CartAction>
}

const intialState: CartCookies = {
  cart: [],
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
    case 'GET':
      console.log('state', state)
      console.log('action', action)
      console.log('typeof action.item', typeof action.item)
      return { ...state }
  }
  return state
}
