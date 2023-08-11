import { cookies } from 'next/headers'

import './globals.css'
import Navbar from '@components/components/navbar/Navbar'
import Footer from '@components/components/footer/Footer'
import { getCategories } from '@components/utils/db'
import CartProvider from '@components/store/CartProvider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(cookies().get('cart')?.value)
  const dataCategories = await getCategories()
  const categories = dataCategories.result ? dataCategories.result : []

  return (
    <html lang='en'>
      <body className='bg-primer text-sekunder py-8 upp uppercase'>
        <CartProvider>
          <div className='md:mx-[5rem]'>
            <Navbar categories={categories} />
            <main className='flex flex-col gap-y-8 pb-10'>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
