'use client'

import { generalType } from '../../utils/type'

import { motion } from 'framer-motion'

const collection: string[] = [
  'ss23',
  'lates summer collection',
  'hiking collection',
  'collaboration',
  'future collection',
]

export default function AccordionHome(props: {
  dataCollections: generalType[]
}) {
  // console.log('accordionHome')
  const { dataCollections } = props
  return (
    <motion.div
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      }}
      className='flex flex-col gap-y-4 uppercase md:mt-32 mt-8'>
      <h3 className='text-base sm:text-lg'>collection</h3>
      {/* {dataCollections.map((item) => (
        <motion.div
          initial={{ y: 10, opacity: 0.7, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className='collapse collapse-arrow border-b-2 border-sekunder rounded-none'
          key={item.id}>
          <input type='radio' name='my-accordion-3' />
          <div className='collapse-title sm:text-xl text-lg font-medium'>
            <h4>{item.name}</h4>
          </div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </motion.div>
      ))} */}
    </motion.div>
  )
}
