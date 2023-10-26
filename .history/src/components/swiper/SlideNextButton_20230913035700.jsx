// some-inner-component.jsx
import { React } from 'react'
import { useSwiper } from 'swiper/react'
import 'swiper/css/navigation'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <>
      <button
        className='w-40 h-20 relative bg-primer swiper-button-prev'
        onClick={() => swiper.slidePrev()}>
        <span className='w-10 h-10'>
          <ChevronLeftIcon />
        </span>
      </button>
      <button
        className='w-40 h-20 relative bg-primer swiper-button-next'
        onClick={() => swiper.slideNext()}>
        <span>nexxt</span>
      </button>
    </>
  )
}
