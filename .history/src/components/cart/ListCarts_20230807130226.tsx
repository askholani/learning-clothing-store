'use client'

import Cart from './Cart'

export default function ListCarts(props: { state: any; dispatch: any }) {
  const { state, dispatch } = props
  const carts = state.map((cart, index) => <Cart key={index} items={cart} />)
  return carts
}
