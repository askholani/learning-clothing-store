const detailItem: string[] = ['featuring', 'material']

export default function AccordionShop() {
  console.log('accordionShop')
  return (
    <div className='flex flex-col gap-y-4 uppercase'>
      {detailItem.map((item) => (
        <div
          className='collapse collapse-arrow border-b-2 border-sekunder rounded-none'
          key={item}>
          <input type='radio' name='my-accordion-3' />
          <div className='collapse-title text-base sm:text-lg md:text-xl font-medium'>
            {item}
          </div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
      ))}
    </div>
  )
}
