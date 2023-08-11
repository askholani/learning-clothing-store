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
  const cartValues = JSON.parse(cookieStore.get('cart')?.value)
  switch (action.type) {
    case 'ADD':
      const existCartValues = length !== 0 ? true : false
      cartValues.find
      return
  }
}
