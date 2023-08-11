'use client'

import { useCartContext } from '@components/store/CartContex'
import Cart from './Cart'

export default function ListCarts() {
  const { state, dispatch } = useCartContext()
  const carts = state.map((cart, index) => <Cart key={index} items={cart} />)
  return carts
}
