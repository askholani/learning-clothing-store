// some-inner-component.jsx
import { React } from 'react'
import { useSwiper } from 'swiper/react'

export default function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <>
      <button
        className='w-40 h-20 relative bg-primer swiper-button-prev swiper-button-hidden'
        onClick={() => swiper.slidePrev()}>
        Slide to the next slide
      </button>
      <button
        className='w-40 h-20 relative bg-primer swiper-button-next'
        onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button>
    </>
  )
}
