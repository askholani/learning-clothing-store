'use client'

import { Fragment, useDeferredValue, useCallback, useState } from 'react'

import ListItems from '@components/components/item/ListItems'
import Pagination from '@components/components/pagination/Pagination'
import { productsType } from '@components/utils/type'
import SearchBar from '@components/components/search/SearchBar'
import Loading from '../loading'

export default function Page() {
  const [items, setItems] = useState<productsType[] | []>([])

  const handleGetProducts = useCallback((items: productsType[]) => {
    setItems(items)
  }, [])

  const deferredValue = useDeferredValue(items)
  console.log('defferedValue', deferredValue)
  console.log('items', items)

  const coba =
    deferredValue.length !== 0 ? (
      <ListItems n='3' items={items} gap='4' height='h-full' base={true} />
    ) : (
      <Loading />
    )

  return (
    <Fragment>
      <SearchBar />
      <section>
        {/* {deferredValue.length === 0 ? (
          <Loading />
        ) : (
          <ListItems n='3' items={items} gap='4' height='h-full' base={true} />
        )} */}
        {/* <ListItems n='3' items={items} gap='4' height='h-full' base={true} /> */}
        {coba}
      </section>
      <section className='flex justify-center'>
        <Pagination onGetProducts={handleGetProducts} />
      </section>
    </Fragment>
  )
}
