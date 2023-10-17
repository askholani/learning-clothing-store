'use client'
import { useRouter } from 'next/navigation'
import { Fragment, useCallback, useState } from 'react'

import ListCarts from '../../components/cart/ListCarts'
import { itemType, useCartContext } from '../../context/CartContex'

import PaginationCartCheckout from '../../components/pagination/PaginationCartCheckout'
import { useCheckoutContext } from '../../context/CheckoutContex'
import Modal from '../../components/modal/Modal'

export default function Page() {
  const { state, dispatch } = useCartContext()
  console.log('dispatch', dispatch)
  console.log('state', state)

  const { checkoutDispatch } = useCheckoutContext()

  const [items, setItems] = useState<itemType[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)

  const router = useRouter()

  const handleGetItems = useCallback((items: itemType[]) => {
    setItems(items)
  }, []) // mengatur cart bedasrkan pagination

  const choiceItems = state.filter((item: itemType) => item.selected === true)

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
    const exisitingItemChoice = choiceItems.length
    if (exisitingItemChoice === 0) {
      setShowModal(!showModal)
      return 'nothing items is selected'
    }
    if (!login) {
      checkoutDispatch({ type: 'SET', items: choiceItems })
      router.push('/checkout?page=1')
    }
    return 'ok'
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <Fragment>
      {showModal && (
        <Modal
          onShowRemove={handleShowModal}
          bodyModal='nothing item is selected, at least select one item'
          bodyButton='ok'
        />
      )}
      <section className='overflow-x-auto flex flex-col '>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold py-4 border-b md:mb-4 lg:mb-6'>
          cart
        </h1>
        <div className='flex flex-col mt-4'>
          <ListCarts />
        </div>
      </section>
      <section className='flex justify-center'>
        <PaginationCartCheckout onGetCarts={handleGetItems} />
      </section>
      <section className='flex flex-col sm:grid sm:grid-cols-12'>
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
          <div className='flex flex-col gap-y-2  justify-between items-end'>
            <button
              className='btn btn-wide rounded-none'
              onClick={() => router.replace(`/shop?type=all&page=1`)}>
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
