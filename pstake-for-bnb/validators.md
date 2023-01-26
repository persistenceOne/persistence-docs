# Validators

### stkBNB Validators[¶](broken-reference) <a href="#stkbnb-validators" id="stkbnb-validators"></a>

pSTAKE uses a robust delegation strategy in order to select the best validators within the BNB Chain ecosystem. This strategy uses a validator scoring mechanism to find the highest yield for our users while ensuring that funds are delegated across the top network validators. The product prioritise two major aspects while selecting top network validators:

#### APR[¶](broken-reference) <a href="#apr" id="apr"></a>

The APR earned by validators on BNB Chain depends on two factors:

* **Commission Rate**: We select validators that charge low commission, ensuring a higher share of staking rewards goes to the users.
* **Voting Power**: The staked amount for a validator determines the APR it receives. Validators that have a lower stake are more likely to provide higher returns.

#### Security[¶](broken-reference) <a href="#security" id="security"></a>

When staking to validators on BNB Chain, users can’t be slashed but run the risk of missing out on rewards if a validator they’re staking to is slashed or jailed. With this is mind, pSTAKE considers the following metrics while selecting our validator set:

* **Historical Slashing Instances**: Shasing results in the jailing of a validator, meaning the user needs to proactively unstake and restake to another validator. In this case alone, the user would lose a minimum of 1 week’s worth of rewards. This is why we select validators with the minimum number of slashing instances over the past year.
* **Uptime**: This is a key metric to ensure that the validator doesn’t miss block production (also rewards). We use validator uptime figures from the past 6 months to determine the most consistent network validators.

The scoring mechanism takes both APR and security into account to determine a composite score for each of the active validators on the network. It penalises new validators required to be active over the last 6 months to receive a high uptime score in the uptime criteria. In addition, it allows validators with a history of slashing to enter into the whitelisted set by looking at slashing instances that occurred only over the last year.

All validators are arranged based on this composite score, where the **top 10 are whitelisted to be part of the pSTAKE validator set**. In future versions, we’ll automate this validator selection process by taking the scoring mechanism on-chain.
