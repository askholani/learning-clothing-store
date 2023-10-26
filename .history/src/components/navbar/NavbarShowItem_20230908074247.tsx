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
      <motion.div animate={open ? 'open' : 'closed'} className='relative'>
        <motion.div
          className='py-12 w-full h-[60vh] bg-primer hidden grid-cols-12 font-normal absolute'
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
                <li>
                  <Link href={`/shop?type=all&page=1`}>all</Link>
                </li>
                <li>
                  <Link href={`/shop?type=outwear&page=1`}>outwear</Link>
                </li>
                <li>
                  <Link href={`/shop?type=short&page=1`}>short</Link>
                </li>
                <li>
                  <Link href={`/shop?type=shirt&page=1`}>shirt</Link>
                </li>
                <li>
                  <Link href={`/shop?type=sweatshirts&page=1`}>
                    sweatshirts
                  </Link>
                </li>
                <li>
                  <Link href={`/shop?type=pants&page=1`}>pants</Link>
                </li>
                <li>
                  <Link href={`/shop?type=jewelry&page=1`}>jewelry</Link>
                </li>
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
