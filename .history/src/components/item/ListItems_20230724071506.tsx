import Link from 'next/link'
import Item from './Item'
interface shop {
  key?: number
  price?: number
  name?: string
  discount?: number
  image?: string
  n?: string
  grid?: number
}

export default function ListItems(props: {
  items: object[] | null
  n?: string
  grid?: number
  height?: string
  gap?: string
  image?: string
}) {
  return (
    <ul className={`grid grid-cols-12 gap-x-${props.gap} gap-y-8 w-full`}>
      {props.items ? (
        props.items.map((item: shop) => {
          return (
            <li className={`flex flex-col col-span-${props.n}`} key={item.key}>
              <Link href={`/shop/detail/${item.id}`}>
                <Item
                  keyItem={item.key}
                  height={props.height}
                  key={item.key}
                  image={item.image}
                />
              </Link>
            </li>
          )
        })
      ) : (
        <span></span>
      )}
    </ul>
  )
}
