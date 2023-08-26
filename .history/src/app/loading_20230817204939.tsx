'use server'
import './globals.css'

export default async function Loading() {
  return (
    <section className='fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center'>
      <div className='absolute w-full h-full bg-black opacity-90'></div>
      <span className='loading loading-ball loading-lg z-20'></span>
    </section>
  )
}
