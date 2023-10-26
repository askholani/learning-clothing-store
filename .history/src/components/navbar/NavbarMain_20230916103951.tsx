'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

import {
  Bars3BottomLeftIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const productKinds = ['shop', 'new collection', 'lookbook']

export default function NavbarMain(props: {
  onHandleShowList: any
  onHandleShowSide: any
  cartAmount: number
}) {
  const [underline, setUnderline] = useState<boolean>(false)
  const [valueNav, setValueNave] = useState<string>('')

  const { onHandleShowList, onHandleShowSide, cartAmount } = props

  const handleShowUnderline = (e: any) => {
    const value = e.target.innerHTML
    setValueNave(e.target.innerHTML)
    valueNav === value ? setUnderline(!underline) : setUnderline(true)
  }

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
        {productKinds.map((product, index) => (
          <motion.div
            key={index}
            onClickCapture={handleShowUnderline}
            animate={underline && valueNav === product ? 'open' : 'closed'}
            className='flex flex-col gap-y-[2px] cursor-pointer'
            onClick={onHandleShowList}>
            <span>{product}</span>
            <motion.span
              className='bg-slate-50 h-1 w-[0%]'
              variants={{
                open: {
                  width: '100%',
                },
                closed: {
                  width: '0%',
                },
              }}
              transition={{ duration: 0.2 }}></motion.span>
          </motion.div>
        ))}
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
