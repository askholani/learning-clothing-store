'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

import { itemType } from '../../context/CartContex'

import foto from '../../../public/next.svg'

import Modal from '../modal/Modal'

export default function Cart(props: {
  items?: itemType
  dispatch: any
  index: number
}) {
  const { items, dispatch, index } = props

  const [showModal, setShowModal] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(0)
  const [choice, setChoice] = useState<boolean>(false)

  const searchParams = useSearchParams().get('page')
  const page = searchParams ? parseInt(searchParams) : 1

  useEffect(() => {
    if (items?.selected) {
      setChoice(items?.selected)
    }
  }, [])

  const base = 'default'
  const name = items ? items.name : base
  const description = items ? items.description : base
  const price = items ? items.price : base
  const size = items ? items.size : base
  const qty = items ? items.qty : 1
  const indexCart = items ? index : 0
  const image = items ? items.image : base

  useEffect(() => {
    setQuantity(qty)
  }, [qty])

  /**
   *    * menambahkan quantity dari suatu item ketika user mengclick <<
   * item belum di click (checbox) menambahkan quantity state
   * sudah di click maka mengirim otomatis data terbaru item tersebut ke parent component
   * @date 8/10/2023 - 1:48:22 PM
   */
  const handlePlus = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    // console.log('choce cart', selected)
    if (items?.selected) {
      const item = { ...items, qty: newQuantity }
      dispatch({ type: 'UPDATE', item: item })
      dispatch({ type: 'COOKIES' })
    }
  }

  /**
   * mengurangi quantity dari suatu item ketika user mengclick <<
   * item belum di click (checbox) hanya mengurangi quantity state
   * sudah di click maka mengirim otomatis data terbaru item tersebut ke parent component
   * @date 8/10/2023 - 1:38:12 PM
   */
  const handleMinus = () => {
    const newQuantity = quantity - 1
    setQuantity(newQuantity)
    if (items?.selected) {
      const item = { ...items, qty: newQuantity }
      dispatch({ type: 'UPDATE', item: item })
      dispatch({ type: 'COOKIES' })
    }
  }

  /**
   * menghapus items dari cart
   * menghapus dari context dengan mengambil intexnya "type : REMOVE"
   * menyimpan data context terbaru ke cookie "type : COOKIES"
   * @date 8/10/2023 - 1:35:18 PM
   */
  const handleRemove = () => {
    dispatch({ type: 'REMOVE', indexCart: indexCart })
    dispatch({ type: 'COOKIES' })
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  /**
   * saat user menekan checkbox akan berjalan otomatis
   * mengubah state -- choice
   * mengirimkan data dari Cart component ke parent
   * menyimpan data terbaru ke context "type : CHOICE"
   * menyimpan data terbaru ke cookies "type :COOKIES"
   * @date 8/10/2023 - 1:30:36 PM
   */
  const handleChoiceItems = () => {
    // console.log('in handleChoiceItems cart.tsx')
    const item = { ...items, qty: quantity }
    const newChoice = !choice
    const newIndex = page !== 1 ? (page - 1) * 4 + indexCart : indexCart
    setChoice(newChoice)
    dispatch({ type: 'UPDATE', item: item })
    dispatch({
      type: 'SELECT',
      indexCart: newIndex,
      selected: newChoice,
    })
    dispatch({ type: 'COOKIES' })
  }

  console.log('description.length', description?.length)
  description?.length
  // const newDesciption =

  return (
    <>
      {showModal && (
        <Modal onShowRemove={handleShowModal} onRemoveItem={handleRemove} />
      )}
      <div className='flex gap-x-2 border-b border-sekunder md:justify-between'>
        <div className='flex flex-col'>
          <label>
            <input
              defaultChecked={items?.selected ? items.selected : false}
              onChange={handleChoiceItems}
              type='checkbox'
              className='checkbox bg-sekunder w-[1.5rem] h-[1.5rem] rounded-full border border-sekunder bg-transparent '
            />
          </label>
          <button
            className='btn btn-xs w-[1.5rem] h-[1.5rem] rounded-full bg-transparent broder border-sekunder'
            onClick={handleShowModal}>
            <span className='text-base'>
              <XMarkIcon className='w-4 h-4 text-sekunder' />
            </span>
          </button>
        </div>
        <div className='flex-flex-col relative'>
          <Image
            src={image ? image : base}
            alt={base}
            width={500}
            height={500}
            className='object-contain w-full h-auto lg:h-[50vh]'
          />
        </div>
        <div className='flex flex-col gap-y-2 sm:w-[60%]'>
          <p className='text-sm font-bold sm:text-lg'>{name}</p>
          <div className='flex flex-col'>
            <div className='grid grid-cols-2 text-xs sm:text-base'>
              <span className='font-bold'>price</span>
              <span>$90</span>
            </div>
            <div className='grid grid-cols-2 text-xs sm:text-base'>
              <span className='font-bold'>size</span>
              <span>L - large</span>
            </div>
            <div className='grid grid-cols-2 text-xs sm:text-base'>
              <span className='font-bold'>color</span>
              <span>Blue</span>
            </div>
          </div>
          <div>
            <p className='font-bold text-xs'>description</p>
            <p className='text-xs hidden sm:text-sm sm:block'>{description}</p>
          </div>
          <div className='join rounded-none '>
            <button
              className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'
              onClick={handleMinus}>
              <MinusIcon className='w-5 h-5' />
            </button>
            <span className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer justify-center w-[2rem]'>
              {quantity}
            </span>
            <button
              className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'
              onClick={handlePlus}>
              <span>
                <PlusIcon className='w-5 h-5' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
