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
  const content = `# Faucets

This page provides a list of available faucets for both the Persistence mainnet and testnet. Access these resources to request tokens, test transactions, and support your development or experimentation with Persistence’s blockchain environment.

| Provider             | Mainnet (core-1)                                                                     | Testnet (test-core-2)                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| All That Node (DSRV) |                                                                                      | [https://www.allthatnode.com/faucet/persistence.dsrv](https://www.allthatnode.com/faucet/persistence.dsrv) |
| Stakely.io           | [https://stakely.io/en/faucet/persistence](https://stakely.io/en/faucet/persistence) | [https://stakely.io/en/faucet/persistence-testnet](https://stakely.io/en/faucet/persistence-testnet)       |
| Paranormal Bros.     |                                                                                      | [https://ptf.paranorm.pro](https://ptf.paranorm.pro)                                                       |
| Kitkat Zone          | [https://faucet.kitkat.zone](https://faucet.kitkat.zone)                             | [https://faucet.kitkat.zone](https://faucet.kitkat.zone)                                                   |

> ℹ️ **Info:** No balance in the faucet? Visit[connect-and-follow](/docs/community-and-support/connect-and-follow.md "mention") to contact us directly for tokens!
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
              Faucets
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
