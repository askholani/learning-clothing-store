'use client'
import { useCallback, useState } from 'react'

import Cart from './Cart'
import { itemType } from '@components/store/CartContex'

export default function ListCarts(props: { state: itemType[]; dispatch: any }) {
  const [choiceItems, setChoiceItems] = useState<itemType[]>([])

  const { state, dispatch } = props
  // console.log('state listCart', state)

  const handleChoiceItems = useCallback((item: itemType) => {
    setChoiceItems((prev) => {
      const indexSameIdandSize = prev.findIndex(
        (prevItem) => prevItem.id === item.id && prevItem.size === item.size,
      )
      console.log('indexSameIdandSize', indexSameIdandSize)
      const newItems = [...prev, item]
      return newItems
    })
  }, [])

  console.log('choiceItems', choiceItems)

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
