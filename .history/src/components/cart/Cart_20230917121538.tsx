'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'

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

  return (
    <>
      {showModal && (
        <Modal onShowRemove={handleShowModal} onRemoveItem={handleRemove} />
      )}
      <div className='relative'>
        <div className='absolute w-full h-full bg-primer opacity-80 z-10 flex items-center justify-center flex-col'>
          <span>NAME OF PRODUCT</span>
          <button className='btn px-8 py-1 rounded-none'>visit</button>
        </div>
        <Image
          src={image ? image : base}
          alt={base}
          width={500}
          height={500}
          // loading='lazy'
          className='object-contain'
        />
      </div>
    </>
  )
}
