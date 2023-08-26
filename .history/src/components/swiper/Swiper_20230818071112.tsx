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

export default function SwiperType(props: {
  itemProductImages: string[] | unknown[]
}) {
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
              <img src={item} alt='' />
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
