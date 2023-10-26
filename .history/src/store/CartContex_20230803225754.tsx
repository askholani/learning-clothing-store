'use client'
import { createContext, useContext, useReducer } from 'react'

interface CartCookies {
  cart: string
}

type CartAction = { type: 'GET' } | { type: 'ADD' }

interface CartContextType {
  state: CartCookies
  dispatch: React.Dispatch<CartAction>
}

const intialState: CartCookies = {
  cart: '',
}
