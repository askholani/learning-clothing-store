'use client'

import { productsType } from '@components/utils/type'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'
import ReactPaginate from 'react-paginate'
import useSWR from 'swr'
import { useRouter, useSearchParams } from 'next/navigation'
import { itemType, useCartContext } from '@components/store/CartContex'

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

/**
 * get data dari db bedasarkan parameter (url)
 * @date 8/9/2023 - 9:49:41 PM
 *
 * @export
 * @param {?number} [page]
 * @returns {{ products: any; isLoading: any; isError: any; }}
 */
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

export default function Pagination(props: {
  onGetProducts?: (items: productsType[]) => void
  onGetCarts?: (items: itemType[]) => void
  numberOfItems?: number
}) {
  const { state } = useCartContext()

  const { onGetProducts, numberOfItems = 4 } = props

  const router = useRouter()
  const searchParams = useSearchParams().get('page')
  const page = searchParams ? parseInt(searchParams) : 1

  const [pageCount, setPageCount] = useState<number>(0)

  const { data } = useProductsCount()
  const dataCount = data ? data.result : 1
  const { products, isLoading, isError } = useProduct(page)

  useEffect(() => {
    const items = products ? products.result : ''
    if (onGetProducts !== undefined) {
      onGetProducts(items)
    }
  }, [products])

  useEffect(() => {
    setPageCount(Math.ceil(dataCount / 12))
  }, [dataCount])

  const handlePageClick = (e: event) => {
    /**
     * e : objek berisi nilai dari pagination
     * newOffset : batas awal baru dari item
     * e.selected : nilai dalam objek = 0
     */
    const url = window.location.href.toString()
    const newUrl = url.replace(/page=\d+/, `page=${e.selected + 1}`)
    // setCount(page)
    router.push(newUrl)
  }

  return (
    <Fragment>
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
        forcePage={page - 1}
      />
    </Fragment>
  )
}
