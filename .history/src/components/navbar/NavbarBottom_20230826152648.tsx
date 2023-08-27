import {
  ShoppingBagIcon,
  HomeIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

export default function NavbarBottom() {
  return (
    <div className='btm-nav bg-primer'>
      <button>
        <HomeIcon className='w-5 h-5' />
        <span className='btm-nav-label'>Home</span>
      </button>
      <button>
        <ShoppingBagIcon className='w-5 h-5' />
        <span className='btm-nav-label'>shop</span>
      </button>
      <button>
        <ShoppingCartIcon className='w-5 h-5' />
        <span className='btm-nav-label'>Statics</span>
      </button>
    </div>
  )
}
