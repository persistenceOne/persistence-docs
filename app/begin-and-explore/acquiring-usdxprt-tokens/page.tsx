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
# Acquiring XPRT Tokens

$XPRT is the native token of the Persistence ecosystem. It powers the network through staking and governance. Here’s how you can acquire $XPRT tokens:

* Buy from centralised exchanges like [Gate.io](https://www.gate.io/trade/XPRT_USDT), [Kucoin](https://www.kucoin.com/trade/XPRT-USDT), or decentralised exchanges (DEX) like [Swapfast by Leap](https://swapfast.app/?destinationAsset=uxprt\\&destinationChainId=core-1\\&sourceAsset=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\\&sourceChainId=1), [IBC Transfer from Osmosis](https://app.osmosis.zone/assets/XPRT).
* Transfer $XPRT to your wallet and start participating in staking or governance.

### Learn How to Acquire XPRT from CEXs and DEXs:

<div class="embed-container"><iframe src="https://blog.persistence.one/2024/12/05/how-to-acquire-xprt-from-cexs-and-dexs/" frameborder="0" allowfullscreen></iframe></div>
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
              Acquiring XPRT Tokens
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
