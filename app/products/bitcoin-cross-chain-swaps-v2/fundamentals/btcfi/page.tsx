'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>
              BTCfi
            </Heading></Link>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
