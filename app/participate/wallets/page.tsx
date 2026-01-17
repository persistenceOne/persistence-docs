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
# Wallets

> ✅ **Success:** **Recommended options:** Include Keplr and Persistence Wallet. Please refer to the updated guide linked below.

## [wallet-setup](/docs/begin-and-explore/wallet-setup.md "mention")

## Keplr

<div class="embed-container"><iframe src="https://wallet.keplr.app/chains/persistence" frameborder="0" allowfullscreen></iframe></div>

Tutorial:

<div class="embed-container"><iframe src="https://www.youtube.com/embed/u-6hzCvuu3k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Tutorial/Guide:

<div class="embed-container"><iframe src="https://medium.com/cosmostation/how-to-create-your-personal-persistence-xprt-account-on-cosmostation-wallet-ios-android-web-30cdfece35ce" frameborder="0" allowfullscreen></iframe></div>

Tutorial/Guide:

<div class="embed-container"><iframe src="https://medium.com/everstake/how-to-connect-a-ledger-wallet-to-the-persistence-wallet-and-stake-xprt-a-simple-guide-for-7daacca53bfd" frameborder="0" allowfullscreen></iframe></div>

Tutorial/Guide:

<div class="embed-container"><iframe src="https://everstake.one/blog/how-to-stake-persistence-xprt-using-the-leap-wallet" frameborder="0" allowfullscreen></iframe></div>

> ⚠️ **Warning:** Note: As part of the Persistence v3 chain upgrade, the default coin type was changed from 750 to 118. Read all about it [here](https://blog.persistence.one/2022/07/14/coin-type-migration-from-750-to-118-for-persistence-core-1-chain-xprt/).

* If you're creating a new wallet on keplr or Persistence Wallet, then no changes are required.

`
  const hideFirstHeading = true
  const description = 'List of wallets supporting XPRT'
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
              Wallets
            </Heading>
          )}
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" mb={4}>
                  {description}
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
