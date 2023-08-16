'use client'
import { useEffect, useState } from 'react'
import { itemType } from '@components/store/CartContex'
import Modal from '../modal/Moda'

export default function Cart(props: {
  items?: itemType
  dispatch: any
  index: number
}) {
  const { items, dispatch, index } = props
  const [showModal, setShowModal] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(0)
  const [choice, setChoice] = useState<boolean>(false)

  useEffect(() => {
    if (items?.choice) {
      setChoice(items?.choice)
    }
  }, [])

  const base = 'default'
  const name = items ? items.name : base
  const description = items ? items.description : base
  const price = items ? items.price : base
  const size = items ? items.size : base
  const qty = items ? items.qty : 1
  const indexCart = items ? index : 0

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
    console.log('choce cart', choice)
    if (items?.choice) {
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
    if (items?.choice) {
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
    console.log('in handleChoiceItems cart.tsx')
    const item = { ...items, qty: quantity }
    const newChoice = !choice
    setChoice(newChoice)
    dispatch({ type: 'UPDATE', item: item })
    dispatch({
      type: 'CHOICE',
      indexCart: index,
      choice: newChoice,
    })
    dispatch({ type: 'COOKIES' })
  }

  return (
    <>
      {showModal && (
        <Modal onShowRemove={handleShowModal} onRemoveItem={handleRemove} />
      )}
      <tr>
        <td className='flex flex-col gap-y-2 items-start'>
          <label>
            <input
              defaultChecked={items?.choice ? items.choice : false}
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
        <td>
          <div className='grid grid-cols-5 gap-x-2'>
            <div className='w-[10rem] h-[13rem] bg-sekunder col-span-2'></div>
            <div className='flex flex-col justify-between col-span-3'>
              <h2 className='text-xl font-bold'>{name}</h2>
              <div className='flex flex-col text-xs font-light'>
                <div className='flex gap-x-2 text-lg font-bold'>
                  <h3>size</h3>
                  <h3>{size}</h3>
                </div>
                <div className='flex gap-x-2 text-lg font-bold'>
                  <h3>color</h3>
                  <h3>black white</h3>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className='flex'>
          <div className='join rounded-none '>
            <button
              className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'
              onClick={handleMinus}>
              «
            </button>
            <button className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'>
              {quantity}
            </button>
            <button
              className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'
              onClick={handlePlus}>
              »
            </button>
          </div>
        </td>
        <td>
          <div className='overflow-hidden flex items-start'>
            <p>{description}</p>
          </div>
        </td>
        <td className='text-xl flex justify-end'>
          <h3>{price}$</h3>
        </td>
      </tr>
    </>
  )
}
