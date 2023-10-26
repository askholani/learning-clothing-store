'use client'

import Cart from './Cart'
import { useCartContext } from '../../context/CartContex'

export default function ListCarts() {
  const { state, dispatch } = useCartContext()
  const carts = state.map((cart, index) => (
    <Cart key={cart.id} item={cart} dispatch={dispatch} index={index} />
  ))

  return carts
}
