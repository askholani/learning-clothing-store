import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  console.log('footer')
  return (
    <footer className='uppercase mt-16'>
      <section className='flex flex-col'>
        <h1>newsletter</h1>
        <div className='grid grid-cols-12 uppercase'>
          <div className='col-span-8'>
            <div className='text-5xl font-bold'>
              <h2>subscribe to our</h2>
              <h2>newsletter to receive</h2>
              <h2>the best offers</h2>
            </div>
            <div className='flex border-b w-[40%] mt-16 items-center pb-4 justify-between'>
              <h4 className='text-xs'>Email</h4>
              <ArrowLongRightIcon className='h-[2rem]' />
            </div>
          </div>
          <div className='col-span-4 grid grid-cols-2 gap-x-4 font-bold'>
            <div className='flex flex-col'>
              <div>
                <h3>site</h3>
                <h3>Navigation</h3>
              </div>
              <div className='text-xs font-normal mt-16 flex flex-col gap-y-2'>
                <h4>about</h4>
                <h4>contacts</h4>
                <h4>delivery</h4>
                <h4>shop</h4>
                <h4>payment</h4>
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                <h3>social</h3>
                <h3>network</h3>
              </div>
              <div className='text-xs font-normal mt-16 flex flex-col gap-y-2'>
                <h4>instagram</h4>
                <h4>twitter</h4>
                <h4>facebook</h4>
                <h4>mail</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-20 flex border-t justify-between py-4 text-xs'>
        <h4>ame leon dore 2023 by leibal. all rights reserved</h4>
        <div className='flex gap-x-4'>
          <h4>privacy policies</h4>
          <h4>cookie policy</h4>
        </div>
      </section>
    </footer>
  )
}
