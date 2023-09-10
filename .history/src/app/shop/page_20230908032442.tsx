'use client'

import { Fragment, useCallback, useState } from 'react'
// import { Fragment } from 'react'

import Pagination from '../../components/pagination/Pagination'
import { productsType } from '../../utils/type'
import ListItems from '../../components/item/ListItems'
import SearchBar from '../../components/search/SearchBar'
import Item from '../../components/item/Item'

import { shop } from '../../components/item/ListItems'

const defaultArray: {}[] = [
  {
    key: 0,
    base: false,
    text: '',
    image: '',
    price: 0,
    keyItem: 0,
  },
]
defaultArray.length = 10
defaultArray.map((i,index)=>{
  return defaultArray[0]={
    key: 0,
    base: false,
    text: '',
    image: '',
    price: 0,
    keyItem: 0,
  },
})

export default function Page() {
  const [items, setItems] = useState<any[]>(defaultArray)
  console.log('items', items)

  // const coba = items.map(() => {
  //   console.log('hai')
  // })

  console.log('defaultArrays', defaultArray)
  console.log('items', items)

  const handleGetProducts = useCallback((items: productsType[]) => {
    setItems(items)
  }, [])

  return (
    <Fragment>
      <SearchBar />
      <section>
        <ul className='grid grid-grid-cols-2 sm:grid-cols-3 md:grid-cols-10 gap-x-8 gap-y-4 md:gap-y-8 w-full'>
          {/* {items.map((item: shop) => {
            return (
              <Item
                key={item ? item.key : ''}
                base={item ? true : false}
                text={item ? item.name : ''}
                image={item ? item.image : ''}
                price={item ? item.price : 0}
                keyItem={item ? item.id : 0}
              />
            )
          })} */}
        </ul>
        <section className='flex justify-center'>
          <Pagination onGetProducts={handleGetProducts} />
        </section>
      </section>
    </Fragment>
  )
}
