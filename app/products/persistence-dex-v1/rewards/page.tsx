import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Rewards - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Rewards

LPs(Liquidity Providers) can earn rewards for facilitating trades on Persistence DEX. A part of the swap fees is distributed to LPs as a reward. In addition, teams and projects can incentivize LPs with additional incentives for maintaining liquidity for their tokens.

### Bonding 🤝

Liquidity providers need to bond their LP tokens for a period of **7 days** to be eligible for liquidity mining rewards. LPs would still earn rewards from trading fees on unbonded tokens,

**Provide Liquidity -> Mint LP Tokens -> Bond LP Tokens.**

Checkout the guide for providing liquidity and bonding/unbonding tokens here 👇



During unbonding, LP shares are not eligible for external incentives, but would still receive the rewards from trading fees.

### Streaming Rewards 🌊

Liquidity mining rewards on Persistence DEX can be claimed in real time, unlike on an epoch basis in most DEXs

### Multistaking

Multistaking on Persistence DEX allows teams and projects to incentivize liquidity in pools with multiple tokens.

<figure><img src="/images/image (1) (1).avif" alt=""><figcaption></figcaption></figure>
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
              Rewards
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
