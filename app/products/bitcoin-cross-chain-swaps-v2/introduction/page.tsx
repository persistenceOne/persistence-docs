import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Introduction - Persistence Docs',
  description: '',
}

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

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box flex="1" bg="white" overflowY="auto" overflowX="hidden">
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Introduction
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
