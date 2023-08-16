import { itemType } from '@components/context/CartContex'
import Checkout from './Checkout'

export default function ListCheckout(props: { items: itemType[] }) {
  const { items } = props
  const checkoutItems = items.map((item: itemType, index) => {
    return <Checkout />
  })

  return <ul>{checkoutItems}</ul>
}
