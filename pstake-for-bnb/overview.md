# Overview

### BNB Staking Background[¶](broken-reference) <a href="#bnb-staking-background" id="bnb-staking-background"></a>

BNB Chain is comprised of:

* [BNB Beacon Chain (BC)](https://docs.bnbchain.org/docs/learn/beaconIntro) (previously Binance Chain) - BNB Chain Governance (Staking, Voting)
* [BNB Smart Chain (BSC)](https://docs.bnbchain.org/docs/learn/beaconIntro) (previously Binance Smart Chain) - EVM compatible, consensus layers, and with hubs to multi-chains

BSC allows smart contracts and hosts the DeFi activities in the Binance ecosystem. The dedicated staking module for BSC is on BC. BSC allows a total of 42 validators out of which the top 21 validators are in the active set and earn transaction fees. ​​Token holders, including the validators, can bond their tokens for staking. Token holders can delegate their tokens onto any validator or validator candidate (to expect it can become an actual validator). Redelegation is allowed after a period of 7 days.

Validators share a part of their rewards with their delegators. Validators can suffer from “slashing” as a punishment for bad behaviour, such as double sign and/or downtime. A validator slashing does not affect the stake of the delegator as validators put up self-stake that is slashed. There is an unbonding period of 7 days for validators and delegators so that the system makes sure the tokens remain bonded when any bad behaviour is caught.

### pSTAKE BNB Liquid Staking[¶](broken-reference) <a href="#pstake-bnb-liquid-staking" id="pstake-bnb-liquid-staking"></a>

pSTAKE’s BNB liquid staking product allows holders of BNB to stake their assets using the BNB staking interface. Users are issued stkBNB which follows an exchange rate model, (inspired by the [Compound’s cToken model](https://compound.finance/docs/ctokens)). stkBNB value keeps increasing against BNB as it accrues staking rewards in the background.

The BNB deposited by the user onto the pSTAKE application goes to pSTAKE’s StakePool contract. Everyday at 23:00 hrs UTC, the BC bot runs a staking transaction that aggregates all the deposits made to the StakePool contract and delegates them to the pSTAKE validator set. The users start earning staking rewards when they deposit BNB to the StakePool contract which is reflected in the increase in exchange rate (c-value) for the stkBNB token.

Users can unstake stkBNB on the pSTAKE application. When a user performs an unstake transaction, stkBNB deposited by the user is burnt. A claim for an equivalent amount of BNB based on the ongoing exchange rate (c-value) is created in the name of the user. The user can claim the unstaked BNB from the pSTAKE application after 15 days. The 15 days unstaking period is necessary to always be able to fulfil user claims as the bot can undelegate from any BNB chain validator only once in 7 days. Users will be able to exit their liquid staked BNB position directly by swapping stkBNB with BNB on DEXs, and need not wait for the 15 day unstaking period.

The users stop earning rewards after performing the unstake transaction.
