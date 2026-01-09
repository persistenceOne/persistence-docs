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
  const content = `# Endpoints

> ℹ️ **Info:** The following API's are recommended for development purposes. For maximum control and reliability it's recommended to [run your own node](/docs/build/nodes-and-endpoints/setup).

## RPC

To help developers with integration, the following RPC-endpoints are provided

| Provider         | Mainnet (core-1)                                                                   | Testnet (test-core-2)                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Architect Nodes  | https://rpc-persistence.architectnodes.com/                                        |                                                                                                                                                                                                  |
| Baryon           | https://persistence-mainnet-rpc.baryon.dev/                                        | [https://persistence-testnet-rpc.baryon.dev/](https://persistence-testnet-rpc.baryon.dev/)                                                                                                       |
| BlueStake        | https://persistence-rpc.bluestake.net                                              |                                                                                                                                                                                                  |
| Cosmonaut Stakes | https://persistence-mainnet-rpc.cosmonautstakes.com/                               | [https://persistence-testnet-rpc.cosmonautstakes.com/](https://persistence-testnet-rpc.cosmonautstakes.com/)                                                                                     |
| Imperator        | https://rpc-persistence.imperator.co                                               |                                                                                                                                                                                                  |
| Kleomedes        | https://persistence-rpc.kleomedes.network/                                         |                                                                                                                                                                                                  |
| Paranormal Bros. | https://rpc.persistence.paranorm.pro                                               |                                                                                                                                                                                                  |
| Persistence      | https://rpc.core.persistence.one/                                                  | [https://rpc.testnet2.persistence.one/](https://rpc.testnet2.persistence.one/)                                                                                                                   |
| Polkachu         | https://persistence-rpc.polkachu.com/                                              | [https://polkachu.com/testnets/persistence](https://polkachu.com/testnets/persistence)                                                                                                           |
| QuantNode        | https://persistence-rpc.quantnode.tech/                                            |                                                                                                                                                                                                  |
| Provalidator     | https://rpc-persistence-mainnet.provalidator.com                                   |                                                                                                                                                                                                  |
| StakeFlow        | [https://rpc-persistence-01.stakeflow.io](https://rpc-persistence-01.stakeflow.io) | [https://rpc-persistence-testnet-01.stakeflow.io/](https://rpc-persistence-testnet-01.stakeflow.io/)                                                                                             |
| YTWOFUND         |                                                                                    | [https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md](https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md) |

## REST

| Provider         | Mainnet (core-1)                                                                   | Testnet (test-core-2)                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Architect Nodes  | https://rest-persistence.architectnodes.com/                                       |                                                                                                                                                                                                  |
| AutoStake        | https://persistence.mainnet.lcd.autostake.net/                                     |                                                                                                                                                                                                  |
| Baryon           | https://persistence-mainnet-api.baryon.dev/                                        | [https://persistence-testnet-api.baryon.dev/](https://persistence-testnet-api.baryon.dev/)                                                                                                       |
| BlueStake        | https://persistence-api.bluestake.net                                              |                                                                                                                                                                                                  |
| Cosmonaut Stakes | https://persistence-mainnet-rest.cosmonautstakes.com/                              | [https://persistence-testnet-rest.cosmonautstakes.com/](https://persistence-testnet-rest.cosmonautstakes.com/)                                                                                   |
| Imperator        | https://lcd-persistence.imperator.co                                               |                                                                                                                                                                                                  |
| Kleomedes        | https://persistence-api.kleomedes.network/                                         |                                                                                                                                                                                                  |
| Notional         | https://api-persistent-ia.cosmosia.notional.ventures/                              |                                                                                                                                                                                                  |
| Paranormal Bros. | https://api.persistence.paranorm.pro                                               |                                                                                                                                                                                                  |
| Persistence      | https://rest.core.persistence.one/                                                 | [https://rest.testnet2.persistence.one/](https://rest.testnet2.persistence.one/)                                                                                                                 |
| Polkachu         | https://persistence-api.polkachu.com/                                              | [https://polkachu.com/testnets/persistence](https://polkachu.com/testnets/persistence)                                                                                                           |
| QuantNode        | https://persistence-lcd.quantnode.tech/                                            |                                                                                                                                                                                                  |
| Provalidator     | https://lcd-persistence-mainnet.provalidator.com                                   |                                                                                                                                                                                                  |
| StakeFlow        | [https://api-persistence-01.stakeflow.io](https://api-persistence-01.stakeflow.io) | [https://api-persistence-testnet-01.stakeflow.io/](https://api-persistence-testnet-01.stakeflow.io/)                                                                                             |
| YTWOFUND         |                                                                                    | [https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md](https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md) |

## gRPC

| Provider        | Mainnet (core-1)                                       | Testnet (test-core-2)                                                                                                                                                                            |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Imperator       | grpc-persistence.imperator.co:2082                     |                                                                                                                                                                                                  |
| Notional        | grpc-persistent-ia.cosmosia.notional.ventures:443      |                                                                                                                                                                                                  |
| Persistence     | grpc.core.persistence.one:443                          |                                                                                                                                                                                                  |
| Polkachu        | persistence-grpc.polkachu.com:15490                    | [https://polkachu.com/testnets/persistence](https://polkachu.com/testnets/persistence)                                                                                                           |
| STC Capital     | <p>157.90.153.61:26657,</p><p>91.107.128.187:26657</p> |                                                                                                                                                                                                  |
| QuantNode       | persistence-grpc.quantnode.tech:9090                   |                                                                                                                                                                                                  |
| Architect Nodes | grpc-persistence.architectnodes.com:1443               |                                                                                                                                                                                                  |
| Provalidator    | grpc-persistence-mainnet.provalidator.com:9090         |                                                                                                                                                                                                  |
| StakeFlow       | grpc-persistence-01.stakeflow.io:49090                 | grpc-persistence-testnet-01.stakeflow.io:11001                                                                                                                                                   |
| YTWOFUND        |                                                        | [https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md](https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md) |

## WSS

| Provider    | Mainnet (core-1)                                | Testnet (test-core-2)                                   |
| ----------- | ----------------------------------------------- | ------------------------------------------------------- |
| Imperator   | ws://rpc-persistence.imperator.co/wss           |                                                         |
| Persistence | wss://rpc.core.persistence.one:443/websocket    |                                                         |
| StakeFlow   | wss://rpc-persistence-01.stakeflow.io/websocket | wss://rpc-persistence-testnet-01.stakeflow.io/websocket |
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
              Endpoints
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
