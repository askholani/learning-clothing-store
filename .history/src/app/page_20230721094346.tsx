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

  const newProduct = data.result.sort((a, b) => {
    console.log(a.created_at)
    console.log(b.created_at)
    return new Date(b.created_at) - new Date(a.created_at)
  })

  console.log(data.result)
  console.log(newProduct)

  return (
    <Fragment>
      <Main data={data} newProduct={newProduct} />
      <About />
      <Newin />
    </Fragment>
  )
}
