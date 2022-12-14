# Validate on Testnet

{% hint style="warning" %}
IMPORTANT: Before creating a testnet validator, ensure you have first followed the instructions on [how to join the testnet](../nodes-and-endpoints/join-testnet.md)
{% endhint %}

### Create Validator
1. Ensure the node is synced *(response must be `false`)*: 
	```
	curl http://localhost:26657/status | jq -r ".result.sync_info.catching_up"
	```
2. Before requesting tokens, you need to [sign up here](https://www.allthatnode.com/login.dsrv).
3. Request XPRT by visiting [this faucet website](https://www.allthatnode.com/faucet/persistence.dsrv)
4. Create Validator: 
	```
	persistenceCore tx staking create-validator \
	--from="[KEY_NAME]" \
	--amount="1000000uxprt" \
	--pubkey="$(persistenceCore tendermint show-validator)" \
	--chain-id="test-core-1" \
	--moniker="[VALIDATOR_NAME]" \
	--commission-max-change-rate=0.05 \
	--commission-max-rate=0.20 \
	--commission-rate=0.10 \
	--min-self-delegation="1" \
	--website="[OPTIONAL]" \
	--identity="[OPTIONAL]" \
	--details="[OPTIONAL]" \
	--security-contact="[OPTIONAL]" \
	--gas="auto" \
	--gas-adjustment="1.5" \
	--gas-prices="10uxprt"
	```
5. Verify your validator is signing blocks by [visting the testnet explorer](https://testnet.ping.pub/test-core-1/uptime)
6. Congratulations! You've just created a Persistence Testnet Validator.

## Version

This chain is currently running on persistenceCore [v5.0.0](https://github.com/persistenceOne/persistenceCore/releases/tag/v3.1.1) *(Commit Hash: `de671f5927b4d0b87e8db5940a99e03c7e512b58`)*

{% hint style="warning" %}
NOTE: If your node is running on an older version of the application, please update it to this version at the earliest to avoid being exposed to security vulnerabilities or defects.
{% endhint %}

## Binary

The binary can be downloaded from [here](https://github.com/persistenceOne/persistenceCore/releases/tag/v5.0.0).

## Explorer

The explorer for this chain is accessible [here](https://testnet.ping.pub/test-core-1/).
