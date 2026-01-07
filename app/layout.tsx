import { Providers } from '@/components/Providers'
import { Box } from '@chakra-ui/react'

export const metadata = {
  title: 'Persistence Docs',
  description: 'Documentation for Persistence One ecosystem',
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

