'use client'
import AccordionShop from '@components/components/accordion/AccordionShop'
import Recommended from '@components/components/recomended/Recomended'
import SwiperType from '@components/components/swiper/Swiper'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { Fragment } from 'react'
import useSWR from 'swr'

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
  const params = useParams()
  const id = parseInt(params.shopId)
  const imageItems = useProductImages(id)
  const detailItems = useDetailProduct(id)
  const productimages = imageItems.data ? imageItems.data.result : ''
  const productDetail = detailItems.data ? detailItems.data.result : ''
  const { images } = productimages
  const { image } = productDetail
  console.log(images['0'])

  return (
    <Fragment>
      <section className='grid grid-cols-12 gap-x-8 border-b pb-8'>
        <div className='col-span-5 h-[90vh]'>
          <SwiperType />
        </div>
        <div className='col-span-7 flex flex-col'>
          <h1 className='text-sm'>outwear</h1>
          <h2 className='text-5xl font-bold my-8'>alpaca fleece pulover</h2>
          <h3 className='text-xs'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            aliquid pariatur, id consectetur reprehenderit vero, consequuntur
            necessitatibus molestias ex ab ipsam sit eaque voluptatum quis velit
            praesentium saepe dolorem? Aliquid.
          </h3>
          <div className='flex flex-col w-full my-8'>
            <div className='flex justify-between py-4 border-y'>
              <div className='flex gap-x-4'>
                <h4 className='font-bold'>collection</h4>
                <h4 className='normal-case font-light'>hiking collection</h4>
              </div>
              <div className='flex gap-x-4'>
                <h4 className='font-bold'>collor</h4>
                <h4 className='normal-case font-light'>blue</h4>
              </div>
            </div>
            <h3 className='text-end text-2xl'>900$</h3>
            <div className='grid grid-cols-2 my-4 gap-x-8'>
              <button className='btn rounded-none'>add to wishlist</button>
              <button className='btn rounded-none'>add to chart</button>
            </div>
            <AccordionShop />
          </div>
        </div>
      </section>
      <Recommended height='h-[20rem]' />
    </Fragment>
  )
}
