import React from 'react'

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (id: number) => {},
  removeItem: (id: number) => {},
})
