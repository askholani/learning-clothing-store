'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

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
      <tr>
        <td className='flex flex-col gap-y-2 items-start px-1'>
          <label>
            <input
              defaultChecked={items?.selected ? items.selected : false}
              onChange={handleChoiceItems}
              type='checkbox'
              className='checkbox bg-sekunder w-[2rem] h-[2rem]'
            />
          </label>
          <button
            className='btn btn-xs w-[2rem] h-[2rem]'
            onClick={handleShowModal}>
            <span className='text-base'>x</span>
          </button>
        </td>
        <td className='px-2'>
          <div className='flex flex-col lg:flex-row gap-x-2 gap-y-4 relative'>
            <div className='bg-sekunder col-span-2 relative'>
              <Image
                src={image ? image : base}
                alt={base}
                width={500}
                height={500}
                loading='lazy'
                className='object-contain'
              />
            </div>
            <div className='flex flex-col justify-between col-span-3 gap-y-2 absolute'>
              <h2 className='text-base lg:text-xl font-bold'>{name}</h2>
              <div className='flex flex-col font-normal lg:font-bold'>
                <div className='flex gap-x-2 text-sm lg:text-lg'>
                  <h3>size</h3>
                  <h3>{size}</h3>
                </div>
                <div className='flex gap-x-2 text-sm lg:text-lg font-normal lg:font-bold'>
                  <h3>color</h3>
                  <h3>black white</h3>
                </div>
              </div>
            </div>
          </div>
        </td>

        <td className='hidden'>
          <div className='overflow-hidden sm:flex items-start'>
            <p>{description}</p>
          </div>
        </td>
        <td className='text-xl sm:flex justify-end hidden'>
          <h3>{price}$</h3>
        </td>
      </tr>
    </>
  )
}
