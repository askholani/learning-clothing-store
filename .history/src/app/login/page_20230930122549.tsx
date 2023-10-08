'use client'
import { signIn } from 'next-auth/react'
import { UserCircleIcon, KeyIcon } from '@heroicons/react/24/outline'

export default function Page() {
  return (
    <section className='flex flex-col text-sekunder h-[80vh] items-center py-8 px-4'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold py-4 border-b md:mb-4 lg:mb-6 col-span-12'>
        checkout
      </h1>
      <section className='flex w-full'>
        <div className='flex flex-col text-sekunder w-full '>
          <form className='w-full flex flex-col gap-y-6'>
            <div className='flex flex-col w-full gap-y-4'>
              <div className='flex items-center w-full gap-x-2'>
                <label htmlFor='email'>
                  <UserCircleIcon className='w-8 h-8 ' />
                </label>
                <input
                  id='email'
                  type='text'
                  placeholder='USERNAME OR EMAIL ADDRESS'
                  className='input input-bordered  col-span-12 rounded-none text-primer bg-transparent h-auto py-2 text-sm w-full border-sekunder'
                />
              </div>
              <div className='flex items-center w-full gap-x-2'>
                <label htmlFor='password'>
                  <KeyIcon className='w-8 h-8 ' />
                </label>
                <input
                  id='password'
                  type='password'
                  placeholder='PASSWORD'
                  className='input input-bordered  col-span-12 rounded-none text-primer bg-transparent h-auto py-2 text-sm w-full border-sekunder'
                />
              </div>
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='btn-sm btn col-span-6 rounded-none bg-transparent border-sekunder'>
                login
              </button>
            </div>
          </form>
          <div className='flex flex-col w-full'>
            <div className='flex flex-col w-full justify-center mt-5 pt-10 border-t border-sekunder gap-y-4'>
              <div
                className='flex h-10 w-full items-center gap-x-4 bg-sekunder text-primer px-2 py-1'
                onClick={() =>
                  signIn('email', { callbackUrl: 'http://localhost:3000/shop' })
                }>
                <label htmlFor='' className='text-3xl font-bold'>
                  @
                </label>
                <span className='w-full'>LOGIN WITH E-MAIL</span>
              </div>
              <div
                className='flex h-10 w-full items-center gap-x-4 bg-sekunder text-primer px-2 py-1'
                onClick={() =>
                  signIn('google', { callbackUrl: 'http:localhost:3000/shop' })
                }>
                <svg
                  className='w-10 h-10'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='100'
                  height='100'
                  viewBox='0 0 48 48'>
                  <path
                    fill='#FFC107'
                    d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'></path>
                  <path
                    fill='#FF3D00'
                    d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'></path>
                  <path
                    fill='#4CAF50'
                    d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'></path>
                  <path
                    fill='#1976D2'
                    d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'></path>
                </svg>
                <span className='w-full'>LOGIN WITH GOOGLE</span>
              </div>
            </div>
          </div>
        </div>
        <div className=''></div>
      </section>
    </section>
  )
}
