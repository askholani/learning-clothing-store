'use client'

import Cart from './Cart'
import { itemType } from '@components/store/CartContex'
export default function ListCarts(props: {
  state: itemType[]
  dispatch: any
  onShowModal: any
}) {
  const { state, dispatch, onShowModal } = props
  console.log('state listCart', state)
  const carts = state.map((cart, index) => (
    <Cart
      key={index + cart.id}
      items={cart}
      dispatch={dispatch}
      index={index}
      onShowModal={onShowModal}
    />
  ))

  return carts
}
