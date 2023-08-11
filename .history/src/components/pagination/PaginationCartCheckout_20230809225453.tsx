'use client'

import { productsType } from '@components/utils/type'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'
import ReactPaginate from 'react-paginate'
import { itemType, useCartContext } from '@components/store/CartContex'

export default function PaginationCartCheckout(props: {
  onGetCarts?: (items: itemType[]) => void
}) {
  const [itemsCount, setItemsCount] = useState<number>(1)
  const [currentItems, setCurrentItems] = useState<number>(1)
  const { state } = useCartContext()

  useEffect(() => {
    setItemsCount(Math.ceil(state.length / 4))
  }, [state])

  const handleNumberOfClick = (e: any) => {
    console.log(e)
    const currentPage = e.selected
    const newItemsSelected = state.slice(currentPage - 1, currentPage * 2)
    console.log('state pcc', state)
    console.log('newItemsSelected', newItemsSelected)
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
