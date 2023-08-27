'use client'

import { motion } from 'framer-motion'

import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  console.log('footer')
  return (
    <footer className='uppercase mt-4 sm:mt-16 relative overflow-hidden'>
      <section className='flex flex-col'>
        <motion.h1
          initial={{ x: '-100%', opacity: 0.7 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}>
          newsletter
        </motion.h1>
        <div className='flex flex-col uppercase'>
          <div className='sm:w-[60%]'>
            <div className='text-2xl sm:text-5xl font-bold'>
              <h2>subscribe to our</h2>
              <h2>newsletter to receive</h2>
              <h2>the best offers</h2>
            </div>
            <div className='flex border-b sm:w-[40%] w-full mt-4 sm:mt-16 items-center pb-4 justify-between'>
              <h4 className='text-xs'>Email</h4>
              <ArrowLongRightIcon className='h-[2rem]' />
            </div>
          </div>
          <div className='sm:w-[40%] w-full flex flex-col gap-x-4 font-bold justify-center mt-4'>
            <div className='flex flex-col'>
              <div className='text-xs sm:text-base flex gap-x-2'>
                <h3>site navigation</h3>
              </div>
              <div className='text-xs font-normal mt-2 sm:mt-16 flex gap-x-4 gap-y-2'>
                <h4>about</h4>
                <h4>contacts</h4>
                <h4>delivery</h4>
                <h4>shop</h4>
                <h4>payment</h4>
              </div>
            </div>
            <div className='flex flex-col gap-y-4'>
              <div className='text-xs sm:text-base'>
                <h3>social network</h3>
              </div>
              <div className='text-xs font-normal sm:mt-16 flex gap-y-2'>
                <h4>instagram</h4>
                <h4>twitter</h4>
                <h4>facebook</h4>
                <h4>mail</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex border-t justify-between py-4 text-xs mb-16'>
        <h4>ame leon dore 2023 by leibal. all rights reserved</h4>
        <div className='flex gap-x-4'>
          <h4>privacy policies</h4>
          <h4>cookie policy</h4>
        </div>
      </section>
    </footer>
  )
}
