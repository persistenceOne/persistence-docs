'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading as ChakraHeading, Text, Link, HStack, Image} from '@chakra-ui/react'
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
# Tradooor Rebate Program

<figure><img src="/images/image.webp" alt=""><figcaption></figcaption></figure>

## Introduction

The "Tradooor Rebate Program" is designed to benefit traders who actively participate in the **stkATOM/ATOM** liquidity pool. Traders can now avail themselves of a significant advantage by receiving a refund on their swap fees. For each trade executed on the pool, traders will be refunded the standard swap fees of **0.3%** and an extra incentive of **0.05%**. These rewards will be distributed in the form of **$XPRT** tokens, which are airdropped directly to the same wallet used for trading activity on a daily epoch basis. The rebate program will run until a cap of **34,500 $XPRT** tokens is reached.

## Guide

[guides](/docs/products/persistence-dex-v1/guides/)

[trading-assets](/docs/products/persistence-dex-v1/guides/trading-assets)

_Head over to the Rebate Program page on the web app to find your reward amount and total volume traded as part of the program._


          <Box
            as={Link}
            href="https://app.persistence.one/rebate-program"
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
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">P</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Persistence DEX
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  app.persistence.one
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

<figure><img src="/images/image (3).avif" alt=""><figcaption></figcaption></figure>

## FAQs

**Q: What is the trading rebate program?**

A: The Trading Rebate Program is an initiative by the Tradooor Council to attract traders to Persistence DEX. It involves the establishment of the "Tradooor Fund," which aims to incentivize traders by rebating swap fees and providing additional trading incentives.

**Q: How do I qualify for the trading rebate program?**

A: To qualify for the trading rebate program, you need to actively participate and trade in the stkATOM/ATOM pool.

**Q: What is the total allocated fund used to incentivised the rebate program?**

A: A total of 34,500 $XPRT is used to incentivize the rebate program.

**Q: What fees are eligible for the rebate?**

A: The trading rebate program covers swap fees incurred during trading activities on Persistence DEX.

**Q: How much will I receive as a rebate?**

A: As part of the trading rebate program, you will receive a full refund of the swap fees you paid and an additional incentive equal to 16% of the swap fee (ie 0.05%)

**Q: How will I receive the rebate?**

A: The rebates will be airdropped to your wallet, which you used for trading, on a daily basis.

**Q: Do I need to register for the trading rebate program?**

A: No separate registration is required for the trading rebate program. All eligible users who have traded on the eligible pair on Persistence DEX will automatically receive the rebates.

**Q: Is there a minimum trading volume required to qualify for the rebate?**

A: There is no minimum trading volume requirement to qualify for the trading rebate program.

**Q: Can I participate in the trading rebate program multiple times?**

A: Yes, you can participate in the trading rebate program multiple times, as long as you continue to actively trade on the eligible pair on Persistence DEX and the maximum $XPRT cap is not reached.

**Q: Will the rebate program continue indefinitely?**

A: The trading rebate program will run until we reach the maximum $XPRT cap allocated for the program.

**Q: Can I withdraw the rebates immediately?**

A: Yes, once the rebates are airdropped to your wallet, you have full control over the funds and can withdraw or use them as you wish.

**Q: Is there a specific duration for each epoch?**

A: Each epoch has a duration of 24 hours. You will receive the rebate once every 24 hours on a designated epoch time, as mentioned in the blog.

**Q: Are there any fees or charges associated with receiving the rebates?**

A: No, there are no fees or charges associated with receiving the rebates. The full rebate amount will be airdropped to your wallet.
`
  const hideFirstHeading = true
  const description = 'The tradoor rebate program is designed to incentivize traders on the platform and generate real yield for the LPs.'
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
              Tradooor Rebate Program
            </ChakraHeading></Link>
          )}
            {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color={themeColors.text[500]} mb={4}>
                  {description}
                </Text>
            )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
