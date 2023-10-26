'use client'

import { generalType } from '../../utils/type'

const collection: string[] = [
  'ss23',
  'lates summer collection',
  'hiking collection',
  'collaboration',
  'future collection',
]

export default function AccordionHome(props: {
  dataCollections: generalType[]
}) {
  console.log('accordionHome')
  const { dataCollections } = props
  return (
    <div className='flex flex-col gap-y-4 uppercase sm:mt-32 mt-8'>
      <h3 className='text-sm sm:text-base'>collection</h3>
      {dataCollections.map((item) => (
        <div
          className='collapse collapse-arrow border-b-2 border-sekunder rounded-none'
          key={item.id}>
          <input type='radio' name='my-accordion-3' />
          <div className='collapse-title text-xl font-medium'>
            <h4>{item.name}</h4>
          </div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
      ))}
    </div>
  )
}
