'use client'
// 'use server'

import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

/**
 * glob :  mencari file atau folder yang cocok dengan pola wildcard tertentu
 * @date 9/1/2023 - 8:41:20 AM
 *
 * @async
 * @param {string} pattern
 * @returns {unknown}
 */

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
  blurDataUrl?: any
}

export default function Item({
  // export default async function Item({
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
  blurDataUrl,
}: shop) {
  const className = classNameItem ? classNameItem : 'h-[55vh] sm:h-[40vh]'

  return (
    <Fragment>
      <div className={`flex flex-col gap-y-2`}>
        <Link
          href={`/shop/${keyItem}`}
          key={keyItem}
          className={`${className} relative`}>
          <Image
            src={image ? image : ''}
            alt={text}
            className='object-cover'
            placeholder='blur'
            //
            // fill={true}
            // blurDataURL={blurDataUrl}
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
