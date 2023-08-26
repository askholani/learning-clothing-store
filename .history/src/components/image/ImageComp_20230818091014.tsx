import Image from 'next/image'

export default function ImageComp(props: { src: string }) {
  const { src } = props
  return <Image src={src} alt='default image' />
}
