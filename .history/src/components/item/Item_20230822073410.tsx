import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import shopType from '../../../public/item-shop.svg'

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
  typeOfItem?: string
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
  typeOfItem,
}: shop) {
  let typeOfItemRender: any = ''
  switch (typeOfItem) {
    case 'shop':
      console.log('image type')
      typeOfItemRender = shopType
      return
  }

  console.log('shopType', shopType)

  const cobaImage = typeOfItemRender ? (
    <Image
      src={image ? image : ''}
      alt='default'
      className='h-full object-contain'
      width={500}
      height={500}
    />
  ) : (
    <Image
      src={image ? image : ''}
      alt='default'
      className='h-full object-contain'
      width={500}
      height={500}
      placeholder='blur'
      blurDataURL={typeOfItemRender}
    />
  )

  return (
    <Fragment>
      <Link href={`/shop/${keyItem}`} key={keyItem}>
        <div className={`w-full ${height} relative`}>
          {/* <Image
            src={image ? image : ''}
            alt='default'
            className='h-full object-contain'
            priority={priority ? true : false}
            width={500}
            height={500}
          /> */}
          {cobaImage}
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
