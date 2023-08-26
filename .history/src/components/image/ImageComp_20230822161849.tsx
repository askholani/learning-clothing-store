import Image from 'next/image'

interface image {
  src: string
  width?: number
  height?: number
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
  quality: number
}

export default function ImageComp({
  src,
  className,
  alt,
  width,
  height,
  sizes,
  priority,
  quality,
}: image) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={true}
      priority={priority}
      width={width}
      height={height}
      sizes={sizes}
    />
  )
}
