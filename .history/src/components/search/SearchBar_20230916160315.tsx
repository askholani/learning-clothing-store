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
      <section className='grid justify-between grid-cols-12 uppercase text-sekunder sm:border-b sm:pb-16 mt-8 items-end gap-y-4'>
        <div className='text-3xl sm:text-4xl md:text-5xl font-extrabold col-span-6 lg:col-span-4'>
          <h1>shop all</h1>
        </div>
        <div className='col-span-6 justify-end hidden md:flex'>
          <div className='form-control w-full'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered w-full md:w-auto bg-primer rounded-none'
            />
          </div>
        </div>
        <div
          className='flex justify-end w-full col-span-6 md:col-span-12 lg:col-span-2'
          onClick={handleOpenFilter}>
          <span>filter</span>
        </div>
      </section>
      <motion.section className='relative' animate={open ? 'open' : 'closed'}>
        <motion.div
          className='flex flex-col gap-y-8 py-4 bg-primer z-20 w-full absolute'
          variants={{
            open: { opacity: 1, display: '' },
            closed: {
              y: '-20%',
              opacity: 0,
              transitionEnd: {
                display: 'none',
              },
            },
          }}
          transition={{ duration: 0.2 }}>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered w-full bg-primer rounded-none md:w-auto text-sm py-2 px-4  h-auto md:hidden'
          />
          <div className='w-full flex flex-col gap-y-2'>
            <span className='text-xs sm:text-base'>type of clothing</span>
            <div className='w-full flex justify-between md:flex-col'>
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
          <div className='w-full flex flex-col gap-y-2'>
            <span className='text-xs sm:text-base'>sort by </span>
            <div className='w-full flex justify-between md:flex-col gap-y-2'>
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
