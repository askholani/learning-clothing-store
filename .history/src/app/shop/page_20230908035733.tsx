'use client'

import { Fragment, useCallback, useState } from 'react'
// import { Fragment } from 'react'

import Pagination from '../../components/pagination/Pagination'
import { productsType } from '../../utils/type'
import ListItems from '../../components/item/ListItems'
import SearchBar from '../../components/search/SearchBar'
import Item from '../../components/item/Item'

import { shop } from '../../components/item/ListItems'

const defaultArray: {}[] = new Array(10).fill({
  key: 0,
  base: false,
  text: null,
  image: null,
  price: 0,
  keyItem: 0,
})

export default function Page() {
  const [items, setItems] = useState<any[]>(defaultArray)
  console.log('items', items)
  console.log('typeof items', typeof items)

  const handleGetProducts = useCallback((items: productsType[]) => {
    setItems(items)
  }, [])

  return (
    <Fragment>
      <SearchBar />
      <section>
        <ul className='grid grid-grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-4 md:gap-y-8 w-full'>
          {items.map((item: any, index) => {
            return (
              <Item
                key={item.key === 0 ? index : item.key}
                base={true}
                text={item.name}
                image={item.image}
                price={item.price}
                keyItem={item.id}
                classNameItem='h-[55vh] sm:h-[40vh] md:w-full'
              />
            )
          })}
        </ul>
        <section className='flex justify-center'>
          <Pagination onGetProducts={handleGetProducts} />
        </section>
      </section>
    </Fragment>
  )
}
