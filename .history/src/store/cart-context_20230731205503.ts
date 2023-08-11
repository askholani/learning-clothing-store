import React from 'react'

export const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (id: number) => {},
  removeItem: (id: number) => {},
})
