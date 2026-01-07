import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Wallets - Persistence Docs',
  description: 'List of wallets supporting XPRT',
}

export default function Page() {
  const content = `
# Wallets

> ✅ **Success:** **Recommended options:** Include Keplr and Persistence Wallet. Please refer to the updated guide linked below.

## [wallet-setup](/docs/begin-and-explore/wallet-setup.md "mention")

## Keplr

<div class="embed-container"><iframe src="https://wallet.keplr.app/chains/persistence" frameborder="0" allowfullscreen></iframe></div>

Tutorial:

<div class="embed-container"><iframe src="https://www.youtube.com/embed/u-6hzCvuu3k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Tutorial/Guide:

<div class="embed-container"><iframe src="https://medium.com/cosmostation/how-to-create-your-personal-persistence-xprt-account-on-cosmostation-wallet-ios-android-web-30cdfece35ce" frameborder="0" allowfullscreen></iframe></div>

Tutorial/Guide:

<div class="embed-container"><iframe src="https://medium.com/everstake/how-to-connect-a-ledger-wallet-to-the-persistence-wallet-and-stake-xprt-a-simple-guide-for-7daacca53bfd" frameborder="0" allowfullscreen></iframe></div>

Tutorial/Guide:

<div class="embed-container"><iframe src="https://everstake.one/blog/how-to-stake-persistence-xprt-using-the-leap-wallet" frameborder="0" allowfullscreen></iframe></div>

> ⚠️ **Warning:** Note: As part of the Persistence v3 chain upgrade, the default coin type was changed from 750 to 118. Read all about it [here](https://blog.persistence.one/2022/07/14/coin-type-migration-from-750-to-118-for-persistence-core-1-chain-xprt/).

* If you're creating a new wallet on keplr or Persistence Wallet, then no changes are required.

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
              Wallets
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              List of wallets supporting XPRT
            </Text>
          )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
