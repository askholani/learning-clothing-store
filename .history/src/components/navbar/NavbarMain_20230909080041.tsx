'use client'
import { motion } from 'framer-motion'
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
  const [valueNav, setValueNave] = useState<string>('')

  const handleShowUnderline = (e: any) => {
    const value = e.target.innerHTML
    // console.log('valueNav', valueNav)
    setValueNave(e.target.innerHTML)
    valueNav === value ? setUnderline(!underline) : setUnderline(true)
  }

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
        <motion.div
          onClickCapture={handleShowUnderline}
          animate={underline && valueNav === 'shop' ? 'open' : 'closed'}
          className='flex flex-col gap-y-[2px] cursor-pointer'
          onClick={onHandleShowList}>
          <span>shop</span>
          <motion.span
            className='bg-slate-50 h-1 w-[0%]'
            variants={{
              open: {
                className: '',
                width: '100%',
              },
              closed: {
                className: '',
              },
            }}
            transition={{ duration: 0.2 }}></motion.span>
        </motion.div>
        <motion.div
          onClickCapture={handleShowUnderline}
          animate={
            underline && valueNav === 'new collection' ? 'open' : 'closed'
          }
          className='flex flex-col gap-y-[2px] cursor-pointer'
          onClick={(e) => handleShowUnderline}>
          <span>new collection</span>
          <motion.span
            className='bg-slate-50 h-1 w-[0%]'
            variants={{
              open: {
                className: '',
                width: '100%',
              },
              closed: {
                className: '',
              },
            }}
            transition={{ duration: 0.2 }}></motion.span>
        </motion.div>
        <motion.div
          onClickCapture={handleShowUnderline}
          animate={underline && valueNav === 'lookbook' ? 'open' : 'closed'}
          className='flex flex-col gap-y-[2px] cursor-pointer'
          onClick={onHandleShowList}>
          <span>lookbook</span>
          <motion.span
            className='bg-slate-50 h-1 w-[0%]'
            variants={{
              open: {
                className: '',
                width: '100%',
              },
              closed: {
                className: '',
              },
            }}
            transition={{ duration: 0.2 }}></motion.span>
        </motion.div>
      </div>
      <div className='shrink w-[30%] md:flex flex-col items-end hidden text-xs sm:text-base'>
        <Link href='/cart' className='lg:w-[40%] w-[60%]'>
          <div className='flex justify-between'>
            <span>cart</span>
            <span>[ {cartAmount} ]</span>
          </div>
          <span></span>
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
