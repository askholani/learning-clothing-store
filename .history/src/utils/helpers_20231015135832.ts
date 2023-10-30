// dispatch acction
import { itemType } from '../context/CartContex'
export const actionADD = (oldItems: itemType[], newItems: itemType) => {
  // cek data array
  console.log('oldItems', oldItems)
  console.log('newItems', newItems)

  const lengthOldItems = oldItems.length
  let theItem: itemType | any
  let updatedItem: itemType | any
  let updatedItems: itemType[] | any
  updatedItems = [...oldItems]

  /**
   *
   * ARRAY KOSONG
   * new id 1, sizel xl ,color : red
   * len oldItems === 0
   * push new
   *
   * 
   * 
   * Array tidak kosong id beda
   * new {id : 2 , size :xl , color : red}
   * oldItems = 
   * {id : 1, size : xl , color : red}
   * {id : 1, size : l , color : red}
   * {id : 0, size : xl , color : blue}
   * 
   * len oldItems === 0 (false)
   * 
   * filter id = []
   * push new 
   * 
   * 
   * 
   * ARRAY ada isinya dan id sama
   * new {id 1, sizel xl ,color : red}
   * oldItems =
   *  {id : 1, size : xl , color : red}
   *  {id : 1, size : l , color : red}
   * {id : 1, size : xl , color : green}
   * {id : 0, size : xl , color : blue}
   *
   * len oldItems === 0 (false)
   * 
   * filter id
   *  {id : 1, size : xl , color : red}
   * {id : 1, size : l , color : red}
   * {id : 1, size : xl , color : green}
   * 
   * 
   * size beda : m
   * filter size 
   * len size === 0
   * push new
   * 
   * size sama : xl
   * filter size
   * {id : 1, size : xl , color : yellow}
   * {id : 1, size : xl , color : red}
   * {id : 1, size : xl , color : green}
   * 
   * color beda : blue
   * filter color
   * len color === 0
   * push new
   * 
   * color sama : red
   * find
   *  ....
   * 


   * size dan color beda
   * filter size dan color
   * push new
   * 
   * size atau color sama
   * 
   * filter size
   * {id : 1, size : xl , color : red}
   * tambah kuantiti size
   *
   *
   *
   * new {id 2, sizel xl ,color : red}
   * kosong x
   * len oldItems === 0
   * push new
   *
   * len oldItems !== 0 v
   * oldItems =
   *  {id : 1, size : xl , color : red}
   *  {id : 1, size : l , color : red}
   * {id : 0, size : xl , color : blue}
   * filter id (kosong)
   * push new
   *
   * filter size x
   * {id : 1, size : xl , color : red}
   * tambah kuantiti size
   *
   *
   */

  if (lengthOldItems === 0) {
    console.log('lenghtOldItems === 0')
    return [newItems]
  }

  const idOldItems = oldItems.filter((item) => item.id === newItems.id)
  console.log('idOldItems', idOldItems)
  if (idOldItems.length === 0) {
    console.log('idOldItems.length === 0')
    updatedItems.push(newItems)
    return
  }

  const sizeItems = idOldItems.filter((item) => item.size === newItems.size)
  console.log('sizeItems', sizeItems)
  if (sizeItems.length === 0) {
    console.log('sizeItems.length === 0')
    console.log('updatedItems size')
    updatedItems.push(newItems)
    return
  }

  const colorItems = sizeItems.filter((item) => item.color === newItems.color)
  console.log('colorItems', colorItems)
  if (colorItems.length === 0) {
    console.log('colorItems.length === 0')
    updatedItems.push(newItems)
    return
  }

  theItem = colorItems.find((item) => item.color === newItems.color)
  console.log('theItem', theItem)
  updatedItem = { ...theItem, qty: theItem.qty + newItems.qty }
  const theIndex = oldItems.findIndex(
    (item) =>
      item.color === theItem.color &&
      item.size === theItem.size &&
      item.id === theItem.id,
  )
  console.log('theIndex', theIndex)
  updatedItems[theIndex] = updatedItem
  //   const items = (oldItems[theIndex] = updatedItems)
  console.log('outside')
  console.log('theItems', theItem)
  console.log('updatedItems', updatedItems)
  return updatedItems
}
