'use client'

import { createContext, useContext, useReducer } from 'react'

/**
 * setiap type dan payload (action.propertyName) harus di definsiikan dahulu
 * @date 8/6/2023 - 5:23:06 PM
 *
 * @typedef {CartAction}
 */
type CartAction =
  | { type: 'GET' }
  | { type: 'ADD'; item?: itemType }
  | { type: 'COOKIES' }
  | { type: 'REMOVE'; indexCart: number }
  | { type: 'SELECT'; indexCart: number; selected: boolean }
  | { type: 'UPDATE'; item: itemType }

export interface itemType {
  id: number
  name?: string
  image?: string
  qty: number
  description?: string
  price?: number
  size: string
  color: string
  selected?: boolean
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

/**
 * CartProvider mengembalikan HTML maka extension file harus .tsx atau .jsx
 * @date 8/6/2023 - 5:24:19 PM
 *
 * @param {{ children: React.ReactNode }} { children }
 * @returns {*}
 */
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, intialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

/**
 * GET : mengambil cart item dari cookies jika ada
 * COOKIES : menyimpan data dari context ke cookies setiap user
 * ADD : menambahkan data ke context
 * REMOVE : menghapus data pada context bedasarkan indexnya
 * @date 8/6/2023 - 5:21:01 PM
 *
 * @param {itemType[]} state
 * @param {CartAction} action
 * @returns {itemType[]}
 */

/**
 * UPDATE
 * mengcopy state (data lama)
 * menerima data terbaru
 * mencari index di data lama yang memiliki id dan size sama dengan data baru
 * kondisi :
 * index ditemukan qty di data lama dengan index yang ditemukan berbeda dengan qty di data baru
 * update data lama (dengan index) dengan data baru
 * @date 8/10/2023 - 5:50:59 PM
 *
 * @param {itemType[]} state
 * @param {CartAction} action
 * @returns {itemType[]}
 */

/**
 * ADD
 * saat user menekan pada product di file  [shopId]/page
 * kondisi :
 * - data kosong
 * -- tambahkan data ke contex lalu simpan ke cookies
 * - data sudah ada
 * -- kondisi :
 * --- id dan size tidak sama (findIndex)
 * ---- tambahkan data ke contex
 * --- id dan size sama
 * ---- update data tersebut dengan mengubah quantitynya
 * @date 8/11/2023 - 6:53:54 AM
 *
 * @param {itemType[]} state
 * @param {CartAction} action
 * @returns {itemType[]}
 */
function cartReducer(state: itemType[], action: CartAction): itemType[] {
  switch (action.type) {
    case 'GET': // saat terjadi pertama kali
      const cartGET = window.localStorage.getItem('cart')
      const cart = cartGET ? JSON.parse(cartGET) : []
      return cart
    case 'COOKIES':
      window.localStorage.removeItem('cart')
      window.localStorage.setItem('cart', JSON.stringify(state))
      return state
    case 'ADD':
      const newItems: itemType = action.item as itemType
      const oldItems = state
      let existingCartItem: itemType
      let updatedItems: itemType[]
      let updatedItem
      let existingIndexSameIdSize = -1
      updatedItems = [...state]

      if (oldItems.length !== 0) {
        existingIndexSameIdSize = oldItems.findIndex(
          (item: { id: number; size: string }) =>
            newItems.id === item.id && newItems.size === item.size,
        )
        if (existingIndexSameIdSize !== -1) {
          existingCartItem = oldItems[existingIndexSameIdSize]
          updatedItem = {
            ...existingCartItem,
            qty: existingCartItem.qty + newItems.qty,
          }
          updatedItems[existingIndexSameIdSize] = updatedItem
          return updatedItems
        }
        updatedItems.push(newItems)
        return updatedItems
      }
      const items = action.item ? [action.item] : []
      return items
    case 'REMOVE':
      const indexCart = action.indexCart as number
      const newItemsRemove = state.filter((item, index) => index != indexCart)
      return newItemsRemove
    case 'SELECT':
      const updatedItemsChoice = [...state]
      const indexCartChoice = action.indexCart as number
      const existingIndexCartItemChoice = state.findIndex(
        (item, index) => index === indexCartChoice,
      )
      const existingCartItemChoice = state[existingIndexCartItemChoice]
      const updatedItemChoice = {
        ...existingCartItemChoice,
        selected: action.selected,
      }
      updatedItemsChoice[existingIndexCartItemChoice] = updatedItemChoice
      // console.log('updatedItemsChoice', updatedItemsChoice)
      return updatedItemsChoice
    case 'UPDATE':
      const updatedItemsUPDATE = [...state]
      const newItemUPDATE = action.item
      const indexSameIdandSize = state.findIndex(
        (item: itemType) =>
          item.id === newItemUPDATE.id && item.size === newItemUPDATE.size,
      )
      if (
        indexSameIdandSize !== -1 &&
        updatedItemsUPDATE[indexSameIdandSize].qty !== action.item.qty
      ) {
        updatedItemsUPDATE[indexSameIdandSize] = newItemUPDATE
        return updatedItemsUPDATE
      }
  }
  return state
}
