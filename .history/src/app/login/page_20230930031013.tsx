'use client'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export default function Page() {
  return (
    <section className='flex bg-sekunder text-primer py-8 px-4'>
      <form className='w-full'>
        <div className='flex flex-col w-full gap-y-4'>
          <div className='flex items-center w-full gap-x-2'>
            <label htmlFor='email'>
              <UserCircleIcon className='w-8 h-8' />
            </label>
            <input
              type='text'
              placeholder='USERNAME OR EMAIL ADDRESS'
              className='input input-bordered  col-span-12 rounded-none text-primer bg-transparent h-auto py-2 text-sm w-full'
            />
          </div>
        </div>
      </form>
    </section>
  )
}
