import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'

export default function NavbarMain(props: {
  onHandleShowList: any
  onHandleShowSide: any
}) {
  const { onHandleShowList, onHandleShowSide } = props

  console.log('onHandleShowSide', onHandleShowSide)

  return (
    <nav className='navbar bg-primer'>
      <div className='md:navbar-start w-full'>
        <div className='flex justify-between w-full'>
          <Bars3BottomLeftIcon
            className='md:hidden block w-6 h-6'
            onClick={onHandleShowSide}
          />
          <label htmlFor=''>kirman</label>
        </div>
      </div>
      <div className='shrink md:flex flex-col w-[30%] items-start  hidden'>
        <a href='' onClick={onHandleShowList}>
          shop
        </a>
        <a href='' onClick={onHandleShowList}>
          new collection
        </a>
        <a href='' onClick={onHandleShowList}>
          lookbook
        </a>
      </div>
      <div className='shrink  w-[30%] md:flex flex-col items-end hidden'>
        <a href=''>cart</a>
        <a href=''>wishlist</a>
        <a href=''>login</a>
      </div>
    </nav>
  )
}
