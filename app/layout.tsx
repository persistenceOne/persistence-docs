import { Providers } from '@/components/Providers'
import { AppLayout } from '@/components/AppLayout'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-poppins',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.persistence.one'),
  title: {
    default: 'Persistence Docs',
    template: '%s | Persistence Docs',
  },
  description: 'Comprehensive documentation for Persistence One ecosystem. Learn how to participate, build, integrate, and validate on Persistence Chain. Explore Persistence DEX, Bitcoin Cross-Chain Swaps, XPRT staking, and more.',
  other: {
    'preconnect-googleapis': 'https://fonts.googleapis.com',
    'preconnect-gstatic': 'https://fonts.gstatic.com',
  },
  keywords: [
    'Persistence',
    'Persistence One',
    'Persistence Chain',
    'XPRT',
    'Cosmos',
    'blockchain',
    'documentation',
    'Persistence DEX',
    'Bitcoin Cross-Chain Swaps',
    'BTCFi',
    'staking',
    'validators',
    'nodes',
    'CosmWasm',
    'smart contracts',
    'IBC',
    'relayers',
  ],
  authors: [{ name: 'Persistence Labs' }],
  creator: 'Persistence Labs',
  publisher: 'Persistence Labs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.persistence.one',
    siteName: 'Persistence Docs',
    title: 'Persistence Docs',
    description: 'Comprehensive documentation for Persistence One ecosystem. Learn how to participate, build, integrate, and validate on Persistence Chain.',
    images: [
      {
        url: '/images/header_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Persistence Docs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Persistence Docs',
    description: 'Comprehensive documentation for Persistence One ecosystem',
    images: ['/images/header_image.jpg'],
    creator: '@persistence_one',
    site: '@persistence_one',
  },
  alternates: {
    canonical: 'https://docs.persistence.one',
  },
  category: 'technology',
  classification: 'Documentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ height: '100%' }} className={poppins.variable}>
      <body style={{ height: '100%', margin: 0, overflow: 'hidden' }} className={poppins.className}>
        <Providers>
          <AppLayout>
            {children}
          </AppLayout>
        </Providers>
      </body>
    </html>
  )
}

