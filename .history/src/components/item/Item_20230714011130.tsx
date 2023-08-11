interface shop {
  keyItem?: number
  price?: number
  name?: string
  discount?: number
  image?: string
  n?: string
  grid?: number
  height?: string
}

export default function Item({
  n,
  grid,
  keyItem,
  price,
  name,
  discount,
  image,
  height = 'h-[15rem]',
}: shop) {
  return (
    <li className={`flex flex-col col-span-${n}`} key={keyItem}>
      <div className={`bg-slate-500 w-full ${height}`}></div>
      <div className='flex justify-between'>
        <p>name of item</p>
        <p>10</p>
      </div>
    </li>
  )
}
