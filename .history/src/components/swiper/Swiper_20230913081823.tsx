import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { ThumbsOptions } from 'swiper/types/modules/thumbs'
import SlideButton from './SlideButton'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/effect-flip'
import './styles.css'

import { EffectFlip, FreeMode, Thumbs } from 'swiper/modules'
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

export default function SwiperType(props: { itemProductImages: any[] }) {
  const [items, setItems] = useState<any[]>(defaultArray)

  const { itemProductImages } = props
  itemProductImages.reverse()

  const [thumbsSwiper, setThumbsSwiper] =
    useState<ThumbsOptions['swiper']>(null)

  useEffect(() => {
    // console.log('itemProductImages.length', itemProductImages.length)
    if (itemProductImages.length !== 0) {
      console.log('hai')
      setItems(itemProductImages.reverse())
    }
  }, [itemProductImages])

  return (
    <>
      <Swiper
        effect={'flip'}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, EffectFlip]}
        className='mySwiper2'>
        <SlideButton />
        {items.map((item, idx) => {
          console.log('item.key', item.key)
          console.log('item', item)
          return (
            <SwiperSlide key={idx} className=''>
              <div className='h-[60vh] md:h-[65vh] md:w-full relative'>
                <ImageComp
                  src={item.key === 0 ? item.image : item}
                  // src={item}
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
        {/* {items.map((item: string, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={item} alt='' />
            </SwiperSlide>
          )
        })} */}
      </Swiper>
    </>
  )
}
