import {
  ShoppingBagIcon,
  HomeIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

export default function NavbarBottom() {
  return (
    <div className='btm-nav bg-primer h-[2rem] z-40'>
      <button>
        <HomeIcon className='w-5 h-5' />
      </button>
      <button>
        <ShoppingBagIcon className='w-5 h-5' />
      </button>
      <button>
        <ShoppingCartIcon className='w-5 h-5' />
      </button>
    </div>
  )
}
