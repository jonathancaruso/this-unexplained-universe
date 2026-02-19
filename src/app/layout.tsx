import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'This Unexplained Universe - Mysteries, Anomalies & the Unknown',
    template: '%s | This Unexplained Universe',
  },
  description: 'Exploring the world\'s greatest unsolved mysteries with evidence, analysis, and intellectual curiosity. From deep space anomalies to historical enigmas.',
  metadataBase: new URL('https://thisunexplaineduniverse.com'),
  openGraph: {
    siteName: 'This Unexplained Universe',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
