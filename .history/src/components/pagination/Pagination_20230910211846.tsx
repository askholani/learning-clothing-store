'use client'

import { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { useRouter, useSearchParams } from 'next/navigation'

import ReactPaginate from 'react-paginate'

import { productsType } from '../../utils/type'

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
  onGetProducts: (items: productsType[]) => void
}) {
  const { onGetProducts } = props

  const [pageCount, setPageCount] = useState<number>(0)

  const router = useRouter()
  const searchParams = useSearchParams().get('page')
  const page = searchParams ? parseInt(searchParams) : 1

  const { data } = useProductsCount()
  const dataCount = data ? data.result : 1

  const { products, isLoading, isError } = useProduct(page)

  useEffect(() => {
    const items = products ? products.result : ''
    console.log('items', items)
    console.log('items.length', items.length)
    console.log('typeof items', typeof items)
    if (typeof items !== 'string') {
      onGetProducts(items)
    }
  }, [products, onGetProducts])

  useEffect(() => {
    setPageCount(Math.ceil(dataCount / 12))
  }, [dataCount])

  /**
   * fungsi berjalan setiap kali user menekan next atau previous
   * mengambil angka dari pagination
   * mengubah url bedasarkan angka tersebut
   * e : angka yang diambil
   * @date 8/9/2023 - 9:54:46 PM
   *
   * @param {event} e
   */
  const handlePageClick = (e: any) => {
    const url = window.location.href.toString()
    const newUrl = url.replace(/page=\d+/, `page=${e.selected + 1}`)
    router.push(newUrl)
  }

  console.log('page -1', page - 1)

  return (
    <Fragment>
      <ReactPaginate
        nextLabel='>>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        pageCount={pageCount}
        previousLabel='<<'
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
