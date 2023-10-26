import React from 'react'
import { createContext, useContext } from 'react'

type CartContextType = {
  items: []
  totalAmount: number
  addItem: (id: number) => void
  removeItem: (id: number) => void
}

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: number,
  addItem: (id: number) => void,
  removeItem: (id: number) => void,
})

export default CartContext
