import { Fragment } from 'react'

import { getCollections, getProducts } from '../utils/db'
import { productsType } from '../utils/type'

import Main from '../components/main/Main'
import About from '../components/about/About'
import Newin from '../components/newin/Newin'

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
  console.log('aboutProduct', aboutProduct)
  console.log('dataCollection', dataCollection)

  const dataCollection = responseCollection.result
  return (
    <Fragment>
      <Main newProduct={mainProduct} />
      {/* <About aboutProduct={aboutProduct} dataCollections={dataCollection} /> */}
      <Newin newInProduct={newInProduct} heroNewInProduct={heroNewInProduct} />
    </Fragment>
  )
}
