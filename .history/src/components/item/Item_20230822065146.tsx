import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

interface shop {
  keyItem?: number
  price?: number
  name?: string
  discount?: number
  image?: string
  n?: string
  grid?: number
  height?: string
  text?: string
  base?: boolean
  priority?: boolean
  hero?: string
}

export default function Item({
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
}: shop) {
  const itemHero = hero ? hero : ''
  return (
    <Fragment>
      <Link href={`/shop/${keyItem}`} key={keyItem}>
        <div className={`w-full ${height} relative`}>
          <Image
            src={image ? image : ''}
            alt='default'
            className='h-full object-contain'
            priority={priority ? true : false}
            // width={500}
            // height={500}
            // placeholder='blur'
            // blurDataURL={itemHero}
          />
        </div>
        {base ? (
          <div className='flex justify-between'>
            <p className='truncate w-[60%]'>{text}</p>
            <p>${price}</p>
          </div>
        ) : (
          ''
        )}
      </Link>
    </Fragment>
  )
}
