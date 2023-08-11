import { Fragment } from 'react'

import Main from '@components/components/main/Main'
import About from '@components/components/about/About'
import { Newin } from '@components/components/newin/Newin'
import { getProducts } from '@components/utils/db'
import { log } from 'console'

const query: string = '?date=new'

export default async function Page() {
  const response = await getProducts(query)
  const data = response.result
  log(data)
  return (
    <Fragment>
      <Main newProduct={data} />
      <About />
      <Newin />
    </Fragment>
  )
}
