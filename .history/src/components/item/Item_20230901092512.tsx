'use server'

import fs from 'node:fs/promises'
import glob from 'glob'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import ImageComp from '../image/ImageComp'
import { getPlaiceholder } from 'plaiceholder'

/**
 * glob :  mencari file atau folder yang cocok dengan pola wildcard tertentu
 * @date 9/1/2023 - 8:41:20 AM
 *
 * @async
 * @param {string} pattern
 * @returns {unknown}
 */
const getImages = async (pattern: string) =>
  Promise.all(
    glob.sync(pattern).map(async (file: any) => {
      const src = file.replace('./public', '')
      const buffer = await fs.readFile(file)

      const plaiceholder = await getPlaiceholder(buffer)
      return { ...plaiceholder, img: { src } }
    }),
  )

interface shop {
  keyItem?: number
  price?: number
  name?: string
  discount?: number
  image?: string
  n?: string
  grid?: number
  height?: string | null
  text?: string
  base?: boolean
  priority?: boolean
  hero?: string
  kindOfItem?: string
  classNameItem?: string
}

// export default function Item({
export default async function Item({
  // export default async function Item({
  n,
  grid,
  keyItem,
  price,
  name,
  discount,
  image,
  height = 'h-[15rem]',
  text = 'name of product',
  base,
  priority,
  hero,
  kindOfItem,
  classNameItem,
}: shop) {
  const className = classNameItem ? classNameItem : 'h-[55vh] sm:h-[40vh]'
  // const imagePlaiceholder = await getImages(
  //   './public/assets/images/rectangle1.jpg',
  // )

  // console.log('imagePlaiceholder', imagePlaiceholder)

  return (
    <Fragment>
      <div className={`flex flex-col gap-y-2`}>
        <Link
          href={`/shop/${keyItem}`}
          key={keyItem}
          className={`${className} relative`}>
          <Image
            src={image ? image : ''}
            alt='default'
            className='object-contain'
            //
            fill={true}
          />
        </Link>
        {base ? (
          <div className='flex justify-between'>
            <p className='truncate w-[60%]'>{text}</p>
            <p>${price}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </Fragment>
  )
}
