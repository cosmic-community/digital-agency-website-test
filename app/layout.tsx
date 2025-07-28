import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Agency | Expert Web Development & Design Services',
  description: 'Transform your digital presence with our expert web development, UI/UX design, and digital strategy consulting services. Proven results for growing businesses.',
  keywords: 'web development, UI/UX design, digital strategy, consulting, Next.js, React',
  authors: [{ name: 'Digital Agency' }],
  openGraph: {
    title: 'Digital Agency | Expert Web Development & Design Services',
    description: 'Transform your digital presence with our expert web development, UI/UX design, and digital strategy consulting services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Agency | Expert Web Development & Design Services',
    description: 'Transform your digital presence with our expert services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}