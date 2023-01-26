# Technical Architecture

pSTAKE allows you to liquid stake your ATOM on Cosmos through an interchain solution built using modules deployed on the Persistence chain. What this means in practice is that users receive stkATOM tokens immediately when liquid staking through pSTAKE, and their assets are staked natively on the Cosmos chain in a secure and non-custodial manner, powered by Cosmos SDK features such as **Interchain Accounts (ICA)** and **Inter-Blockchain Communication (IBC)**. Rewards are compounded on a daily basis, with the addition of **Interchain Queries (ICQ)** as necessary to maximise yields through auto-compounding of rewards.

### Epochs[¶](broken-reference) <a href="#epochs" id="epochs"></a>

An epoch with respect to a blockchain network is a specific unit of time that determines the schedule of events on the network. In the case of stkATOM, a **staking epoch is equivalent to 1 day**, so sometimes you may see the term day-epoch to refer to this fact. Under the hood, delegation to validators as part of the staking process occurs every day-epoch, while unstaking requests are sent on a 4-day epoch. This is because Cosmos chains have a limit of 7 unbonding events per 21 days, so to ensure we have less than 7 unbonding events per 21 days, pSTAKE submits unstake requests every 4 days. Users can then expect unstaking requests to be completed in a worst-case scenario of 25 days; a maximum of 4 days for the unstake request to be submitted and a further 21 days for unbonding.

### Staking[¶](broken-reference) <a href="#staking" id="staking"></a>

![image](https://user-images.githubusercontent.com/34552383/211334902-e5cf7cde-59e8-46ab-80de-87ac013fd7f6.png)

When you press the button to liquid stake ATOM through pSTAKE, you are required to approve two transactions via your wallet of choice:

* The first transaction transfers ATOM from Cosmos to the Persistence chain via IBC.
* The second transaction liquid stakes the transferred ATOM.

The deposit transaction is done through the [liquid staking module](https://github.com/persistenceOne/pstake-native/tree/main/x/lscosmos) on the Persistence chain. Through the power of interchain accounts, the second transaction then stakes the deposited ATOM on the staking day-epoch, delegating to validators according to pSTAKE’s robust validation delegation strategy via the [Persistence epochs module](https://github.com/persistenceOne/persistence-sdk/tree/master/x/epochs).

### Unstaking[¶](broken-reference) <a href="#unstaking" id="unstaking"></a>

#### Instant Redemptions[¶](broken-reference) <a href="#instant-redemptions" id="instant-redemptions"></a>

The new pSTAKE Instant Redemption feature allows you to receive ATOM immediately, rather than waiting for 21-25 days for unbonding to complete via the standard unstaking process. Note that this feature may not always be available and availability is dependent on current market conditions.

#### Standard Unstaking[¶](broken-reference) <a href="#standard-unstaking" id="standard-unstaking"></a>

![image](https://user-images.githubusercontent.com/34552383/211335072-70ae51ec-319b-4783-8480-34d089683b4b.png)

Unstaking is resolved through the [liquid staking module](https://github.com/persistenceOne/persistence-sdk/tree/master/x/epochs) on the Persistence chain. Every four days, unstaking requests are batched and sent via an interchain account (ICA) transaction to undelegate tokens from pSTAKE validators. A corresponding database entry is created which is checked on every block, to determine when the 21 day period has ended and the tokens can be returned to the user via the claims process. At unstaking maturity, the unstaked tokens are transferred via inter-blockchain communication (IBC) back to the Persistence chain, which you can now claim by clicking the claim button and approving the transaction through your wallet interface.

#### Rewards[¶](broken-reference) <a href="#rewards" id="rewards"></a>

While no action is required from you to get maximum yields on your liquid staked ATOM, under the hood there are a lot of moving parts to pSTAKE’s reward handling mechanism. Every day, the pSTAKE rewards address is checked through Interchain Queries (ICQ), and this balance is sent back to the delegation interchain account to be staked as part of the next block.
