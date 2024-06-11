# Technical Architecture

Persistence DEX's base is made up of the following contracts:

* Vault
* Keeper
* Router
* Multistaking
* Stableswap Pool
* Weighted Pool
* LP Token

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FUfcwgwnIkga2tPtiJAoU%252Fimage.png%3Falt%3Dmedia%26token%3Dbd5c08f9-9477-4614-ab7a-6146b968c361&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=79077c3cc200f4b1d844b427be72df05278ecda338e7198d579d2e74e2fcbded" alt=""><figcaption></figcaption></figure>

## Vault

The Vault is the core of Persistence DEX; it is a smart contract that holds and manages all tokens in each Persistence DEX Pool. It is also the portal through which most Persistence DEX operations (swaps/joins/exits) occur.

Code: [https://github.com/dexter-zone/dexter\_core/tree/main/contracts/vault](https://github.com/dexter-zone/dexter\_core/tree/main/contracts/vault)

| Contract | Address                                                                |
| -------- | ---------------------------------------------------------------------- |
| Vault    | persistence1k8re7jwz6rnnwrktnejdwkwnncte7ek7gt29gvnl3sdrg9mtnqkstujtpg |

## Keeper

The Keeper contract accounts for all the protocol fees collected by the Persistence DEX Vault. The fee charged during swaps by the Persistence DEX Vault is transferred to the keeper contract.

Code: [https://github.com/dexter-zone/dexter\_core/tree/main/contracts/keeper](https://github.com/dexter-zone/dexter\_core/tree/main/contracts/keeper)

| Contract | Address                                                                |
| -------- | ---------------------------------------------------------------------- |
| Keeper   | persistence1sthrn5ep8ls5vzz8f9gp89khhmedahhdqd244dh9uqzk3hx2pzrsvpslsg |

## Router

A router contract is a helper contract that facilitates multi-hop swaps via Persistence DEX pools.

Code: [https://github.com/dexter-zone/dexter\_core/tree/main/contracts/router](https://github.com/dexter-zone/dexter\_core/tree/main/contracts/router)

| Contract | Address                                                                |
| -------- | ---------------------------------------------------------------------- |
| Router   | persistence132xmxm33vwjlur2pszl4hu9r32lqmqagvunnuc5hq4htps7rr3kqsf4dsk |

## Multistaking

Persistence DEX allows projects/teams to incentivize liquidity by rewarding liquidity providers in multiple tokens.

The Multistaking contract is used to provide incentives to LPs of the protocol. Incentivizers can propose rewards for a particular LP token for a given period of time, and LPs can bond their LP tokens with the multistaking contract to earn those rewards during the reward’s schedule. The implementation is similar to the [Anchor Staking Contract](https://github.com/Anchor-Protocol/anchor-token-contracts/tree/main/contracts/staking) but differs in the sense that it supports multiple LP tokens and multiple rewards per LP token.

Code: [https://github.com/dexter-zone/dexter\_core/tree/main/contracts/multi\_staking](https://github.com/dexter-zone/dexter\_core/tree/main/contracts/multi\_staking)

| Contract     | Address                                                                |
| ------------ | ---------------------------------------------------------------------- |
| Multistaking | persistence1ery8l6jquynn9a4cz2pff6khg8c68f7urt33l5n9dng2cwzz4c4qs72n0q |

## Stableswap Pool

The Stable Pool contract implements the curve’s stableswap invariant for up to 5 assets in the pool and implements compute calculations on Liquidity provision/withdrawal and swaps. In addition, it also supports liquid staking derivatives by the use of a scaling factor.

Code: [https://github.com/dexter-zone/dexter\_core/tree/main/contracts/pools/stable\_pool](https://github.com/dexter-zone/dexter\_core/tree/main/contracts/pools/stable\_pool)

## Weighted Pool

The Weighted Pool contract is based on a particular N-dimensional surface which defines a cost function for the exchange of any pair of tokens held in a Pool which was introduced by Balancer. Persistence DEX's weighted pool accepts a maximum of 8 tokens and the weights cannot be updated once the pool has been initialized.

Code: [https://github.com/dexter-zone/dexter\_core/tree/main/contracts/pools/weighted\_pool](https://github.com/dexter-zone/dexter\_core/tree/main/contracts/pools/weighted\_pool)

## LP Token

The LP token contract is the standard cw-20 token contract used for LP tokens minted when liquidity is provided to the Persistence DEX pools.

Code: [https://github.com/dexter-zone/dexter\_core/tree/main/contracts/lp\_token](https://github.com/dexter-zone/dexter\_core/tree/main/contracts/lp\_token)
