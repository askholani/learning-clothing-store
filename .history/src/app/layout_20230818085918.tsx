import './globals.css'
import { lazy, Suspense } from 'react'

import Loading from './loading'
import { getCategories } from '@components/utils/db'
import { getCookies } from '@components/cookies/cart'
import { CartProvider } from '@components/context/CartContex'
import { CheckoutProvider } from '@components/context/ChechkoutContex'

const Navbar = lazy(() => import('../components/navbar/Navbar'))
const Footer = lazy(() => import('../components/footer/Footer'))

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
  const cart = await getCookies()
  const dataCategories = await getCategories()
  const categories = dataCategories.result ? dataCategories.result : []

  return (
    <html lang='en'>
      <body className='bg-primer text-sekunder py-8 upp uppercase'>
        <CartProvider>
          <div className='md:mx-[5rem]'>
            <Suspense fallback={<Loading />}>
              <Navbar categories={categories} cookieCart={cart} />
              <CheckoutProvider>
                <main className='flex flex-col gap-y-8 pb-10'>{children}</main>
              </CheckoutProvider>
              <Footer />
            </Suspense>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
