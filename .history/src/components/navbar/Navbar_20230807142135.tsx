'use client'

import { useState, MouseEvent, useEffect, useCallback, useMemo } from 'react'

import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import NavbarShowItem from './NavbarShowItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { itemType, useCartContext } from '@components/store/CartContex'

const navbarShop = ['shop', 'new collection', 'lookbook']

export default function Navbar(props: { categories: []; cookieCart?: string }) {
  const { categories, cookieCart } = props

  const [showList, setShowList] = useState<boolean>(false)
  const [choice, setChoice] = useState<string | null>('')

  const { state, dispatch } = useCartContext()

  const quantity = useCallback(() => {
    const cartItems = state ? [...state] : []
    let totalQty
    if (cartItems.length !== 0) {
      totalQty = cartItems.reduce((accumulator, currentValue) => ({
        qty: accumulator.qty + currentValue.qty,
        id: -1,
        size: 's',
      }))
    }

    return totalQty
  }, [state])

  // const countCartItems = useMemo(() => {
  //   const cartItems = state ? [...state] : []
  //   let totalQty
  //   if (cartItems.length !== 0) {
  //     totalQty = cartItems.reduce((accumulator, currentValue) => ({
  //       qty: accumulator.qty + currentValue.qty,
  //       id: -1,
  //       size: 's',
  //     }))
  //   }
  //   return totalQty
  // }, [state])
  console.log('state', state)
  console.log('')
  const path = usePathname()

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

  useEffect(() => {
    const res = dispatch({ type: 'GET', defaultItem: cookieCart })
  }, [])

  return (
    <nav className='flex flex-col mb-10 font-thin'>
      <nav className='navbar grid grid-cols-12 gap-x-4 text-sekunder uppercase'>
        <nav className='navbar-start col-span-4'>
          <Bars3BottomLeftIcon className='md:hidden w-8 h-8' />
          <Link href={'/'} className='hidden md:block font-bold'>
            <span>kirman</span>
          </Link>
        </nav>
        <div className='col-span-4 justify-center md:justify-normal'>
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
        <div className='col-span-4 w-full'>
          <div className='flex w-full justify-end'>
            <ul>
              <li>
                <Link href={`/cart/123`}>
                  <div className='flex justify-between'>
                    <span className='mx-4'>cart</span>
                    {/* {countCartItems ? (
                      <span>[ {countCartItems.qty} ]</span>
                    ) : (
                      <span>[ 0 ]</span>
                    )} */}
                    <span>[ 0 ]</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={`/wishlist/123`}>
                  <div className='flex justify-between'>
                    <span className='mx-4'>wishlist</span>
                    <span>[ 0 ]</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <NavbarShowItem
        show={showList}
        choice={choice}
        onHandleShowList={handleShowListChild}
        categories={categories}
      />
    </nav>
  )
}
