import React from 'react'
import { createContext, useContext } from 'react'

type CartContextType = {
  items: []
  totalAmount: number
  addItem: (id: number) => {}
  removeItem: (id: number) => {}
}

const CartContext = createContext<CartContextType>({})

export default CartContext
