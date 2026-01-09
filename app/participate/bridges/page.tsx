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
# Bridges

### 1. Persistence Bridge

Transfer tokens from ERC-20 to Core-1 or vice versa using Persistence Bridge.

Learn more here:

[persistence-bridge](/docs/participate/bridges/persistence-bridge)



### 2. Satellite (by Axelar)

Transfer tokens from ERC-20 to Core-1 or vice versa using Satellite Bridge.

Learn more here:

[Broken link](/docs/participate/broken/pages/3rbJVX6Oq4piEGXlBe2h)



### 3. IBC

While it's technically not a bridge but an Inter-Blockchain Communication Protocol, IBC enables any assets to flow easily between all IBC-enabled blockchains (which Persistence is), via so-called relayers. Find out [here](/docs/build/relayers/ibc-relayers) which relayers enable asset flows to and from the Persistence

Find more information on the [IBC Protocol website](https://ibcprotocol.org/) and visualise connections and asset flows easily using the link below:&#x20;

<div class="embed-container"><iframe src="https://mapofzones.com" frameborder="0" allowfullscreen></iframe></div>

For details on the IBC-channels between Persistence Core-1 and other chains, follow [this link.](https://mapofzones.com/zones/core-1/peers?columnKey=ibcVolumeIn\\&period=24h)

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
              Bridges
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
