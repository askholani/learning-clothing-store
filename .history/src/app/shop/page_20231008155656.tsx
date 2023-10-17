'use client'

import { Fragment, useCallback, useState } from 'react'
import staticImage from '../../../public/images/rectangle1.jpg'
import SearchBar from '../../components/search/SearchBar'
import Pagination from '../../components/pagination/Pagination'
import ImageComp from '../../components/image/ImageComp'

import { productsType } from '../../utils/type'

const defaultArray: {}[] = new Array(10).fill({
  key: 0,
  base: false,
  text: null,
  image: staticImage,
  price: 0,
  keyItem: 0,
})

export default function Page() {
  const [items, setItems] = useState<any[]>(defaultArray)

  const handleGetProducts = useCallback((items: productsType[]) => {
    setItems(items)
  }, [])

  return (
    <Fragment>
      <SearchBar />
      <section>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-4'>
          {items &&
            items.map((product: any) => {
              return (
                <div
                  className='h-[30vh] sm:h-[40vh] col-span-1'
                  key={product.idProduct}>
                  <div className='w-full h-full mx-auto overflow-hidden relative'>
                    <ImageComp
                      src={product.image}
                      alt='about-image-2'
                      sizes='(min-width: 780px) calc(20vw - 30px), (min-width: 640px) calc(50vw - 120px), calc(50vw - 24px)'
                      className='object-cover'
                      quality={100}
                      priority={true}
                    />
                    <p className='text-end'>02</p>
                  </div>
                  <h4>{itemsname}</h4>
                </div>
              )
            })}
        </div>

        {/* <ul className='grid grid-grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4 md:gap-y-8 w-full'>
          {items.map((item: any, index) => {
            return (
              <Item
                key={item.key === 0 ? index : item.id}
                base={true}
                text={item.name}
                image={item.image}
                price={item.price}
                keyItem={item.id}
                classNameItem='h-[60vh] sm:h-[40vh] md:w-full'
                size='(min-width: 1460px) 400px, (min-width: 780px) calc(30.91vw - 45px), calc(33.48vw - 11px)'
              />
            )
          })}
        </ul> */}
        <section className='flex justify-center'>
          <Pagination onGetProducts={handleGetProducts} />
        </section>
      </section>
    </Fragment>
  )
}
