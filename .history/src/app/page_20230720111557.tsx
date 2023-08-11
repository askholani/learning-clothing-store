import { Fragment } from 'react'

import Main from '@components/components/main/Main'
import About from '@components/components/about/About'
import { Newin } from '@components/components/newin/Newin'
import axios from 'axios'

const urlApiBase = process.env.NEXT_LOCAL_DEV
const api = urlApiBase ? urlApiBase : ''

async function getProducts() {
  try {
    const response = await axios.get(`${api}/shop`)
    if (response.status !== 200) {
      throw new Error('Network response was not ok')
    }
    console.log('hai')
    return response.data
  } catch (error) {
    console.error('Error fetching data : ', error)
    return null
  }
}

export default async function Page() {
  const data = await getProducts()
  console.log(data)
  return (
    <Fragment>
      <Main />
      <About />
      <Newin />
    </Fragment>
  )
}
