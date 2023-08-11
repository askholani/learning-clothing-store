'use client'
import { useReducer } from 'react'
import { itemType } from '@components/store/CartContex'

export default function Cart(props: { items: itemType }) {
  return (
    <tr>
      <td className='flex items-start'>
        <label>
          <input
            type='checkbox'
            className='checkbox  bg-sekunder w-[1.5rem] h-[1.5rem]'
          />
        </label>
      </td>
      <td>
        <div className='flex gap-x-2'>
          <div className='w-[10rem] h-[13rem] bg-sekunder'></div>
          <div className='flex flex-col justify-between'>
            <h2 className='text-xl font-bold'>leather cafe racer jacker</h2>
            <div className='flex flex-col text-xs font-light'>
              <div className='flex gap-x-2'>
                <h3>size</h3>
                <h3>m</h3>
              </div>
              <div className='flex gap-x-2'>
                <h3>color</h3>
                <h3>black white</h3>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className=''>
        <div className='overflow-hidden flex items-start h-[100%]'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            reiciendis earum architecto ut maxime quaerat assumenda, aut omnis
            amet autem laboriosam odit, quod laudantium! Facere perferendis
            deleniti delectus architecto earum.
          </p>
        </div>
      </td>
      <td className='flex  items-start justify-start'>
        <div className='join rounded-none'>
          <button className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'>
            «
          </button>
          <button className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'>
            1
          </button>
          <button className='join-item btn  bg-primer text-sekunder border-none hover:bg-primer'>
            »
          </button>
        </div>
      </td>
      <td className='text-start flex'>
        <h3>900$</h3>
      </td>
    </tr>
  )
}
