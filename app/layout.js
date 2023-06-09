import './globals.css'
import { Manrope } from 'next/font/google'
import { Navbar, Footer } from '@/components'
import Script from 'next/script'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://kit.fontawesome.com/72aeedc907.js" crossorigin="anonymous" />
      </body>
    </html>
  )
}
