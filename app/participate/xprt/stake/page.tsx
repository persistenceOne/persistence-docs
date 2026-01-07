import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Stake - Persistence Docs',
  description: 'Stake with a validator of your choice and help to secure the network.',
}

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

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box flex="1" bg="white" overflowY="auto" overflowX="hidden">
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Stake
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Stake with a validator of your choice and help to secure the network.
            </Text>
          )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
