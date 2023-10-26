// dispatch acction
import { itemType } from '../context/CartContex'
export const actionADD = (oldItems: itemType[], newItems: itemType) => {
  // cek data array
  const lengthOldItems = oldItems.length
  let theItem: itemType | any
  let updatedItems: itemType[] = oldItems

  //   if (lengthOldItems !== 0) {
  //     const idOldItems = oldItems.filter((item) => item.id === newItems.id)
  /**
   * new id 1, sizel xl ,color : red
   * kosong
   * len oldItems === 0
   * push new
   *
   * len oldItems !== 0
   * oldItems =
   *  {id : 1, size : xl , color : red}
   *  {id : 1, size : l , color : red}
   * {id : 0, size : xl , color : blue}
   * filter id
   *  {id : 1, size : xl , color : red}
   * {id : 1, size : l , color : red}
   *
   * filter size
   * {id : 1, size : xl , color : red}
   * tambah kuantiti size
   *
   * new id 2, sizel xl ,color : red
   * kosong x
   * len oldItems === 0
   * push new
   *
   * len oldItems !== 0 x
   * oldItems =
   *  {id : 1, size : xl , color : red}
   *  {id : 1, size : l , color : red}
   * {id : 0, size : xl , color : blue}
   * filter id
   *  {id : 1, size : xl , color : red}
   * {id : 1, size : l , color : red}
   *
   * filter size
   * {id : 1, size : xl , color : red}
   * tambah kuantiti size
   *
   *
   */

  //  const colorOldItems = idOldItems.filter(
  //    (item) => item.color === newItems.color,
  //  )

  //     if (colorOldItems.length !== 1) {
  //       theItem = colorOldItems.find((item) => item.size === newItems.size)
  //       return theItem
  //     } else {
  //       theItem = colorOldItems[0]
  //       return theItem
  //     }

  if (lengthOldItems === 0) {
    return oldItems.push(newItems)
  }

  const idOldItems = oldItems.filter((item) => item.id === newItems.id)

  theItem = idOldItems.filter((item) => item.size === newItems.size)
  theItem = { ...theItem, qty: theItem.qty + newItems.qty }

  const theIndex = oldItems.findIndex(
    (item) =>
      item.id === theItem.id &&
      item.size === theItem.size &&
      item.color === theItem.color,
  )

  if (theIndex) {
    updatedItems[theIndex] = theItem
  }
}
