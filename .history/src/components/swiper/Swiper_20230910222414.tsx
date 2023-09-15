import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { ThumbsOptions } from 'swiper/types/modules/thumbs'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/effect-flip'

import './styles.css'

// import required modules
import { EffectFlip, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import ImageComp from '../image/ImageComp'

export default function SwiperType(props: { itemProductImages: string[] }) {
  // console.log('swiper')
  const { itemProductImages } = props
  itemProductImages.reverse()
  const [thumbsSwiper, setThumbsSwiper] =
    useState<ThumbsOptions['swiper']>(null)

  return (
    <>
      <Swiper
        effect={'flip'}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, EffectFlip]}
        className='mySwiper2'>
        {itemProductImages.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              {/* <img src={item} alt='' /> */}
              <ImageComp
                src={item}
                alt='detail image'
                quality={100}
                sizes='(min-width: 1460px) 400px, (min-width: 780px) calc(30.91vw - 45px), calc(33.48vw - 11px)'
                priority={true}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'>
        {itemProductImages.map((item: string, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={item} alt='' />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
