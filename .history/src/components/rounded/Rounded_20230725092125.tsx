import Link from 'next/link'

type css = {
  bottom?: string
  top?: string
  left?: string
  right?: string
  icon?: boolean
  content?: string
  h?: string
  w?: string
}

export default function Rounded(props: {
  bottom?: string
  top?: string
  left?: string
  right?: string
  icon?: boolean
  content?: string
  h?: string
  w?: string
  link?: string
}) {
  const { link, bottom, top, left, right, icon, content, h, w } = props
  console.log(link)
  return (
    <div
      className={`rounded-full w-[13rem] h-[13rem] ${bottom} ${top} ${left} ${right} border border-white absolute flex flex-col justify-center items-center text-xs z-10`}>
      <Link>
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
