import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SwipeScale — Theme pages that print attention.',
  description: 'We run niche theme pages that deliver targeted reach and leads—without the attribution circus. From $1,000/month + $0.15 CPM.',
  keywords: 'marketing, theme pages, social media, reach, CPM, lead generation',
  authors: [{ name: 'SwipeScale' }],
  openGraph: {
    title: 'SwipeScale — Theme pages that print attention.',
    description: 'We run niche theme pages that deliver targeted reach and leads—without the attribution circus. From $1,000/month + $0.15 CPM.',
    url: 'https://swipescale.co',
    siteName: 'SwipeScale',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwipeScale — Theme pages that print attention.',
    description: 'We run niche theme pages that deliver targeted reach and leads—without the attribution circus.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon_io/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 