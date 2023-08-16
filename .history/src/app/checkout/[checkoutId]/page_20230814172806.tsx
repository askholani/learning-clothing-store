'use client'

import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCheckoutContext } from '@components/context/ChechkoutContex'
import ListItems from '@components/components/item/ListItems'

export default function Page() {
  const [items, setItems] = useState<object | null>(null)
  const { checkout, checkoutDispatch } = useCheckoutContext()

  useEffect(() => {
    checkoutDispatch({ type: 'GET' })
  }, [checkout])
  console.log('checkout', checkout)

  const handleItems = (items: object | null) => {
    setItems(items)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const router = useRouter()

  return (
    <Fragment>
      <section className='  w-[40%]'>
        <h1 className='text-5xl font-bold'>checkout</h1>
      </section>
      <section className='grid grid-cols-12 gap-x-20'>
        <div className='col-span-6 border-t pt-8'>
          {/* <ul>
            <li className='border-b pb-8 mb-8'>
              <div className='flex justify-between gap-x-4'>
                <div className='w-[10rem] h-[13rem] bg-sekunder'></div>
                <div className='flex flex-col justify-between w-[40%]'>
                  <h2 className='text-xl font-bold'>
                    leather cafe racer jacker
                  </h2>
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
                <div className='flex flex-col justify-between text-sm'>
                  <h2>remove</h2>
                  <h2>900$</h2>
                </div>
              </div>
            </li>
          </ul> */}
          <ListItems />
          <div className='flex justify-center'>
            {/* <Pagination itemsPerPage={4} onGetItems={handleItems} /> */}
          </div>
        </div>
        <div className='col-span-6 border-t pt-8'>
          <form onSubmit={handleSubmit}>
            <div>
              <h2 className='pb-4'>personal information</h2>
              <div className='grid grid-cols-12 gap-4 '>
                <input
                  type='text'
                  placeholder='EMAIL ADDRESS'
                  className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer'
                />
                <input
                  type='text'
                  placeholder='CODE'
                  className='input input-bordered  col-span-4 rounded-none text-sekunder bg-primer'
                />
                <input
                  type='text'
                  placeholder='PHONE'
                  className='input input-bordered  col-span-8 rounded-none text-sekunder bg-primer'
                />
              </div>
            </div>
            <div>
              <h2 className='py-4'>shipping information</h2>
              <div className='grid grid-cols-12 gap-4'>
                <input
                  type='text'
                  placeholder='FIRST NAME'
                  className='input input-bordered  col-span-6 rounded-none text-sekunder bg-primer'
                />
                <input
                  type='text'
                  placeholder='LAST NAME'
                  className='input input-bordered  col-span-6 rounded-none text-sekunder bg-primer'
                />
                <input
                  type='text'
                  placeholder='STREET ADDRESS'
                  className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer'
                />
                <input
                  type='text'
                  placeholder='APARTMENT'
                  className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer'
                />
                <input
                  type='text'
                  placeholder='CITY'
                  className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer'
                />
                <input
                  type='text'
                  placeholder='APARTMENT'
                  className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer'
                />
                <select className='select select-bordered col-span-4 rounded-none text-sekunder bg-primer'>
                  <option>CITY</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <select className='select select-bordered col-span-4 rounded-none text-sekunder bg-primer'>
                  <option>STATE</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <select className='select select-bordered col-span-4 rounded-none text-sekunder bg-primer'>
                  <option>ZP-CODE</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
            <div>
              <h2 className='py-4'>shipping method</h2>
              <div className='flex flex-col'>
                <div className='form-control'>
                  <label className='label cursor-pointer justify-normal gap-x-4'>
                    <input
                      type='radio'
                      name='radio-10'
                      className='radio checked:bg-primer border-sekunder'
                    />
                    <div className='flex justify-between w-full'>
                      <span className='w-[50%]'>standart shipping</span>
                      <div className='flex justify-between w-[50%]'>
                        <span>3-5 working days </span>
                        <span>10000$</span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className='form-control'>
                  <label className='label cursor-pointer justify-normal gap-x-4'>
                    <input
                      type='radio'
                      name='radio-10'
                      className='radio checked:bg-primer border-sekunder'
                    />
                    <div className='w-full flex justify-between'>
                      <span className='w-[50%]'>post office</span>
                      <div className='flex justify-between w-[50%]'>
                        <span>1-3 working days </span>
                        <span>10000$</span>
                      </div>
                    </div>
                  </label>
                </div>

                <div className='form-control'>
                  <label className='label cursor-pointer justify-normal gap-x-4'>
                    <input
                      type='radio'
                      name='radio-10'
                      className='radio checked:bg-primer border-sekunder'
                    />
                    <div className='w-full flex justify-between'>
                      <span className='w-[50%]'>pickup</span>
                      <div className='flex justify-between w-[50%]'>
                        <span>1-3 working days </span>
                        <span>free</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h2 className='py-4'>payment</h2>
              <div className='grid grid-cols-12 gap-4'>
                <select className='select select-bordered col-span-12 rounded-none text-sekunder bg-primer'>
                  <option defaultChecked={true}>BANK CARD</option>
                  <option>APPLE PAY</option>
                  <option>GOOGLE PAY</option>
                </select>
                <input
                  type='text'
                  placeholder='CREDIT CARD'
                  className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer'
                />
                <input
                  type='date'
                  placeholder='EXPIRATION DATE *'
                  className='input input-bordered  col-span-6 rounded-none text-sekunder bg-primer'
                />
                <input
                  type='text'
                  placeholder='SW*'
                  className='input input-bordered  col-span-6 rounded-none text-sekunder bg-primer'
                />
                <button
                  type='submit'
                  className='btn col-span-6 rounded-none'
                  onClick={() => router.back()}>
                  go back
                </button>
                <button
                  type='submit'
                  className='btn col-span-6 rounded-none'
                  onClick={() => router.push('/checkout/123/payment')}>
                  pay and place order
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  )
}
