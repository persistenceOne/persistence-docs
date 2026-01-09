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

<div class="embed-container"><iframe src="https://www.leapwallet.io/support/how-to-set-up-leap-wallet" frameborder="0" allowfullscreen></iframe></div>
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
              Wallet Setup
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
