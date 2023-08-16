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
]

export default function Recommended(props: { height?: string }) {
  return (
    <section className='flex flex-col mt-16 relative border-b pb-40 overflow-hidden'>
      <div>
        <h1 className='text-4xl font-bold my-8'>you may also like</h1>
      </div>
      <div>
        <ListItems items={arrayObjek} n='3' height={props.height} gap='4' />
      </div>
      <div className='flex justify-center'>
        <Rounded icon={false} content='load more' bottom='-bottom-20' />
      </div>
    </section>
  )
}
