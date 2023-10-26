'use client'

import { useState, useEffect, Fragment } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import ReactPaginate from 'react-paginate'

import { itemType, useCartContext } from '../../context/CartContex'
import { useCheckoutContext } from '../../context/CheckoutContex'

export default function PaginationCartCheckout(props: {
  onGetCarts: (items: itemType[]) => void
  contextType?: string
}) {
  const { state } = useCartContext()
  const { checkout } = useCheckoutContext()

  const { onGetCarts, contextType } = props

  const router = useRouter()

  let data = state
  if (contextType === 'checkout') {
    data = checkout
  }

  const searchParams = useSearchParams().get('page')
  const page = searchParams ? parseInt(searchParams) : 1

  // jumlah halaman
  const [itemsCount, setItemsCount] = useState<number>(1)

  console.log('data', data)

  useEffect(() => {
    const currentStart = page === 1 ? 0 : (page - 1) * 4
    const currentEnd = page * 4
    setItemsCount(Math.ceil(data.length / 4))
    const newItemsSelected = data.slice(currentStart, currentEnd)
    onGetCarts(newItemsSelected)
  }, [data, page, onGetCarts])

  const handleNumberOfClick = (e?: any) => {
    const currentPage = e.selected + 1
    const currentStart = currentPage === 1 ? 0 : (currentPage - 1) * 4
    const currentEnd = currentPage * 4
    const newItemsSelected = state.slice(currentStart, currentEnd)
    router.push(`?page=${currentPage}`)
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
        forcePage={page - 1}
      />
    </Fragment>
  )
}
