import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Getting Started - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `
# Getting Started

Let's get you started with Persistence One! Whether you’re new to blockchain or experienced, this guide will help you get up and running with the Persistence ecosystem in no time.w

## 💡 Quick Start Guide

This is your quick introduction to the Persistence ecosystem. Whether you're looking to trade, provide liquidity, or explore our Bitcoin Cross-Chain Swaps, we’ve got you covered with simple, easy-to-follow instructions to help you get started right away.

## 🦊 Wallet Setup

To interact with the Persistence ecosystem, you'll need a supported wallet. Follow the instructions to set up one of the recommended wallets, and you’ll be ready to start trading, staking, and participating in governance.

* Keplr Wallet: Perfect for interacting with the Cosmos ecosystem.
* Metamask: For Ethereum-compatible assets.
* Hardware Wallets: A guide to securing your assets with Ledger, Trezor, and other options.

## 💰 Acquiring $XPRT Tokens

$XPRT is the native token of the Persistence ecosystem. It powers the network through staking and governance. Here’s how you can acquire $XPRT tokens:

* Buy from exchanges like Binance, Coinbase, or decentralized exchanges (DEX).
* Transfer $XPRT to your wallet and start participating in staking or governance.

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
              Getting Started
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
