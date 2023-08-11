import { Fragment } from 'react'

import Main from '@components/components/main/Main'
import About from '@components/components/about/About'
import { Newin } from '@components/components/newin/Newin'
import axios from 'axios'
import { api } from '@components/utils/db'

async function getProducts() {
  try {
    const response = await axios.get(`${api}/shop`)
    // const response = await fetch(`${api}/shop`)
    if (response.status !== 200) {
      throw new Error('Network response was not ok')
    }
    return response.data
    // return response.json()
  } catch (error) {
    console.error('Error fetching data : ', error)
    return null
  }
}

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
