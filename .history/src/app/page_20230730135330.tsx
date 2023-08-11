import { setCookie, getCookie } from 'cookies-next'
import { Fragment } from 'react'
import axios from 'axios'
import Main from '@components/components/main/Main'
import About from '@components/components/about/About'
import { Newin } from '@components/components/newin/Newin'
import { api, getCollections, getProducts } from '@components/utils/db'
import { productsType } from '@components/utils/type'

const query: string = '?date=new'

export default async function Page() {
  const a = setCookie('name', 'value', {
    expires: new Date(Date.now() + 3600000),
    path: '/',
  })
  console.log('a', a)

  const cookies = getCookie('name')
  console.log('cookies', cookies)

  //
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
