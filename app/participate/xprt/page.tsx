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
# XPRT Token

<figure><img src="/images/XPRT.jpg" alt=""><figcaption></figcaption></figure>

> ✅ **Success:** **Note:** For your safety, always verify the contract addresses when bridging your tokens to other ecosystems. Using an incorrect token contract address may result in the loss of funds.

<table><thead><tr><th width="209">Network</th><th width="471">IBC Denom/Token Contract</th><th>Managed by/Contract Owner</th></tr></thead><tbody><tr><td>Persistence Core-1</td><td>persistence/uxprt</td><td>Persistence One</td></tr><tr><td>Osmosis</td><td>ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293</td><td>Osmosis Zone</td></tr><tr><td>AxelarNet</td><td>ibc/553507B81B0A26B2FF168B2A56A7CEB7C75491994D2DB5784AC6E40874E27E63</td><td>Axelar</td></tr><tr><td>Base</td><td>0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8</td><td>Axelar</td></tr><tr><td>Arbitrum</td><td>0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8</td><td>Axelar</td></tr><tr><td>Avalanche</td><td>0xe9ED8e918A20937E2C6B6f9d9a249dc6E99D3D3e</td><td>Axelar</td></tr><tr><td>BNB Chain</td><td>0xd060040976a02f0e330d3ADFEb5dc418f41Da80A</td><td>Axelar</td></tr><tr><td>Blast</td><td>0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8</td><td>Axelar</td></tr><tr><td>Ethereum</td><td>0xD454b59f16D42667Be2fA55292d16647E27f40C4</td><td>Axelar</td></tr><tr><td>Optimism</td><td>0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8</td><td>Axelar</td></tr><tr><td>Polygon</td><td>0xc690C48E3a64d8b59E54aD4202DF3cb95a85dB79</td><td>Axelar</td></tr></tbody></table>

> ℹ️ **Info:** To find updates for XPRT, you can check the dedicated page on the Persistence One blog.


          <Box
            as={Link}
            href="https://blog.persistence.one/xprt/"
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

To check all the EVM Token contract addresses for XPRT, you can check [here](https://axelarscan.io/resources/assets).

`
  const hideFirstHeading = true
  const description = 'This documentation contains all the IBC Denom or Token Contract for XPRT on the respective chains.'
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
            <>
              <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={description ? 2 : 4} color={themeColors.text[700]}>
                XPRT Token
              </Heading></Link>
            </>
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
