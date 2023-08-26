import Image from 'next/image'

interface image {
  src: string
  width: number
  height: number
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
}

export default function ImageComp({ src, className }: image) {
  return (
    <Image src={src} alt='default image' className={className} fill={true} />
  )
}
