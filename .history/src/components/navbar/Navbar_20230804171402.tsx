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
  console.log('hai')

  return (
    <>
      <h1>HAI NAVBAR</h1>
    </>
  )
}
