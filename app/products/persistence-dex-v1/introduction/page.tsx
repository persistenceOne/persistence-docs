import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Introduction - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Introduction

Persistence DEX is a decentralized exchange for BTC and Liquid Staked Tokens (LSTs).&#x20;

Trade efficiently or provide liquidity to earn from swap fees and LP rewards 👉🏻[https://app.persistence.one](https://app.persistence.one)

**Read the announcement:** [https://blog.persistence.one/2024/06/11/rebranding-dexter-introducing-persistence-dex-and-enhancing-ecosystem-alignment/](https://blog.persistence.one/2024/06/11/rebranding-dexter-introducing-persistence-dex-and-enhancing-ecosystem-alignment/)

> ❌ **Danger:** **Note:** Persistence DEX's docs are currently in the draft stage. We apologise for any missing information and welcome contributions to enhance its quality. If you have any queries, please don't hesitate to contact our team

## Learn the fundamentals

Learn the fundamentals of Persistence DEX to get a better understanding of our main features:

[pools](/docs/products/persistence-dex-v1/pools)

[fees](/docs/products/persistence-dex-v1/fees)

## Dive a little deeper

Take a glance over the code behind Persistence DEX.

[technical-architecture](/docs/products/persistence-dex-v1/technical-architecture)

## Guides

Take a walkthrough of using Persistence DEX

[managing-assets](/docs/products/persistence-dex-v1/guides/managing-assets)

[trading-assets](/docs/products/persistence-dex-v1/guides/trading-assets)

[providing-liquidity](/docs/products/persistence-dex-v1/guides/providing-liquidity)

[bonding-unbonding-tokens](/docs/products/persistence-dex-v1/guides/bonding-unbonding-tokens)

[claiming-rewards](/docs/products/persistence-dex-v1/guides/claiming-rewards)
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
              Introduction
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
