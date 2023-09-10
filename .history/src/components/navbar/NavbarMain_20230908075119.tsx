'use client'

import { useState } from 'react'

import {
  Bars3BottomLeftIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NavbarMain(props: {
  onHandleShowList: any
  onHandleShowSide: any
  cartAmount: number
}) {
  const [underline, setUnderline] = useState<boolean>(false)

  const handleShowUnderline = () => setUnderline(!underline)

  const { onHandleShowList, onHandleShowSide, cartAmount } = props

  return (
    <nav className='navbar flex md:px-0 bg-primer'>
      <div className='md:navbar-start w-full'>
        <div className='flex justify-between w-full'>
          <Bars3BottomLeftIcon
            className='md:hidden block w-8 h-8'
            onClick={onHandleShowSide}
          />
          <Link href={`/`} className='text-xs sm:text-base'>
            kirman
          </Link>
        </div>
      </div>
      <div className='shrink md:flex flex-col w-[30%] items-start hidden text-xs sm:text-base'>
        <div
          className='flex flex-col gap-y-[2px] cursor-pointer'
          onClick={onHandleShowList}>
          <span>shop</span>
          <span className='bg-slate-50 w-full h-1'></span>
        </div>
        <span onClick={onHandleShowList}>new collection</span>
        <span onClick={onHandleShowList}>lookbook</span>
      </div>
      <div className='shrink w-[30%] md:flex flex-col items-end hidden text-xs sm:text-base'>
        <Link href='/cart' className='flex justify-between lg:w-[40%] w-[60%]'>
          <span>cart</span>
          <span>[ {cartAmount} ]</span>
        </Link>
        <Link
          href='/wishlist'
          className='flex justify-between lg:w-[40%] w-[60%]'>
          <span>wishlist</span>
          <span>[ 0 ]</span>
        </Link>
        <Link href='/login' className='flex justify-between lg:w-[40%] w-[60%]'>
          <span>login</span>
          <span>
            <ArrowRightOnRectangleIcon className='w-5 h-5' />
          </span>
        </Link>
      </div>
    </nav>
  )
}
