import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Table of contents - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Table of contents

## Persistence Hub

* [Overview](/docs/README)
* [Persistence Ecosystem](/docs/persistence-hub/persistence-ecosystem)

## Begin & Explore

* [Getting Started](/docs/begin-and-explore/getting-started)
* [Wallet Setup](/docs/begin-and-explore/wallet-setup)
* [🦾 Create Your Persistence Address](/docs/begin-and-explore/getting-your-persistence-address)
* [Acquiring XPRT Tokens](/docs/begin-and-explore/acquiring-usdxprt-tokens)

## Products

* [Persistence DEX (V1)](/docs/products/persistence-dex-v1/README)
  * [Introduction](/docs/products/persistence-dex-v1/introduction)
  * [Guides](/docs/products/persistence-dex-v1/guides/README)
    * [Managing Assets](/docs/products/persistence-dex-v1/guides/managing-assets)
    * [Trading Assets](/docs/products/persistence-dex-v1/guides/trading-assets)
    * [Providing Liquidity](/docs/products/persistence-dex-v1/guides/providing-liquidity)
    * [Bonding/Unbonding Tokens](/docs/products/persistence-dex-v1/guides/bonding-unbonding-tokens)
    * [Claiming Rewards](/docs/products/persistence-dex-v1/guides/claiming-rewards)
    * [Creating New Pool](/docs/products/persistence-dex-v1/guides/creating-new-pool/README)
      * [Metastable Pool](/docs/products/persistence-dex-v1/guides/creating-new-pool/metastable-pool)
      * [Weighted Pool](/docs/products/persistence-dex-v1/guides/creating-new-pool/weighted-pool)
      * [Stable Swap Pool](/docs/products/persistence-dex-v1/guides/creating-new-pool/stable-swap-pool)
  * [Pools](/docs/products/persistence-dex-v1/pools)
  * [Instant LP Unbonding](/docs/products/persistence-dex-v1/instant-lp-unbonding)
  * [Tradooor Rebate Program](/docs/products/persistence-dex-v1/tradooor-rebate-program)
  * [Fees](/docs/products/persistence-dex-v1/fees)
  * [Rewards](/docs/products/persistence-dex-v1/rewards)
  * [Technical Architecture](/docs/products/persistence-dex-v1/technical-architecture)
* [Bitcoin Cross-Chain Swaps (V2)](/docs/products/bitcoin-cross-chain-swaps-v2/README)
  * [Introduction](/docs/products/bitcoin-cross-chain-swaps-v2/introduction)
  * [Incentivized Mainnet](/docs/products/bitcoin-cross-chain-swaps-v2/incentivized-mainnet)
  * [Fundamentals](/docs/products/bitcoin-cross-chain-swaps-v2/fundamentals/README)
    * [BTCfi](/docs/products/bitcoin-cross-chain-swaps-v2/fundamentals/btcfi)
    * [Bitcoin Layer 2s](/docs/products/bitcoin-cross-chain-swaps-v2/fundamentals/bitcoin-layer-2s)
    * [Interoperability for BTCfi](/docs/products/bitcoin-cross-chain-swaps-v2/fundamentals/interoperability-for-btcfi)
    * [Intents for Blockchain Interoperability](/docs/products/bitcoin-cross-chain-swaps-v2/fundamentals/intents-for-blockchain-interoperability)
  * [Traditional Bridges vs. Intent-Based Swaps](/docs/products/bitcoin-cross-chain-swaps-v2/traditional-bridges-vs.-intent-based-swaps)
  * [Product Mechanism](/docs/products/bitcoin-cross-chain-swaps-v2/product-mechanism)

## Security

* [Audits](/docs/security/audits)

## Participate & Explore <a href="#participate" id="participate"></a>

* [XPRT Token](/docs/participate/xprt/README)
  * [Acquire](/docs/participate/xprt/acquire)
  * [Stake](/docs/participate/xprt/stake)
  * [Governance](/docs/participate/xprt/governance)
* [Alternative Frontends](/docs/participate/alternative-frontends/README)
  * [🔃 Hosting IPFS Versions with Pinata](/docs/participate/alternative-frontends/hosting-ipfs-versions-with-pinata)
  * [IPFS Automation](/docs/participate/alternative-frontends/ipfs-automation)
* [Wallets](/docs/participate/wallets)
* [Explorers](/docs/participate/explorers)
* [Bridges](/docs/participate/bridges)
  * [Persistence Bridge](/docs/participate/bridges/persistence-bridge)
* [Grants](/docs/participate/grants)

## Persistence Core-1 Chain <a href="#build" id="build"></a>

* [Running Nodes](/docs/build/nodes-and-endpoints/README)
  * [Run a Local Node](/docs/build/nodes-and-endpoints/setup)
  * [Run a Testnet Node](/docs/build/nodes-and-endpoints/join-testnet)
  * [Run a Mainnet Node](/docs/build/nodes-and-endpoints/join-mainnet)
  * [Node operations](/docs/build/nodes-and-endpoints/node-operations/README)
    * [State Sync](/docs/build/nodes-and-endpoints/public-infrastructure)
    * [Run in the background](/docs/build/nodes-and-endpoints/node-operations/run-in-the-background)
    * [Cosmovisor upgrades](/docs/build/nodes-and-endpoints/node-operations/cosmovisor-upgrades)
    * [Manual upgrades](/docs/build/nodes-and-endpoints/node-operations/manual-upgrades)
  * [Seed & Peers](/docs/build/nodes-and-endpoints/seed-and-peers)
* [Public Infrastructure](/docs/build/public-infrastructure/README)
  * [Persistence Testnet](/docs/build/public-infrastructure/persistence-testnet)
  * [Endpoints](/docs/build/public-infrastructure/public-infrastructure)
  * [Snapshots & Archival Nodes](/docs/build/public-infrastructure/public-infrastructure-1)
  * [Faucets](/docs/build/public-infrastructure/faucets)
  * [Chain Registry](/docs/build/public-infrastructure/public-infrastructure-2)
* [Validators](/docs/build/validators/README)
  * [Validate on Testnet](/docs/build/validators/testnet-validator-setup)
  * [Validate on Mainnet](/docs/build/validators/mainnet-validator-setup)
  * [Validator Communication](/docs/build/validators/validator-communication)
* [Relayers](/docs/build/relayers/README)
  * [IBC Channels](/docs/build/relayers/ibc-channels)
  * [IBC Relayers](/docs/build/relayers/ibc-relayers)
  * [Relay on Mainnet](/docs/build/relayers/relay-on-mainnet)
  * [Relay on Testnet](/docs/build/relayers/relay-on-testnet)
* [Indexers](/docs/build/indexers/README)
  * [Graph](/docs/build/indexers/graph/README)
    * [Connect to a Subgraph](/docs/build/indexers/graph/connect-to-a-subgraph)
    * [Run a Subgraph](/docs/build/indexers/graph/run-a-subgraph)
    * [Run a Graph Firehose](/docs/build/indexers/graph/run-a-graph-firehose)
  * [SubQuery](/docs/build/indexers/subquery/README)
    * [Overview](/docs/build/indexers/subquery/overview)
* [Liquid Staking Module](/docs/build/liquid-staking-module/README)
  * [For Validators](/docs/build/liquid-staking-module/liquid-staking-module)
* [Smart Contracts](/docs/build/smart-contracts/README)
  * [Overview](/docs/build/smart-contracts/overview)
  * [Uploading a Contract](/docs/build/smart-contracts/uploading-a-contract)
  * [CosmWasm](/docs/build/smart-contracts/cosmwasm)
* [Developer Tools](/docs/build/tools/README)
  * [Persistence JS](/docs/build/tools/persistence-js)
  * [Persistence SDK](/docs/build/tools/persistence-sdk)
* [Community Tools](/docs/build/useful-tools)

## Community & Support

* [Foundation Delegations](/docs/build/validators/foundation-delegations/README)
  * [Round 1 - Closed](/docs/build/validators/foundation-delegations/round-1)
  * [Round 2 - Closed](/docs/build/validators/foundation-delegations/round-2)
  * [Bonus Delegation](/docs/build/validators/foundation-delegations/bonus-delegation)
  * [Round 3 - Delegation Period Over](/docs/community-and-support/foundation-delegations/round-3-delegation-period-over)
* [Coin-type Migration from 750 to 118](/docs/community-and-support/coin-type-migration-from-750-to-118/README)
  * [Persistence Wallet](/docs/community-and-support/coin-type-migration-from-750-to-118/persistence-wallet)
  * [Keplr Wallet](/docs/community-and-support/coin-type-migration-from-750-to-118/keplr-wallet)
  * [Ledger Hardware Wallet](/docs/community-and-support/coin-type-migration-from-750-to-118/ledger-hardware-wallet)
  * [Cosmostation Wallet](/docs/community-and-support/coin-type-migration-from-750-to-118/cosmostation-wallet)
  * [Coin98 Super Wallet](/docs/community-and-support/coin-type-migration-from-750-to-118/coin98-super-wallet)
  * [Math Wallet](/docs/community-and-support/coin-type-migration-from-750-to-118/math-wallet)
  * [Leap Wallet](/docs/community-and-support/coin-type-migration-from-750-to-118/leap-wallet)
  * [Citadel Wallet](/docs/community-and-support/coin-type-migration-from-750-to-118/citadel-wallet)
* [Geofencing on Persistence](/docs/community-and-support/geofencing-on-persistence)
* [Connect & Follow](/docs/community-and-support/connect-and-follow)
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
              Table of contents
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
