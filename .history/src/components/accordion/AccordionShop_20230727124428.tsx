const detailItem: string[] = ['featuring', 'material']

const collection: string[] = [
  'ss23',
  'lates summer collection',
  'hiking collection',
  'collaboration',
  'future collection',
]

export default function AccordionShop() {
  return (
    <div className='flex flex-col gap-y-4 uppercase'>
      {detailItem.map((item) => (
        <div
          className='collapse collapse-arrow border-b-2 border-sekunder rounded-none'
          key={item}>
          <input type='radio' name='my-accordion-3' />
          <div className='collapse-title text-xl font-medium'>{item}</div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
      ))}
    </div>
  )
}
