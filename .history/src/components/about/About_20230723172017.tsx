import { productsType } from '@components/utils/type'
import AccordionHome from '../accordion/AccordionHome'
import Item from '../item/Item'

export default async function About(props: { aboutProduct: productsType[] }) {
  const { aboutProduct } = props
  return (
    <section className='flex flex-col gap-x-4 py-12'>
      <div className='grid grid-cols-12'>
        <div className='col-span-8 uppercase'>
          <h1 className='text-md mb-16'>about the brand</h1>
          <h1 className='text-2xl w-[65%]'>
            aime leon dore unifies formal menswear precedents with everyday
            aspects of modern masculinity inspired by casual wear as well as
            street style
          </h1>
        </div>
        <div className='col-span-4 grid grid-cols-2 gap-x-4 bg-slate-50'>
          <div>
            <div className='bg-slate-400 w-full h-full'>
              <Item height='h-full' image={aboutProduct[0].image} />
            </div>
            <p className='text-end'>01</p>
          </div>
          <div>
            <div className='bg-slate-400 w-full h-full'>
              <Item height='h-full' image={aboutProduct[0].image} />
            </div>
            <p className='text-end'>02</p>
          </div>
        </div>
      </div>
      <AccordionHome />
    </section>
  )
}
