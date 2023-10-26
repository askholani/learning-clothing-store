import Image from 'next/image'
import { itemType } from '../../context/CartContex'
import { Fragment } from 'react'

export default function Checkout(props: { item: itemType }) {
  const { item } = props
  return (
    <Fragment>
      <li className='border-b pb-8 mb-8'>
        <div className='flex justify-between gap-x-4'>
          <div className='w-[10rem] h-[13rem] bg-sekunder'>
            <Image
              src={item.image ? item.image : ''}
              alt='default'
              width={500}
              height={500}
              loading='lazy'
            />
          </div>
          <div className='flex flex-col justify-between w-[40%]'>
            <h2 className='text-xl font-bold'>{item.name}</h2>
            <div className='flex flex-col text-xs font-light'>
              <div className='flex gap-x-2'>
                <h3>size</h3>
                <h3>{item.size}</h3>
              </div>
              <div className='flex gap-x-2'>
                <h3>color</h3>
                <h3>black white</h3>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between text-sm'>
            <h2>remove</h2>
            <div>
              <span className='flex'>
                <h2>total : </h2>
                <h2>{item.qty}</h2>
              </span>
              <h2>{item.price}$</h2>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  )
}
