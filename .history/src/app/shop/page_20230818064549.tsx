'use client'

import { Fragment, Suspense, useState } from 'react'

import ListItems from '@components/components/item/ListItems'
import Pagination from '@components/components/pagination/Pagination'
import { productsType } from '@components/utils/type'
import Loading from '../loading'

export default function Page() {
  const [items, setItems] = useState<productsType[] | []>([])

  const handleGetProducts = (items: productsType[]) => {
    setItems(items)
  }

  return (
    <Fragment>
      <section className='grid grid-cols-12 uppercase text-sekunder border-b pb-16'>
        <div className='col-span-4 text-5xl font-extrabold '>
          <h1>shop all</h1>
        </div>
        <div className='col-span-4 flex justify-end'>
          <details className='dropdown'>
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
        <div className='col-span-4 flex flex-col'>
          <div className='w-full grid grid-cols-12'>
            <details className='dropdown col-start-7 col-span-6'>
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
            <details className='dropdown col-start-7 col-span-6'>
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
      </section>
      <Suspense fallback={<Loading />}>
        <section>
          <ListItems n='3' items={items} gap='4' height='h-full' base={true} />
        </section>
      </Suspense>
      <section className='flex justify-center'>
        <Pagination onGetProducts={handleGetProducts} />
      </section>
    </Fragment>
  )
}
