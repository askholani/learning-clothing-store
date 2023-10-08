import { Fragment } from 'react'

import { getCollections, getProducts } from '../utils/api'
import { productsType } from '../utils/type'

import Main from '../components/main/Main'
import About from '../components/about/About'
import Newin from '../components/newin/Newin'
import ListItems from '../components/item/ListItems'
import { getNewIn } from '../models/allModels'

export default async function Page() {
  const responseCollection = await getCollections()
  const dataCollection = responseCollection.result

  // const response = await getProducts()
  // const data = await response.result

  // const aboutProduct: productsType[] = data.slice(2, 4)
  // const newInProduct: productsType[] = data.slice(4, 10)
  // const mainProduct: productsType[] = data.slice(0, 2)
  // const heroNewInProduct: productsType[] = data.slice(13, 14)

  const mainProduct = await getProducts('main')
  const mainRes = await mainProduct.result
  // console.log(mainProduct)

  const aboutProduct = await getProducts('about')
  const aboutImage = await aboutProduct.result

  const newInProduct = await getProducts('newIn')
  const newInImage = await newInProduct.result

  const collections = await getCollections()
  const resCollections = await collections.result

  return (
    <Fragment>
      <Main newProduct={mainRes} />
      {/* <About aboutProduct={aboutImage} dataCollections={dataCollection} />
      <Newin newInProduct={newInImage}></Newin> */}
    </Fragment>
  )
}
