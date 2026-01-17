'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading as ChakraHeading, Text, useDisclosure, Link, HStack, Image} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
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


          <Box
            as={Link}
            href="https://blog.persistence.one/2024/11/15/how-to-use-the-persistence-one-btc-interoperability-testnet-for-cross-chain-btc-swaps-guide/"
            isExternal
            display="block"
            mb={4}
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
              <Box
                boxSize="40px"
                borderRadius="md"
                bg="blue.600"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color="white" fontWeight="bold" fontSize="xl">P</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color="gray.900" mb={1}>
                  Persistence One Blog
                </Text>
                <Text fontSize="sm" color="gray.600">
                  blog.persistence.one
                </Text>
              </Box>
              <ChevronRightIcon color="gray.600" boxSize={5} flexShrink={0} />
            </HStack>
          </Box>



`
  const hideFirstHeading = true
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Introduction
            </ChakraHeading></Link>
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
