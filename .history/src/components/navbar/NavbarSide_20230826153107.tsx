'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'

import { motion, Variants } from 'framer-motion'

export default function NavbarSide(props: {
  onHandleShowSide: any
  open: boolean
}) {
  const { onHandleShowSide, open } = props

  const liVariants: Variants = {
    open: {
      x: 10,
    },
    closed: {
      x: '-100%',
    },
  }

  return (
    <>
      <motion.nav animate={open ? 'open' : 'closed'}>
        <motion.div
          className='w-[100%] fixed opacity-0 top-0 bottom-0 z-50'
          variants={{
            open: {
              x: 0,
              opacity: 1,
            },
            closed: {
              x: '-150%',
              opacity: 0,
            },
          }}
          transition={{ duration: 0.4 }}>
          <motion.div className='w-[60%] h-full gap-y-10 px-4 py-4 relative z-20 bg-primer'>
            <div className='flex flex-col'>
              <motion.ul
                variants={{
                  open: {
                    clipPath: 'inset(0% 0% 0% 0% round 10px)',
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.1,
                    },
                  },
                  closed: {
                    clipPath: 'inset(10% 50% 90% 50% round 10px)',
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                className='flex flex-col gap-y-4'>
                <motion.Link variants={liVariants}>cart</motion.Link>
                <motion.li variants={liVariants}>wishlist</motion.li>
                <motion.li variants={liVariants}>login</motion.li>
                <motion.li variants={liVariants}></motion.li>
                <motion.li variants={liVariants}>shop</motion.li>
                <motion.li variants={liVariants}>collection</motion.li>
                <motion.li variants={liVariants}>lookbook</motion.li>
              </motion.ul>
            </div>
          </motion.div>
          <motion.div
            className='absolute top-0 bottom-0 left-0 right-0 bg-primer opacity-90 flex justify-end items-start'
            onClick={onHandleShowSide}>
            <XMarkIcon className='w-6 h-6 m-4' />
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  )
}
