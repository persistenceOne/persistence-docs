'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, Link, HStack, Image} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
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
# Wallet Setup

<figure><img src="/images/P1 Wallets.jpg" alt=""><figcaption></figcaption></figure>

To interact with the Persistence One ecosystem, you’ll need a supported wallet. Follow the instructions to set up one of the recommended wallets, and you’ll be all set to start trading, staking, and participating in governance.

## <img src="/images/Keplr_icon_ver.1.3_2.png" alt="" data-size="line"> Keplr Wallet: Perfect for interacting with the Cosmos ecosystem

&#x20;[Keplr Wallet](https://wallet.keplr.app/) is one of the wallets for interacting with the Persistence One ecosystem. Follow the instructions in the guide to download, install, and set up your wallet.

Visit [Keplr Wallet’s website](https://www.keplr.app/get) and follow the steps to get started.

<div class="embed-container"><iframe src="https://www.youtube.com/embed/cmxx_hIulz8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## <img src="/images/Icon _ Transparent.png" alt="" data-size="line"> Leap Wallet: Your Gateway to the Cosmos Ecosystem&#x20;

Leap Wallet is a user-friendly and versatile wallet for interacting with the Persistence One ecosystem and the broader Cosmos network.

Follow these steps to set up Leap Wallet:

* Download and install the wallet from Leap Wallet's official website.
* Complete the guided setup process to securely create or import your wallet.

✨ **Get started with Leap Wallet** [Visit Leap Wallet's website](https://leapwallet.io) and follow the instructions to dive into the Persistence ecosystem.


          <Box
            as={Link}
            href="https://www.leapwallet.io/support/how-to-set-up-leap-wallet"
            isExternal
            display="block"
            mb={4}
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            _hover={{
              borderColor: themeColors.accent.primary,
              bg: themeColors.sidebar.hover,
              textDecoration: 'none'}}
            transition="all 0.2s"
          >
            <HStack spacing={4} align="center">
              <Box
                boxSize="40px"
                borderRadius="md"
                bg={themeColors.accent.primary}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">L</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Leap Wallet Guide
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  leapwallet.io
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>
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
                  Wallet Setup
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
