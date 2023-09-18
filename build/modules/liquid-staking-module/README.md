# Liquid Staking Module

Developed by [Iqlusion 44](https://twitter.com/iqlusioninc), the LSM (Liquid staking module) is enabled (in [v8 pacaya upgrade](https://www.mintscan.io/persistence/proposals/42)) to safely and efficiently help facilitate multiple features for the Core-1 chain.&#x20;

As a main feature for now, this module enables XPRT delegators to swiftly migrate from (old) 750 coin-type to (new) 118 coin-type without waiting for 21-days undelegating period.&#x20;

(Learn more about coin-type migration [here](https://docs.persistence.one/coin-type-migration-from-750-to-118))

To provide a better understanding, comparing migration of coin-type with & without LSM:

<details>

<summary>Migration process without LSM</summary>

* Un-delegate tokens from 750 coin-type wallet address
* Wait for **21 Days** unbounding period
* Transfer tokens to 118 coin-type wallet address
* Bound tokens again with 118 coin-type wallet address.

**Note:** With this process the drawback is that the delegator is tend to lose rewards for 21 days while the tokens are un-delegating.&#x20;

Check the wallet wise migration steps [here](https://docs.persistence.one/coin-type-migration-from-750-to-118).

</details>

<details>

<summary>Migration process with LSM</summary>

* Press the 'Transfer Delegations' button from pWALLET using 750 coin-type migration
* Enter your 118 coin-type migration and press send
* The tokens will now be converted to 'tokenized shares' and will be visible under the 'Tokenised Shares' tab in the 'Staking' page.
* Redeem your tokens
* Voila! You have successfully transferred the tokens&#x20;

**Note:** The feature is only available using [pWALLET](http://wallet.persistence.one).

</details>

