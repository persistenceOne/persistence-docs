'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Box, Container, Heading as ChakraHeading, Text, Link, useColorMode } from '@chakra-ui/react'
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
# Overview

<figure><img src="/images/header_image.jpg" alt=""><figcaption></figcaption></figure>

> ℹ️ **Info:** **Note:** The documentation is continuously updated to reflect the latest developments across the ecosystem. We apologise if the information you’re looking for is not yet available. Feel free to contribute to its improvement or [contact the team](https://t.me/PersistenceOneChat) directly with any questions.

Welcome to the **Persistence Docs**! Here, you’ll find everything you need to learn, participate, and build within the ecosystem.

## 🚦 Introduction

**Persistence One** is building the BTCFi Liquidity Hub, enabling fast, near-zero-slippage swaps for XPRT, BTC-variants, and BTCfi tokens on **Persistence DEX**.

**BTCFi**’s rapid growth has created multiple BTC-related assets, making fragmentation a big challenge. Persistence One will provide a single liquidity hub, simplifying value transfer across the Bitcoin ecosystem.

Whether you’re a developer, trader, or blockchain enthusiast, this documentation will guide you in exploring and utilising our products.

We invite you on this journey with us, where you can learn, participate, explore, build, integrate, validate, and connect.

## 🤝 Participate & Explore

Your participation is crucial! Dive into the comprehensive guide on how you can actively engage with the Persistence ecosystem and discover all the tools that facilitate your involvement.&#x20;

<table data-view="cards"><thead><tr><th align="center"></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td align="center"><strong>XPRT</strong></td><td>Find out how to acquire and stake the native ecosystem token and use it in Governance and DeFi.</td><td><a href="participate/xprt/">xprt</a></td></tr><tr><td align="center"><strong>Wallets</strong></td><td>Find out which wallets to use to interact with the Persistence chain</td><td><a href="participate/wallets.md">wallets.md</a></td></tr><tr><td align="center"><strong>Explorers</strong></td><td>Your options to find the on-chain data you need</td><td><a href="participate/explorers.md">explorers.md</a></td></tr><tr><td align="center"><strong>Bridges</strong></td><td>Your options for bridging assets into or out of Persistence</td><td><a href="participate/bridges.md">bridges.md</a></td></tr></tbody></table>

## 🚚 Build, Integrate, Validate

Technical Documentation for builders and validators.

<table data-view="cards"><thead><tr><th align="center"></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td align="center"><strong>Running Nodes</strong></td><td>How to run a node locally, on testnet or on mainnet</td><td><a href="build/nodes-and-endpoints/">nodes-and-endpoints</a></td></tr><tr><td align="center"><strong>Validators</strong></td><td>How to become a validator on testnet or mainnet</td><td><a href="build/validators/">validators</a></td></tr><tr><td align="center"><strong>Relayers</strong></td><td>Which relayers are maintained, and how to run one yourself</td><td><a href="build/relayers/">relayers</a></td></tr><tr><td align="center"><strong>Indexers</strong></td><td>How to connect to and even run Graph Nodes</td><td><a href="build/indexers/">indexers</a></td></tr><tr><td align="center"><strong>Smart Contracts</strong></td><td>How to build Dapps on top of the Persistence Chain via CosmWasm</td><td><a href="build/smart-contracts/">smart-contracts</a></td></tr><tr><td align="center"><strong>Tools</strong></td><td>Find all tools that have been built for the ecosystem</td><td><a href="build/tools/">tools</a></td></tr></tbody></table>

## 📣 Connect & Follow

Find all links to the Persistence official pages and channels [on this page](/community-and-support/connect-and-follow).

_**Disclaimer:** This documentation page is collaboratively maintained by Persistence Labs and the Persistence Foundation. However, there is no assurance that all the information presented is always accurate. We encourage the community to flag any errors or inaccuracies and contribute to keeping the documentation up-to-date._
`
  const hideFirstHeading = true
  const description = 'Familiarise yourself with all the events happening across the Persistence One ecosystem on this page.'
  const pathname = usePathname()
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])

  return (
        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: 'column', xl: 'row' }}>
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
            <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
              {hideFirstHeading && (
                <>
                  <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><ChakraHeading as="h1" size={{ base: 'xl', md: '2xl' }} mb={description ? 2 : 4} color={themeColors.text[700]}>
                    Overview
                  </ChakraHeading></Link>
                  {description && (
                    <Text fontSize={{ base: 'md', md: 'lg' }} color={themeColors.text[500]} mb={4}>
                      {description}
                    </Text>
                  )}
                </>
              )}
              
              <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation currentPath="/" />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
  )
}
