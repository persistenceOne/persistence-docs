'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Box, Container, Heading as ChakraHeading, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# Introduction

Persistence DEX is a decentralized exchange for BTC and Liquid Staked Tokens (LSTs).&#x20;

Trade efficiently or provide liquidity to earn from swap fees and LP rewards 👉🏻[https://app.persistence.one](https://app.persistence.one)

**Read the announcement:** [https://blog.persistence.one/2024/06/11/rebranding-dexter-introducing-persistence-dex-and-enhancing-ecosystem-alignment/](https://blog.persistence.one/2024/06/11/rebranding-dexter-introducing-persistence-dex-and-enhancing-ecosystem-alignment/)

>**Note:** Persistence DEX's docs are currently in the draft stage. We apologise for any missing information and welcome contributions to enhance its quality. If you have any queries, please don't hesitate to contact our team

## Learn the fundamentals

Learn the fundamentals of Persistence DEX to get a better understanding of our main features:

[pools](/docs/products/persistence-dex-v1/pools)

[fees](/docs/products/persistence-dex-v1/fees)

## Dive a little deeper

Take a glance over the code behind Persistence DEX.

[technical-architecture](/docs/products/persistence-dex-v1/technical-architecture)

## Guides

Take a walkthrough of using Persistence DEX

[managing-assets](/docs/products/persistence-dex-v1/guides/managing-assets)

[trading-assets](/docs/products/persistence-dex-v1/guides/trading-assets)

[providing-liquidity](/docs/products/persistence-dex-v1/guides/providing-liquidity)

[bonding-unbonding-tokens](/docs/products/persistence-dex-v1/guides/bonding-unbonding-tokens)

[claiming-rewards](/docs/products/persistence-dex-v1/guides/claiming-rewards)
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Introduction
            </ChakraHeading></Link>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
