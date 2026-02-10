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
  const content = `
# Getting Started

Let's get you started with Persistence One! Whether you’re new to blockchain or experienced, this guide will help you get up and running with the Persistence ecosystem in no time.w

## 💡 Quick Start Guide

This is your quick introduction to the Persistence ecosystem. Whether you're looking to trade, provide liquidity, or explore our Bitcoin Cross-Chain Swaps, we’ve got you covered with simple, easy-to-follow instructions to help you get started right away.

## 🦊 Wallet Setup

To interact with the Persistence ecosystem, you'll need a supported wallet. Follow the instructions to set up one of the recommended wallets, and you’ll be ready to start trading, staking, and participating in governance.

* Keplr Wallet: Perfect for interacting with the Cosmos ecosystem.
* Metamask: For Ethereum-compatible assets.
* Hardware Wallets: A guide to securing your assets with Ledger, Trezor, and other options.

## 💰 Acquiring $XPRT Tokens

$XPRT is the native token of the Persistence ecosystem. It powers the network through staking and governance. Here’s how you can acquire $XPRT tokens:

* Buy from exchanges like Binance, Coinbase, or decentralized exchanges (DEX).
* Transfer $XPRT to your wallet and start participating in staking or governance.

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
              Getting Started
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
