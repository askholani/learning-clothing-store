'use client'

export default function Page() {
  return (
    <section className='flex bg-sekunder text-primer py-8'>
      <form className='w-full'>
        <div className='flex flex-col w-full'>
          <input
            type='text'
            placeholder='USERNAME OR EMAIL ADDRESS'
            className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer h-auto py-2 text-sm'
          />
          <input
            type='text'
            placeholder='CODE'
            className='input input-bordered  col-span-4 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
          />
          <input
            type='text'
            placeholder='PHONE'
            className='input input-bordered  col-span-8 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
          />
        </div>
      </form>
    </section>
  )
}
