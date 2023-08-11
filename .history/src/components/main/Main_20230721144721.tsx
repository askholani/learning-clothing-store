'use client'

import Rounded from '../rounded/Rounded'

// export default function Main(props: { data: [object]; newProduct?: [] }) {
export default function Main(data?: {}) {
  console.log(data)

  return (
    <section className='grid grid-cols-12 mt-4 gap-x-4 py-12 border-b-2 overflow-hidden'>
      <div className='col-span-4'>
        <div className='bg-slate-50 h-[60vh] w-full'></div>
      </div>
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
          />
          <div className='bg-slate-600 h-[50vh] w-[18rem] absolute bottom-0 right-0'></div>
        </div>
      </div>
    </section>
  )
}
