'use client'
import { useColorMode } from '@chakra-ui/react'

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
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `
# Persistence Testnet

| Chain ID    | Type    | Status               | Version                                                                      | Notes                                                |
| ----------- | ------- | -------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------- |
| test-core-2 | Testnet | Active               | Check [Releases](https://github.com/persistenceOne/persistenceCore/releases) | Current Testnet                                      |
| test-core-1 | Testnet | Deprecated & Deleted | v8.0.0-rc5                                                                   | Deprecated on 15th June 2023, Deleted on 22 Aug 2023 |

Testnets are a type of blockchain used exclusively for testing purposes. They function as a sandbox environment, allowing developers to test new code and functionalities without worrying about affecting the live blockchain (Mainnet). They are persistent environments, meaning that they remain active for extended periods of time.

Testnets come with a range of integrated services, including relayers to other testnets, frontends, explorers, and snapshot services.



***

### 🏗️ Test-core-2

<table><thead><tr><th width="182.5">Chain ID</th><th>Test-core-2</th></tr></thead><tbody><tr><td>RPC</td><td><a href="https://rpc.testnet2.persistence.one/">https://rpc.testnet2.persistence.one/</a></td></tr><tr><td>REST</td><td><a href="https://rest.testnet2.persistence.one/">https://rest.testnet2.persistence.one/</a></td></tr><tr><td>gRPC</td><td><a href="https://polkachu.com/testnets/persistence">https://polkachu.com/testnets/persistence</a></td></tr><tr><td>Explorer</td><td><a href="http://testnet.mintscan.io/persistence-testnet">http://testnet.mintscan.io/persistence-testnet</a></td></tr><tr><td>Faucet</td><td><a href="https://kitkat.zone/faucet">https://kitkat.zone/faucet</a></td></tr><tr><td>Snapshot</td><td><a href="https://polkachu.com/tendermint_snapshots/persistence">https://polkachu.com/tendermint_snapshots/persistence</a></td></tr><tr><td>Wallet</td><td><a href="https://test-core-2.wallet.persistence.one/">https://test-core-2.wallet.persistence.one/</a></td></tr></tbody></table>

Browse alternative endpoints from [here](/docs/build/public-infrastructure/public-infrastructure).

***

### 🌏 Join the Testnet

Join the testnet following the instructions on [Run a Testnet Node](/docs/build/nodes-and-endpoints/join-testnet).

***

### 🆘 Issues and Support

If you encounter any issues while joining the Persistence network or have questions about the process, please don't hesitate to reach out for support.

For general questions and community support, join the [Persistence Discord](https://discord.persistence.one) and ask in the \`#testnet-validators-discussion\` channel.
`
  const hideFirstHeading = true
  const description = 'This page contains information on Persistence public testnets'
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
            <>
              <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={description ? 2 : 4} color={themeColors.text[700]}>
                Persistence Testnet
              </Heading></Link>
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color={themeColors.text[500]} mb={4}>
                  {description}
                </Text>
              )}
            </>
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
