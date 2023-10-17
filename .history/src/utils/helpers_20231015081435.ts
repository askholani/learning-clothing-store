// dispatch acction
import { itemType } from '../context/CartContex'
export const actionADD = (oldItems: itemType[], newItems: itemType) => {
  // cek data array
  const lengthOldItems = oldItems.length
  let theItem: itemType | any

  if (lengthOldItems === 0) {
    return newItems
  }
  if (lengthOldItems !== 0) {
    const idOldItems = oldItems.filter((item) => item.id === newItems.id)
    if (idOldItems.length === 1) {
      return oldItems.push(newItems)
    }

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
}
