import Image from 'next/image'

interface image {
  src: string
  width: number
  height: number
  alt: string
  priority?: boolean
  sizes?: string
}

export default function ImageComp(props: { src: string; className: string }) {
  const { src, className } = props
  return (
    <Image src={src} alt='default image' className={className} fill={true} />
  )
}
