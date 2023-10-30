'use client'
import Link from 'next/link'

import { UserCircleIcon, KeyIcon } from '@heroicons/react/24/outline'

export default function Page() {
  return (
    <section className='flex text-sekunder py-8 px-4 h-[80vh]'>
      <form className='w-full'>
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
          <div className='flex justify-end'>
            <button
              type='submit'
              className='btn-sm btn col-span-6 rounded-none bg-transparent border-sekunder'>
              login
            </button>
          </div>
          <div className='flex flex-col w-full justify-center mt-5 pt-10 border-t border-sekunder'>
            <div className='flex h-10 w-full'>
              <svg
                className='w-10 h-10'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='100'
                height='100'
                viewBox='0 0 48 48'>
                <path
                  fill='#4caf50'
                  d='M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z'></path>
                <path
                  fill='#1e88e5'
                  d='M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z'></path>
                <polygon
                  fill='#e53935'
                  points='35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17'></polygon>
                <path
                  fill='#c62828'
                  d='M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z'></path>
                <path
                  fill='#fbc02d'
                  d='M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z'></path>
              </svg>
              <span>LOGIN WITH EMAIL</span>
            </div>
            {/* <Link href={`/api/auth/sigin`}>Login with another account</Link> */}
          </div>
        </div>
      </form>
    </section>
  )
}
