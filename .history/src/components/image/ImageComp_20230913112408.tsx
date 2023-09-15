'use client'
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
  base64?: string
  style?: any
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
  base64,
  style,
}: image) {
  return (
    // <Image
    //   style={style ? { objectFit: 'contain' } : { objectFit: 'none' }}
    //   src={src}
    //   alt={alt}
    //   className={`${className}`}
    //   fill={true}
    //   priority={priority}
    //   width={width}
    //   height={height}
    //   sizes={sizes}
    //   blurDataURL={base64}
    // />
    <Image
      style={style ? { objectFit: 'contain' } : { objectFit: 'none' }}
      src={src}
      alt={alt}
      className={className}
      fill={true}
      priority={priority}
      width={width}
      height={height}
      sizes={sizes}
      blurDataURL={base64}
    />
  )
}
