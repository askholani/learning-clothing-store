import { Fragment } from 'react'

import Main from '@components/components/main/Main'
import About from '@components/components/about/About'
import { Newin } from '@components/components/newin/Newin'
import { getProducts } from '@components/utils/db'

const query: string = '?date=new'

export default async function Page() {
  const response = await getProducts(query)
  const data = response.result
  const mainProduct = data.slice(0, 2)
  return (
    <Fragment>
      <Main newProduct={mainProduct} />
      <About />
      <Newin />
    </Fragment>
  )
}
