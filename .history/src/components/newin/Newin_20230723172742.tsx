import { productsType } from '@components/utils/type'
import Item from '../item/Item'
import ListItems from '../item/ListItems'
import Rounded from '../rounded/Rounded'

interface objek {
  nama: string
  kunci: number
}

const arrayObjek: objek[] | null = [
  { nama: 'Objek 1', kunci: 1 },
  { nama: 'Objek 2', kunci: 2 },
  { nama: 'Objek 3', kunci: 3 },
  { nama: 'Objek 3', kunci: 4 },
  { nama: 'Objek 3', kunci: 5 },
  { nama: 'Objek 3', kunci: 6 },
]

export async function Newin(props: { newInProduct: productsType[] }) {
  const { newInProduct } = props
  return (
    <section className='flex flex-col border-b py-4 relative overflow-hidden'>
      <div className='w-full uppercase'>
        <h1 className='text-xs'>spring/summer</h1>
        <div className='flex justify-between my-12'>
          <h2 className='text-6xl font-extrabold'>new in</h2>
          <p className='flex items-end underline'>see all</p>
        </div>
      </div>
      {<ListItems items={newInProduct} n='2' gap='4' />}
      <div className='relative justify-center items-center'>
        <div className='flex justify-center mt-24 py-4 relative items-center'>
          <div className='h-[25rem] w-[18rem] bg-slate-700'></div>
          <div className=' w-full absolute uppercase'>
            <h2>brand philosophy</h2>
            <div>
              <h3 className='text-6xl font-bold'>we do not follow</h3>
              <div className='flex'>
                <p className='w-[20rem] text-xs normal-case'>
                  with a strong on simple yet powerful design we are driven to
                  create timeless work by portraying an aesthetic that is
                  uniquely our own
                </p>
                <h3 className='font-bold text-6xl mx-4'>fashion, but</h3>
                <p className='text-xs normal-case'>
                  Aime Leon Dore is <br /> from Queens, NY.
                </p>
              </div>
              <h3 className='font-bold text-6xl'>create it for your and</h3>
              <h3 className='font-bold text-7xl'>your soul</h3>
            </div>
          </div>
        </div>
        <Rounded
          icon={true}
          content='discovery'
          bottom='-bottom-20'
          right='right-56'
        />
      </div>
    </section>
  )
}
