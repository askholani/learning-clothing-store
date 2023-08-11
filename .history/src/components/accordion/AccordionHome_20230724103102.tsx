import { generalType } from '@components/utils/type'

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
  const { dataCollections } = props
  console.log(dataCollections)
  return (
    <div className='flex flex-col gap-y-4 uppercase mt-32'>
      <h3>collection</h3>
      {collection.map((item) => (
        <div
          className='collapse collapse-arrow border-b-2 border-sekunder rounded-none'
          key={item}>
          <input type='radio' name='my-accordion-3' />
          <div className='collapse-title text-xl font-medium'>
            <h4>{item}</h4>
          </div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
      ))}
    </div>
  )
}
