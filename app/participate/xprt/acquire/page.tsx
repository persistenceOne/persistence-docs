'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text , useDisclosure } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# Acquire

$XPRT is the native token of the Persistence ecosystem. It powers the network through staking and governance. Users can acquire $XPRT either on Centralised or Decentralised Exchanges.

> ✅ **Success:** The references provided below are solely for informational purposes. They do not constitute an endorsement of the specific exchange, nor do they offer any financial or investment advice.&#x20;

> ⚠️ **Warning:** Before you proceed, ensure you understand [the XPRT Token](/docs/participate/xprt), what [Proof-of-Stake](https://www.investopedia.com/terms/p/proof-stake-pos.asp) is, and which [wallets](/docs/participate/wallets) are supported.

<div class="embed-container"><iframe src="https://blog.persistence.one/2024/12/05/how-to-acquire-xprt-from-cexs-and-dexs/" frameborder="0" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://ascendex.com/en/cashtrade-spottrading/usdt/xprt" frameborder="0" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://www.gate.io/trade/XPRT_USDT" frameborder="0" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://www.coinex.com/en/exchange/xprt-usdt" frameborder="0" allowfullscreen></iframe></div>

***

## $XPRT Price Tracking

<div class="embed-container"><iframe src="https://coinmarketcap.com/currencies/persistence/" frameborder="0" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://www.coingecko.com/en/coins/persistence" frameborder="0" allowfullscreen></iframe></div>
`
  const hideFirstHeading = true
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header onMenuClick={onOpen} />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar isOpen={isOpen} onClose={onClose} />
        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
          <Box flex="1" bg="white" overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Acquire
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Not Investment Advice
            </Text>
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
