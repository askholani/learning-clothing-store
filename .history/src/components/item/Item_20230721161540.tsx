interface shop {
  keyItem?: number
  price?: number
  name?: string
  discount?: number
  image?: string
  n?: string
  grid?: number
  height?: string
  text?: string
  content?: boolean
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
  text = 'name of product',
  content,
}: shop) {
  const li = <li className={`flex flex-col col-span-${n}`} key={keyItem}></li>

  return (
    <li className={`flex flex-col col-span-${n}`} key={keyItem}>
      <div className={`bg-slate-500 w-full ${height}`}>
        <img src={image} alt='' />
      </div>
      {content ? (
        <div className='flex justify-between'>
          <p>{text}</p>
          <p>{price}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}
