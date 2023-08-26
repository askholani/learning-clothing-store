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
}) {
  const { items, base } = props

  return (
    <ul className={`grid grid-cols-12 gap-x-${props.gap} gap-y-8 w-full`}>
      {items ? (
        items.map((item: shop, index) => {
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
