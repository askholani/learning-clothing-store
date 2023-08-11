'use client'
import { createContext, useContext, useReducer } from 'react'

type CartAction =
  | { type: 'GET'; defaultItem?: string }
  | { type: 'ADD'; item?: object }

interface CartCookies {
  state: object[]
}

interface CartContextType {
  state: []
  dispatch: React.Dispatch<CartAction>
}

const intialState: [] = []

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

function cartReducer(state: [], action: CartAction): [] {
  switch (action.type) {
    case 'GET':
      const cart = action.defaultItem ? JSON.parse(action.defaultItem) : []
      console.log('cart', cart)
      return cart
    case 'ADD':
      const newItems = action.item ? action.item : []
      const oldItems = state
      const existingIndex = oldItems.findIndex(
        (item) => item.id === newItems.id,
      )
      let existingCartItem: object
      let updatedItems
      let updatedItem
      if (existingIndex !== -1) {
        existingCartItem = state[existingIndex]
        updatedItem = {
          ...existingCartItem,
          qty: existingCartItem.qty + newItems.qty,
        }
        updatedItems = [...state]
        updatedItem[existingIndex] = updatedItem
      }

      console.log('updateItem', updateItem)
      console.log('existingCartItem', existingCartItem)
      console.log('oldItems', oldItems)
      console.log('newItems', newItems)
      // console.log('oldItems', oldItems.findIndex((old)=>old.id === newItems.id))
      // const existingIndex = oldItems.
      return updatedItems // array of object
  }
  return state
}
