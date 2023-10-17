'use client'

import Cart from './Cart'
import { itemType } from '../../context/CartContex'
import { useCartContext } from '../../context/CartContex'

export default function ListCarts() {
  const { state, dispatch } = useCartContext()
  const carts = state.map((cart, index) => (
    <Cart
      key={index + cart.id}
      items={cart}
      dispatch={dispatch}
      index={index}
    />
  ))

  return carts
}
