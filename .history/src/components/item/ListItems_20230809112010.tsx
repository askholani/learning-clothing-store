'use client'

import { useCallback, useState } from 'react'

import Item from './Item'
import { productsType } from '@components/utils/type'

interface shop {
  key?: number
  price?: number
  name?: string
  discount?: number
  image?: string
  n?: string
  grid?: number
  id?: number
  base?: boolean
}

export default function ListItems(props: {
  items?: productsType[] | []
  n?: string
  grid?: number
  height?: string
  gap?: string
  image?: string
  id?: number
  base?: boolean
}) {
  const [choiceItems, setChoiceItems] = useState<object[]>([{}])
  const { items, base } = props

  const handleChoiceItems = useCallback((e: object) => {
    const newItems = [...choiceItems]
    newItems.push(e)
    setChoiceItems(newItems)
  }, [])

  return (
    <ul className={`grid grid-cols-12 gap-x-${props.gap} gap-y-8 w-full`}>
      {items ? (
        items.map((item: shop, index) => {
          console.log('item', item)
          return (
            <li className={`flex flex-col col-span-${props.n}`} key={item.id}>
              <Item
                base={base}
                price={item.price}
                text={item.name}
                keyItem={item.id}
                height={props.height}
                key={item.key}
                image={item.image}
              />
            </li>
          )
        })
      ) : (
        <span></span>
      )}
    </ul>
  )
}
