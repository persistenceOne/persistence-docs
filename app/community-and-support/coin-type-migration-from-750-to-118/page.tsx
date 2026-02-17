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
  const content = `# Coin-type Migration from 750 to 118

<figure><img src="/images/Screenshot 2023-10-23 at 1.01.40 PM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** **Currently, both 118 and 750 coin-type addresses are supported by the Persistence Core-1 chain and will continue to function normally.** The coin-type migration **deadline** from 750 to 118 has been extended by 6 months from the previous deadline of 30th June 2025 (earlier) to **31st December 2025** (new), as a few users are still pending migration.

## Summary

When Persistence Core-1 chain [launched](https://blog.persistence.one/2021/03/29/the-persistence-mainnet-is-launching-on-march-30th-introducing-our-world-class-genesis-validators/), in March 2021, the interchain ecosystem was still in a very nascent stage. There were not enough data points to determine whether it would be ideal to choose the same coin-type as Cosmos i.e. 118. Hence, following the sovereign application-specific chain model, we adopted 750 coin-type.

After the introduction of IBC, the Cosmos ecosystem exploded, and we saw thousands of transactions executing across multiple IBC channels. IBC presented a whole new dimension of technological possibilities, but one aspect was vastly missed – user experience.

Therefore migration was planned during Persistence Core-1 chain upgrade v3. You can deep dive in the full migration context from blog attached below:


          <Box
            as={Link}
            href="https://blog.persistence.one/2022/07/14/coin-type-migration-from-750-to-118-for-persistence-core-1-chain-xprt/"
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
                bg={themeColors.accent.primary_600}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">P</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Persistence One Blog
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  blog.persistence.one
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

## Goal

The goal of coin-type migration is to facilitate the best user experience for the Persistence ecosystem community members. As the project matures, we strive to deliver user-centric products, and it requires constantly evolving.

We will be able to achieve our goals only with the constant feedback, support, and efforts of our community, validators, and partner projects. Every step towards a better user experience pushes us closer to becoming the liquid staking hub for the PoS ecosystem.

## Persistence Core-1 Chain Supported Wallets

|         Wallets        | 118 coin-type Supported? | 750 coin-type Supported? |
| :--------------------: | :----------------------: | :----------------------: |
|   Persistence Wallet   |            Yes           |            Yes           |
|      Keplr Wallet      |            Yes           |            Yes           |
|   Cosmostation Wallet  |            No            |            Yes           |
|   Coin98 Super Wallet  |            No            |            Yes           |
|       Math Wallet      |            No            |            Yes           |
|       Leap Wallet      |            Yes           |            Yes           |
|     Citadel Wallet     |            No            |            Yes           |
| Ledger Hardware Wallet |            Yes           |            Yes           |

## Step-by-Step Guides:

<table data-view="cards"><thead><tr><th align="center"></th><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td align="center"><strong>Persistence Wallet</strong></td><td>✅ <em>118 coin-type Supported</em></td><td>✅ <em>750 coin-type Supported</em></td><td><a href="/images/XPRT Token.png">XPRT Token.png</a></td><td><a href="persistence-wallet">persistence-wallet.md</a></td></tr><tr><td align="center"><strong>Keplr Wallet</strong></td><td>✅ <em>118 coin-type Supported</em></td><td>✅ <em>750 coin-type Supported</em></td><td><a href="/images/walllet header photo7.png">walllet header photo7.png</a></td><td><a href="keplr-wallet">keplr-wallet.md</a></td></tr><tr><td align="center"><strong>Cosmostation Wallet</strong></td><td>❌ <em>118 coin-type Supported</em></td><td>✅ <em>750 coin-type Supported</em></td><td><a href="/images/walllet header photo6.jpg">walllet header photo6.jpg</a></td><td><a href="cosmostation-wallet">cosmostation-wallet.md</a></td></tr><tr><td align="center"><strong>Coin98 Super Wallet</strong></td><td>❌ <em>118 coin-type Supported</em></td><td>✅ <em>750 coin-type Supported</em></td><td><a href="/images/walllet header photo5.jpg">walllet header photo5.jpg</a></td><td><a href="coin98-super-wallet">coin98-super-wallet.md</a></td></tr><tr><td align="center"><strong>Math Wallet</strong></td><td>❌ <em>118 coin-type Supported</em></td><td>✅ <em>750 coin-type Supported</em></td><td><a href="/images/walllet header photo4.jpg">walllet header photo4.jpg</a></td><td><a href="math-wallet">math-wallet.md</a></td></tr><tr><td align="center"><strong>Leap Wallet (in Alpha)</strong></td><td>✅ <em>118 coin-type Supported</em></td><td>✅ <em>750 coin-type Supported</em></td><td><a href="/images/walllet header photo3.jpg">walllet header photo3.jpg</a></td><td><a href="leap-wallet">leap-wallet.md</a></td></tr><tr><td align="center"><strong>Citadel Wallet</strong></td><td>❌ <em>118 coin-type Supported</em></td><td>✅ <em>750 coin-type Supported</em></td><td><a href="/images/walllet header photo2.jpg">walllet header photo2.jpg</a></td><td><a href="citadel-wallet">citadel-wallet.md</a></td></tr><tr><td align="center"><strong>Ledger Hardware Wallet</strong></td><td>✅ <em>118 coin-type Supported</em></td><td>✅ <em>750 coin-type Supported</em></td><td><a href="/images/walllet header photo1.png">walllet header photo1.png</a></td><td><a href="ledger-hardware-wallet">ledger-hardware-wallet.md</a></td></tr></tbody></table>

## General FAQs

<details>

<summary>Will 118 coin-type address support PSTAKE/other IBC enabled token?</summary>

Yes, all the IBC enabled tokens will work as usual including $PSTAKE. Kindly visit respective wallets tab for steps.

</details>

<details>

<summary>⚠️Things to Remember</summary>

1. No one from the persistence team will contact you to help you migrate your tokens.
2. Never share your seed with anyone.
3. Always make sure that you are using the correct and SSL enabled URL.
4. The only way to contact persistence team is by messaging on the verified [Persistence community chat on Telegram](https://t.me/PersistenceOneChat).

</details>
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Coin-type Migration from 750 to 118</Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
