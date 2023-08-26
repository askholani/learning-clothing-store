'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import useWindowDimensions from '../../hook/useWindowDimension'

const NavbarMain = dynamic(() => import('./NavbarMain'))
const NavbarShowItem = dynamic(() => import('./NavbarShowItem'))
const NavbarSide = dynamic(() => import('./NavbarSide'))

export default function Navbar() {
  const { width, height } = useWindowDimensions()

  console.log('typeof width', typeof width)
  console.log('height', height)

  const [show, setShow] = useState<boolean>(false)
  const [showSide, setShowSide] = useState<boolean>(false)

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
