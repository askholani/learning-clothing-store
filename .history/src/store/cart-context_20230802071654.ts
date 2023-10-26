import React from 'react'
import { createContext, useContext } from 'react'

type CartContextType = {
  items: []
  totalAmount: number
  addItem?: (id: number) => void
  removeItem?: (id: number) => void
}

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (id: number) => {},
  removeItem: (id: number) => {},
})

export default CartContext
