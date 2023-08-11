'use server'

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
  const cartList = cookieStore.get('cart')
  switch (action.type) {
    case 'ADD':
      if (cartList.length)
    case 'REMOVE':
    // return state.filter()
  }
}
