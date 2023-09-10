'use client'

import { Fragment, useDeferredValue, useCallback, useState, useEffect } from 'react'

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

  let image = ''
  useEffect(()=>{
    if(items) {
      image = items[0].image
    }
  },[items])

  console.log('image',w-32 h-40)

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
