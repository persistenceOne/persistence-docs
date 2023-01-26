# FAQs

* Which wallets are compatible with the stkBNB tokens?\
  stkBNB is a BEP20 token that is compatible with Metamask, Binance Web Wallet, Trust Wallet, and Mathwallet.
* How much is my 1 stkBNB worth?\
  The value of 1 stkBNB goes on increasing as it accrues staking rewards over time. This is because stkBNB follows a cToken model whose value changes based on the amount of underlying BNB. Users staking/unstaking on the pSTAKE protocol are charged the ongoing exchange rate which is displayed on the app UI.
* What is the minimum and maximum amount of BNB I can stake?\
  There is no minimum or maximum limit to the amount of BNB a user can stake. Be careful to leave enough BNB in the wallet to pay for gas fees.
* Why do I get less stkBNB for my 1 BNB?\
  stkBNB follows an exchange rate model ([Compound’s cToken model](https://compound.finance/docs/ctokens)) which increases in value as the protocol accrues staking rewards. Thus, 1 stkBNB is worth more after each reward epoch (24 hours). Users are minted stkBNB tokens at the ongoing exchange rate.
* What is the unbonding period for stkBNB?\
  Users can claim BNB from the pSTAKE protocol 15 days after the unstaking transaction.
* How do I receive rewards?\
  Rewards accrue into the value of stkBNB which increases after every epoch (UTC 00:00 hrs). Users start earning rewards from the end of first day after staking.
* Does pSTAKE charge for the service?\
  pSTAKE charges **0% staking rewards as fees** for BNB Liquid Staking **for the first 3 months**. The fee is targeted towards developmental activities like hackathons, grants, bug bounties, etc. to support long-term growth of the pSTAKE ecosystem.
* What determines the amount of reward I receive after every epoch?\
  Staking rewards mainly come from the transaction fees paid by users of the BSC chain and thus vary according to the network activity. pSTAKE uses a validator scoring mechanism based on APR, uptime, and number of slashing instances to delegate to the top validators on the BNB chain.
* Does my stake immediately stop accumulating rewards after unstaking?\
  Yes, the stake immediately stops accumulating rewards once an unstake transaction is performed.
* Is there any risk from staking, like slashing or any penalties?\
  Stakers do not directly face slashing risk as validators are slashed from their self-staked BNB. Stakers do face the risk of missing out on staking rewards if any of the validators in pSTAKE’s validator set is jailed or is offline. The loss of rewards is distributed across all the stkBNB stakers on pSTAKE. pSTAKE uses a validator scoring mechanism to stake only with the top validators on the BNB chain and will implement an onchain validator scoring mechanism to minimise such incidences.
