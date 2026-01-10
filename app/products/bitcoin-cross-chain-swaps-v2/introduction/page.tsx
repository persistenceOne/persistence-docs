'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading as ChakraHeading, Text , useDisclosure } from '@chakra-ui/react'
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

<div class="embed-container"><iframe src="https://blog.persistence.one/2024/11/15/how-to-use-the-persistence-one-btc-interoperability-testnet-for-cross-chain-btc-swaps-guide/" frameborder="0" allowfullscreen></iframe></div>



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
            <ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Introduction
            </ChakraHeading>
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
