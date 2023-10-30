import { Fragment } from 'react'

import { getCollections, getProducts } from '../utils/api'
import { productsType } from '../utils/type'

import Main from '../components/main/Main'
import About from '../components/about/About'
import Newin from '../components/newin/Newin'
import ListItems from '../components/item/ListItems'

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

  const aboutProduct = await getProducts('about')
  const aboutImage = await aboutProduct.result

  // const

  return (
    <Fragment>
      <Main newProduct={mainRes} />
      <About aboutProduct={aboutImage} dataCollections={dataCollection} />
      {/*       
      <Newin heroNewInProduct={heroNewInProduct}>
        {
          <ListItems
            items={newInProduct}
            classNameItem='h-[55vh] sm:h-[40vh]'
            n='2'
            gap='4'
            grid={'grid-grid-cols-2 sm:grid-cols-3 md:grid-cols-12 '}
            size='(min-width: 780px) calc(16.67vw - 35px), (min-width: 640px) calc(33.33vw - 32px), calc(100vw - 32px)'
          />
        } */}
      {/* </Newin> */}
    </Fragment>
  )
}
