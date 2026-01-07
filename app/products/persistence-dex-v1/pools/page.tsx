import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Pools - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Pools

Persistence has travelled far and wide and knows a lot about AMMs, and now brings all the wisdom into building his AMM based on Persistence Core-1 chain. Let’s dive into the blueprints!

AMMs have revolutionized markets by allowing users to trade anytime without needing a counterparty. Pioneered by Uniswap in 2018, they serve as an essential building block in DeFi.

Persistence DEX will bring tried and tested AMM mechanisms to the Interchain, inspired by the best innovations in all of DeFi, and will support assets from other IBC-enabled chains.

Persistence DEX features the following types of AMMs :

* Stableswap Invariant Pool (Upto 5 Assets) - Inspired by Curve
* Weighted Pool - Inspired by Balancer
* Metastable Pool - Inspired by Balancer

## Stableswap

<figure><img src="/images/image.avif" alt=""><figcaption></figcaption></figure>

A stableswap is an automated market maker (AMM) optimized for similarly priced tokens and provides minimum slippage and efficient liquidity provision.

Constant product AMMs are useful for price discovery since moving on the curve in either direction will affect the price of each asset. However, this price curve makes it difficult to swap closely pegged assets, which should theoretically trade without affecting each other's price.

The constant sum pool (X + Y = K) has no slippage but can run out of liquidity when the pool is imbalanced on one side. The constant product pool (X\\*Y=K) has slippage but can always maintain liquidity since the price of an asset increases with the demand.

Stableswap combines the constant product and constant sum functions to achieve minimum slippage and provide a balanced pool. This function acts as a constant sum when the pool is balanced, providing low slippage trades, and shifts towards a constant product as the pool becomes more imbalanced to ensure the pool never runs out of liquidity.

Stableswap on Persistence DEX will support liquid-staked assets, which are highly correlated with the underlying staked assets. Liquidity for these assets would boost their utility in DeFi. The stableswap will facilitate low slippage trades for assets like stkATOM and stATOM with base assets like ATOM. This will allow stakers to instantly redeem their staked assets by swapping their liquid-staked assets into the base asset.

Bridges like Axelar and Gravity are pouring massive amounts of stablecoin liquidity to Cosmos from Ethereum and other ecosystems. Moreover, with the rise of native stablecoins like IST and SILK, along with USDC coming up natively on a consumer chain with Interchain Security, stableswap would serve as a vital part of the Cosmos DeFi ecosystem.

By supporting these assets, Persistence DEX aims to become the liquidity hub for yield-generating assets and stablecoins in the Cosmos ecosystem.

### Stable 3/5 Pools

Persistence DEX will also support stableswap pools with more than two tokens, like Curve’s 3pool, which provides enormous liquidity for three top stablecoins in DeFi - USDT, USDC, and DAI. Stable 3/5 pools on Persistence DEX would support 3 to 5 highly correlated assets.

The liquid-staking landscape in Cosmos is diverse, with multiple players like pSTAKE, Quicksilver, and Stride. Stable - 3/5 pools on Persistence DEX would support liquid-staked assets from all these zones and facilitate low slippage trading between these assets.

For example - stkATOM/stATOM/qATOM

## Weighted Pools

<figure><img src="/images/image (1).avif" alt=""><figcaption></figcaption></figure>

Persistence DEX supports a custom weighted pool AMM mechanism inspired by Balancer, which allows users to create a custom pool of assets and choose their weightage for each asset, such as pools with 60/40 or 60/20/20 weightage, in contrast to the constant product AMM mechanism, which only offers 50/50 weightage. This pool type supports up to 8 assets in a single pool.

Pools that weigh one token heavily significantly improve impermanent loss to the user compared to 50-50 pools. Impermanent loss is significantly less for highly imbalanced pools like 95/5, but this leads to high slippage due to low liquidity for one of the assets. Weighted pools allow users to customize their exposure to assets and maintain a balance in impermanent loss.

<figure><img src="/images/image.png" alt=""><figcaption></figcaption></figure>

Weighted pools with more than two assets would allow traders to trade multiple combinations of assets on a single pool, saving them the swap fees to be paid on multiple swaps.

<figure><img src="/images/image (1).png" alt=""><figcaption></figcaption></figure>

## Metastable Pools

<figure><img src="/images/image (2).avif" alt=""><figcaption></figcaption></figure>

A metastable pool is suited for assets that follow an exchange rate with a base asset, like liquid-staked assets such as stkATOM and interest-bearing tokens from lending protocols such as cDAI.

The Stableswap does not consider the constantly changing exchange rate for yield-generating assets and assumes a 1:1 ratio between the tokens. For example, the pool assumes the price of 1 stkATOM = 1 ATOM. As the value of stkATOM in terms of ATOM grows, traders can use this incorrect ratio to leach out the yield from the pool while LPs suffer from impermanent loss. For instance, stkATOM would keep accruing yield in the form of staking rewards in ATOM and would be worth 1.01 ATOM, 1.02 ATOM, and so on.

Metastable pools use stable math along with the known exchange rate for the asset. The metastable pool can take this constantly changing exchange rate into account and hence concentrate the liquidity around the price by changing the slope of the flat part (the price of an asset is the slope of the curve at any point) of the curve, making it capital efficient for LPs and trades more precise.
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
              Pools
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
