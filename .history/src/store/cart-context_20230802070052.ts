import React from 'react'
import { createContext, useContext } from 'react'

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (id: number) => {},
  removeItem: (id: number) => {},
})

export default CartContext
