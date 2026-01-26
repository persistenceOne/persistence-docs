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
# Bridges

### 1. Persistence Bridge

Transfer tokens from ERC-20 to Core-1 or vice versa using Persistence Bridge.

Learn more here:

[persistence-bridge](/docs/participate/bridges/persistence-bridge)



### 2. Satellite (by Axelar)

Transfer tokens from ERC-20 to Core-1 or vice versa using Satellite Bridge.

Learn more here:

[Broken link](/docs/participate/broken/pages/3rbJVX6Oq4piEGXlBe2h)



### 3. IBC

While it's technically not a bridge but an Inter-Blockchain Communication Protocol, IBC enables any assets to flow easily between all IBC-enabled blockchains (which Persistence is), via so-called relayers. Find out [here](/docs/build/relayers/ibc-relayers) which relayers enable asset flows to and from the Persistence

Find more information on the [IBC Protocol website](https://ibcprotocol.org/) and visualise connections and asset flows easily using the link below:&#x20;


          <Box
            as={Link}
            href="https://mapofzones.com"
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
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">M</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Map of Zones
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  mapofzones.com
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

For details on the IBC-channels between Persistence Core-1 and other chains, follow [this link.](https://mapofzones.com/zones/core-1/peers?columnKey=ibcVolumeIn\\&period=24h)

`
  const hideFirstHeading = true
  const description = 'List of bridges and possible asset transfers between Persistence and other chains'
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
              Bridges
            </Heading></Link>
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
