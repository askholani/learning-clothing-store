'use client'

import axios from 'axios'
import { useParams } from 'next/navigation'
import { Fragment } from 'react'
import useSWR from 'swr'

import AccordionShop from '@components/components/accordion/AccordionShop'
import Recommended from '@components/components/recomended/Recomended'
import SwiperType from '@components/components/swiper/Swiper'

import { addCookies } from '@components/cookies/cart'
import { useCartContext } from '@components/store/CartContex'

/**
 * mengambil data lgs ke db product dengan id bedasarkan id url
 * @date 8/5/2023 - 3:01:31 PM
 *
 * @export
 * @param {?number} [id]
 * @returns {{ data: any; isLoading: any; error: any; }}
 */
export function useDetailProduct(id?: number) {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  const { data, error, isLoading } = useSWR(
    `/api/shop/detail?id=${id}`,
    fetcher,
  )
  return {
    data,
    isLoading,
    error,
  }
}

/**
 * mengambil data lgs ke db product_images bedasarkan id di url
 * @date 8/5/2023 - 3:00:20 PM
 *
 * @export
 * @param {?number} [id]
 * @returns {{ data: any; isLoading: any; error: any; }}
 */
export function useProductImages(id?: number) {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  const { data, isLoading, error } = useSWR(`/api/shop/images?id=58`, fetcher)

  return {
    data,
    isLoading,
    error,
  }
}

export default function Page() {
  const { dispatch } = useCartContext()
  const params = useParams()

  const id = parseInt(params.shopId)
  const imageItems = useProductImages(id)
  const detailItems = useDetailProduct(id)

  const productimages = imageItems.data ? imageItems.data.result : ''
  const productDetail = detailItems.data ? detailItems.data.result : ''

  const { images } = productimages
  const {
    name,
    image,
    description,
    stock,
    price,
    id_category,
    id_rating,
    id_review,
  } = productDetail

  let itemProductImages = Object.values(images ? images : {}).map((a) => a)
  itemProductImages.push(image)

  const handleAddCartCookies = () => {
    const data = {
      id: id,
      name: name,
      image: image,
      description: description,
      price: price,
      qty: 1,
    }
    addCookies(data)
    // dispatch({ type: 'ADD', item: data })
  }

  return (
    <Fragment>
      <section className='grid grid-cols-12 gap-x-8 border-b pb-8'>
        <div className='col-span-5 h-[90vh]'>
          <SwiperType itemProductImages={itemProductImages} />
        </div>
        <div className='col-span-7 flex flex-col'>
          <h1 className='text-sm'>outwear</h1>
          <h2 className='text-5xl font-bold my-8'>{name}</h2>
          <h3 className='text-xs'>{description}</h3>
          <div className='flex flex-col w-full my-8'>
            <div className='flex justify-between py-4 border-y'>
              <div className='flex gap-x-4'>
                <h4 className='font-bold'>collection</h4>
                <h4 className='normal-case font-light'>hiking collection</h4>
              </div>
              <div className='flex gap-x-4'>
                <h4 className='font-bold'>stock</h4>
                <h4 className='normal-case font-light'>{stock}</h4>
              </div>
            </div>
            <h3 className='text-end text-2xl'>${price}</h3>
            <div className='grid grid-cols-2 my-4 gap-x-8'>
              <button className='btn rounded-none'>add to wishlist</button>
              <form action={handleAddCartCookies} className='w-full'>
                <button className='btn rounded-none w-full'>
                  add to chart
                </button>
              </form>
            </div>
            <div className='grid grid-cols-2 my-4 gap-x-8'>
              <select
                className='select w-full max-w-xs rounded-none text-primer uppercase text-center'
                defaultValue={'size'}>
                <option disabled value={`size`}>
                  size
                </option>
                <option value={`s`}>small {`(s)`}</option>
                <option value={`m`}>medium {`(m)`}</option>
                <option value={`l`}>large {`l`}</option>
                <option value={`xl`}>extra large {`xl`}</option>
              </select>
              <button className='btn rounded-none'>customize</button>
            </div>
            <AccordionShop />
          </div>
        </div>
      </section>
      <Recommended height='h-[20rem]' />
    </Fragment>
  )
}
