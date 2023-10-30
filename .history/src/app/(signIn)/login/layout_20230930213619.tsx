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
      <body>
        <div className='px-4 md:px-16 bg-primer text-sekunder md:py-8'>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
