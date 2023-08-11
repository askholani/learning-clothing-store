'use client'

import Link from 'next/link'
import Item from './Item'
import { productsType } from '@components/utils/type'
import { usePathname } from 'next/navigation'
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
  const { items, base } = props

  return (
    <ul className={`grid grid-cols-12 gap-x-${props.gap} gap-y-8 w-full`}>
      {items ? (
        items.map((item: shop, index) => {
          console.log('item', item)
          return (
            <li className={`flex flex-col col-span-${props.n}`} key={index}>
              <Link href={`/shop/${index}`} key={index}>
                <Item
                  base={base}
                  price={item.price}
                  text={item.name}
                  keyItem={index}
                  height={props.height}
                  key={item.key}
                  image={item.image}
                />
              </Link>
            </li>
          )
        })
      ) : (
        <span></span>
      )}
    </ul>
  )
}
