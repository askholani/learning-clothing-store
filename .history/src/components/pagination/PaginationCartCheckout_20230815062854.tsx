'use client'

import { productsType } from '@components/utils/type'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'
import ReactPaginate from 'react-paginate'
import { itemType, useCartContext } from '@components/context/CartContex'
import { useCheckoutContext } from '@components/context/ChechkoutContex'

export default function PaginationCartCheckout(props: {
  onGetCarts: (items: itemType[]) => void
  contextType: string
}) {
  const { state } = useCartContext()
  const { checkout } = useCheckoutContext()

  const { onGetCarts, contextType } = props

  let data = []
  if (contextType === 'checkout') {
    data = checkout
  } else if (contextType === 'cart') {
    data = state
  }

  const [itemsCount, setItemsCount] = useState<number>(1)
  const [currentItems, setCurrentItems] = useState<number>(1)

  useEffect(() => {
    setItemsCount(Math.ceil(data.length / 4))
    const newItemsSelected = data.slice(0, 4)
    onGetCarts(newItemsSelected)
  }, [data])

  // useEffect(() => {
  // }, [])

  const handleNumberOfClick = (e?: any) => {
    const currentPage = e.selected + 1
    const currentStart = currentPage === 1 ? 0 : (currentPage - 1) * 4
    const currentEnd = currentPage * 4
    console.log('currentPage', currentPage)
    console.log('currentStart', currentStart)
    console.log('currentEnd', currentEnd)
    const newItemsSelected = state.slice(currentStart, currentEnd)
    onGetCarts(newItemsSelected)
  }

  return (
    <Fragment>
      <ReactPaginate
        nextLabel='next >'
        onPageChange={handleNumberOfClick}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        pageCount={itemsCount}
        previousLabel='< previous'
        pageClassName='page-item'
        pageLinkClassName='text-sekunder btn bg-primer border-none rounded-none hover:bg-primer'
        previousClassName=''
        previousLinkClassName='text-sekunder join-item btn btn-outline border border-none'
        nextClassName=''
        nextLinkClassName='text-sekunder join-item btn btn-outline border border-none'
        breakLabel=''
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='join'
        activeClassName='active'
        renderOnZeroPageCount={null}
        forcePage={currentItems - 1}
      />
    </Fragment>
  )
}
