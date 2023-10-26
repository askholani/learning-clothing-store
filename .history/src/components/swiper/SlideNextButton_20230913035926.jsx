// some-inner-component.jsx
import { React } from 'react'
import { useSwiper } from 'swiper/react'
import 'swiper/css/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <>
      <button
        className='w-40 h-20 relative bg-primer swiper-button-prev rounded-full opacity-60'
        onClick={() => swiper.slidePrev()}>
        <span className='w-10 h-10'>
          <ChevronLeftIcon className='text-sekunder' />
        </span>
      </button>
      <button
        className='w-40 h-20 relative bg-primer swiper-button-next rounded-full opacity-60'
        onClick={() => swiper.slideNext()}>
        <span className='w-10 h-10'>
          <ChevronRightIcon className='text-sekunder' />
        </span>
      </button>
    </>
  )
}
