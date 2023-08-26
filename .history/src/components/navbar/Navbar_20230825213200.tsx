'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import useWindowDimensions from '../../hook/useWindowDimension'
import { useCartContext } from '../../context/CartContex'

const NavbarMain = dynamic(() => import('./NavbarMain'))
const NavbarShowItem = dynamic(() => import('./NavbarShowItem'))
const NavbarSide = dynamic(() => import('./NavbarSide'))

export default function Navbar() {
  const { width, height } = useWindowDimensions()

  console.log('typeof width', typeof width)
  console.log('height', height)

  const [show, setShow] = useState<boolean>(false)
  const [showSide, setShowSide] = useState<boolean>(false)
  const [selection, setSelection] = useState<string>('')
  const { state, dispatch } = useCartContext()

  useEffect(() => {
    if (width) {
      if (width < 768) {
        setShow(false)
      } else if (width > 768) {
        setShowSide(false)
      }
    }
  }, [width])

  const handleShowList = () => {
    setShow(!show)
  }

  const handleShowSide = () => {
    setShowSide(!showSide)
  }

  const countCartItems = useMemo(() => {
    const cartItems = state ? [...state] : []
    let totalQty = 0
    if (cartItems.length !== 0) {
      totalQty = cartItems.reduce((accumulator, currentValue) => ({
        qty: accumulator.qty + currentValue.qty,
        id: -1,
        size: 's',
      })).qty // Mengakses properti qty dari hasil reduce
    }
    return totalQty
  }, [state])

  return (
    <nav>
      <NavbarMain
        onHandleShowList={handleShowList}
        onHandleShowSide={handleShowSide}
      />
      <NavbarShowItem open={show} />
      <NavbarSide onHandleShowSide={handleShowSide} open={showSide} />
    </nav>
  )
}
