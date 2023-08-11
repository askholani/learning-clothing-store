'use client'
import { useReducer } from 'react'
import { itemType } from '@components/store/CartContex'

export default function Cart(props: { items: itemType }) {
  const { items } = props
  console.log(items)
  return (
    <tr>
      <td className='flex flex-col gap-y-2 items-start'>
        <label>
          <input
            type='checkbox'
            className='checkbox  bg-sekunder w-[1.5rem] h-[1.5rem]'
          />
        </label>
        <button className='btn  w-[1.5rem] h-[1.5rem]'>x</button>
      </td>
      <td>
        <div className='flex gap-x-2'>
          <div className='w-[10rem] h-[13rem] bg-sekunder'></div>
          <div className='flex flex-col justify-between'>
            <h2 className='text-xl font-bold'>{items.name}</h2>
            <div className='flex flex-col text-xs font-light'>
              <div className='flex gap-x-2 text-lg font-bold'>
                <h3>size</h3>
                <h3>{items.size}</h3>
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
            {items.qty}
          </button>
          <button className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'>
            »
          </button>
        </div>
      </td>
      <td>
        <div className='overflow-hidden flex items-start'>
          <p>{items.description}</p>
        </div>
      </td>
      <td className='text-xl flex justify-end'>
        <h3>{items.price}$</h3>
      </td>
    </tr>
  )
}
