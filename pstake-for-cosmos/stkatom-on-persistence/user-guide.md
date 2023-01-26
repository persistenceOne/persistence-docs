# User Guide

### Wallet Support[¶](broken-reference) <a href="#wallet-support" id="wallet-support"></a>

The pSTAKE protocol supports the following wallets in the Cosmos ecosystem:

* Keplr
* Ledger

### Staking Flow[¶](broken-reference) <a href="#staking-flow" id="staking-flow"></a>

Before doing a transaction, make sure you have enough XPRT tokens in your wallet to pay fees for the transactions.

* Visit the app and connect your wallet. If you are on a different network, you may be prompted to switch to the correct one. Click on the correct network on the page and enable it to switch.
* The Stake tab is open by default in the centre.
* The ATOM section shows the ATOM balance available in your Cosmos wallet address.
* Add the desired ATOM amount you would like to liquid stake through the Persistence Chain and click on the Liquid Stake button at the bottom.
* A pop up with a guide will appear on the screen.
* Next steps consist of two transactions, namely:
  * The first transaction transfers ATOM from Cosmos to the Persistence chain via IBC.
  * The second transaction liquid stakes the transferred ATOM.
* Approve both the transactions one by one.
* Once the above steps are completed successfully, pSTAKE will issue stkATOM to your wallet, which will be visible on the left side of the page.
* Staking rewards will be automatically compound to generate additional yields.

### Unstaking Flow[¶](broken-reference) <a href="#unstaking-flow" id="unstaking-flow"></a>

Before doing a transaction, make sure you have enough XPRT tokens in your wallet to pay fees for the transactions.

There are 2 unstaking options and a claim to complete the whole unstaking flow:

* Redeem Instantly
* Unstake, over a period of 21-25 days based upon the unbonding time on the Cosmos chain.
  * Claim, which is an additional step for users opting for Unstake

#### Redeem Instantly[¶](broken-reference) <a href="#redeem-instantly" id="redeem-instantly"></a>

* Visit the app and connect your wallet. If you are on a different network, you may be prompted to switch to the correct one. Click on the correct network on the page and enable it to switch.
* Redeem Instantly is selected as a preferred option by default.
* Fill in the amount of stkATOM to be redeemed instantly. The amount available to redeem may be limited based on market conditions.
* Move to the next step by clicking on the Redeem Instantly button below to move on to the next stage.
* Confirm the transaction on the wallet prompt.
* stkATOM will be removed from your wallet and in exchange the corresponding ATOM, depending on the current exchange rate and instant redemption fees, will be sent to your wallet on Cosmos Chain via IBC, saving you from having to send ATOM back to Cosmos via IBC in a separate transaction.

#### Unstake[¶](broken-reference) <a href="#unstake" id="unstake"></a>

* Visit the app and connect your wallet. If you are on a different network, you may be prompted to switch to the correct one. Click on the correct network on the page and enable it to switch.
* Open the Unstake tab present in the centre of the page.
* Fill in the amount of stkATOM to be unstaked.
* Select the Unstake Option, as the preferred option for unstake is Redeem Instantly.
* Move to the next step by clicking on the Unstake button.
* Confirm the transaction on your wallet prompt.
* pSTAKE will take custody of your stkATOM until the corresponding unstaked ATOM are ready to be claimed.
* Check your progress in the Unstaking section present on the bottom left corner of your screen.
* It will take between 21 to 25 days to complete the unstaking before your ATOM is ready to claim.

#### Claim[¶](broken-reference) <a href="#claim" id="claim"></a>

* Visit the app and connect your wallet. If you are on a different network, you may be prompted to switch to the correct one. Click on the correct network on the page and enable it to switch.
* A Claim button will appear on the bottom left corner of the page, if and only if there are any available or in-progress claim or unstake requests.
* Click on the Claim button.
* A window will appear showing ready to claim (successful or failed unstake requests) and unstake requests in progress.
* Click on the Claim button, which appears only if there are entries ready to be claimed.
* Confirm the transaction on the wallet prompt.
* pSTAKE will send the claimed ATOM to your wallet on Cosmos Chain via IBC, saving you from having to send ATOM back to Cosmos via IBC in a separate transaction.
* All of the pending claim requests will happen in a single transaction, with the corresponding balances appearing on the left side of the page.
