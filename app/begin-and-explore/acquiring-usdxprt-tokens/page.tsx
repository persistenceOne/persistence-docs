'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, useDisclosure, HStack, Image, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# Acquiring XPRT Tokens

$XPRT is the native token of the Persistence ecosystem. It powers the network through staking and governance. Here’s how you can acquire $XPRT tokens:

* Buy from centralised exchanges like [Gate.io](https://www.gate.io/trade/XPRT_USDT), [Kucoin](https://www.kucoin.com/trade/XPRT-USDT), or decentralised exchanges (DEX) like [Swapfast by Leap](https://swapfast.app/?destinationAsset=uxprt\\&destinationChainId=core-1\\&sourceAsset=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\\&sourceChainId=1), [IBC Transfer from Osmosis](https://app.osmosis.zone/assets/XPRT).
* Transfer $XPRT to your wallet and start participating in staking or governance.

### Learn How to Acquire XPRT from CEXs and DEXs:
`
  const hideFirstHeading = true
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
              Acquiring XPRT Tokens
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          
          <Box
            as={Link}
            href="https://blog.persistence.one/2024/12/05/how-to-acquire-xprt-from-cexs-and-dexs/"
            isExternal
            display="block"
            mt={6}
            mb={8}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={4}
            _hover={{
              borderColor: 'gray.300',
              bg: 'gray.50',
              textDecoration: 'none',
            }}
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
                <Text fontWeight="medium" color="gray.900" mb={1}>
                  How to Acquire XPRT from CEX&apos;s and DEX&apos;s – Persistence One
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Persistence One - The BTCFi Liquidity Hub
                </Text>
              </Box>
              <ChevronRightIcon color="gray.600" boxSize={5} flexShrink={0} />
            </HStack>
          </Box>
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      </Box>
    </Box>
  )
}
