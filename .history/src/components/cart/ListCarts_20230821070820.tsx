'use client'

import Cart from './Cart'
import { itemType } from '../../context/CartContex'

export default function ListCarts(props: { state: itemType[]; dispatch: any }) {
  const { state, dispatch } = props
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
