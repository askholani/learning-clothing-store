import './globals.css'
import Navbar from '@components/components/navbar/Navbar'

import Footer from '@components/components/footer/Footer'
import axios from 'axios'
import { api } from '@components/utils/db'

async function getCategories() {
  try {
    const response = await axios.get(`${api}/categories`)
    if (response.status !== 200) {
      throw new Error('Network response was not ok')
    }
    return response.data
  } catch (error) {
    return error
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dataCategories = await getCategories()
  const categories = dataCategories.result
    ? dataCategories.result.reverse()
    : []

  return (
    <html lang='en'>
      <body className='bg-primer text-sekunder py-8 upp uppercase'>
        <div className='md:mx-[5rem]'>
          <Navbar categories={categories} />
          <main className='flex flex-col gap-y-8 pb-10'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
