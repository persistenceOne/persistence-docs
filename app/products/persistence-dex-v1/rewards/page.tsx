'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading as ChakraHeading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `# Rewards

LPs(Liquidity Providers) can earn rewards for facilitating trades on Persistence DEX. A part of the swap fees is distributed to LPs as a reward. In addition, teams and projects can incentivize LPs with additional incentives for maintaining liquidity for their tokens.

### Bonding 🤝

Liquidity providers need to bond their LP tokens for a period of **7 days** to be eligible for liquidity mining rewards. LPs would still earn rewards from trading fees on unbonded tokens,

**Provide Liquidity -> Mint LP Tokens -> Bond LP Tokens.**

Checkout the guide for providing liquidity and bonding/unbonding tokens here 👇



During unbonding, LP shares are not eligible for external incentives, but would still receive the rewards from trading fees.

### Streaming Rewards 🌊

Liquidity mining rewards on Persistence DEX can be claimed in real time, unlike on an epoch basis in most DEXs

### Multistaking

Multistaking on Persistence DEX allows teams and projects to incentivize liquidity in pools with multiple tokens.

<figure><img src="/images/image (1) (1).avif" alt=""><figcaption></figcaption></figure>
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
            <ChakraHeading as="h1" size="2xl" mb={4}>
              Rewards
            </ChakraHeading>
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
