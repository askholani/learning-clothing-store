'use client'

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
  image?: string
  text?: string
  base?: boolean
  classNameItem?: string
  blurDataUrl?: any
  size?: string
  priority?: boolean
}

export default function Item({
  keyItem,
  price,
  image,
  text = 'name of product',
  base,
  classNameItem,
  blurDataUrl,
  size,
  priority,
}: shop) {
  const className = classNameItem ? classNameItem : 'h-[55vh] sm:h-[40vh] w-32'

  return (
    <Fragment>
      <div className={`flex flex-col gap-y-2`}>
        <Link
          href={`/shop/${keyItem}`}
          key={keyItem}
          className={`${className} relative`}>
          <Image
            src={image ? image : null}
            alt={text}
            className='object-contain'
            fill={true}
            blurDataURL={blurDataUrl ? blurDataUrl : ''}
            placeholder={blurDataUrl ? 'blur' : 'empty'}
            sizes={size}
            priority={priority}
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
