'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, useDisclosure, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# Stake

As the Persistence chain runs on a delegated [Proof-of-Stake](https://www.investopedia.com/terms/p/proof-stake-pos.asp) based Tendermint PBFT consensus engine, staking is integral to ensuring a secure and robust network.&#x20;

This means that [XPRT](/docs/participate/xprt) token holders will be able to delegate their tokens to one of the networks' validators for staking. Stakers will receive [staking rewards](https://www.stakingrewards.com/earn/persistence/) in the form of XPRT in return for contributing to the security of the network.

<div class="embed-container"><iframe src="https://www.youtube.com/embed/iSyhmlYERuk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://www.rockx.com/staking/persistence" frameborder="0" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://stakely.io/en/persistence-staking" frameborder="0" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://p2p.org/economy/persistence-xprt/" frameborder="0" allowfullscreen></iframe></div>

As technology and tools continuously advance, some of the guides may become outdated. If you encounter any outdated guides, please directly inform the relevant team. To create a new guide, please contact the Persistence Team or submit a public relations (PR) request.

### Guides (other languages)

Please reach out on Discord if you’re creating staking guides in any language other than English.
`
  const hideFirstHeading = true
  const description = 'Stake with a validator of your choice and help to secure the network.'
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Stake
            </Heading></Link>
          )}
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" mb={4}>
                  {description}
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
