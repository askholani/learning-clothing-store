import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { ThumbsOptions } from 'swiper/types/modules/thumbs'
import SlideNextButton from './SlideNextButton'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/effect-flip'

import './styles.css'

// import required modules
import { EffectFlip, FreeMode, Thumbs } from 'swiper/modules'
import ImageComp from '../image/ImageComp'

export default function SwiperType(props: { itemProductImages: any[] }) {
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
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, EffectFlip]}
        className='mySwiper2'>
        <SlideNextButton />
        {itemProductImages.map((item, idx) => {
          return (
            <SwiperSlide key={idx} className=''>
              <div className='h-[60vh] md:h-[65vh] md:w-full relative'>
                <ImageComp
                  src={item}
                  alt='hero-1'
                  priority={true}
                  sizes='(min-width: 1460px) 400px, (min-width: 780px) calc(30.91vw - 45px), calc(33.48vw - 11px)'
                  className='object-contain'
                  quality={100}
                  style={true}
                />
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
