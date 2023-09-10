'use server'

import fs from 'node:fs/promises'
import glob from 'glob'
import { getPlaiceholder } from 'plaiceholder'

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
  grid?: string
  gap?: string
  image?: string
  id?: number
  base?: boolean
  kindOfItem?: string
  className?: string
  classNameItem?: string
}) {
  const { items, base, kindOfItem, grid, classNameItem } = props
  // console.log('kindOfItem', kindOfItem)

  return (
    <ul className={`grid ${grid} gap-x-${props.gap} gap-y-4 md:gap-y-8 w-full`}>
      {items ? (
        items.map((item: shop, index) => {
          return (
            <li
              className={`flex flex-col col-span-1 md:col-span-2`}
              key={item.id}>
              <Item
                base={base}
                price={item.price}
                text={item.name}
                keyItem={item.id}
                key={item.key}
                image={item.image}
                classNameItem={classNameItem}
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
