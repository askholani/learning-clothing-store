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
  height?: string | null
  text?: string
  base?: boolean
  priority?: boolean
  hero?: string
  kindOfItem?: string
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
  kindOfItem,
}: shop) {
  let typeOfItemRender: any = ''
  switch (kindOfItem) {
    case 'shop':
      typeOfItemRender = shopType
      return
  }

  const cobaImage = typeOfItemRender ? (
    <Image
      src={image ? image : ''}
      alt='default'
      className='h-full object-contain'
      // placeholder='blur'
      // blurDataURL={typeOfItemRender}
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
    />
  )

  return (
    <Fragment>
      <Link href={`/shop/${keyItem}`} key={keyItem}>
        <div className={`w-full ${height} relative`}>
          <Image
            src={image ? image : ''}
            alt='default'
            className='h-full object-contain'
            width={500}
            height={500}
          />
          {/* {cobaImage} */}
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
