# LSM Module

#### Background

Developed by [Iqlusion 44](https://twitter.com/iqlusioninc), the LSM (Liquid staking module) is enabled (in v8 pacaya upgrade) to safely and efficiently help facilitate multiple features for the Core-1 chain.&#x20;

As the main feature for now, this module enables XPRT delegators to swiftly migrate from (old) 750 coin-type to (new) 118 coin-type without waiting for 21 days un-bounding period.&#x20;

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
* The tokens will now be converted to 'tokenised shares' and will be visible under the 'Tokenised Shares' tab in 'Staking' page.
* Redeem your tokens
* Voila! You have successfully transferred the tokens&#x20;

**Note:** The feature is only available using [pWALLET](http://wallet.persistence.one).

</details>



***

As an additional security feature, validators who want to enable their delegators to migrate their wallet from 750 coin-type to 118 coin-type  using LSM, are required to “validator-bond” a certain amount of XPRT.&#x20;

The validator “validator-bond,” means that validators need to have “skin in the game” in order to be entrusted with delegations.

This disincentivizes malicious behaviour and empowers the validator to get more delegations.&#x20;

### Understanding Validator-Bond

Technically speaking, the validator-bond is tracked by the LSM. The maximum number of tokens that can be delegated to a validator by a delegator is equal to the validator-bond multiplied by the “validator-bond factor.” The initial validator bond factor would be set at 250 and can be configurable by governance.&#x20;

With a validator-bond factor of 250, for every one XPRT a validator validator-bonds, that validator is eligible to receive up to two-hundred-and-fifty XPRT delegated shares from the delegator.&#x20;

{% code title="Formula:" overflow="wrap" %}
```markup
total_liquid_stake_on_validator.amount / Sum(every_delegation_where[bond=True].amount) < VALIDATOR_BOND_FACTOR
```
{% endcode %}

### How to Validator Bond (Detailed Instructions)

A delegator (or validator operator) can convert a delegation into Validator Bond by signing a ValidatorBond message. The ValidatorBond message is exposed by the staking module and can be executed as follows:

```
persistenceCore tx staking validator-bond ValidatorAddress --from mykey  
```

Here’s an example of a successful validator bond transaction on core-1:&#x20;

* First, we must delegate to a validator from a new account:&#x20;
* Then, we validator bond from that account: [https://testnet.mintscan.io/cosmoshub-testnet/txs/BA5B4DEB80DB4105B55D8A196D5D7DC07B178E8776C0B9E16B27CF0F1F154B7E](https://testnet.mintscan.io/cosmoshub-testnet/txs/BA5B4DEB80DB4105B55D8A196D5D7DC07B178E8776C0B9E16B27CF0F1F154B7E)&#x20;

\


Here’s the transaction that was submitted on the command line:

\


gaiad tx staking validator-bond ValidatorAddress&#x20;

&#x20; \--from MyKey&#x20;

&#x20; \--fees 1000uatom&#x20;

&#x20; \--chain-id theta-testnet-001

&#x20; \--node https://rpc.sentry-01.theta-testnet.polypore.xyz:443

\


You can confirm your conversion to a validator bond succeeded by querying the delegation.&#x20;

\
\
\


\> gaiad q staking delegations DelegatorAddress

\


delegation\_responses:

\- balance:

&#x20;   amount: "N"

&#x20;   denom: uatom

&#x20; delegation:

&#x20;   delegator\_address: cosmos123...ABC

&#x20;   shares: "1.000000000000000000"

&#x20;   validator\_address: cosmosvaloper123...XYZ

&#x20;   validator\_bond: true  <---- You should see this field = true :)

\
\
\
\


\
