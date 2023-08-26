'use client'

import { useState, MouseEvent, useEffect, useCallback, useMemo } from 'react'

import {
  Bars3BottomLeftIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
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
    <>
      <div className='drawer mx-4 md:mx-0'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          {/*  */}
          <nav className='navbar grid grid-cols-3 gap-x-4 text-sekunder uppercase'>
            <div className='flex-none lg:hidden'>
              <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
                <Bars3BottomLeftIcon />
              </label>
            </div>

            <nav className='col-span-1 col-end-4'>
              <Link href={'/'} className='block font-bold'>
                <span>kirman</span>
              </Link>
            </nav>

            <div className='col-span-2 lg:grid grid-cols-2 hidden'>
              <div className='justify-center md:justify-normal'>
                <ul className='hidden md:block '>
                  {navbarShop.map((link) => {
                    const isActive = path.startsWith(`/${link}`)
                    return (
                      <li
                        key={link}
                        onClick={(e) => handleShowList(e)}
                        className='hover:cursor-pointer'>
                        {link}
                      </li>
                    )
                  })}
                </ul>

                <Link href={'/'} className='md:hidden'>
                  <span>kirman</span>
                </Link>
              </div>

              <div className='w-full'>
                <div className='flex w-full justify-end'>
                  <ul>
                    <li>
                      <Link href={`/cart/123?page=1`}>
                        <div className='flex justify-between gap-x-4'>
                          <span>cart</span>
                          {countCartItems ? (
                            <span>[ {countCartItems} ]</span>
                          ) : (
                            <span>[ 0 ]</span>
                          )}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/wishlist/123`}>
                        <div className='flex justify-between gap-x-4'>
                          <span>wishlist</span>
                          <span>[ 0 ]</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/login`}>
                        <div className='flex justify-between gap-x-4'>
                          <span className=''>login</span>
                          <span>
                            <ArrowRightOnRectangleIcon className='w-5 h-5' />
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 h-full bg-primer'>
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
    </>
  )
}
