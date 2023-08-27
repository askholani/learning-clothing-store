'use client'

import { motion } from 'framer-motion'

import { productsType } from '../../utils/type'

import Rounded from '../rounded/Rounded'

import ImageComp from '../image/ImageComp'

export default function Main(props: { newProduct: productsType[] }) {
  const { newProduct } = props
  return (
    <section className='grid grid-cols-2 sm:grid-cols-12 mt-4 sm:gap-x-4 md:py-12 border-b-2 overflow-hidden'>
      <motion.div className='col-span-2 sm:col-span-4 relative h-[70vh]'>
        <ImageComp
          src={newProduct[0].image}
          alt='hero-1'
          priority={true}
          sizes='(min-width: 1460px) 400px, (min-width: 780px) calc(30.91vw - 45px), calc(33.48vw - 11px)'
          className='object-contain'
          quality={100}
        />
      </motion.div>
      <div className='col-span-8 w-full relative'>
        <div className='uppercase'>
          <span className='text-xs'>2023 NEW COLLECTION</span>
          <div className='w-full z-10 relative'>
            <span className='text-6xl font-bold'>capsule</span>
            <br />
            <span className='flex w-[90%]'>
              <span className='normal-case w-[12rem] text-xs me-4'>
                A new collection of clothes was created for hiking. in our
                clothes you will feel as comfortable as in your everyday life.
              </span>
              <span className='text-6xl font-bold'>collection</span>
            </span>

            <br />
            <span className='text-6xl font-bold'>in the style</span>
            <br />
            <p className='text-6xl font-bold text-end w-full'>
              of {'<<hiking>>'}
            </p>
          </div>
          <Rounded
            bottom='-botoom-30'
            left='-left-10'
            icon={true}
            content='discovery'
            link={'/collections?date=new'}
          />
          <div className='h-[50vh] w-[18rem] absolute bottom-0 right-0'>
            <ImageComp
              src={newProduct[1].image}
              alt='hero-2'
              priority={true}
              sizes='(min-width: 1460px) 400px, (min-width: 780px) calc(30.91vw - 45px), calc(33.48vw - 11px)'
              className='object-contain'
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
