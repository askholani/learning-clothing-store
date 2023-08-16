'use client'
import { createContext, useContext, useReducer } from 'react'
import { itemType } from './CartContex'

type CheckoutAction = { type: 'SET'; items: itemType[] } | { type: 'GET' }

const intialState: itemType[] = []

interface CheckoutContextType {
  checkout: itemType[]
  checkoutDispatch: React.Dispatch<CheckoutAction>
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
  const [state, dispatch] = useReducer(CheckoutReducer, intialState)
  const checkout = state
  const checkoutDispatch = dispatch

  return (
    <CheckoutContext.Provider value={{ checkout, checkoutDispatch }}>
      {children}
    </CheckoutContext.Provider>
  )
}

function CheckoutReducer(
  state: itemType[],
  action: CheckoutAction,
): any | itemType[] {
  if (typeof window !== 'undefined') {
    switch (action.type) {
      case 'SET':
        const checkoutSET = action.items as itemType[]
        window.localStorage.removeItem('checkout')
        window.localStorage.setItem('checkout', JSON.stringify(checkoutSET))
        return [checkoutSET]
      case 'GET':
        const checkoutGET = window.localStorage.getItem('checkout')
        return JSON.parse(checkoutGET ? checkoutGET : 'error')
    }
  }
  return state
}
