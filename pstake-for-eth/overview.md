# Overview

### ETH Staking Background[¶](broken-reference) <a href="#eth-staking-background" id="eth-staking-background"></a>

With the transition of Ethereum from a PoW based chain to a PoS based chain, holders of ETH would be able to stake ETH to earn staking rewards and participate in consensus. Anyone holding more than 32 ETH can run a validator node on the Ethereum 2.0 chain.

On Ethereum 2.0, every validator node is an independent validator with 32 ETH staked. In order to become a validator on the Ethereum 2.0 beacon chain, you need at least 32 ETH or multiples of 32 ETH (in order to run multiple nodes).

Currently, staking happens on the Ethereum 2.0 Beacon chain and the current PoW chain will be merged with the Beacon chain in the near future. The beacon chain and the ETH 1 chain (current PoW chain) are two separate chains however the beacon chain is connected to the current PoW chain through the ETH 2 deposit contract which was deployed by the Ethereum community.

Users staking ETH today won’t be able to unstake it. Unstaking and ETH withdrawals will go live after an update post the PoW Ethereum chain and ETH 2 beacon chains are merged.

### pSTAKE ETH2.0 Liquid Staking[¶](broken-reference) <a href="#pstake-eth20-liquid-staking" id="pstake-eth20-liquid-staking"></a>

pSTAKE’s ETH liquid staking product allows holders of ETH to stake their assets using the ETH 2.0 staking interface. Users are then issued stkETH which follows an exchange rate model, i.e. stkETH value will keep increasing against ETH as it accrues staking rewards in the background.

The ETH deposited by the user onto the pSTAKE application goes to pSTAKE’s issuer contract in the background, as it can’t be immediately staked on the Beacon chain. Once the amount of ETH in the pSTAKE deposit contract reaches 32, then a node operator is chosen (on a first-come-first-serve basis) to run the validator node. The 32ETH then gets staked with this validator. An earlier deposit of 1ETH by the Node Operator ensures that the withdrawal address is correctly set to match the pSTAKE protocol pool.

Once the ETH is staked on the beacon chain, the oracle provides data to pSTAKE about the ETH stake being active. In future version of the application, the oracles will also monitor the performance and ETH staked balance of the validators and alert the application if a particular validator is underperforming or gets slashed.

In case of a slashing event, the exchange rate will be reduced resulting in sharing of the slashed amount amongst all users. A slashing risk mitigation mechanism will be launched in the subsequent product version to reduce losses incurred by the end-users in the event of slashing.
