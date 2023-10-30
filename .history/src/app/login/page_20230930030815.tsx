'use client'
import { UserIcon } from '@heroicons/react/24/outline'

export default function Page() {
  return (
    <section className='flex bg-sekunder text-primer py-8 px-4'>
      <form className='w-full'>
        <div className='flex flex-col w-full gap-y-4'>
          <div className='flex items-center w-full'>
            <label htmlFor='email'>
              <UserIcon className='w-6 h-6' />
            </label>
            <input
              type='text'
              placeholder='USERNAME OR EMAIL ADDRESS'
              className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer h-auto py-2 text-sm'
            />
          </div>
        </div>
      </form>
    </section>
  )
}
