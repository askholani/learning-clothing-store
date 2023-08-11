import { cookies } from 'next/headers'
import { useReducer } from 'react'

interface Action {
  type: 'ADD' | 'REMOVE' | 'UPDATE'
  product?: object[]
  id?: number
  count?: number
}

function cartReducer(state: object[], action: Action) {
  const cookieStore = cookies()
  const cart = cookieStore.get('cart')
  switch (action.type) {
    case 'ADD':
      return [...state, action.product]
    case 'REMOVE':
    // return state.filter()
  }
}
