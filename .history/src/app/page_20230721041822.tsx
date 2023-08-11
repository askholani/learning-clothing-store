import { Fragment } from 'react'

import Main from '@components/components/main/Main'
import About from '@components/components/about/About'
import { Newin } from '@components/components/newin/Newin'
import axios from 'axios'
import { api } from '@components/utils/db'

async function getProducts() {
  try {
    const response = await axios.get(`${api}/shop`)
    if (response.status !== 200) {
      throw new Error('Network response was not ok')
    }
    return response.data
  } catch (error) {
    return error
  }
}

export default async function Page() {
  const data = await getProducts()
  console.log(data)

  const newProdcut = data.sort((a, b) => b.created_at - a.created_at)
  console.log(newProdcut)

  return (
    <Fragment>
      <Main data={data} />
      <About />
      <Newin />
    </Fragment>
  )
}
