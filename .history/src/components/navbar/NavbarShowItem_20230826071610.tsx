import Link from 'next/link'

import { motion } from 'framer-motion'

type categories = {
  id: number
  name: string
}

export default function NavbarShowItem(props: {
  open?: boolean
  choice?: string | null
  onHandleShowList?: (e: boolean) => void
  categories?: categories[]
}) {
  const { categories, open } = props

  return (
    <>
      <motion.div animate={open ? 'open' : 'closed'}>
        <motion.div
          className='py-12 w-full h-[60vh] bg-primer none grid-cols-12 font-normal'
          variants={{
            open: { opacity: 1, display: 'grid' },
            closed: {
              y: '-20%',
              opacity: 0,
              transitionEnd: {
                display: 'none',
              },
            },
          }}
          transition={{ duration: 0.2 }}>
          <div className='col-span-4 grid grid-cols-2'>
            <div className='w-full h-[65%] bg-slate-200'></div>
          </div>
          <div className='col-span-8 grid grid-cols-8 gap-x-4'>
            <div className='col-span-3 uppercase text-2xl'>
              <ul className='h-full flex flex-col justify-between'>
                <li>all</li>
                <li>outwear</li>
                <li>short</li>
                <li>shirt</li>
                <li>sweatshirts</li>
                <li>pants</li>
                <li>jewelry</li>
              </ul>
            </div>
            <div className='col-span-3'>
              <div className='w-full h-full bg-slate-200'></div>
            </div>
            <div className='col-span-2'>
              <div className='w-full h-[65%] bg-slate-200'></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
