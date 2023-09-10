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
  classNameItem?: string
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
  classNameItem,
}: shop) {
  const className = classNameItem ? classNameItem : 'h-[55vh] sm:h-[40vh]'
  // let typeOfItemRender: any = ''
  // switch (kindOfItem) {
  //   case 'shop':
  //     typeOfItemRender = shopType
  //     return
  // }

  // console.log('height', height)

  // console.log('image', image)

  return (
    <Fragment>
      {/* <div className={`${className} relative flex flex-col`}> */}
      <div className={`relative flex flex-col`}>
        {/* <Link href={`/shop/${keyItem}`} key={keyItem}> */}
        <Link href={`/shop/${keyItem}`} key={keyItem} className={className}>
          <Image
            src={image ? image : ''}
            alt='default'
            className='h-full object-contain'
            //
            fill={true}
          />
          {base ? (
            <div className='flex justify-between'>
              <p className='truncate w-[60%]'>{text}</p>
              <p>${price}</p>
            </div>
          ) : (
            ''
          )}
        </Link>
      </div>
    </Fragment>
  )
}
