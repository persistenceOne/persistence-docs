'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Box, Container, Heading, Text, Link, HStack, Image } from '@chakra-ui/react'
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
# Acquire

$XPRT is the native token of the Persistence ecosystem. It powers the network through staking and governance. Users can acquire $XPRT either on Centralised or Decentralised Exchanges.

> ✅ **Success:** The references provided below are solely for informational purposes. They do not constitute an endorsement of the specific exchange, nor do they offer any financial or investment advice.&#x20;

> ⚠️ **Warning:** Before you proceed, ensure you understand [the XPRT Token](/participate/xprt), what [Proof-of-Stake](https://www.investopedia.com/terms/p/proof-stake-pos.asp) is, and which [wallets](/participate/wallets) are supported.

## Decentralized Exchanges
`
  const hideFirstHeading = true
  const description = 'Not Investment Advice'
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Acquire</Heading>
          )}
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color={themeColors.text[500]} mb={4}>
                  {description}
                </Text>
              )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          
          {/* Blog Post Link */}
          <Box
            as={Link}
            href="https://blog.persistence.one/2024/12/05/how-to-acquire-xprt-from-cexs-and-dexs/"
            isExternal
            display="block"
            mt={6}
            mb={6}
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
              <Image
                src="/images/logo.avif"
                alt="Persistence"
                boxSize="40px"
                borderRadius="md"
                flexShrink={0}
              />
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  How to Acquire XPRT from CEX&apos;s and DEX&apos;s – Persistence One
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  Persistence One - The BTCFi Liquidity Hub
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          {/* Decentralized Exchanges Section */}
          <Heading as="h2" size="lg" mb={4} mt={8} color={themeColors.text[700]}>
            Decentralized Exchanges
          </Heading>

          {/* Osmosis */}
          <Box
            as={Link}
            href="https://app.osmosis.zone/assets/ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293"
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
                bg="purple.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">O</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  https://app.osmosis.zone/assets/ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  app.osmosis.zone
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          {/* Centralized Exchanges Section */}
          <Heading as="h2" size="lg" mb={4} mt={8} color={themeColors.text[700]}>
            Centralized Exchanges
          </Heading>

          {/* KuCoin */}
          <Box
            as={Link}
            href="https://www.kucoin.com/trade/XPRT-USDT"
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
                bg="green.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">K</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Crypto Exchange | Bitcoin Exchange | Bitcoin Trading | KuCoin
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  kucoin.com
                </Text>
                <Text fontSize="xs" color={themeColors.text[400]} mt={1}>
                  KuCoin
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          {/* AscendEX */}
          <Box
            as={Link}
            href="https://ascendex.com/en/cashtrade-spottrading/usdt/xprt"
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
                bg={themeColors.text[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">A</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  XPRT Price
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  ascendex.com
                </Text>
                <Text fontSize="xs" color={themeColors.text[400]} mt={1}>
                  AscendEX
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          {/* Gate.io */}
          <Box
            as={Link}
            href="https://www.gate.io/trade/XPRT_USDT"
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
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">G</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  0.015637 XPRT USDT Spot Trading | Live Price Chart | Gate.com
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  Gate.com
                </Text>
                <Text fontSize="xs" color={themeColors.text[400]} mt={1}>
                  Gate.io
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          {/* CoinEx */}
          <Box
            as={Link}
            href="https://www.coinex.com/en/exchange/xprt-usdt"
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
                bg="green.600"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">C</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Trade XPRT/USDT | XPRT on CoinEx Exchange
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  www.coinex.com
                </Text>
                <Text fontSize="xs" color={themeColors.text[400]} mt={1}>
                  CoinEx
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          {/* Price Tracking Section */}
          <Heading as="h2" size="lg" mb={4} mt={8} color={themeColors.text[700]}>
            $XPRT Price Tracking
          </Heading>

          {/* CoinMarketCap */}
          <Box
            as={Link}
            href="https://coinmarketcap.com/currencies/persistence/"
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
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">M</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Persistence One
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  CoinMarketCap
                </Text>
                <Text fontSize="xs" color={themeColors.text[400]} mt={1}>
                  CoinMarketCap
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          {/* CoinGecko */}
          <Box
            as={Link}
            href="https://www.coingecko.com/en/coins/persistence"
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
                bg="green.600"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">G</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Persistence One
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  CoinGecko
                </Text>
                <Text fontSize="xs" color={themeColors.text[400]} mt={1}>
                  CoinGecko
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
