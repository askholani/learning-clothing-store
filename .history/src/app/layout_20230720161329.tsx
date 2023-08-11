import './globals.css'
import Navbar from '@components/components/navbar/Navbar'

import Footer from '@components/components/footer/Footer'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-primer text-sekunder py-8 upp uppercase'>
        <div className='md:mx-[5rem]'>
          <Navbar />
          <main className='flex flex-col gap-y-8 pb-10'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
