import './globals.css'
import Navbar from '@components/components/navbar/Navbar'
import Footer from '@components/components/footer/Footer'
import { getCategories } from '@components/utils/db'
import { CartProvider } from '@components/store/CartContex'
import { getCookies } from '@components/cookies/cart'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /**
   * inifinite loop dapat terjadi karena client component menggunakan async
   * @date 8/5/2023 - 10:07:39 AM
   *
   * @type {*}
   */
  const cart = await getCookies()
  const dataCategories = await getCategories()
  const categories = dataCategories.result ? dataCategories.result : []

  return (
    <html lang='en'>
      <body className='bg-primer text-sekunder py-8 upp uppercase'>
        <CartProvider>
          <div className='md:mx-[5rem]'>
            <Navbar categories={categories} cookieCart={cart} />
            <main className='flex flex-col gap-y-8 pb-10'>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
