'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { generalType, productsType } from '../../utils/type'

const AccordionHome = dynamic(() => import('../accordion/AccordionHome'))
const Item = dynamic(() => import('../item/Item'))

export default async function About(props: {
  aboutProduct: productsType[]
  dataCollections: generalType[]
}) {
  // console.log('about')
  const { aboutProduct, dataCollections } = props
  return (
    <section className='flex flex-col gap-x-4 sm:py-8 py-4 overflow-hidden'>
      <div className='grid grid-cols-1  md:grid-cols-5'>
        <div className='col-span-1 md:col-span-3 uppercase'>
          <motion.h1
            initial={{ x: '-100%', opacity: 0.7 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className='text-base md:text-lg mb-4 md:mb-16'>
            about the brand
          </motion.h1>
          <motion.h1
            initial={{ scale: 0.7, y: 0.1 }}
            whileInView={{ scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='text-xl sm:text-2xl w-full'>
            aime leon dore unifies formal menswear precedents with everyday
            aspects of modern masculinity inspired by casual wear as well as
            street style
          </motion.h1>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0.9 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className='col-span-1 md:col-span-2 grid grid-cols-2 gap-x-4 md:gap-x-2 sm:px-20 md:px-0'>
          <div className='w-full relative'>
            <Item image={aboutProduct[0].image} classNameItem='h-[40vh]' />
            <p className='text-end'>01</p>
          </div>
          <div>
            <Item image={aboutProduct[1].image} classNameItem='h-[40vh]' />
            <p className='text-end'>02</p>
          </div>
        </motion.div>
      </div>
      <AccordionHome dataCollections={dataCollections} />
    </section>
  )
}
