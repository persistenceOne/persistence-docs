'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `# Geofencing on Persistence

In accordance with Persistence’s [terms of use](https://persistence.one/termsofuse) and regulatory considerations, applications on the persistence.one domain, including [Persistence Web Wallet](https://wallet.persistence.one/) and [Persistence bridge](https://bridge.persistence.one/), will no longer be accessible from certain jurisdictions mentioned [here](https://blog.persistence.one/2023/12/22/restricted-jurisdictions/), including the United States of America and the United Kingdom, after **1 March 2024.**<br>

**Important Notes:**

1. Geo-blocking is done only for front-ends hosted by Persistence Labs and has no implications on tokens, contracts, modules, and alternative front-ends deployed on the Blockchain.
2. Third-party leading Cosmos wallets like Keplr, Leap, and Cosmostation will continue to support XPRT activity as normal. It is recommended that Persisters move their tokens, including staked XPRT, to either of these wallets.
3. You need not unbond tokens and wait 21 days to move your XPRT tokens from [pWallet](https://wallet.persistence.one/) to a different wallet. Staked XPRT tokens in pWallet can be transferred directly to a new Keplr/Leap/Cosmostation wallet by following [this](https://blog.persistence.one/2023/12/28/how-to-transfer-staked-xprt-from-pwallet-to-keplr-leap-wallet-instantly/) guide.
4. If you have already started unbonding, you can cancel unbonding on pWallet and Keplr with the latest feature by following [this ](https://blog.persistence.one/2023/12/31/how-to-cancel-xprt-unstaking-on-pwallet-and-keplr/)guide.
`
  const hideFirstHeading = true
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box display="flex" flex="1" overflow="hidden">
          <Box flex="1" bg="white" overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Geofencing on Persistence
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
        </Box>
          <TableOfContents headings={headings} />
        </Box>
      </Box>
    </Box>
  )
}
