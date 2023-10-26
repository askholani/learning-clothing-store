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

export default function ImageComp({
  src,
  className,
  alt,
  width,
  height,
  sizes,
}: image) {
  return <Image src={src} alt={alt} className={className} fill={true} />
}
