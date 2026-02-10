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
# Explorers

<table><thead><tr><th>Provider</th><th>Mainnet (core-1)</th><th width="230">Testnet (test-core-2)</th></tr></thead><tbody><tr><td>Mintscan (by Cosmostation)</td><td>https://www.mintscan.io/persistence/</td><td><a href="https://www.mintscan.io/persistence-testnet/">https://www.mintscan.io/persistence-testnet/</a></td></tr><tr><td>AlxVoy</td><td>https://main.anode.team/persistence</td><td></td></tr><tr><td>Atomscan</td><td>https://atomscan.com/persistence</td><td></td></tr><tr><td>AutoStake</td><td>https://explorer.autostake.net/persistence</td><td></td></tr><tr><td>Big Dipper (by Forbole)</td><td>https://bigdipper.live/persistence</td><td></td></tr><tr><td>Nodes.Guru</td><td>https://persistence.explorers.guru/</td><td></td></tr><tr><td>Ping.Pub</td><td>https://ping.pub/persistence</td><td></td></tr><tr><td>SmartNodes</td><td>https://smartnodes.family/dashboard/persistence/</td><td></td></tr><tr><td>Look.chill</td><td><a href="https://look.chillvalidation.com/persistence">https://look.chillvalidation.com/persistence</a></td><td></td></tr><tr><td>Stakeflow (by Genesis Lab)</td><td><a href="https://stakeflow.io/persistence">https://stakeflow.io/persistence</a></td><td><a href="https://stakeflow.io/persistence-testnet">https://stakeflow.io/persistence-testnet</a></td></tr><tr><td>Kitkat</td><td><a href="https://explorer.kitkat.zone">https://explorer.kitkat.zone</a></td><td></td></tr><tr><td>Baryon</td><td></td><td><a href="https://testnet-explorer.baryon.dev/test-core-2">https://testnet-explorer.baryon.dev/test-core-2</a></td></tr></tbody></table>
`
  const hideFirstHeading = true
  const description = 'List of explorers supporting the Persistence Chain'
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>
              Explorers
            </Heading></Link>
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
