# Validators

### Validator Delegation Strategy[¶](broken-reference) <a href="#validator-delegation-strategy" id="validator-delegation-strategy"></a>

pSTAKE uses a robust delegation strategy in order to select the best validators within the Cosmos chain. This strategy uses a validator scoring mechanism to find the highest yield for our users while ensuring that funds are delegated across the top network validators. Our product prioritises two major aspects while selecting top network validators:

* **Historical Slashing Instances** : Slashing results in the jailing of a validator, meaning the user needs to proactively unstake and restake to another validator. In this case alone, the user would lose a minimum of 21 days worth of rewards. This is why we select validators with the minimum number of slashings over the past year.
* **Uptime** : The top validators on the Cosmos Chain have been active since the inception of the chain. Any validator that has missed too many blocks out of the last 100000 is not included in the validator set.
* **Commission Rate** : We select validators that charge a low commission rate (preferably between 1% to 10%, inclusive), ensuring a higher share of staking rewards to the users.
* **Governance Participation** : Another way to check validator participation on blockchain is through votes on governance proposals on the Cosmos chain. Validators who have participated in at least 15 out of 35 proposals on the Cosmos chain are included in the set.

Find the currently active validator set [here](https://docs.google.com/spreadsheets/d/1qe-if9ELi6g1Q\_OsKsfv9fQl1CWFz9tmuogyBrtxV-w/edit?usp=sharing).
