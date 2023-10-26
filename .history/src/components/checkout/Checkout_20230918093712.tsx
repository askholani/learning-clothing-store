import Image from 'next/image'
import { itemType } from '../../context/CartContex'
import { Fragment } from 'react'

export default function Checkout(props: { item: itemType }) {
  const { item } = props
  return (
    <Fragment>
      <li className='border-b py-4'>
        <div className='flex justify-evenly gap-x-4'>
          <div className=' bg-sekunder relative'>
            <Image
              src={item.image ? item.image : ''}
              alt='default'
              width={500}
              height={500}
              loading='lazy'
              className='object-contain w-full h-auto'
            />
          </div>
          <div className='flex flex-col justify-between sm:w-[60%] w-[50%]'>
            <h2 className='text-sm font-bold sm:text-lg lg:text-xl'>
              {item.name}
            </h2>
            <div className='flex flex-col gap-y-4'>
              <div className='flex flex-col text-xs gap-y-2'>
                <div className='grid grid-cols-2  text-xs sm:text-base lg:text-lg'>
                  <h3 className='font-bold'>total</h3>
                  <h3>
                    {item.price && item.qty ? item.price * item.qty : ''} $
                  </h3>
                </div>
                <div className='grid grid-cols-2  text-xs sm:text-base lg:text-lg'>
                  <h3 className='font-bold'>size</h3>
                  <h3>
                    {item.size} - {`small`}
                  </h3>
                </div>
                <div className='grid grid-cols-2 text-xs sm:text-base lg:text-lg'>
                  <h3 className='font-bold'>color</h3>
                  <h3>black white</h3>
                </div>
              </div>
              <h2>remove</h2>
            </div>
          </div>
          {/* <div className='flex flex-col justify-between text-sm'>
            <h2>remove</h2>
            <span>
              <h2>{item.price && item.qty ? item.price * item.qty : ''} $</h2>
            </span>
          </div> */}
        </div>
      </li>
    </Fragment>
  )
}
