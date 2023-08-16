import './globals.css'
import Navbar from '@components/components/navbar/Navbar'
import Footer from '@components/components/footer/Footer'
import { getCategories } from '@components/utils/db'
import { CartProvider } from '@components/context/CartContex'
import { getCookies } from '@components/cookies/cart'
import { CheckoutProvider } from '@components/context/ChechkoutContex copy'

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
            <Navbar categories={categories} cookieCart={cart} />
            {/* <CheckoutProvider> */}
            <main className='flex flex-col gap-y-8 pb-10'>{children}</main>
            {/* </CheckoutProvider> */}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
