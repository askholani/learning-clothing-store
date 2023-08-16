import { Fragment } from 'react'

export default function Checkout() {
  return (
    <Fragment>
      <div className='flex justify-between gap-x-4'>
        <div className='w-[10rem] h-[13rem] bg-sekunder'></div>
        <div className='flex flex-col justify-between w-[40%]'>
          <h2 className='text-xl font-bold'>leather cafe racer jacker</h2>
          <div className='flex flex-col text-xs font-light'>
            <div className='flex gap-x-2'>
              <h3>size</h3>
              <h3>m</h3>
            </div>
            <div className='flex gap-x-2'>
              <h3>color</h3>
              <h3>black white</h3>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between text-sm'>
          <h2>remove</h2>
          <h2>900$</h2>
        </div>
      </div>
    </Fragment>
  )
}
