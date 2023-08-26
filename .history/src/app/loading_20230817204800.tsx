'use server'
import './globals.css'

export default async function Loading() {
  return (
    <section className='relative'>
      <div className='fixed left-0 right-0 top-0 bottom-0 bg-slate-950 opacity-90 z-10'></div>
      <span className='loading loading-ball loading-lg z-20'></span>
    </section>
  )
}
