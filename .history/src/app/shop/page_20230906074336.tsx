// 'use client'
'use server'

// import { Fragment, useCallback, useState } from 'react'
import { Fragment } from 'react'

import Pagination from '../../components/pagination/Pagination'
import { productsType } from '../../utils/type'
import ListItems from '../../components/item/ListItems'
import SearchBar from '../../components/search/SearchBar'

export default function Page() {
  const [items, setItems] = useState<productsType[] | []>([])

  const handleGetProducts = useCallback((items: productsType[]) => {
    setItems(items)
  }, [])

  // console.log('items', items)

  // let image = items.length !== 0 ? items[0].image : ''

  // console.log('image', image)

  return (
    <Fragment>
      <SearchBar />
      <section>
        {/* <ListItems
          items={items }
          // items={deferredValue}
          // items={items ? items : []}
          base={true}
          gap='8'
          grid='grid-grid-cols-2 sm:grid-cols-3 md:grid-cols-10'
        /> */}
        {<ListItems />}
        <section className='flex justify-center'>
          <Pagination onGetProducts={handleGetProducts} />
          {/* <Pagination /> */}
        </section>
      </section>
    </Fragment>
  )
}
