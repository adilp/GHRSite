import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rotary Club POC',
  description: 'Proof of Concept for the Rotary Club Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Note: Header is passed outside the children for poc-dashboard to control it */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
