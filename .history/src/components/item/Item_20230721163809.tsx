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
      <div className={`bg-slate-500 w-full ${height}`}>
        <img src={image} alt='' className='w-full h-auto object-fill' />
      </div>
      {base ? (
        <div className='flex justify-between'>
          <p>{text}</p>
          <p>{price}</p>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  )
}
