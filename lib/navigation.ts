export interface NavItem {
  title: string
  path: string
  icon?: string
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  {
    title: 'Persistence Hub',
    path: '/',
    children: [
      { title: 'Overview', path: '/', icon: 'open-book.svg' },
      { title: 'Persistence Ecosystem', path: '/persistence-hub/persistence-ecosystem', icon: 'tree.svg' },
    ],
  },
  {
    title: 'Begin & Explore',
    path: '/begin-and-explore',
    children: [
      { title: 'Getting Started', path: '/begin-and-explore/getting-started', icon: 'open-book.svg' },
      { title: 'Wallet Setup', path: '/begin-and-explore/wallet-setup', icon: 'wallet.svg' },
      { title: 'Create Your Persistence Address', path: '/begin-and-explore/getting-your-persistence-address', icon: 'metal-arm.svg' },
      { title: 'Acquiring XPRT Tokens', path: '/begin-and-explore/acquiring-usdxprt-tokens', icon: 'shake-hand.svg' },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    children: [
      {
        title: 'Persistence DEX (V1)',
        path: '/products/persistence-dex-v1',
        icon: 'books.svg',
        children: [
          { title: 'Introduction', path: '/products/persistence-dex-v1/introduction' },
          {
            title: 'Guides',
            path: '/products/persistence-dex-v1/guides',
            children: [
              { title: 'Trading Assets', path: '/products/persistence-dex-v1/guides/trading-assets' },
              { title: 'Managing Assets', path: '/products/persistence-dex-v1/guides/managing-assets' },
              { title: 'Providing Liquidity', path: '/products/persistence-dex-v1/guides/providing-liquidity' },
              { title: 'Bonding & Unbonding Tokens', path: '/products/persistence-dex-v1/guides/bonding-unbonding-tokens' },
              { title: 'Claiming Rewards', path: '/products/persistence-dex-v1/guides/claiming-rewards' },
              {
                title: 'Creating New Pool',
                path: '/products/persistence-dex-v1/guides/creating-new-pool',
                children: [
                  { title: 'Stable Swap Pool', path: '/products/persistence-dex-v1/guides/creating-new-pool/stable-swap-pool' },
                  { title: 'Weighted Pool', path: '/products/persistence-dex-v1/guides/creating-new-pool/weighted-pool' },
                  { title: 'Metastable Pool', path: '/products/persistence-dex-v1/guides/creating-new-pool/metastable-pool' },
                ],
              },
            ],
          },
          { title: 'Pools', path: '/products/persistence-dex-v1/pools' },
          { title: 'Instant LP Unbonding', path: '/products/persistence-dex-v1/instant-lp-unbonding' },
          { title: 'Tradooor Rebate Program', path: '/products/persistence-dex-v1/tradooor-rebate-program' },
          { title: 'Fees', path: '/products/persistence-dex-v1/fees' },
          { title: 'Rewards', path: '/products/persistence-dex-v1/rewards' },
          { title: 'Technical Architecture', path: '/products/persistence-dex-v1/technical-architecture' },
        ],
      },
      {
        title: 'Bitcoin Cross-Chain Swaps (V2)',
        path: '/products/bitcoin-cross-chain-swaps-v2',
        icon: 'shake-hand.svg',
        children: [
          { title: 'Introduction', path: '/products/bitcoin-cross-chain-swaps-v2/introduction' },
          {
            title: 'Fundamentals',
            path: '/products/bitcoin-cross-chain-swaps-v2/fundamentals',
            children: [
              { title: 'Bitcoin Layer 2s', path: '/products/bitcoin-cross-chain-swaps-v2/fundamentals/bitcoin-layer-2s' },
              { title: 'BTCFi', path: '/products/bitcoin-cross-chain-swaps-v2/fundamentals/btcfi' },
              { title: 'Intents for Blockchain Interoperability', path: '/products/bitcoin-cross-chain-swaps-v2/fundamentals/intents-for-blockchain-interoperability' },
              { title: 'Interoperability for BTCFi', path: '/products/bitcoin-cross-chain-swaps-v2/fundamentals/interoperability-for-btcfi' },
            ],
          },
          { title: 'Incentivized Mainnet', path: '/products/bitcoin-cross-chain-swaps-v2/incentivized-mainnet' },
          { title: 'Traditional Bridges vs. Intent-Based Swaps', path: '/products/bitcoin-cross-chain-swaps-v2/traditional-bridges-vs-intent-based-swaps' },
          { title: 'Product Mechanism', path: '/products/bitcoin-cross-chain-swaps-v2/product-mechanism' },
        ],
      },
    ],
  },
  {
    title: 'Security',
    path: '/security',
    children: [
      { title: 'Audits', path: '/security/audits', icon: 'search.svg' },
    ],
  },
  {
    title: 'Participate & Explore',
    path: '/participate',
    children: [
      {
        title: 'XPRT Token',
        path: '/participate/xprt',
        icon: 'shake-hand.svg',
        children: [
          { title: 'Acquire', path: '/participate/xprt/acquire' },
          { title: 'Stake', path: '/participate/xprt/stake' },
          { title: 'Governance', path: '/participate/xprt/governance' },
        ],
      },
      {
        title: 'Alternative Frontends',
        path: '/participate/alternative-frontends',
        icon: 'globe.svg',
        children: [
          { title: 'Hosting IPFS Versions with Pinata', path: '/participate/alternative-frontends/hosting-ipfs-versions-with-pinata' },
          { title: 'IPFS Automation', path: '/participate/alternative-frontends/ipfs-automation' },
        ],
      },
      { title: 'Wallets', path: '/participate/wallets', icon: 'wallet.svg' },
      { title: 'Explorers', path: '/participate/explorers', icon: 'search.svg' },
      {
        title: 'Bridges',
        path: '/participate/bridges',
        children: [
          { title: 'Persistence Bridge', path: '/participate/bridges/persistence-bridge' },
        ],
      },
      { title: 'Grants', path: '/participate/grants' },
      { title: 'Analytics', path: '/participate/analytics' },
    ],
  },
  {
    title: 'Persistence Core-1 Chain',
    path: '/build',
    children: [
      {
        title: 'Running Nodes',
        path: '/build/nodes-and-endpoints',
        children: [
          { title: 'Run a Local Node', path: '/build/nodes-and-endpoints/setup' },
          { title: 'Run a Testnet Node', path: '/build/nodes-and-endpoints/join-testnet' },
          { title: 'Run a Mainnet Node', path: '/build/nodes-and-endpoints/join-mainnet' },
          { title: 'Node Operations', path: '/build/nodes-and-endpoints/node-operations' },
          { title: 'Seed & Peers', path: '/build/nodes-and-endpoints/seed-and-peers' },
        ],
      },
      {
        title: 'Public Infrastructure',
        path: '/build/public-infrastructure',
        children: [
          { title: 'Persistence Testnet', path: '/build/public-infrastructure/persistence-testnet' },
          { title: 'Endpoints', path: '/build/public-infrastructure/public-infrastructure' },
          { title: 'Snapshots & Archival Nodes', path: '/build/public-infrastructure/public-infrastructure-1' },
          { title: 'Faucets', path: '/build/public-infrastructure/faucets' },
          { title: 'Chain Registry', path: '/build/public-infrastructure/public-infrastructure-2' },
        ],
      },
      {
        title: 'Validators',
        path: '/build/validators',
        children: [
          { title: 'Validate on Testnet', path: '/build/validators/testnet-validator-setup' },
          { title: 'Validate on Mainnet', path: '/build/validators/mainnet-validator-setup' },
          { title: 'Validator Communication', path: '/build/validators/validator-communication' },
        ],
      },
      {
        title: 'Relayers',
        path: '/build/relayers',
        children: [
          { title: 'IBC Channels', path: '/build/relayers/ibc-channels' },
          { title: 'IBC Relayers', path: '/build/relayers/ibc-relayers' },
          { title: 'Relay on Mainnet', path: '/build/relayers/relay-on-mainnet' },
          { title: 'Relay on Testnet', path: '/build/relayers/relay-on-testnet' },
        ],
      },
      {
        title: 'Liquid Staking Module',
        path: '/build/liquid-staking-module',
        children: [
          { title: 'For Validators', path: '/build/liquid-staking-module/liquid-staking-module' },
        ],
      },
      {
        title: 'Smart Contracts',
        path: '/build/smart-contracts',
        children: [
          { title: 'Overview', path: '/build/smart-contracts/overview' },
          { title: 'Uploading a Contract', path: '/build/smart-contracts/uploading-a-contract' },
        ],
      },
      {
        title: 'Developer Tools',
        path: '/build/tools',
        children: [
          { title: 'Persistence JS', path: '/build/tools/persistence-js' },
          { title: 'Persistence SDK', path: '/build/tools/persistence-sdk' },
          { title: 'Community Tools', path: '/build/useful-tools' },
        ],
      },
    ],
  },
  {
    title: 'Community & Support',
    path: '/community-and-support',
    children: [
      {
        title: 'Foundation Delegations',
        path: '/community-and-support/foundation-delegations',
        children: [
          { title: 'Round 1 - Closed', path: '/build/validators/foundation-delegations/round-1' },
          { title: 'Round 2 - Closed', path: '/build/validators/foundation-delegations/round-2' },
          { title: 'Bonus Delegation', path: '/build/validators/foundation-delegations/bonus-delegation' },
          { title: 'Round 3 - Delegation Period Over', path: '/community-and-support/foundation-delegations/round-3-delegation-period-over' },
        ],
      },
      {
        title: 'Coin-type Migration from 750 to 118',
        path: '/community-and-support/coin-type-migration-from-750-to-118',
        children: [
          { title: 'Keplr Wallet', path: '/community-and-support/coin-type-migration-from-750-to-118/keplr-wallet' },
          { title: 'Leap Wallet', path: '/community-and-support/coin-type-migration-from-750-to-118/leap-wallet' },
          { title: 'Cosmostation Wallet', path: '/community-and-support/coin-type-migration-from-750-to-118/cosmostation-wallet' },
          { title: 'Citadel Wallet', path: '/community-and-support/coin-type-migration-from-750-to-118/citadel-wallet' },
          { title: 'Coin98 Super Wallet', path: '/community-and-support/coin-type-migration-from-750-to-118/coin98-super-wallet' },
          { title: 'Ledger Hardware Wallet', path: '/community-and-support/coin-type-migration-from-750-to-118/ledger-hardware-wallet' },
          { title: 'Math Wallet', path: '/community-and-support/coin-type-migration-from-750-to-118/math-wallet' },
          { title: 'Persistence Wallet', path: '/community-and-support/coin-type-migration-from-750-to-118/persistence-wallet' },
        ],
      },
      { title: 'Geofencing on Persistence', path: '/community-and-support/geofencing-on-persistence' },
      { title: 'Connect & Follow', path: '/community-and-support/connect-and-follow', icon: 'globe.svg' },
    ],
  },
]


