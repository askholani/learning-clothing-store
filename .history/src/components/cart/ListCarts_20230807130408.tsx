'use client'

import Cart from './Cart'
import { itemType } from '@components/store/CartContex'
export default function ListCarts(props: { state: itemType[]; dispatch: any }) {
  const { state, dispatch } = props

  const carts = state.map((cart, index) => <Cart key={index} items={cart} />)
  return carts
}
