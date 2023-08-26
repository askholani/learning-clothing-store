'use client'

import { useState, MouseEvent, useEffect, useCallback, useMemo } from 'react'

import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import NavbarShowItem from './NavbarShowItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useCartContext } from '../../context/CartContex'

const navbarShop = ['shop', 'new collection', 'lookbook']

/**
 * showList :
 * menampilkan list produk
 * ketika user menekan shop, new collection, lookbook
 * @date 8/7/2023 - 3:17:44 PM
 *
 * @export
 * @param {{ categories: []; cookieCart?: string }} props
 * @returns {*}
 */
export default function Navbar(props: { categories: []; cookieCart?: string }) {
  const { categories, cookieCart } = props

  const path = usePathname()

  const { state, dispatch } = useCartContext()

  const [showList, setShowList] = useState<boolean>(false)
  const [choice, setChoice] = useState<string | null>('')

  const countCartItems = useMemo(() => {
    const cartItems = state ? [...state] : []
    let totalQty = 0 // Memberikan nilai awal 0 pada totalQty
    if (cartItems.length !== 0) {
      totalQty = cartItems.reduce((accumulator, currentValue) => ({
        qty: accumulator.qty + currentValue.qty,
        id: -1,
        size: 's',
      })).qty // Mengakses properti qty dari hasil reduce
    }
    return totalQty
  }, [state])

  /**
   * mengambil nilai dari tag li
   * simpan nilai dalam useState untuk di kirim ke NabvarShowItem dan dilakukan fetch ke db
   * manajemen kapan navbar show list muncul jika yang li yang sama maka akan menutup
   * jika yang di klik li yang berbeda maka hanya menyimpan perubahan
   *
   * @param e
   */
  const handleShowList = useCallback(
    (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
      const valueOfLi: string | null = e.currentTarget.textContent
      setChoice(valueOfLi)
      valueOfLi !== choice ? setShowList(true) : setShowList(() => !showList)
    },
    [showList, choice],
  )

  const handleShowListChild = (e: boolean) => {
    setShowList(e)
  }

  /**
   * menyimpan cookie yang diambil ke context
   */
  useEffect(() => {
    dispatch({ type: 'GET' })
  }, [])

  return (
    <div className='drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div className='w-full navbar bg-base-300'>
          <div className='flex-none lg:hidden'>
            <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </label>
          </div>
          <div className='flex-1 px-2 mx-2'>Navbar Title</div>
          <div className='flex-none hidden lg:block'>
            <ul className='menu menu-horizontal'>
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        Content
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-base-200'>
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
