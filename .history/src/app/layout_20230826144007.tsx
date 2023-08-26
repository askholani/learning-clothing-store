import './globals.css'
import { Suspense } from 'react'

import Loading from './loading'
import { getCategories } from '../utils/db'
import { CartProvider } from '../context/CartContex'
import { CheckoutProvider } from '../context/ChechkoutContex'

import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../components/navbar/Navbar'))
const Footer = dynamic(() => import('../components/footer/Footer'))

/**
 * inifinite loop dapat terjadi karena client component menggunakan async
 * @date 8/5/2023 - 10:07:39 AM
 *
 * @type {*}
 */

/**
 * <input>x</input> : menghasilkan infinite looping karena tag input adalah elemen void
 * @date 8/7/2023 - 5:44:29 PM
 *
 * @export
 * @async
 * @param {{
  children: React.ReactNode
}} {
  children,
}
 * @returns {unknown}
 */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dataCategories = await getCategories()
  const categories = dataCategories.result ? dataCategories.result : []

  return (
    <html lang='en'>
      {/* <body className='bg-primer text-sekunder py-4 md:py-8 upp uppercase'> */}
      <body className='bg-primer text-sekunder py-4 md:py-8 uppercase'>
        <CartProvider>
          {/* <div className='md:px-[5rem]'> */}
          <div className=''>
            <Suspense fallback={<Loading />}>
              <Navbar categories={categories} />
              <CheckoutProvider>
                <main className='flex flex-col gap-y-8 pb-10'>{children}</main>
              </CheckoutProvider>
              {/* <Footer /> */}
            </Suspense>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
