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
  const content = `
# Persistence Ecosystem

<figure><img src="/images/new_flowchart.jpg" alt=""><figcaption></figcaption></figure>

### 🔄 Persistence DEX (V1)

A decentralised swapping solution where you can:

* Trade efficiently across the Persistence Core-1 Chain and Babylon Genesis Network.
* Provide liquidity to earn from swap fees and LP incentives.

🏁 [Try Persistence DEX here.](https://app.persistence.one/)

[Learn more about Persistence DEX.](/docs/products/persistence-dex-v1/)

### 🟠 Bitcoin Cross-Chain Swaps (V2)

Our flagship product focused on fast, zero-slippage swaps across Bitcoin layer 2s and sidechains.

* Powered by Intents.
* Secured by Bitcoin.

🏁 [Try Bitcoin Cross-Chain Swaps here.](https://beta.interop.persistence.one/)

[Learn more about Bitcoin Cross-Chain Swaps](/docs/products/bitcoin-cross-chain-swaps-v2/).

### ⚡️ XPRT

**XPRT** is the backbone of the Persistence One ecosystem.

* It plays a crucial role in:
  * **Governance**: Participate in protocol decision-making.
  * **Staking**: Contribute to network security and earn rewards.
  * **Work Token**: Engage in economic activities within and outside the ecosystem.

[Learn more about XPRT.](/docs/participate/xprt/)

### ⛓️ Persistence Core-1 Chain

The foundational Cosmos-based chain that powers Persistence's infrastructure.

* Enables scalability, security, and interoperability for our ecosystem.

[Learn more about the Persistence Core-1 chain.](/docs/persistence-hub/broken/pages/YB8nbdu3j3FqbvFozukb)
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
              Persistence Ecosystem
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
