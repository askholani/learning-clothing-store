'use client'

import { Fragment, useState } from 'react'
import { useRouter } from 'next/navigation'
import ListCarts from '@components/components/cart/ListCarts'

import Pagination from '@components/components/pagination/Pagination'

type Shop = {
  items: object[] | null
}

export default function Page({ params }: { params: { cartId: string } }) {
  console.log(params)

  const [items, setItems] = useState<Shop['items']>(null)

  const handleItems = (items: Shop['items']) => {
    setItems(items)
  }

  const router = useRouter()

  return (
    <Fragment>
      <section className='overflow-x-auto flex flex-col'>
        <h1 className='text-5xl font-bold py-4 border-b'>cart {`(03)`}</h1>
        <table className='table'>
          <thead>
            <tr className='text-sekunder'>
              <th className='w-[5%]'></th>
              <th className='w-[50%]'>product</th>
              <th className='w-[20%] text-center'>quantity</th>
              <th className='w-[25%] text-end'>price</th>
            </tr>
          </thead>
          <tbody>
            <ListCarts />
          </tbody>
        </table>
      </section>
      <section className='grid grid-cols-12'>
        <div className='col-start-7 col-span-6 flex flex-col gap-y-2'>
          <div className='flex justify-between'>
            <h3>subtotal</h3>
            <h3>19000$</h3>
          </div>
          <div className='flex justify-between'>
            <h3>delivery</h3>
            <h3>9000$</h3>
          </div>
          <div className='border-t pt-4'>
            <div className='flex justify-between'>
              <h3>total</h3>
              <h3>900000$</h3>
            </div>
          </div>
          <div className='flex justify-between'>
            <button
              className='btn btn-wide rounded-none'
              onClick={() => router.back()}>
              go back
            </button>
            <button
              className='btn btn-wide rounded-none'
              onClick={() => router.push('/checkout/123')}>
              go to checkout
            </button>
          </div>
        </div>
      </section>
      <section className='flex justify-center'>
        {/* <Pagination itemsPerPage={4} onGetItems={handleItems} /> */}
      </section>
    </Fragment>
  )
}
