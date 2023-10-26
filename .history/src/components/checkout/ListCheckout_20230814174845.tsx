import { itemType } from '@components/context/CartContex'

export default function ListCheckout(props: { items: itemType[] }) {
   const {items} = props
   const checkoutItems = items? items.map(()=>{
      return <li></li>
   })
}
