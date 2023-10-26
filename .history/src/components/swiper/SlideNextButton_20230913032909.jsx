// some-inner-component.jsx
import { React } from 'react'
import { useSwiper } from 'swiper/react'

export default function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <>
      <button
        className='w-40 h-40 relative bg-primer swiper-button-prev'
        onClick={() => swiper.slidePrev()}></button>
      <button
        className='w-40 h-40 relative bg-primer swiper-button-next'
        onClick={() => swiper.slideNext()}></button>
    </>
  )
}
