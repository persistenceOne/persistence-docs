# Validators

The Persistence Core-1 Chain is based on [Tendermint](https://github.com/tendermint/tendermint/tree/master/docs/introduction), that relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by each validator's private key.

**Validator's roles include but are not limited to the following:**

1. **Be able to constantly run a correct version of the software:**  Validators must ensure that their servers are always online and their private keys are not compromised.
2. **Actively participate in governance:** Validators are encouraged to vote on every proposal. When a delegator doesn't vote, the delegator inherits the vote of their validator. However, delegators can override their validator's vote by sending one themselves.
3. **Active Community Members:** Validators are expected to be active members of the community.
4. **Stay up-to-date:** Validators must always be up-to-date with the current state of the ecosystem so that they can easily adapt to any change.

More information about validators' security, FAQ, and others, is available [here](https://hub.cosmos.network/main/validators/).

Below you can find relevant information regarding Persistence validators topics.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Validate on Mainnet</strong></td><td><a href="mainnet-validator-setup.md">mainnet-validator-setup.md</a></td></tr><tr><td><strong>Validate on Testnet</strong></td><td><a href="testnet-validator-setup.md">testnet-validator-setup.md</a></td></tr><tr><td><strong>Validator Communication</strong></td><td><a href="validator-communication.md">validator-communication.md</a></td></tr><tr><td><strong>Foundation Delegations</strong></td><td><a href="foundation-delegations/">foundation-delegations</a></td></tr></tbody></table>
