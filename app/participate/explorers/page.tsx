import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Explorers - Persistence Docs',
  description: 'List of explorers supporting the Persistence Chain',
}

export default function Page() {
  const content = `
# Explorers

<table><thead><tr><th>Provider</th><th>Mainnet (core-1)</th><th width="230">Testnet (test-core-2)</th></tr></thead><tbody><tr><td>Mintscan (by Cosmostation)</td><td>https://www.mintscan.io/persistence/</td><td><a href="https://www.mintscan.io/persistence-testnet/">https://www.mintscan.io/persistence-testnet/</a></td></tr><tr><td>AlxVoy</td><td>https://main.anode.team/persistence</td><td></td></tr><tr><td>Atomscan</td><td>https://atomscan.com/persistence</td><td></td></tr><tr><td>AutoStake</td><td>https://explorer.autostake.net/persistence</td><td></td></tr><tr><td>Big Dipper (by Forbole)</td><td>https://bigdipper.live/persistence</td><td></td></tr><tr><td>Nodes.Guru</td><td>https://persistence.explorers.guru/</td><td></td></tr><tr><td>Ping.Pub</td><td>https://ping.pub/persistence</td><td></td></tr><tr><td>SmartNodes</td><td>https://smartnodes.family/dashboard/persistence/</td><td></td></tr><tr><td>Look.chill</td><td><a href="https://look.chillvalidation.com/persistence">https://look.chillvalidation.com/persistence</a></td><td></td></tr><tr><td>Stakeflow (by Genesis Lab)</td><td><a href="https://stakeflow.io/persistence">https://stakeflow.io/persistence</a></td><td><a href="https://stakeflow.io/persistence-testnet">https://stakeflow.io/persistence-testnet</a></td></tr><tr><td>Kitkat</td><td><a href="https://explorer.kitkat.zone">https://explorer.kitkat.zone</a></td><td></td></tr><tr><td>Baryon</td><td></td><td><a href="https://testnet-explorer.baryon.dev/test-core-2">https://testnet-explorer.baryon.dev/test-core-2</a></td></tr></tbody></table>
`
  const hideFirstHeading = true

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box flex="1" bg="white" overflowY="auto" overflowX="hidden">
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Explorers
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              List of explorers supporting the Persistence Chain
            </Text>
          )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
