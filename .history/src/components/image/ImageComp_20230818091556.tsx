import Image from 'next/image'

export default function ImageComp(props: { src: string; className: string }) {
  const { src, className } = props
  return (
    <Image src={src} alt='default image' className={className} fill={true} />
  )
}
