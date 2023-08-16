'use client'

import { createContext, useContext, useReducer } from 'react'
import { itemType } from './CartContex'

type CheckoutAction = { type: 'GET'; cartItems: itemType[] }
