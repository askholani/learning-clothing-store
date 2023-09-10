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

  // const item =
  //   deferredValue.length !== 0 ? (
  //     <ListItems
  //       n='3'
  //       items={deferredValue}
  //       gap='4'
  //       height='h-full'
  //       base={true}
  //       typeOfItem='shop'
  //     />
  //   ) : (
  //     <div className='w-full flex justify-center items-center'>
  //       <span className='loading loading-bars loading-lg'></span>
  //     </div>
  //   )

  // console.log('items', items)

  return (
    <Fragment>
      <SearchBar />
      <section>
        <Item image={items[0].image} />
      </section>
      <section className='flex justify-center'>
        <Pagination onGetProducts={handleGetProducts} />
      </section>
    </Fragment>
  )
}
