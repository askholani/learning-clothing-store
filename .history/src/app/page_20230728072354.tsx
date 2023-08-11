import { Fragment } from 'react'

import Main from '@components/components/main/Main'
import About from '@components/components/about/About'
import { Newin } from '@components/components/newin/Newin'
import { getCollections, getProducts } from '@components/utils/db'
import { productsType } from '@components/utils/type'

import exp from '@components/hooks/exp'

const query: string = '?date=new'

export default async function Page() {
  const response = await getProducts()

  const responseCollection = await getCollections()

  const data = response.result
  const try_it = exp(data)

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
