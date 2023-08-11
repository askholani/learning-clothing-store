'use client'

import { useProduct } from '@components/utils/db'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

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
export default function Pagination({ itemsPerPage, onGetItems }: pagination) {
  const { results, isLoading, isError } = useProduct()
  // console.log(isLoading)
  // console.log(isError)
  console.log(results.pagination)

  // jumlah item yang dirender tiap halaman
  const [currentItems, setCurrentItems] = useState<Shop['items']>(null)

  // jumlah halaman bedasarkan jumlah item
  const [pageCount, setPageCount] = useState<number>(0)

  // batas awal item
  const [itemOffset, setItemOffset] = useState(0)

  // mengupdate tampilan item yang dirender
  //  ketika user menekan tombol pagination
  useEffect(() => {
    // fetch
    // batas akhir item
    const endOffset = itemOffset + itemsPerPage

    setCurrentItems(items.slice(itemOffset, endOffset))
    onGetItems(items.slice(itemOffset, endOffset))

    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (e: event) => {
    /**
     * e : objek berisi nilai dari pagination
     * newOffset : batas awal baru dari item
     * e.selected : nilai dalam objek
     */
    const newOffset = (e.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
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
