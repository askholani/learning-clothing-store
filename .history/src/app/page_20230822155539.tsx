import { Fragment, lazy } from 'react'

import { getCollections, getProducts } from '../utils/db'
import { productsType } from '../utils/type'

const Main = lazy(() => import('../components/main/Main'))
const About = lazy(() => import('../components/about/About'))
const Newin = lazy(() => import('../components/newin/Newin'))

export default async function Page() {
  const response = await getProducts()

  const responseCollection = await getCollections()

  const data = await response.result

  const aboutProduct: productsType[] = data.slice(2, 4)
  const newInProduct: productsType[] = data.slice(4, 10)
  const mainProduct: productsType[] = data.slice(0, 2)
  const heroNewInProduct: productsType[] = data.slice(13, 14)

  const dataCollection = responseCollection.result
  return (
    <Fragment>
      <Main newProduct={mainProduct} />
      <About aboutProduct={aboutProduct} dataCollections={dataCollection} />
      <Newin newInProduct={newInProduct} heroNewInProduct={heroNewInProduct} />
    </Fragment>
  )
}
