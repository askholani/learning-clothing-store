'use client'

import { Fragment, useDeferredValue, useCallback, useState } from 'react'

import Pagination from '../../components/pagination/Pagination'
import { productsType } from '../../utils/type'
import ListItems from '../../components/item/ListItems'
import SearchBar from '../../components/search/SearchBar'
import Item from '../../components/item/Item'

export default function Page() {
  const [items, setItems] = useState<productsType[] | []>([])

  const handleGetProducts = useCallback((items: productsType[]) => {
    setItems(items)
  }, [])

  const deferredValue = useDeferredValue(items)

  console.log('items', items)

  const image = items[0].image ? items[0].image : ''
  console.log('image', image)

  return (
    <Fragment>
      <SearchBar />
      <section>{/* <Item image={image} /> */}</section>
      <section className='flex justify-center'>
        <Pagination onGetProducts={handleGetProducts} />
      </section>
    </Fragment>
  )
}
