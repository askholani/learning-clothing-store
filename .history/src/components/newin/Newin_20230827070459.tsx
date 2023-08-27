'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { productsType } from '../../utils/type'

const Rounded = dynamic(() => import('../rounded/Rounded'))
const ListItems = dynamic(() => import('../item/ListItems'))
const Item = dynamic(() => import('../item/Item'))

export default function Newin(props: {
  newInProduct: productsType[]
  heroNewInProduct: productsType[]
}) {
  const { newInProduct, heroNewInProduct } = props
  return (
    <section className='flex flex-col border-b py-4 relative overflow-hidden'>
      <div className='w-full uppercase'>
        <motion.h1
          initial={{ x: '-100%', opacity: 0.7 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className='text-xs'>
          spring/summer
        </motion.h1>
        <div className='flex justify-between my-4 sm:my-12'>
          <motion.h2
            initial={{ y: 10, opacity: 0.7, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className='text-6xl font-extrabold'>
            new in
          </motion.h2>
          <Link
            className='flex items-end underline hover:cursor-pointer'
            href={`/shop?date=new`}
            prefetch={true}>
            see all
          </Link>
        </div>
      </div>
      {<ListItems items={newInProduct} n='2' gap='4' />}
      <div className='mt-16'>
        <div className='flex justify-center mt-24 py-4 relative items-center'>
          <div className='h-[25rem] w-[18rem]'>
            <Item height='h-full' image={heroNewInProduct[0].image} />
          </div>
          <div className=' w-full absolute uppercase'>
            <h2>brand philosophy</h2>
            <div>
              <h3 className='text-6xl font-bold'>we do not follow</h3>
              <div className='flex'>
                <p className='w-[20rem] text-xs normal-case'>
                  with a strong on simple yet powerful design we are driven to
                  create timeless work by portraying an aesthetic that is
                  uniquely our own
                </p>
                <h3 className='font-bold text-6xl mx-4'>fashion, but</h3>
                <p className='text-xs normal-case'>
                  Aime Leon Dore is <br /> from Queens, NY.
                </p>
              </div>
              <h3 className='font-bold text-6xl'>create it for your and</h3>
              <h3 className='font-bold text-7xl'>your soul</h3>
            </div>
          </div>
        </div>
        <Rounded
          icon={true}
          content='discovery'
          bottom='-bottom-20'
          right='right-56'
          link={'/shop?review=5'}
        />
      </div>
    </section>
  )
}
