# Node Operators - Overview

### stkETH Node Operators[¶](broken-reference) <a href="#stketh-node-operators" id="stketh-node-operators"></a>

pSTAKE currently onboards validators for the ETH2 staking product based on a whitelisting mechanism. This process will soon be evolved to make the protocol more inclusive for all node operators, keeping the network’s decentralisation in mind.

Furthermore, to maximise security, pSTAKE asks whitelisted node operators to deposit 1 ETH of their own with our withdrawal credentials instead of asking them to submit a list of validator keys. When the validator key is picked up by the beacon chain we verify the validity of the key by checking the withdrawal credentials. This was implemented after the reported issue where if users have previously submitted the same key with different withdrawal credentials, they are in control of the funds staked on it when withdrawals get enabled.

Additional notes for node operators: \* Node Operators can use any client for running the ETH1 chain node and the ETH2 beacon chain node. \* We strongly recommend node operators to have alerting mechanisms in place to monitor their nodes and validators. Uptime will be monitored and non-performing validators will be removed from the whitelist. \* pSTAKE will also monitor validators for the rewards generated and slashing events. \* Read more about the onboarding process here.

### Current whitelist:[¶](broken-reference) <a href="#current-whitelist" id="current-whitelist"></a>

| Chorus One      | Stake.fish    | Audit One     | Figment         | Everstake        |
| --------------- | ------------- | ------------- | --------------- | ---------------- |
| **Blockdaemon** | **Infstones** | **Hashquark** | **Bridgetower** | **Kiln Staking** |
