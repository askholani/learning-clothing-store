import Link from 'next/link'

const navbarShowItemLink = [
  'all',
  'outwear',
  'short',
  'shirt',
  'sweatshirts',
  'pants',
  'jewelry',
]

export default function NavbarShowItem(props: {
  show: boolean
  choice: string | null
  onHandleShowList?: (e: boolean) => void
}) {
  // const handleShowList = () => {
  //   props.onHandleShowList(false)
  // }

  return (
    props.show && (
      <div className='py-12 w-full h-[60vh] bg-primer grid grid-cols-12 font-normal'>
        <div className='col-span-4 grid grid-cols-2'>
          <div className='w-full h-[65%] bg-slate-200'></div>
        </div>
        <div className='col-span-8 grid grid-cols-8 gap-x-4'>
          <div className='col-span-3 uppercase text-2xl'>
            <ul className='h-full flex flex-col justify-between'>
              <>
                {navbarShowItemLink.map((link) => {
                  return (
                    <li key={link}>
                      <Link
                        href={`shop?type=${link}`}
                        // onDoubleClick={handleShowList}
                      >
                        {link}
                      </Link>
                    </li>
                  )
                })}
              </>
            </ul>
          </div>
          <div className='col-span-3'>
            <div className='w-full h-full bg-slate-200'></div>
          </div>
          <div className='col-span-2'>
            <div className='w-full h-[65%] bg-slate-200'></div>
          </div>
        </div>
      </div>
    )
  )
}
