# Liquid Staking Module

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

**Note:** We built a tool that recommends how much you should validator bond.&#x20;

👉 [Recommended Validator Bond Tool](https://docs.google.com/spreadsheets/d/13XXa3cHDoDsbXg7cjBRk8i0SBUBG3YoNmtKgUXCXNcI/edit#gid=83969709)&#x20;

### How to Validator Bond (Detailed Instructions)

A delegator (or validator operator) can convert a delegation into Validator Bond by signing a ValidatorBond message. The ValidatorBond message is exposed by the staking module and can be executed as follows:

```
persistenceCore tx staking validator-bond ValidatorAddress --from mykey  
```

Here’s an example of a successful validator bond transaction on core-1:&#x20;

* First, we must delegate to a validator from a new account:&#x20;

{% code overflow="wrap" %}
```url
https://www.mintscan.io/persistence/transactions/11D746B6C94CA4BBC18B02F08A0024A4730BAE1ADDEFEDAFAE85EC58A7DACAA5
```
{% endcode %}

* Then, we validator bond from that account:&#x20;

{% code overflow="wrap" %}
```url
https://www.mintscan.io/persistence/transactions/36E58CAAA55BAA9CBC59E7CD0C1F78355AE5268331DB6C23DDC5AB79E001DF0E?height=13165160
```
{% endcode %}



Here’s the transaction that was submitted on the command line:

{% code overflow="wrap" fullWidth="false" %}
```
 persistenceCore tx staking validator-bond ValidatorAddress 
 
  --from MyKey 
  --fees 1000uxprt
  --chain-id core-1
  --node https://rpc.core.persistence.one:443
```
{% endcode %}

You can confirm your conversion to a validator bond succeeded by querying the delegation.&#x20;

```
persistenceCore q staking delegations DelegatorAddress


delegation_responses:
- balance:
    amount: "N"
    denom: uxprt
  delegation:
    delegator_address: persistence123...ABC
    shares: "1.000000000000000000"
    validator_address: persistencevaloper123...XYZ
    validator_bond: true  <---- You should see this field = true :)
```



***

### FAQs

<details>

<summary>How much should I validator bond?</summary>

For every 1 XPRT you validator-bond, you will be eligible to receive up to 250 XPRT tokenized shares from delegators.&#x20;

For example, if you validator bond 1,000 XPRT, you will be eligible for 250,000 XPRT tokensized shares.&#x20;



We built a tool that recommends how much you should validator bond.&#x20;

👉 [Recommended Validator Bond Tool](https://docs.google.com/spreadsheets/d/13XXa3cHDoDsbXg7cjBRk8i0SBUBG3YoNmtKgUXCXNcI/edit#gid=83969709) 👈

</details>

<details>

<summary>When do I need to validator bond?</summary>

We recommend validator bonding immediately as users (Delgators on your validator) will attempt to migrate their wallet address coin-type from 750 to 118.

At that time, if a validator does not have sufficient validator bond, delegators will not be able to migrate. In this condition delegators can also redelegate the tokens first to a validator which has validator-bond in order to continue the migration process.&#x20;

This acts as an advance for validators to attract more delegation from users in the long run.

</details>

<details>

<summary>Which wallet should I validator bond from?</summary>

We recommend validators create a new wallet to validator bond. This can be a new seed phrase, or a wallet derived using an existing seed phrase and a new account index. New wallets are preferred for separation of delegations marked validator bond and regular delegations. There are no partial Validator Bonds: when a delegator or validator converts delegation to a particular validator into Validator Bond, their entire delegation to that validator is converted to Validator Bond.&#x20;

By creating a new wallet to validator bond, an existing delegator can mark part of their delegation as validator bond (by transferring those funds to the new address and marking it as validator bond from that address), while leaving their existing delegation unchanged.

</details>

<details>

<summary>What if I don’t validator bond?</summary>

If a validator has not validator bonded, they will be ineligible for coin-type migration using LSM.&#x20;

Their delegates who wish to migrate their delegated tokens may redelegate away to a validator-bonded validator, in order to migrate their tokens.&#x20;

</details>

<details>

<summary>Can I un-delegate my validator bond?</summary>

To convert validator bond back into standard delegation, simply unbond or redelegate the shares. Unbonding or redelegating a validator bond reduces the amount of validator bond associated with a validator.&#x20;

The following question outlines a case when delegating your validator bond. If unbonding or redelegating a delegator’s validator bond would cause the number of tokens delegated to that validator to exceed 250 times the validator’s resulting validator bond, then the unbonding or redelegation will fail.&#x20;

In this case, the delegator will not be able to unbond until the amount of delegated XPRT shares to the validator decreases, or the amount of validator bond to the validator increases.

</details>

<details>

<summary>Are there any risks associated with validator bond?</summary>

In the event of a slash, validator bond delegations are slashed at the same rate as standard delegations.

</details>

<details>

<summary>Is validator bond a centralizing force?</summary>

Hopefully not! Validators with less voting power require lower amounts of validator bond.&#x20;

The validator bond factor multiplier of 250 also means that the absolute size of the validator bond required isn’t too large, especially relative to the revenue validators can earn from additional delegations they receive from liquid staking providers.

</details>

<details>

<summary>Are validator bonded tokens the same thing as self-bonded tokens?</summary>

No, they are different.&#x20;

Self-bonded tokens are delegations made by a validator operator to their own validator node. Validator bonded tokens are delegations made from any delegator to a validator node, that have been marked as Validator Bond with the validator-bond message.&#x20;

Validator bond delegations have additional unbonding restrictions (see above: “Can I undelegate my validator bond?”) relative to validator bond.

</details>

<details>

<summary>Do self-bonded tokens turn into validator-bond?</summary>

No, they do not. To designate a delegation as validator bond, the delegator must sign a validator-bond message.

</details>
