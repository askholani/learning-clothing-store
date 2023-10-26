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
  height?: string
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
  const { items, base, kindOfItem, height } = props
  // console.log('kindOfItem', kindOfItem)

  console.log('height', height)
  return (
    <ul
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-12 gap-x-${props.gap} gap-y-4 md:gap-y-8 w-full`}>
      {items ? (
        items.map((item: shop, index) => {
          return (
            <li
              // className={`flex flex-col col-span-1 md:col-span-${props.n}`}
              className={`flex flex-col col-span-1 md:col-span-2`}
              key={item.id}>
              <Item
                base={base}
                price={item.price}
                text={item.name}
                keyItem={item.id}
                height={height ? 'h-[20rem]' : null}
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
