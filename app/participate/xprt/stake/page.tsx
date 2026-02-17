'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, Link, HStack, Image, useColorMode} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import {ChevronRightIcon} from "@chakra-ui/icons"
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `
# Stake

As the Persistence chain runs on a delegated [Proof-of-Stake](https://www.investopedia.com/terms/p/proof-stake-pos.asp) based Tendermint PBFT consensus engine, staking is integral to ensuring a secure and robust network.&#x20;

This means that [XPRT](/participate/xprt) token holders will be able to delegate their tokens to one of the networks' validators for staking. Stakers will receive [staking rewards](https://www.stakingrewards.com/earn/persistence/) in the form of XPRT in return for contributing to the security of the network.

<div class="embed-container"><iframe src="https://www.youtube.com/embed/iSyhmlYERuk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>







As technology and tools continuously advance, some of the guides may become outdated. If you encounter any outdated guides, please directly inform the relevant team. To create a new guide, please contact the Persistence Team or submit a public relations (PR) request.

### Guides (other languages)

Please reach out on Discord if you’re creating staking guides in any language other than English.
`
  const hideFirstHeading = true
  const description = 'Stake with a validator of your choice and help to secure the network.'
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Stake</Heading>
          )}
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color={themeColors.text[500]} mb={4}>
                  {description}
                </Text>
              )}

          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />

          <Box
            as={Link}
            href="https://www.rockx.com/staking/persistence"
            isExternal
            display="block"
            mb={4}
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            bg={themeColors.card.variant0}
            _hover={{
              borderColor: themeColors.accent.primary,
              bg: themeColors.card.variant0,
              textDecoration: 'none'}}
            transition="all 0.2s"
          >
            <HStack spacing={4} align="center">
              <Box
                boxSize="40px"
                borderRadius="md"
                bg={themeColors.accent.primary}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">R</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  RockX Staking
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  rockx.com
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          <Box
            as={Link}
            href="https://stakely.io/en/persistence-staking"
            isExternal
            display="block"
            mb={4}
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            _hover={{
              borderColor: themeColors.accent.primary,
              bg: themeColors.sidebar.hover,
              textDecoration: 'none'}}
            transition="all 0.2s"
          >
            <HStack spacing={4} align="center">
              <Box
                boxSize="40px"
                borderRadius="md"
                bg="green.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">S</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Stakely Staking
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  stakely.io
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          <Box
            as={Link}
            href="https://p2p.org/economy/persistence-xprt/"
            isExternal
            display="block"
            mb={4}
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            _hover={{
              borderColor: themeColors.accent.primary,
              bg: themeColors.sidebar.hover,
              textDecoration: 'none'}}
            transition="all 0.2s"
          >
            <HStack spacing={4} align="center">
              <Box
                boxSize="40px"
                borderRadius="md"
                bg={themeColors.accent.primary_600}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color={themeColors.button.primaryTextColor} fontWeight="bold" fontSize="xl">P</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  P2P Validator
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  p2p.org
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
