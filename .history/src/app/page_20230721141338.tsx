import { Fragment } from 'react'

import Main from '@components/components/main/Main'
import About from '@components/components/about/About'
import { Newin } from '@components/components/newin/Newin'
import { getProducts } from '@components/utils/db'

export default async function Page() {
  const data = await getProducts()

  return (
    <Fragment>
      <Main data={data} />
      <About />
      <Newin />
    </Fragment>
  )
}
