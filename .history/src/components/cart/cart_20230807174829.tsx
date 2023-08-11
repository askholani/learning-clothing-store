'use client'
import { useReducer } from 'react'
import { itemType } from '@components/store/CartContex'

export default function Cart(props: { items?: itemType }) {
  const { items } = props
  const base = 'default'
  const name = items ? items.name : base
  const description = items ? items.description : base
  const price = items ? items.price : base
  const size = items ? items.size : base
  const qty = items ? items.qty : base

  return (
    <tr>
      <td className='flex flex-col gap-y-2 items-start'>
        <label>
          <input
            type='checkbox'
            className='checkbox bg-sekunder w-[1.5rem] h-[1.5rem]'
          />
        </label>
        <button className='btn btn-sm  w-[1.5rem] h-[1.5rem]'>x </button>
      </td>
      <td>
        <div className='flex gap-x-2'>
          <div className='w-[10rem] h-[13rem] bg-sekunder'></div>
          <div className='flex flex-col justify-between'>
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
          <button className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'>
            «
          </button>
          <button className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'>
            {qty}
          </button>
          <button className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'>
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
  )
}
