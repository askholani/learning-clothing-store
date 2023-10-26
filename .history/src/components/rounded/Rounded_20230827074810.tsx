import Link from 'next/link'

type round = {
  bottom?: string
  top?: string
  left?: string
  right?: string
  icon?: boolean
  content?: string
  h?: string
  w?: string
  link?: string
}

export default function Rounded({
  bottom,
  top,
  left,
  right,
  icon,
  content,
  w,
  h,
  link,
}: round) {
  // console.log('rounded')
  // const urlDefault = window.location.href.toString()
  const urlPath = link ? link : ''
  return (
    <div className={`rounded-full border border-white text-xs z-10`}>
      <Link
        href={urlPath}
        className='flex flex-col justify-center items-center hover:cursor-pointer h-full w-full'
        prefetch={true}>
        <p>
          {icon ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
              />
            </svg>
          ) : (
            ''
          )}
        </p>
        <p className='mt-1'>{content}</p>
      </Link>
    </div>
  )
}
