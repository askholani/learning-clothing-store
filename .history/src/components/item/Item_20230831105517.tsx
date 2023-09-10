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
      <div className={`h-[55vh] sm:h-[40vh] relative`}>
      <Link href={`/shop/${keyItem}`} key={keyItem}>
        
          <Image
            src={image ? image : ''}
            alt='default'
            className='h-full object-contain'
            //
            fill={true}
          />
        </div>
        {base ? (
          <div className='flex justify-between'>
            <p className='truncate w-[60%]'>{text}</p>
            <p>${price}</p>
            </Link>
          
        ) : (
          ''
        )}
      </div>
    </Fragment>
  )
}
