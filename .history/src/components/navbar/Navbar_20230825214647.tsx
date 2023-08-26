'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import useWindowDimensions from '../../hook/useWindowDimension'
import { useCartContext } from '../../context/CartContex'

const NavbarMain = dynamic(() => import('./NavbarMain'))
const NavbarShowItem = dynamic(() => import('./NavbarShowItem'))
const NavbarSide = dynamic(() => import('./NavbarSide'))

export default function Navbar() {
  const { width, height } = useWindowDimensions()

  const [showList, setShowList] = useState<boolean>(false)
  const [showSide, setShowSide] = useState<boolean>(false)
  const [selection, setSelection] = useState<any>('')
  const { state, dispatch } = useCartContext()

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

  console.log('countCartItems', countCartItems)

  const handleShowList = useCallback(
    (e: any) => {
      const valueOfLi: string | null = e.currentTarget.textContent
      console.log('valueOfLi', valueOfLi)
      setSelection(valueOfLi)
      valueOfLi !== selection ? setShowList(true) : setShowList(() => !showList)
    },
    [showList, selection],
  )

  useEffect(() => {
    if (width) {
      if (width < 768) {
        setShowList(false)
      } else if (width > 768) {
        setShowSide(false)
      }
    }
  }, [width])

  useEffect(() => {
    dispatch({ type: 'GET' })
  }, [])

  return (
    <nav>
      <NavbarMain
        onHandleShowList={handleShowList}
        onHandleShowSide={handleShowSide}
      />
      <NavbarShowItem open={showList} />
      <NavbarSide onHandleShowSide={handleShowSide} open={showSide} />
    </nav>
  )
}
