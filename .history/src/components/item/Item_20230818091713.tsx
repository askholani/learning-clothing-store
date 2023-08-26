import Link from 'next/link'
import { Fragment, lazy } from 'react'

const ImageComp = lazy(() => import('../image/ImageComp'))

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
}: shop) {
  return (
    <Fragment>
      <Link href={`/shop/${keyItem}`} key={keyItem}>
        <div className={`w-full ${height}`}>
          <img src={image} alt='' className='h-full object-contain' />
          {/* <ImageComp src={image ? image : ''} className='h-full object-contain'/> */}
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
