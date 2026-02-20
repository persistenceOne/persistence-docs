'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Box, Container, Heading, Text , Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `
# Persistence Ecosystem

<figure><img src="/images/new_flowchart.jpg" alt=""><figcaption></figcaption></figure>

### 🟠 Bitcoin Cross-Chain Swaps (V2)

The flagship product of Persistence One — fast, zero-slippage cross-chain swaps of BTC-variants across Layer 2s and sidechains.

* Powered by Intents.
* Secured by Bitcoin.

🏁 [Try Bitcoin Cross-Chain Swaps here.](https://beta.interop.persistence.one/)

[Learn more about Bitcoin Cross-Chain Swaps](/products/bitcoin-cross-chain-swaps-v2/).

### 🔄 Persistence DEX (V1)

A decentralised swapping solution where you can:

* Trade efficiently across the Persistence Core-1 Chain and Babylon Genesis Network.
* Provide liquidity to earn from swap fees and LP incentives.

🏁 [Try Persistence DEX here.](https://app.persistence.one/)

[Learn more about Persistence DEX.](/products/persistence-dex-v1/)

### ⚡️ XPRT

**XPRT** is the backbone of the Persistence One ecosystem.

* It plays a crucial role in:
  * **Governance**: Participate in protocol decision-making.
  * **Staking**: Contribute to network security and earn rewards.
  * **Work Token**: Engage in economic activities within and outside the ecosystem.

[Learn more about XPRT.](/participate/xprt/)

### ⛓️ Persistence Core-1 Chain

The foundational Cosmos-based chain that powers Persistence's infrastructure.

* Enables scalability, security, and interoperability for our ecosystem.

[Learn more about the Persistence Core-1 chain.](/persistence-hub/broken/pages/YB8nbdu3j3FqbvFozukb)
`
  const hideFirstHeading = true
  const description = 'Explore the building blocks of Persistence One and how each component contributes to our mission of creating seamless cross-chain solutions.'
  const pathname = usePathname()
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Persistence Ecosystem</Heading>
          )}
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color={themeColors.text[500]} mb={4}>
                  {description}
                </Text>
              )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
  )
}
