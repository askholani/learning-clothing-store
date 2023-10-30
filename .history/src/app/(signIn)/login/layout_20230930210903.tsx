'use client'

import '../../globals.css'
import Footer from '../../../components/footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-primer text-sekunder'>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
