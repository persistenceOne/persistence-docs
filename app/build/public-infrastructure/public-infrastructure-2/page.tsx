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
  const content = `# Chain Registry

## Chain Registry

This repo contains a \`chain.json\` and \`assetlist.json\` for a number of cosmos-sdk based chains. A \`chain.json\` contains data that makes it easy to start running or interacting with a node.

* [Chain Registry](https://github.com/cosmos/chain-registry) : \`https://github.com/cosmos/chain-registry\`
* [\`assetlist.json\`](https://github.com/cosmos/chain-registry/blob/master/persistence/assetlist.json) for Persistence
* [\`chain.json\`](https://github.com/cosmos/chain-registry/blob/master/persistence/chain.json) for Persistence

Use the other pages in this [build, integrate, validate section](/docs/build/public-infrastructure/broken/pages/YB8nbdu3j3FqbvFozukb) or use [this dashboard](https://cosmos.directory/persistence/nodes) to see a list of RPC, REST, GRPC endpoints, seeds & peers.

> ℹ️ **Info:** Did you know there is also an NPM package that fetch chain-registry data?\\
**Learn more** : [https://www.npmjs.com/package/chain-registry](https://www.npmjs.com/package/chain-registry)

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
              Chain Registry
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
