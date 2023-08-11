'use client'
import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'

import ListCarts from '@components/components/cart/ListCarts'
import { itemType, useCartContext } from '@components/store/CartContex'

import PaginationCartCheckout from '@components/components/pagination/PaginationCartCheckout'

type Shop = {
  items: object[] | null
}

export default function Page({ params }: { params: { cartId: string } }) {
  const { state, dispatch } = useCartContext()
  const [items, setItems] = useState<itemType[]>([])

  const router = useRouter()

  const handleItems = (items: itemType[]) => {
    setItems(items)
  }

  const choiceItems = state.filter((item: itemType) => item.choice === true)
  let totalPrice
  if (choiceItems.length !== 0) {
    totalPrice = choiceItems.reduce(
      (accumulator: itemType, currentValue: itemType) => {
        console.log('currentValue', currentValue)
        console.log('accumulator', accumulator)

        return {
          qty:
            accumulator.qty * accumulator.price +
            currentValue.qty * currentValue.price,
          id: -1,
          size: 's',
        }
      },
    )
  }
  console.log('choiceItems', choiceItems)
  console.log('totalPrice', totalPrice)
  console.log('state in cart', state)

  return (
    <Fragment>
      <section className='overflow-x-auto flex flex-col'>
        <h1 className='text-5xl font-bold py-4 border-b'>cart {`(03)`}</h1>
        <table className='table'>
          <thead>
            <tr className='text-sekunder'>
              <th className='w-[5%]'></th>
              <th className='w-[45%]'>product</th>
              <th className='text-center w-[10%]'>quantity</th>
              <th className='w-[30%] text-center'>description</th>
              <th className='w-[10%] text-end'>price</th>
            </tr>
          </thead>
          <tbody>
            <ListCarts state={items} dispatch={dispatch} />
          </tbody>
        </table>
      </section>
      <section className='flex justify-center'>
        <PaginationCartCheckout onGetCarts={handleItems} />
      </section>
      <section className='grid grid-cols-12'>
        <div className='col-start-7 col-span-6 flex flex-col gap-y-2'>
          <div className='flex justify-between'>
            <h3>sub total</h3>
            <h3>{totalPrice ? totalPrice.qty : 0}$</h3>
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
    </Fragment>
  )
}
