'use client'

export default function Page() {
  return (
    <section className='flex bg-sekunder'>
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
        <div>
          <h2 className='text-base tracking-wider py-4'>
            shipping information
          </h2>
          <div className='grid grid-cols-12 gap-4'>
            <input
              type='text'
              placeholder='FIRST NAME'
              className='input input-bordered  col-span-6 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
            <input
              type='text'
              placeholder='LAST NAME'
              className='input input-bordered  col-span-6 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
            <input
              type='text'
              placeholder='STREET ADDRESS'
              className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
            <input
              type='text'
              placeholder='APARTMENT'
              className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
            <input
              type='text'
              placeholder='CITY'
              className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
            <input
              type='text'
              placeholder='APARTMENT'
              className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
          </div>
        </div>
        <div>
          <h2 className='text-base tracking-wider py-4'>shipping method</h2>
          <div className='flex flex-col'>
            <div className='form-control'>
              <label className='label cursor-pointer justify-normal gap-x-4'>
                <input
                  type='radio'
                  name='radio-10'
                  className='radio checked:bg-primer border-sekunder h-6 w-6 text-sm'
                />
                <div className='flex flex-col sm:flex-row sm:justify-between w-full'>
                  <span className=''>standart shipping</span>
                  <div className='flex justify-between sm:w-[50%]'>
                    <span>3-5 working days </span>
                    <span>10000$</span>
                  </div>
                </div>
              </label>
            </div>
            <div className='form-control'>
              <label className='label cursor-pointer justify-normal gap-x-4'>
                <input
                  type='radio'
                  name='radio-10'
                  className='radio checked:bg-primer border-sekunder h-6 w-6 text-sm'
                />
                <div className='w-full flex flex-col sm:flex-row sm:justify-between'>
                  <span className=''>post office</span>
                  <div className='flex justify-between sm:w-[50%]'>
                    <span>1-3 working days </span>
                    <span>10000$</span>
                  </div>
                </div>
              </label>
            </div>

            <div className='form-control'>
              <label className='label cursor-pointer justify-normal gap-x-4'>
                <input
                  type='radio'
                  name='radio-10'
                  className='radio checked:bg-primer border-sekunder  h-6 w-6 py-2 text-sm'
                />
                <div className='w-full flex flex-col sm:flex-row sm:justify-between'>
                  <span className=''>pickup</span>
                  <div className='flex justify-between sm:w-[50%]'>
                    <span>1-3 working days </span>
                    <span>free</span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 className='py-4'>payment</h2>
          <div className='grid grid-cols-12 gap-4'>
            <input
              type='text'
              placeholder='BANK CARD'
              className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
            <input
              type='text'
              placeholder='CREDIT CARD'
              className='input input-bordered  col-span-12 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
            <input
              type='date'
              placeholder='EXPIRATION DATE *'
              className='input input-bordered  col-span-6 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
            <input
              type='text'
              placeholder='SW*'
              className='input input-bordered  col-span-6 rounded-none text-sekunder bg-primer  h-auto py-2 text-sm'
            />
            <button type='submit' className='btn col-span-6 rounded-none'>
              go back
            </button>
            <button type='submit' className='btn col-span-6 rounded-none'>
              pay and place order
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
