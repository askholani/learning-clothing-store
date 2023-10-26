import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { ThumbsOptions } from 'swiper/types/modules/thumbs'
import SlideButton from './SlideButton'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/effect-flip'
import './styles.css'

import { FreeMode, Thumbs } from 'swiper/modules'
import ImageComp from '../image/ImageComp'
import staticImage from '../../../public/images/rectangle1.jpg'

const defaultArray: any[] = new Array(10).fill({
  key: 0,
  base: false,
  text: null,
  image: staticImage,
  price: 0,
  keyItem: 0,
})

export default function SwiperType(props: { data: any }) {
  const [items, setItems] = useState<any[]>(defaultArray)
  const data = !props.data.isLoading ? props.data.data.result : {}

  const { productImages } = data

  // console.log('items', items)
  console.log('data', data)

  const [thumbsSwiper, setThumbsSwiper] =
    useState<ThumbsOptions['swiper']>(null)

  // useEffect(() => {
  //   if (itemProductImages.length !== 0) {
  //     console.log('hai')
  //     setItems(itemProductImages.images)
  //   }
  // }, [itemProductImages])

  return (
    <>
      <Swiper
        effect={'flip'}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className='mySwiper2'>
        <SlideButton />
        {productImages.map((item: any, idx: number) => {
          return (
            <SwiperSlide key={idx} className=''>
              <div className='h-[60vh] lg:h-full md:h-[70vh] w-full relative'>
                <div className='w-[90%] md:w-3/4 h-full mx-auto overflow-hidden relative'>
                  <ImageComp
                    src={item.key === 0 ? item.image : item}
                    alt='hero-1'
                    priority={true}
                    sizes='(min-width: 1460px) 400px, (min-width: 780px) calc(30.91vw - 45px), calc(33.48vw - 11px)'
                    className='object-contain'
                    quality={100}
                    style={true}
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className='mySwiper overflow-hidden'>
        {productImages.map((item: any, idx: number) => {
          return (
            <SwiperSlide key={idx}>
              <ImageComp
                src={item.key === 0 ? item.image : item}
                alt='hero-1'
                priority={true}
                sizes='(min-width: 1460px) 400px, (min-width: 780px) calc(30.91vw - 45px), calc(33.48vw - 11px)'
                quality={100}
                style={false}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
