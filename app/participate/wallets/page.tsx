'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, useDisclosure, Link, HStack, Image} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import {ChevronRightIcon} from "@chakra-ui/icons";
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `
# Wallets

> ✅ **Success:** **Recommended options:** Include Keplr and Persistence Wallet. Please refer to the updated guide linked below.

## [wallet-setup](/docs/begin-and-explore/wallet-setup.md "mention")

## Keplr



Tutorial:

<div class="embed-container"><iframe src="https://www.youtube.com/embed/u-6hzCvuu3k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Tutorial/Guide:



Tutorial/Guide:



Tutorial/Guide:



> ⚠️ **Warning:** Note: As part of the Persistence v3 chain upgrade, the default coin type was changed from 750 to 118. Read all about it [here](https://blog.persistence.one/2022/07/14/coin-type-migration-from-750-to-118-for-persistence-core-1-chain-xprt/).

* If you're creating a new wallet on keplr or Persistence Wallet, then no changes are required.

`
  const hideFirstHeading = true
  const description = 'List of wallets supporting XPRT'
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
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>
              Wallets
            </Heading></Link>
          )}
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color={themeColors.text[500]} mb={4}>
                  {description}
                </Text>
              )}

          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />

          <Box
            as={Link}
            href="https://wallet.keplr.app/chains/persistence"
            isExternal
            display="block"
            mb={4}
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            _hover={{
              borderColor: 'gray.300',
              bg: 'gray.50',
              textDecoration: 'none',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={4} align="center">
              <Box
                boxSize="40px"
                borderRadius="md"
                bg="purple.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color="white" fontWeight="bold" fontSize="xl">K</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Keplr Wallet
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  wallet.keplr.app
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          <Box
            as={Link}
            href="https://medium.com/cosmostation/how-to-create-your-personal-persistence-xprt-account-on-cosmostation-wallet-ios-android-web-30cdfece35ce"
            isExternal
            display="block"
            mb={4}
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            _hover={{
              borderColor: 'gray.300',
              bg: 'gray.50',
              textDecoration: 'none',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={4} align="center">
              <Box
                boxSize="40px"
                borderRadius="md"
                bg="black"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color="white" fontWeight="bold" fontSize="xl">C</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Cosmostation Guide
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  medium.com
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          <Box
            as={Link}
            href="https://medium.com/everstake/how-to-connect-a-ledger-wallet-to-the-persistence-wallet-and-stake-xprt-a-simple-guide-for-7daacca53bfd"
            isExternal
            display="block"
            mb={4}
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            _hover={{
              borderColor: 'gray.300',
              bg: 'gray.50',
              textDecoration: 'none',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={4} align="center">
              <Box
                boxSize="40px"
                borderRadius="md"
                bg="black"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color="white" fontWeight="bold" fontSize="xl">E</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Everstake Guide
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  medium.com
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

          <Box
            as={Link}
            href="https://everstake.one/blog/how-to-stake-persistence-xprt-using-the-leap-wallet"
            isExternal
            display="block"
            mb={4}
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            _hover={{
              borderColor: 'gray.300',
              bg: 'gray.50',
              textDecoration: 'none',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={4} align="center">
              <Box
                boxSize="40px"
                borderRadius="md"
                bg="blue.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color="white" fontWeight="bold" fontSize="xl">E</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  Everstake Guide
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  everstake.one
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
      </Box>
    </Box>
  )
}
