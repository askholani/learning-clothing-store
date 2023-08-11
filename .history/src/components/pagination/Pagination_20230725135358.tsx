'use client'

import axios from 'axios'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import useSWR from 'swr'

type Shop = {
  items: object[] | null
}

type pagination = {
  itemsPerPage: number
  onGetItems: (items: Shop['items']) => void
}

type event = {
  selected: number
}

const items: object[] = [
  {
    key: 1,
    price: 2,
    name: 'name of items',
    discount: 10,
  },

  {
    key: 2,
    price: 2,
    name: 'name of items',
    discount: 10,
  },

  {
    key: 3,
    price: 2,
    name: 'name of items',
    discount: 10,
  },

  {
    key: 4,
    price: 2,
    name: 'name of items',
    discount: 10,
  },

  {
    key: 5,
    price: 2,
    name: 'name of items',
    discount: 10,
  },

  {
    key: 6,
    price: 2,
    name: 'name of items',
    discount: 10,
  },

  {
    key: 7,
    price: 2,
    name: 'name of items',
    discount: 10,
  },

  {
    key: 8,
    price: 2,
    name: 'name of items',
    discount: 10,
  },
  {
    key: 9,
    price: 2,
    name: 'name of items',
    discount: 10,
  },

  {
    key: 10,
    price: 2,
    name: 'name of items',
    discount: 10,
  },
]

// itemsPerPaga nilai yang dikirim untuk menentukan items perhalman

export function useProduct(page?: number) {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const urlPage = page ? page : '1'
  const { data, error, isLoading } = useSWR(
    `/api/shop?page=${urlPage}`,
    fetcher,
  )
  return {
    products: data,
    isLoading,
    isError: error,
  }
}

export function useProductsCount() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  const { data, error, isLoading } = useSWR(`/api/shop/count`, fetcher)

  return { data, error, isLoading }
}

export default function Pagination({ itemsPerPage, onGetItems }: pagination) {
  const [pageCount, setPageCount] = useState<number>(0)
  const [count, setCount] = useState<number>(1)
  const { products, isLoading, isError } = useProduct(count)

  const { data } = useProductsCount()

  useEffect(() => {
    setPageCount(Math.ceil(data.result / 12))
  }, [])

  const handlePageClick = (e: event) => {
    /**
     * e : objek berisi nilai dari pagination
     * newOffset : batas awal baru dari item
     * e.selected : nilai dalam objek
     */
    setCount(e.selected)
  }

  return (
    <ReactPaginate
      nextLabel='next >'
      onPageChange={handlePageClick}
      pageRangeDisplayed={0}
      marginPagesDisplayed={0}
      pageCount={pageCount}
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
    />
  )
}
