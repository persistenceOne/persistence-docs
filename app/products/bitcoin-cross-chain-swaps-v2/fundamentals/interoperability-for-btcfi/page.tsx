'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# Interoperability for BTCfi

### The Problem: Frangmentation on BTCfi

* The growth of BTCfi has resulted in numerous BTC variants and derivatives.
* These BTC variants often cannot interact, leading to fragmentation and limiting scalability.

### The Solution: Interoperability

Interoperability bridges the gap between BTC variants, enabling seamless interaction across blockchain ecosystems.

### Why Interoperability Matters

* **Seamless Onboarding:** Makes it easier for users to access BTCfi by linking various blockchain networks effortlessly.
* **Better User Experience:** Allows users to move assets smoothly across different chains without friction.
* **Increased DeFi Opportunities:** Enables BTC holders to explore and leverage the best yields across multiple BTC variants, enriching the ecosystem.
* **Liquidity and Adoption Boost:** Interoperability fuels growth by enhancing connectivity, creating a positive cycle of adoption and activity.

`
  const hideFirstHeading = true
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box display="flex" flex="1" overflow="hidden">
          <Box flex="1" bg="white" overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Interoperability for BTCfi
            </Heading>
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
