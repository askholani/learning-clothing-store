// dispatch acction
import { itemType } from '../context/CartContex'
const actionADD = (oldItems: itemType[], newItems: itemType) => {
  // cek data array
  const lengthOldItems = oldItems.length
  const idOldItems = oldItems.filter((item) => item.id === newItems.id)
  const colorOldItems = idOldItems.filter(
    (item) => item.color === newItems.color,
  )
  const sizeOldItems = idOldItems.find((item) => item.size === newItems.size)

  const indexItem = oldItems.findIndex(
    (item) =>
      sizeOldItems?.color === item.color &&
      sizeOldItems?.size === item.size &&
      item.id === sizeOldItems?.id,
  )

  if (lengthOldItems === 0) {
    return newItems
  } else {
  }
}
