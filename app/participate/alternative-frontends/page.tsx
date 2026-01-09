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
# Alternative Frontends

> ✅ **Success:** **Important:** Before utilising any alternative frontends, it is crucial to verify the provided links for authenticity and security. Always ensure the accuracy of the links from this repository to maintain a secure and reliable user experience.

> ℹ️ **Info:** If you are hosting an alternative frontend & not included in the list below, [reach out](/docs/community-and-support/connect-and-follow) to the Persistence One team, and we will ensure its addition.

## Persistence Wallet (pWallet)

| Provider  | Link                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| Kleomedes | [https://ipfs.kleomedes.network/pwallet](https://ipfs.kleomedes.network/pwallet) |

***

## Persistence DEX

| Provider  | Link                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| Kleomedes | [https://ipfs.kleomedes.network/dexter](https://ipfs.kleomedes.network/dexter) |
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
              Alternative Frontends
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Explore alternative frontends for Persistence Wallet and Persistence DEX app.
            </Text>
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
