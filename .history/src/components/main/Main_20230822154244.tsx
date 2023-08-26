import { productsType } from '../../utils/type'

import Item from '../item/Item'
import Rounded from '../rounded/Rounded'

import hero1 from '../../../public/hero-1.svg'
import ImageComp from '../image/ImageComp'

export default function Main(props: { newProduct: productsType[] }) {
  // console.log('main')
  const { newProduct } = props
  return (
    <section className='grid grid-cols-12 mt-4 gap-x-4 py-12 border-b-2 overflow-hidden'>
      <div className='col-span-4'>
        {/* <Item
          height='h-[full]'
          base={false}
          image={newProduct[0].image}
          priority={true}
        /> */}
        <ImageComp
          src={newProduct[0].image}
          width={400}
          height={400}
          alt='hero-1'
          priority={true}
          sizes='(min-width: 1460px) 400px, (min-width: 780px) calc(30.91vw - 45px), calc(33.48vw - 11px)'
        />
      </div>
      <div className='col-span-8 w-full relative'>
        <div className='uppercase'>
          <span className='text-xs'>2023 NEW COLLECTION</span>
          <div className='w-full z-10 relative'>
            <span className='text-6xl font-bold'>capsule</span>
            <br />
            <span className='flex w-[90%]'>
              <span className='normal-case w-[12rem] text-xs me-4'>
                A new collection of clothes was created for hiking. in our
                clothes you will feel as comfortable as in your everyday life.
              </span>
              <span className='text-6xl font-bold'>collection</span>
            </span>

            <br />
            <span className='text-6xl font-bold'>in the style</span>
            <br />
            <p className='text-6xl font-bold text-end w-full'>
              of {'<<hiking>>'}
            </p>
          </div>
          <Rounded
            bottom='-botoom-30'
            left='-left-10'
            icon={true}
            content='discovery'
            link={'/collections?date=new'}
          />
          <div className='h-[50vh] w-[18rem] absolute bottom-0 right-0'>
            {/* <Item
              height='h-full'
              base={false}
              image={newProduct[1].image}
              priority={true}
              // hero={hero1}
            /> */}
            <ImageComp
              src={newProduct[1].image}
              width={400}
              height={400}
              alt='hero-1'
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
