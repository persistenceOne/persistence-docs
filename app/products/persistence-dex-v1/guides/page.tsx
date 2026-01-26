'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading as ChakraHeading, Text, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# Guides

## Get Started by connecting to Persistence DEX.

### Setting Up a Wallet <a href="#setting-up-a-wallet" id="setting-up-a-wallet"></a>

Users need a Keplr wallet to connect to Persistence DEX.

* Download the Keplr wallet [here](https://www.keplr.app/download).
* Check out this [guide](https://help.keplr.app/articles/installation-guide-for-keplr-extension-for-beginners) on how to set up a Keplr wallet.

### Connecting a Wallet <a href="#connecting-a-wallet" id="connecting-a-wallet"></a>

* Head over to the Persistence DEX App - [app.persistence.one](https://app.persistence.one)
* Click on "Connect Wallet" at the top right corner.
* Users can choose among **Keplr, Leap, and Cosmostation** wallets from the popup.
* Approve the connection request for the "Core-1" chain on the wallet.

### Disconnecting a Wallet

* Click on the dropdown icon on the top right corner along with the wallet name and click on "Disconnect".

Follow the next pages for managing assets, trading, providing liquidity & more on Persistence DEX.
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Guides
            </ChakraHeading></Link>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
