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
          { title: 'Guides', path: '/products/persistence-dex-v1/guides' },
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
      { title: 'Wallets', path: '/participate/wallets', icon: 'wallet.svg' },
      { title: 'Explorers', path: '/participate/explorers', icon: 'search.svg' },
      { title: 'Bridges', path: '/participate/bridges' },
      { title: 'Grants', path: '/participate/grants' },
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
        title: 'Smart Contracts',
        path: '/build/smart-contracts',
        children: [
          { title: 'Overview', path: '/build/smart-contracts/overview' },
          { title: 'Uploading a Contract', path: '/build/smart-contracts/uploading-a-contract' },
          { title: 'CosmWasm', path: '/build/smart-contracts/cosmwasm' },
        ],
      },
    ],
  },
  {
    title: 'Community & Support',
    path: '/community-and-support',
    children: [
      { title: 'Geofencing on Persistence', path: '/community-and-support/geofencing-on-persistence' },
      { title: 'Connect & Follow', path: '/community-and-support/connect-and-follow', icon: 'globe.svg' },
    ],
  },
]


