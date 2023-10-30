'use client'

export default function Page() {
  return (
    <section className='flex bg-sekunder text-primer'>
      <form>
        <div>
          <h2 className='text-base tracking-wider py-2 pt-8 lg:pt-0'>
            personal information
          </h2>
          <div className='grid grid-cols-12 gap-4 '>
            <input
              type='text'
              placeholder='EMAIL ADDRESS'
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
        </div>
      </form>
    </section>
  )
}
