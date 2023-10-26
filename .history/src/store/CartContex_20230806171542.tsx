'use client'
import { addCookies } from '@components/cookies/cart'
import { createContext, useContext, useReducer } from 'react'

type CartAction =
  | { type: 'GET'; defaultItem?: string }
  | { type: 'ADD'; item?: itemType }
  | { type: 'COOKIES'; item?: object }

export interface itemType {
  id: number
  name?: string
  image?: string
  qty: number
  description?: string
  price?: number
  size: string
}

const intialState: itemType[] = []

interface CartContextType {
  state: itemType[]
  dispatch: React.Dispatch<CartAction>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

/**
 * mencegah nilai undefined pada context
 * mengambilkan nilai default dari context
 * langsung digunakan pada komponen yang butuh
 * contoh : const {state, dispatch} = useCrateContext()
 * @date 8/4/2023 - 12:34:05 AM
 *
 * @returns {*}
 */
export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CounterProvider')
  }
  return context
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, intialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

function cartReducer(state: itemType[], action: CartAction): itemType[] {
  switch (action.type) {
    case 'GET':
      const cart = action.defaultItem ? JSON.parse(action.defaultItem) : []
      return cart
    case 'COOKIES':
      addCookies(state)
      return state
    case 'ADD':
      const newItems: itemType = action.item as itemType
      const oldItems = state
      let existingCartItem: itemType
      let updatedItems: itemType[]
      let updatedItem
      updatedItems = [...state]
      if (oldItems.length !== 0) {
        const cartItemsSameId = oldItems.filter(
          (item: { id: number }) => item.id === newItems.id,
        )
        if (cartItemsSameId.length !== 0) {
          const existingIndexSameSize = cartItemsSameId.findIndex(
            (item: { size: string }) => item.size === newItems.size,
          )
          if (existingIndexSameSize !== -1) {
            console.log('existingIndexSameSize', existingIndexSameSize)
            existingCartItem = cartItemsSameId[existingIndexSameSize]
            updatedItem = {
              ...existingCartItem,
              qty: existingCartItem.qty + newItems.qty,
            }
            updatedItems[existingIndexSameSize] = updatedItem
            return updatedItems
          } else {
            updatedItems.push(newItems)
            return updatedItems
          }
        }
        updatedItems.push(newItems)
        return updatedItems
      }
      const items = action.item ? [action.item] : []
      return items

    // const existingIndex = oldItems.findIndex(
    //   (item: { id: number }) => item.id === newItems.id,
    // )

    // if (existingIndex !== -1) {
    //   existingCartItem = state[existingIndex]
    //   updatedItem = {
    //     ...existingCartItem,
    //     qty: existingCartItem.qty + newItems.qty,
    //   }
    //   updatedItems = [...state]
    //   updatedItems[existingIndex] = updatedItem
    //   console.log('updatedItems', updatedItems)
    //   // console.log('oldItems', oldItems)
    //   // console.log('updateItem', updatedItem)
    //   // console.log('updatedItems', updatedItems)
    //   // addCookies(updatedItems)
    //   return updatedItems
    // } else {
    //   updatedItems = [...state]
    //   updatedItems.push(newItems)
    //   console.log('updateItems', updatedItems)
    //   return updatedItems
    // }
  }
  return state
}
