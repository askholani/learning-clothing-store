import './globals.css'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import Loading from './loading'
import { getCategories } from '../utils/db'
import { CartProvider } from '../context/CartContex'
import { CheckoutProvider } from '../context/ChechkoutContex'

const Navbar = dynamic(() => import('../components/navbar/Navbar'))
const Footer = dynamic(() => import('../components/footer/Footer'))
const NavbarBottom = dynamic(() => import('../components/navbar/NavbarBottom'))

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
      <body>
        <CartProvider>
          <div className='px-4 sm:px-8 md:px-16 bg-primer text-sekunder md:py-8 uppercase f'>
            <Suspense fallback={<Loading />}>
              <Navbar />
              <CheckoutProvider>
                <main className='flex flex-col gap-y-8 md:pb-10'>
                  {children}
                </main>
                <NavbarBottom />
              </CheckoutProvider>
              <Footer />
            </Suspense>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
