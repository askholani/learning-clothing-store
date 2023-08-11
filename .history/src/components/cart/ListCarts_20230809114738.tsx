'use client'
import { useCallback, useState } from 'react'

import Cart from './Cart'
import { itemType } from '@components/store/CartContex'

export default function ListCarts(props: { state: itemType[]; dispatch: any }) {
  const [choiceItems, setChoiceItems] = useState<object[]>([])

  const { state, dispatch } = props
  // console.log('state listCart', state)

  const handleChoiceItems = useCallback((item: object) => {
    // if (choiceItems.length === 0) {

    // }
    const newItems = [...choiceItems]
    console.log('item listCart', item)
    console.log('newItems listCart', newItems)
    newItems.push(item)
    console.log('newItems listCart after', newItems)
    console.log('')
    setChoiceItems((prev) => {
      // console.log('prev', prev)
      const coba = prev.push(item)
      console.log('coba', coba)
      return newItems
    })

    // console.log('choiceItems', choiceItems)
    // setChoiceItems((prev) => prev.concat(item))
    // setChoiceItems((prev) => [...prev, item])
    // console.log('choiceItems after', choiceItems)
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
