import { ShoppingBagIcon, HomeIcon } from '@heroicons/react/24/outline'

export default function NavbarBottom() {
  return (
    <div className='btm-nav bg-primer'>
      <button>
        <HomeIcon />
        <span className='btm-nav-label'>Home</span>
      </button>
      <button>
        <ShoppingBagIcon className='w-4 h-4' />
        <span className='btm-nav-label'>Warnings</span>
      </button>
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          />
        </svg>
        <span className='btm-nav-label'>Statics</span>
      </button>
    </div>
  )
}
