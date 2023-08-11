import { Fragment } from 'react'

import axios from 'axios'
import Main from '@components/components/main/Main'
import About from '@components/components/about/About'
import { Newin } from '@components/components/newin/Newin'
import {
  getCart,
  getCollections,
  getProducts,
  sendCart,
} from '@components/utils/db'
import { productsType } from '@components/utils/type'
import { cookies } from 'next/headers'
cookies

const query: string = '?date=new'

export default async function Page() {
  const response = await getProducts()

  const responseCollection = await getCollections()

  const send = await sendCart()
  console.log('send', send)
  const cart = await getCart()
  console.log('cart', cart)
  const cartt = cookies().get('cart')
  console.log(cartt)

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
