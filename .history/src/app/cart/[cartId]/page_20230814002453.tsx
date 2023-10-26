'use client'
import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'

import ListCarts from '@components/components/cart/ListCarts'
import { itemType, useCartContext } from '@components/context/CartContex'

import PaginationCartCheckout from '@components/components/pagination/PaginationCartCheckout'
import { useLocalStorage } from '@components/hooks/useLocalStorage'

export default function Page() {
  // const [valueInLocalStorage, setValueInLocalStorage] = useLocalStorage(
  //   'checkout',
  //   [{}],
  // )

  const data = localStorage.getItem('checkout')
  const { state, dispatch } = useCartContext()
  const [items, setItems] = useState<itemType[]>([])

  const router = useRouter()

  /**
   * mengambil data yang diberikan dari pagination
   * lalu di kirim ke ListCart untuk di render
   * @date 8/11/2023 - 6:45:28 AM
   *
   * @param {itemType[]} items
   */
  const handleItems = (items: itemType[]) => {
    setItems(items)
  }

  /**
   * (filter) memilih data yang telah di pilih user (click checkbox)
   * (map) menjumlahkan total price dari setiap data
   * total price (price * quantity)
   * (reduce) menjumlahkan semua nilai total price dengan memberi nilai awal 0
   * mengembalikan objek yang berisi total price
   * @date 8/11/2023 - 6:47:17 AM
   *
   * @type {*}
   */
  const choiceItems = state.filter((item: itemType) => item.choice === true)
  let newListItems
  if (choiceItems) {
    newListItems = choiceItems.map((item) => {
      if (item.price) {
        return { ...item, price: item.price * item.qty }
      }
    })
  }
  let totalPrice
  if (newListItems) {
    totalPrice = newListItems.reduce(
      (acc: any, curr: any) => {
        return {
          price: acc.price + curr.price,
        }
      },
      { price: 0 },
    )
  }

  const handleGoToCheckout = () => {
    const login = false
    if (!login) {
      setValueInLocalStorage(choiceItems)
    }
    router.push('/checkout/123')
  }

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
            <h3>{totalPrice ? totalPrice.price : 0}$</h3>
          </div>
          <div className='flex justify-between'>
            <h3>delivery</h3>
            <h3>100$</h3>
          </div>
          <div className='border-t pt-4'>
            <div className='flex justify-between'>
              <h3>total</h3>
              <h3>{totalPrice?.price + 100}$</h3>
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
              onClick={handleGoToCheckout}>
              go to checkout
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
