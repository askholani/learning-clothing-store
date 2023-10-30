// import './globals.css'
import '../../../app/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-primer'>{children}</body>
    </html>
  )
}
