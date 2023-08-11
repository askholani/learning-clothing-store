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
      <div className={`w-full ${height}`}>
        <img src={image} alt='' className='h-full object-contain' />
      </div>
      {base ? (
        <div className='grid grid-cols-3'>
          <p className='col-span-2 truncate w-full'>{text}</p>
          <p className='col-span-1'>{price}</p>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  )
}
