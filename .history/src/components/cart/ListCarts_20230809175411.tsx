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
      if (indexSameIdandSize !== -1) {
        console.log(
          'prev[indexSameIdandSize].qty',
          prev[indexSameIdandSize].qty,
        )
        console.log('item.qty', item.qty)
        if (prev[indexSameIdandSize].qty === item.qty) {
          const newItems = [...prev]
          newItems[indexSameIdandSize] = item
          return newItems
        }
        const newItems = prev.filter(
          (item, index) => index !== indexSameIdandSize,
        )
        return newItems
      }
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
