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
  const content = `# Bitcoin Layer 2s

### What are Bitcoin Layer 2s?

Bitcoin Layer 2s (L2s) are solutions built on top of the Bitcoin blockchain to:

* Enhance scalability and composability.
* Introduce features that extend Bitcoin’s functionality beyond its native capabilities.

### How Do Bitcoin Layer 2s Work?

* **Independent blockchains:** L2s operate as separate execution layers while leveraging Bitcoin’s base layer for settlement.
* **Transaction processing:** L2s compute transactions and submit the details to Bitcoin’s main layer for consensus.
* **Gas token usage:** Many L2s use BTC as their gas token, maintaining close integration with the Bitcoin ecosystem.

### What do Bitcoin Layer 2s Offer?

* **Enhanced scalability:** Increased transaction throughput compared to the main Bitcoin blockchain.
* **Smart contract capabilities:** L2s introduce programmability, enabling features like DeFi and dApps on Bitcoin.
* **Inheriting Bitcoin’s security:** By using Bitcoin for settlement, L2s benefit from its robust security model.

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
              Bitcoin Layer 2s
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
