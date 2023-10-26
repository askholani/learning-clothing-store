export default function SearchBar() {
  return (
    <section className='grid grid-cols-12 uppercase text-sekunder border-b pb-16 mt-8'>
      <div className='col-span-4 text-5xl font-extrabold '>
        <h1>shop all</h1>
      </div>
      <div className='col-span-4 flex justify-end'>
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
      <div className='col-span-4 flex flex-col'>
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
    </section>
  )
}
