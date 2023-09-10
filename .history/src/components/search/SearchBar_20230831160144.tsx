export default function SearchBar() {
  return (
    <>
      <section className='flex justify-between sm:grid-cols-12 uppercase text-sekunder sm:border-b sm:pb-16 mt-8 items-end'>
        <div className='sm:col-span-4 text-3xl sm:text-5xl font-extrabold'>
          <h1>shop all</h1>
        </div>
        <div className='col-span-4 justify-end hidden sm:flex'>
          <details className='dropdown'>
            <summary className='m-1'>type of clothing</summary>
            <ul className='p-2 shadow menu dropdown-content z-[1] w-52 bg-primer opacity-75'>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </div>
        <div className='col-span-4 flex-col hidden sm:flex'>
          <div className='w-full grid grid-cols-12'>
            <details className='dropdown col-start-7 col-span-6'>
              <summary className='m-1'>sort by</summary>
              <ul className='p-2 shadow menu dropdown-content z-[1] w-full bg-primer opacity-75'>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </div>
          <div className='w-full grid grid-cols-12'>
            <details className='dropdown col-start-7 col-span-6'>
              <summary className='m-1'>size</summary>
              <ul className='p-2 shadow menu dropdown-content z-[1] w-full bg-primer opacity-75'>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className='block sm:hidden'>filter</div>
      </section>
      <section className='flex flex-col gap-y-8 py-2 sm:hidden'>
        <div className='w-full flex flex-col'>
          <span className='text-xs sm:text-base'>type of clothing</span>
          <div className='w-full mt-4 flex justify-between'>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                className='checkbox border border-slate-50 rounded-full w-5 h-5'
                id='item1'
                value={'item1'}
              />
              <label htmlFor='item1' className='text-xs sm:text-base'>
                item1
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                className='checkbox border border-slate-50 rounded-full w-5 h-5'
                id='item1'
                value={'item1'}
              />
              <label htmlFor='item1' className='text-xs sm:text-base'>
                item1
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                className='checkbox border border-slate-50 rounded-full w-5 h-5'
                id='item1'
                value={'item1'}
              />
              <label htmlFor='item1' className='text-xs sm:text-base'>
                item1
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                className='checkbox border border-slate-50 rounded-full w-5 h-5'
                id='item1'
                value={'item1'}
              />
              <label htmlFor='item1' className='text-xs sm:text-base'>
                item1
              </label>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <span className='text-xs sm:text-base'>sort by </span>
          <div className='w-full mt-4 flex justify-between'>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                className='checkbox border border-slate-50 rounded-full w-5 h-5'
                id='item1'
                value={'item1'}
              />
              <label htmlFor='item1' className='text-xs sm:text-base'>
                item1
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                className='checkbox border border-slate-50 rounded-full w-5 h-5'
                id='item1'
                value={'item1'}
              />
              <label htmlFor='item1' className='text-xs sm:text-base'>
                item1
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                className='checkbox border border-slate-50 rounded-full w-5 h-5'
                id='item1'
                value={'item1'}
              />
              <label htmlFor='item1' className='text-xs sm:text-base'>
                item1
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                className='checkbox border border-slate-50 rounded-full w-5 h-5'
                id='item1'
                value={'item1'}
              />
              <label htmlFor='item1' className='text-xs sm:text-base'>
                item1
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
