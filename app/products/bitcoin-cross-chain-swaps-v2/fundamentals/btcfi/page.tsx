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
  const content = `# BTCfi

### What is BTCfi?

BTCfi refers to the emerging Decentralized Finance (DeFi) industry within the Bitcoin ecosystem. Its purpose is to:

* Increase scalability and programmability on the Bitcoin network.
* Introduce DeFi capabilities to BTC holders.

### What BTCfi Enables

By introducing programmability, BTCfi brings a range of DeFi applications to Bitcoin, including:

* Yield farming and yield aggregators.
* Lending and liquid staking.
* Liquidity farming, DEXes, and DEX aggregators.

BTC holders can now hunt for yield and engage with DeFi applications in ways that weren’t possible before.

### Why BTCfi Matters

The BTCfi movement excites Bitcoin enthusiasts because it:

* Transforms Bitcoin's value proposition from merely a store of value to a yield-generating asset.
* Unlocks new potential for BTC, creating opportunities for innovation and financial growth within the Bitcoin ecosystem.

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
              BTCfi
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
