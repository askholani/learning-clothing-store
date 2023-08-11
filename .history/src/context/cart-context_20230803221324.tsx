import React from 'react'
import { createContext, useContext } from 'react'

type CartContextType = {
  items: [] | string
  totalAmount: number
  addItem?: (id: number) => void
  removeItem?: (id: number) => void
  getItem: () => void
}

export const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  getItem: () => {},
  addItem: (id: number) => {},
  removeItem: (id: number) => {},
})
