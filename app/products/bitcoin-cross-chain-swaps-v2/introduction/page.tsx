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
  const content = `# Introduction

### Problem

The rapid expansion of Bitcoin Layer 2 solutions and sidechains has resulted in fragmentation, which negatively impacts BTCfi scalability. This fragmentation makes it challenging for users to seamlessly move assets between different L2s.

### Solution

Persistence One tackles this issue with an intents-based architecture that enables:

* Fast, secure, and zero-slippage cross-chain swaps.
* A more secure and efficient alternative to traditional bridging solutions.

### Mission

Persistence One aims to become the primary gateway for cross-chain BTC swaps, focusing on:

* Simplifying the BTCfi user experience.
* Enhancing interoperability across ecosystems.

### **Check out the Persistence One cross-chain swaps(V2)**

This comprehensive guide walks you through the process of performing cross-chain BTC swaps using the Persistence One testnet.

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
            <ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Introduction</ChakraHeading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          
          <Box
            as={Link}
            href="https://blog.persistence.one/2024/11/15/how-to-use-the-persistence-one-btc-interoperability-testnet-for-cross-chain-btc-swaps-guide/"
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
              textDecoration: 'none'
            }}
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
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
