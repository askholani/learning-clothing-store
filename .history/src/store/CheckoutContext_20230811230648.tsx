'use client'

import { createContext, useContext, useReducer } from 'react'
import { itemType } from './CartContex'

type CheckoutAction = { type: 'GET'; cartItems: itemType[] }

const intialState: itemType[] = []

interface CheckoutContextType {
  state: itemType[]
  dispatch: React.Dispatch<CheckoutAction>
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined,
)

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext)
  if (!context) {
    throw new Error('useCheckoutContext must be used within a CounterProvider')
  }
  return context
}
