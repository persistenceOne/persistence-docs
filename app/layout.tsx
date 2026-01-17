import { Providers } from '@/components/Providers'
import { Box } from '@chakra-ui/react'

export const metadata = {
  title: 'Persistence Docs',
  description: 'Documentation for Persistence One ecosystem',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Persistence Docs',
    description: 'Documentation for Persistence One ecosystem',
    type: 'website',
    url: 'https://docs.persistence.one',
    siteName: 'Persistence Docs',
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
    description: 'Documentation for Persistence One ecosystem',
    images: ['/images/header_image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ height: '100%', margin: 0, overflow: 'hidden' }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

