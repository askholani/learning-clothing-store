'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { productsType } from '../../utils/type'
import ImageComp from '../image/ImageComp'
// import ListItems from '../item/ListItems'
import React from 'react'

const Rounded = dynamic(() => import('../rounded/Rounded'))

export default function Newin(props: { newInProduct: productsType[] }) {
  const { newInProduct } = props
  return (
    <section className='flex flex-col border-b py-4 relative overflow-hidden'>
      <div className='w-full uppercase'>
        <motion.h1
          initial={{ x: '-100%', opacity: 0.7 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className='text-base sm:text-lg'>
          spring/summer
        </motion.h1>
        <div className='flex justify-between my-4 md:my-12 sm:my-8'>
          <motion.h2
            initial={{ y: 10, opacity: 0.7, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className='text-3xl sm:text-4xl md:text-5xl font-extrabold'>
            new in
          </motion.h2>
          <Link
            className='flex items-end underline hover:cursor-pointer text-xs sm:text-base'
            href={`/shop?date=new`}
            prefetch={true}>
            see all
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-2 gap-y-4'>
        {newInProduct &&
          newInProduct.map((product: any, index) => {
            return (
              <div
                className='h-[30vh] sm:h-[40vh] col-span-1'
                key={product.idProduct}>
                <div className='w-full h-full mx-auto overflow-hidden relative'>
                  <ImageComp
                    src={product.image}
                    alt='about-image-2'
                    sizes='(min-width: 780px) calc(20vw - 30px), (min-width: 640px) calc(50vw - 120px), calc(50vw - 24px)'
                    className='object-cover'
                    quality={100}
                    priority={true}
                  />
                  <p className='text-end'>02</p>
                </div>
              </div>
            )
          })}
      </div>
      <div>
        <div className='flex justify-center mt-16 md:mt-24 py-4 relative items-center h-[60vh]'>
          <div className='w-[90%] md:w-3/4 h-full mx-auto overflow-hidden relative'>
            <ImageComp
              src={newInProduct && newInProduct[0].image}
              alt='hero-1'
              priority={true}
              className='object-cover'
              quality={100}
              sizes='(min-width: 780px) calc(100vw - 128px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)'
            />
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-primer opacity-70'></div>
          </div>
          <div className=' w-full absolute uppercase -top-4 '>
            <motion.h2
              className='mb-2 text-base sm:text-lg'
              initial={{ x: '-100%', opacity: 0.7 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}>
              brand philosophy
            </motion.h2>
            <motion.div
              className='md:flex flex-col items-center'
              initial={{ y: 10, opacity: 0.7, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}>
              <h3 className='text-2xl md:text-6xl sm:text-4xl font-bold'>
                we do not follow
              </h3>
              <div className='flex'>
                <p className='w-[20rem] text-xs sm:text-lg normal-case'>
                  with a strong on simple yet powerful design we are driven to
                  create timeless work by portraying an aesthetic that is
                  uniquely our own
                </p>
                <h3 className='font-bold text-2xl md:text-4xl sm:text-4xl mx-4'>
                  fashion, but
                </h3>
                <p className='text-base sm:text-lg normal-case'>
                  Aime Leon Dore is <br /> from Queens, NY.
                </p>
              </div>
              <h3 className='font-bold text-2xl md:text-6xl sm:text-4xl'>
                create it for your and
              </h3>
              <h3 className='font-bold text-2xl md:text-6xl sm:text-4xl'>
                your soul
              </h3>
            </motion.div>
            <div className='w-full h-full flex justify-center items-center mt-20'>
              <motion.div
                initial={{ y: 10, opacity: 0.7, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className='relative w-[8rem] h-[8rem] '>
                <Rounded
                  icon={true}
                  content='discovery'
                  bottom='-bottom-20'
                  right='right-56'
                  link={'/shop?review=5'}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
