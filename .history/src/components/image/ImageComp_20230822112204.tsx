import Image from 'next/image'

interface image {
  src: string
  width?: number
  height?: number
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
  priority,
}: image) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      // fill={true}
      priority={priority}
      width={width}
      height={height}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    />
  )
}
