'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, Link} from '@chakra-ui/react'
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
# Alternative Frontends

> ✅ **Success:** **Important:** Before utilising any alternative frontends, it is crucial to verify the provided links for authenticity and security. Always ensure the accuracy of the links from this repository to maintain a secure and reliable user experience.

> If you are hosting an alternative frontend & not included in the list below, [reach out](/community-and-support/connect-and-follow) to the Persistence One team, and we will ensure its addition.

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
  const description = 'Explore alternative frontends for Persistence Wallet and Persistence DEX app.'
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Alternative Frontends</Heading>
          )}
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color={themeColors.text[500]} mb={4}>
                  {description}
                </Text>
              )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
