// dispatch acction
import { itemType } from '../context/CartContex'
export const actionADD = (oldItems: itemType[], newItems: itemType) => {
  // cek data array
  let theItem: itemType | any

  const idOldItems = oldItems.filter((item) => item.id === newItems.id)
  const colorOldItems = idOldItems.filter(
    (item) => item.color === newItems.color,
  )
  if (colorOldItems.length !== 1) {
    theItem = colorOldItems.find((item) => item.size === newItems.size)
    return theItem
  } else {
    theItem = colorOldItems[0]
    return theItem
  }
}
