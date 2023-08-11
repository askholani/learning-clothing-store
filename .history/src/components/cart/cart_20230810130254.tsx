'use client'
import { useEffect, useState } from 'react'
import { itemType } from '@components/store/CartContex'
import Modal from '../modal/Moda'

export default function Cart(props: {
  items?: itemType
  dispatch: any
  index: number
  onChoiceItems: any
}) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(0)
  const [choice, setChoice] = useState<boolean>(false)

  const { items, dispatch, index, onChoiceItems } = props
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

  const handlePlus = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    if (choice) {
      const item = { ...items, qty: newQuantity }
      onChoiceItems(item)
    }
  }

  const handleMinus = () => {
    const newQuantity = quantity - 1
    setQuantity(newQuantity)
    if (choice) {
      const item = { ...items, qty: newQuantity }
      onChoiceItems(item)
    }
  }

  const handleRemove = () => {
    dispatch({ type: 'REMOVE', indexCart: indexCart })
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const handleChoiceItems = () => {
    const item = { ...items, qty: quantity }
    setChoice(!choice)
    onChoiceItems(item)
    dispatch({ type: 'CHOICE', indexCart: index })
  }

  console.log('choice', choice)

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
              onClick={handleShowModal}>
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
