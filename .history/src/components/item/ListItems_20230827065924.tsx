'use client'

import Item from './Item'
import { productsType } from '../../utils/type'

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
  items?: productsType[] | object[]
  n?: string
  grid?: number
  height?: string
  gap?: string
  image?: string
  id?: number
  base?: boolean
  kindOfItem?: string
}) {
  const { items, base, kindOfItem } = props
  console.log('kindOfItem', kindOfItem)
  return (
    <ul
      className={`grid grid-cols-2 sm:grid-cols-12 gap-x-${props.gap} gap-y-8 w-full`}>
      {items ? (
        items.map((item: shop, index) => {
          return (
            <li
              className={`flex flex-col col-span-1 sm:col-span-${props.n}`}
              key={item.id}>
              <Item
                base={base}
                price={item.price}
                text={item.name}
                keyItem={item.id}
                height={props.height}
                key={item.key}
                image={item.image}
                kindOfItem={kindOfItem ? kindOfItem : ''}
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
