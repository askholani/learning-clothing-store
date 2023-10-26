'use server'

import fs from 'node:fs/promises'
import glob from 'glob'
import { getPlaiceholder } from 'plaiceholder'

const getImages = async (pattern: string) =>
  Promise.all(
    glob.sync(pattern).map(async (file: any) => {
      const src = file.replace('./public', '')
      const buffer = await fs.readFile(file)

      const plaiceholder = await getPlaiceholder(buffer)
      return { ...plaiceholder, img: { src } }
    }),
  )

import Item from './Item'
import { productsType } from '../../utils/type'

interface shop {
  key?: number
  price?: number
  name?: string
  discount?: number
  image?: string
  grid?: number
  id?: number
  base?: boolean
}

export default async function ListItems(props: {
  items?: productsType[] | any[]
  n?: string
  grid?: string
  gap?: string
  image?: string
  id?: number
  base?: boolean
  className?: string
  classNameItem?: string
}) {
  const { items, base, grid, classNameItem } = props

  const imagePlaiceholder = await getImages('./public/images/rectangle1.jpg')

  // console.log('imagePlaicholder', imagePlaiceholder)

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
                blurDataUrl={imagePlaiceholder[0].base64}
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
