'use client'

import { useState, MouseEvent, useContext, useEffect, useCallback } from 'react'

import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import NavbarShowItem from './NavbarShowItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useCartContext } from '@components/store/CartContex'

import { cartCookies } from '@components/cookies/cart'

const navbarShop = ['shop', 'new collection', 'lookbook']
const navbarAccount = ['cart', 'wishlist']

export default function Navbar(props: {
  categories: []
  cookieCart?: string | undefined
}) {
  const { categories, cookieCart } = props
  console.log('hai')

  const [showList, setShowList] = useState<boolean>(false)
  const [choice, setChoice] = useState<string | null>('')

  const { state, dispatch } = useCartContext()

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
    dispatch({ type: 'GET', item: cookieCart })
    console.log('hai')
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
                    <span>[ {state.cart.length} ]</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={`/cart/123`}>
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
