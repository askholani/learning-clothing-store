'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SearchBar() {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenFilter = () => {
    setOpen(!open)
  }

  return (
    <>
      <section className='flex justify-between sm:grid-cols-12 uppercase text-sekunder sm:border-b sm:pb-16 mt-8 items-end'>
        <div className='sm:col-span-4 text-3xl sm:text-5xl font-extrabold'>
          <h1>shop all</h1>
        </div>
        <div className='col-span-4 justify-end hidden sm:flex'>
          <details className='dropdown cursor-pointer'>
            <summary className='m-1'>type of clothing</summary>
            <ul className='p-2 shadow menu dropdown-content z-[1] w-52 bg-primer opacity-75'>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </div>
        <div className='col-span-4 flex-col hidden sm:flex'>
          <div className='w-full grid grid-cols-12'>
            <details className='dropdown col-start-7 col-span-6 cursor-pointer'>
              <summary className='m-1'>sort by</summary>
              <ul className='p-2 shadow menu dropdown-content z-[1] w-full bg-primer opacity-75'>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </div>
          <div className='w-full grid grid-cols-12'>
            <details className='dropdown col-start-7 col-span-6 cursor-pointer'>
              <summary className='m-1'>size</summary>
              <ul className='p-2 shadow menu dropdown-content z-[1] w-full bg-primer opacity-75'>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className='block sm:hidden' onClick={handleOpenFilter}>
          filter
        </div>
      </section>
      <motion.section
        className='sm:hidden relative'
        animate={open ? 'open' : 'closed'}>
        <motion.div
          className='flex flex-col gap-y-8 py-2 bg-primer z-20 w-full'
          variants={{
            open: { opacity: 1, display: '', position: 'absolute' },
            closed: {
              y: '-20%',
              opacity: 0,
              transitionEnd: {
                display: 'none',
                position: 'absolute',
              },
            },
          }}
          transition={{ duration: 0.2 }}>
          <div className='w-full flex flex-col gap-y-4'>
            <input
              type='text'
              placeholder='Search'
              className='input-bordered w-full bg-primer rounded-none md:w-auto text-sm p-2'
            />
            <span className='text-xs sm:text-base'>type of clothing</span>
            <div className='w-full  flex justify-between'>
              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  className='checkbox border border-slate-50 rounded-full w-4 h-4'
                  id='item1'
                  value={'item1'}
                />
                <label htmlFor='item1' className='text-xs sm:text-base'>
                  item1
                </label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  className='checkbox border border-slate-50 rounded-full w-4 h-4'
                  id='item1'
                  value={'item1'}
                />
                <label htmlFor='item1' className='text-xs sm:text-base'>
                  item1
                </label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  className='checkbox border border-slate-50 rounded-full w-4 h-4'
                  id='item1'
                  value={'item1'}
                />
                <label htmlFor='item1' className='text-xs sm:text-base'>
                  item1
                </label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  className='checkbox border border-slate-50 rounded-full w-4 h-4'
                  id='item1'
                  value={'item1'}
                />
                <label htmlFor='item1' className='text-xs sm:text-base'>
                  item1
                </label>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col'>
            <span className='text-xs sm:text-base'>sort by </span>
            <div className='w-full  flex justify-between'>
              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  className='checkbox border border-slate-50 rounded-full w-4 h-4'
                  id='item1'
                  value={'item1'}
                />
                <label htmlFor='item1' className='text-xs sm:text-base'>
                  item1
                </label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  className='checkbox border border-slate-50 rounded-full w-4 h-4'
                  id='item1'
                  value={'item1'}
                />
                <label htmlFor='item1' className='text-xs sm:text-base'>
                  item1
                </label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  className='checkbox border border-slate-50 rounded-full w-4 h-4'
                  id='item1'
                  value={'item1'}
                />
                <label htmlFor='item1' className='text-xs sm:text-base'>
                  item1
                </label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input
                  type='checkbox'
                  className='checkbox border border-slate-50 rounded-full w-4 h-4'
                  id='item1'
                  value={'item1'}
                />
                <label htmlFor='item1' className='text-xs sm:text-base'>
                  item1
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <button className='btn btn-xs rounded-none bg-transparent text-sekunder px-4'>
              set
            </button>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}
