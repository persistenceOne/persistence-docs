'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text , useDisclosure } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `# SubQuery

## Intro

SubQuery is a leading blockchain data indexer that provides developers with fast, flexible, universal, open source and decentralised APIs for web3 projects. SubQuery SDK allows developers to get rich indexed data and build intuitive and immersive decentralised applications in a faster and more efficient way. SubQuery supports 100+ ecosystems including Persistence, Cosmos, Ethereum, Polygon, Polkadot, Algorand, NEAR, and Avalanche.

Another one of SubQuery's competitive advantages is the ability to aggregate data not only within a chain but across multiple blockchains all within a single project. This allows the creation of feature-rich dashboard analytics, multi-chain block scanners, or projects that index IBC transactions across zones.

Other advantages include superior performance with multiple RPC endpoint configurations, multi-worker capabilities and a configurable caching architecture. To find out more, visit our [documentation](https://academy.subquery.network/).

**Useful resources**:
- SubQuery Docs: [SubQuery Academy (Documentation)](https://academy.subquery.network/)
- Intro Quick Start Guide: [1. Create a New Project](https://academy.subquery.network/quickstart/quickstart.html)
- [Persistence Starter Project](https://github.com/subquery/cosmos-subql-starter/tree/main/Persistence/persistence-starter)

## Running and Hosting your Persistence SubQuery APIs

SubQuery is open-source, meaning you have the freedom to run it in the following three ways:
- Locally on your own computer (or a cloud provider of your choosing), [view the instructions on how to run SubQuery Locally](https://academy.subquery.network/run_publish/run.html).
- You can publish it to SubQuery's enterprise-level [Managed Service](https://managedservice.subquery.network/), where we'll host your SubQuery project in production ready services for mission critical data with zero-downtime blue/green deployments. There even is a generous free tier. [Find out how](https://academy.subquery.network/run_publish/publish.html).
- You can publish it to the decentralised [SubQuery Network](https://subquery.network/network), the most open, performant, reliable, and scalable data service for dApp developers. The SubQuery Network indexes and services data to the global community in an incentivised and verifiable way and supports Persistence from launch.`
  const hideFirstHeading = true
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header onMenuClick={onOpen} />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar isOpen={isOpen} onClose={onClose} />
        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
          <Box flex="1" bg="white" overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              SubQuery
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
