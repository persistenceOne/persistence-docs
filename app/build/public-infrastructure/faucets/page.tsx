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
  const content = `# Faucets

This page provides a list of available faucets for both the Persistence mainnet and testnet. Access these resources to request tokens, test transactions, and support your development or experimentation with Persistence’s blockchain environment.

| Provider             | Mainnet (core-1)                                                                     | Testnet (test-core-2)                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| All That Node (DSRV) |                                                                                      | [https://www.allthatnode.com/faucet/persistence.dsrv](https://www.allthatnode.com/faucet/persistence.dsrv) |
| Stakely.io           | [https://stakely.io/en/faucet/persistence](https://stakely.io/en/faucet/persistence) | [https://stakely.io/en/faucet/persistence-testnet](https://stakely.io/en/faucet/persistence-testnet)       |
| Paranormal Bros.     |                                                                                      | [https://ptf.paranorm.pro](https://ptf.paranorm.pro)                                                       |
| Kitkat Zone          | [https://faucet.kitkat.zone](https://faucet.kitkat.zone)                             | [https://faucet.kitkat.zone](https://faucet.kitkat.zone)                                                   |

> No balance in the faucet? Visit[connect-and-follow](/community-and-support/connect-and-follow "mention") to contact us directly for tokens!
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Faucets</Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
