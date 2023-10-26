import Link from 'next/link'

import {
  ShoppingBagIcon,
  HomeIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

export default function NavbarBottom() {
  return (
    <div className='btm-nav bg-primer h-[3rem] z-40 sm:hidden'>
      <button>
        <Link href={'/'}>
          <HomeIcon className='w-5 h-5' />
        </Link>
      </button>
      <button>
        <Link href={`/shop?type=all&page=1`}>
          <ShoppingBagIcon className='w-5 h-5' />
        </Link>
      </button>
      <button>
        <Link href={`/cart`}>
          <ShoppingCartIcon className='w-5 h-5' />
        </Link>
      </button>
    </div>
  )
}
