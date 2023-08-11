'use client'
import { useCallback, useState } from 'react'

import Cart from './Cart'
import { itemType } from '@components/store/CartContex'

export default function ListCarts(props: { state: itemType[]; dispatch: any }) {
  const [choiceItems, setChoiceItems] = useState<object[]>([{}])

  const { state, dispatch } = props
  console.log('state listCart', state)

  const handleChoiceItems = useCallback((item: object) => {
    console.log('item listCart', item)
    const newItems = [...choiceItems]
    console.log('newItems listCart', newItems)
    newItems.push(item)
    console.log('newItems listCart after', newItems)
    setChoiceItems(newItems)
  }, [])

  const carts = state.map((cart, index) => (
    <Cart
      onChoiceItems={handleChoiceItems}
      key={index + cart.id}
      items={cart}
      dispatch={dispatch}
      index={index}
    />
  ))

  return carts
}
