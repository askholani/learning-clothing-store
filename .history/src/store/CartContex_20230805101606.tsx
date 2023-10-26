'use client'
import { createContext, useContext, useReducer } from 'react'

interface CartCookies {
  cart: object[] | string
}

type CartAction =
  | { type: 'GET'; defaultItem?: string }
  | { type: 'ADD'; item?: string | object[] }

interface CartContextType {
  state: CartCookies
  dispatch: React.Dispatch<CartAction>
}

const intialState: CartCookies = {
  cart: [],
}

const CartContext = createContext<CartContextType | undefined>(undefined)

/**
 * mencegah nilai undefined pada context
 * mengambilkan nilai default dari context
 * langsung digunakan pada komponen yang butuh
 * contoh : const {state, dispatch} = useCrateContext()
 * @date 8/4/2023 - 12:34:05 AM
 *
 * @returns {*}
 */
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
      const cart = action.defaultItem ? JSON.parse(action.defaultItem) : []
      return { cart }
    case 'ADD':
      const items = state.cart

      console.log('typeof state', typeof state)
      console.log('state', state)
      console.log('typeof items', typeof items)
      console.log('items', items)
      console.log('action', action)
      return { ...state }
  }
  return state
}
