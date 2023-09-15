// some-inner-component.jsx
import { React } from 'react'
import { useSwiper } from 'swiper/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <div className='absolute'>
      <button
        className='w-40 h-40 relative bg-primer  rounded-full'
        onClick={() => swiper.slidePrev()}>
        <ChevronRightIcon className='w-10 h-10' />
      </button>
      <button
        className='w-40 h-40 relative bg-primer swiper-button-next'
        onClick={() => swiper.slideNext()}></button>
    </div>
  )
}
