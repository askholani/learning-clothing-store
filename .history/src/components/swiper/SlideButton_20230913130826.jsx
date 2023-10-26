// some-inner-component.jsx
import { React } from 'react'
import { useSwiper } from 'swiper/react'
import 'swiper/css/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function SlideButton() {
  const swiper = useSwiper()

  return (
    <>
      <button
        className='w-40 h-20 relative bg-primer swiper-button-prev rounded-full opacity-60'
        onClick={() => swiper.slidePrev()}>
        <span className='w-8 h-8 sm:w-12 sm:h-12 sm:p-2'>
          <ChevronLeftIcon className='text-sekunder ' />
        </span>
      </button>
      <button
        className='w-40 h-20 relative bg-primer swiper-button-next rounded-full opacity-60'
        onClick={() => swiper.slideNext()}>
        <span className='w-12 h-12 p-2'>
          <ChevronRightIcon className='text-sekunder' />
        </span>
      </button>
    </>
  )
}
