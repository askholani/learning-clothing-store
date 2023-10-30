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
          <div className='flex justify-center mt-5 pt-10 border-t border-primer'>
            <Link href={`/api/auth/sigin`}>Login with another account</Link>
          </div>
        </div>
      </form>
    </section>
  )
}
