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

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(contextReducer, intialState)

  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  )
}

function contextReducer(state: itemType[], action: CheckoutAction): itemType[] {
  switch (action.type) {
    case 'GET':
      const checkout = action.cartItems
      return checkout
   case "RETRIEVE" :
      const checkoutRET =  
  }
  return state
}
