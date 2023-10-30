import '../../../app/globals.css'
import Footer from '../../../components/footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-primer'>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
