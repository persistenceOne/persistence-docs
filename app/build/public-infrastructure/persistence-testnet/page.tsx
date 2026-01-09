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
              Persistence Testnet
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              This page contains information on Persistence public testnets
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
