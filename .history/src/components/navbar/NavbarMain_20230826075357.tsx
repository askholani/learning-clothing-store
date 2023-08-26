import {
  Bars3BottomLeftIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NavbarMain(props: {
  onHandleShowList: any
  onHandleShowSide: any
  cartAmount: number
}) {
  const { onHandleShowList, onHandleShowSide, cartAmount } = props

  return (
    <nav className='navbar flex px-12 bg-primer'>
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
        {/* <Link href='/shop' onClick={onHandleShowList}> */}
        <Link href='#' onClick={onHandleShowList}>
          shop
        </Link>
        <Link href='/new-collection' onClick={onHandleShowList}>
          new collection
        </Link>
        <Link href='lookbook' onClick={onHandleShowList}>
          lookbook
        </Link>
      </div>
      <div className='shrink  w-[30%] md:flex flex-col items-end hidden'>
        <Link href='/cart' className='flex justify-between lg:w-[40%] w-[60%]'>
          <span>cart</span>
          <span>[ {cartAmount} ]</span>
        </Link>
        <Link
          href='/wishlist'
          className='flex justify-between lg:w-[40%] w-[60%]'>
          <span>wishlist</span>
          <span>[ 0 ]</span>
        </Link>
        <Link href='/login' className='flex justify-between lg:w-[40%] w-[60%]'>
          <span>login</span>
          <span>
            <ArrowRightOnRectangleIcon className='w-5 h-5' />
          </span>
        </Link>
      </div>
    </nav>
  )
}
