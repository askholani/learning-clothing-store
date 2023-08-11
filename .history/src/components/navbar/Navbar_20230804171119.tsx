'use client'

import { useState, MouseEvent, useContext, useEffect } from 'react'

import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import NavbarShowItem from './NavbarShowItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import { useCartContext } from '@components/store/CartContex'

import { cartCookies } from '@components/cookies/cart'

const navbarShop = ['shop', 'new collection', 'lookbook']
const navbarAccount = ['cart', 'wishlist']

export default async function Navbar(props: {
  categories: []
  cookieCart?: string | undefined
}) {
  const { categories } = props
  console.log('hai')

  const [showList, setShowList] = useState<boolean>(false)
  const [choice, setChoice] = useState<string | null>('')

  // const { state, dispatch } = useCartContext()

  const path = usePathname()

  /**
   * mengambil nilai dari tag li
   * simpan nilai dalam useState untuk di kirim ke NabvarShowItem dan dilakukan fetch ke db
   * manajemen kapan navbar show list muncul jika yang li yang sama maka akan menutup
   * jika yang di klik li yang berbeda maka hanya menyimpan perubahan
   *
   * @param e
   */
  const handleShowList = (
    e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
  ) => {
    const valueOfLi: string | null = e.currentTarget.textContent
    setChoice(valueOfLi)
    valueOfLi !== choice ? setShowList(true) : setShowList(() => !showList)
  }

  const handleShowListChild = (e: boolean) => {
    setShowList(e)
  }

  // useEffect(() => {
  //   // dispatch({ type: 'GET', item: cookieCart })
  //   console.log('hai')
  // }, [state])

  return (
    <>
      <h1>HAI NAVBAR</h1>
    </>
  )
}
