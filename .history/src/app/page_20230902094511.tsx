import { Fragment } from 'react'

import { getCollections, getProducts } from '../utils/db'
import { productsType } from '../utils/type'

import Main from '../components/main/Main'
import About from '../components/about/About'
import Newin from '../components/newin/Newin'
import ListItems from '../components/item/ListItems'

export default async function Page() {
  const responseCollection = await getCollections()

  const response = await getProducts()
  const data = await response.result
  // console.log('response', response)
  // console.log('data', data)

  const aboutProduct: productsType[] = data.slice(2, 4)
  const newInProduct: productsType[] = data.slice(4, 10)
  const mainProduct: productsType[] = data.slice(0, 2)
  const heroNewInProduct: productsType[] = data.slice(13, 14)

  const dataCollection = responseCollection.result

  console.log('aboutProduct', aboutProduct)
  console.log('dataCollection', dataCollection)
  return (
    <Fragment>
      <Main newProduct={mainProduct} />
      {/* <About aboutProduct={aboutProduct} dataCollections={dataCollection} /> */}
      <Newin heroNewInProduct={heroNewInProduct}>
        {
          <ListItems
            items={newInProduct}
            classNameItem='h-[55vh] sm:h-[40vh]'
            n='2'
            gap='4'
            grid={'grid-grid-cols-2 sm:grid-cols-3 md:grid-cols-12 '}
          />
        }
      </Newin>
    </Fragment>
  )
}
