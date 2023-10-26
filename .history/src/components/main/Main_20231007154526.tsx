'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { productsType } from '../../utils/type'

const ImageComp = dynamic(() => import('../image/ImageComp'))

export default function Main(props: { newProduct: productsType[] }) {
  const { newProduct } = props
  return (
    <section className='relative grid grid-cols-2 sm:grid-cols-12 mt-4 sm:gap-x-4 md:py-12 border-b-2 pb-4 overflow-hidden'>
      <motion.div
        className='col-span-2 sm:col-span-6 relative'
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}>
        <div className='h-[60vh] md:h-[70vh] md:w-full w-full relative'>
          <div className='w-3/4 h-full mx-auto overflow-hidden relative'>
            <ImageComp
              src={newProduct[0].image}
              alt='hero-1'
              priority={true}
              sizes='(min-width: 1460px) 400px, (min-width: 780px) calc(30.91vw - 45px), calc(33.48vw - 11px)'
              className='object-cover'
              quality={100}
            />
          </div>
        </div>
      </motion.div>
      <div className='absolute w-full col-span-2 sm:col-span-6  sm:relative mt-4 sm:mt-0'>
        <div className='uppercase relative'>
          <motion.div
            initial={{ x: '-100%' }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className='text-base sm:text-lg w-full my-2 sm:ml-0 sm:my-0'>
            <span className='bg-primer sm:bg-none'>2023 NEW COLLECTION</span>
          </motion.div>
          <div className='w-full z-10 sm:relative absolute mt-8 sm:mt-2 flex flex-col justify-center items-center'>
            <div className='w-[80%] sm:w-full'>
              <span className='text-3xl md:text-5xl lg:text-6xl sm:text-4xl font-bold bg-primer'>
                capsule
              </span>
              <br />
              <div className='flex-col sm:flex w-[90%]'>
                <motion.span
                  initial={{ opacity: 0, x: '100%' }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-3xl md:text-5xl lg:text-6xl sm:text-4xl font-bold block text-end md:my-4'>
                  <span className='bg-primer'>collection</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0.5, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className='normal-case sm:w-[12rem] text-xs sm:text-base sm:me-4 block md:my-4'>
                  <span className='bg-primer '>
                    A new collection of clothes was created for hiking. in our
                    clothes you will feel as comfortable as in your everyday
                    life.
                  </span>
                </motion.span>
              </div>
              <br />
              <motion.span
                initial={{ opacity: 0.5, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className='text-3xl md:text-5xl lg:text-6xl sm:text-4xl font-bold block'>
                <span className='bg-primer'>in the style</span>
              </motion.span>
              <br />
              <motion.div
                initial={{ opacity: 0.4, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className='text-3xl md:text-5xl lg:text-6xl sm:text-4xl font-bold text-end w-full'>
                <span className='bg-primer'>of {'<<hiking>>'}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
