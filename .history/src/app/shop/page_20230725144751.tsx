'use client'

import { Fragment, useState } from 'react'
import ListItems from '@components/components/item/ListItems'
import Pagination from '@components/components/pagination/Pagination'
import Footer from '@components/components/footer/Footer'
import { productsType } from '@components/utils/type'

type Shop = {
  items: object[] | null
}

export default function Page() {
  const [items, setItems] = useState<productsType[] | string>('')
  console.log(items)

  // const handleItems = (items: Shop['items']) => {
  //   setItems(items)
  // }

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
      <section>
        <ListItems />
        {/* <ListItems n='2' grid={2} items={items} gap='4' /> */}
      </section>
      <section className='flex justify-center'>
        <Pagination onGetProducts={handleGetProducts} />
      </section>
    </Fragment>
  )
}
