# core-1
# Running a Validator

::: tip
We suggest you try out joining a public testnet first. Information on how to join the most recent testnet can be found [here](..//join-testnet.md).
:::

## What is a Validator?

Validators are responsible for committing new blocks to the blockchain through an automated voting process. A validator's stake is slashed if they become unavailable or sign blocks at the same height.


## Hardware Requirements
* **Minimal**
  * 4 GB RAM
  * 200 GB SSD
  * x2 CPU
* **Recommended**
  * 8 GB RAM
  * 500 GB SSD
  * x4 CPU

> NOTE: low endurance(tbw) ssd are not supported

## Operating System
* Linux/Windows/MacOS(x86)
* **Recommended**
  * Linux(x86_64)

## Installation Steps
>Prerequisite: go1.15+ required. [ref](https://golang.org/doc/install)

>Prerequisite: git. [ref](https://github.com/git/git)

>Optional requirement: GNU make. [ref](https://www.gnu.org/software/make/manual/html_node/index.html)

* Clone git repository
```shell
git clone https://github.com/persistenceOne/persistenceCore.git
```
* Checkout release tag
```shell
cd persistenceCore
git fetch --tags
git checkout v3.1.1
```
* Install
```shell
make install
```
* Verify version
```
persistenceCore version
```
> The current version is `d557c8f`

### Generate keys

`persistenceCore keys add [key_name]`

or

`persistenceCore keys add [key_name] --recover` to regenerate keys with your [BIP39](https://github.com/bitcoin/bips/tree/master/bip-0039) mnemonic


## Validator setup

### Before genesis: CLOSED please refer to section [Post Genesis](#post-genesis)

* [Install](#installation-steps) persistence core application
* Initialize node
```shell
persistenceCore init {{NODE_NAME}} --chain-id core-1
persistenceCore add-genesis-account {{KEY_NAME}} 1000000000uxprt
persistenceCore gentx {{KEY_NAME}} 1000000000uxprt \
--chain-id core-1 \
--moniker="{{VALIDATOR_NAME}}" \
--commission-max-change-rate=0.01 \
--commission-max-rate=1.0 \
--commission-rate=0.07 \
--details="XXXXXXXX" \
--security-contact="XXXXXXXX" \
--website="XXXXXXXX"
```
* Copy the contents of `${HOME}/.persistenceCore/config/gentx/gentx-XXXXXXXX.json`.
* Fork the [repository](https://github.com/persistenceOne/genesisTransactions)
* Create a file `gentx-{{VALIDATOR_NAME}}.json` under the core-1/gentxs folder in the forked repo, paste the copied text into the file. Find reference file gentx-examplexxxxxxxx.json in the same folder.
* Run `persistenceCore tendermint show-node-id` and copy your nodeID.
* Run `ifconfig` or `curl ipinfo.io/ip` and copy your publicly reachable IP address.
* Create a file `peers-{{VALIDATOR_NAME}}.json` under the core-1/peers folder in the forked repo, paste the copied text from the last two steps into the file. Find reference file peers-examplexxxxxxxx.json in the same folder.
* Create a Pull Request to the `master` branch of the [repository](https://github.com/persistenceOne/genesisTransactions)
>**NOTE:** the Pull Request will be merged by the maintainers to confirm the inclusion of the validator at the genesis. The final genesis file will be published under the file core-1/final_genesis.json.
* Replace the contents of your `${HOME}/.persistenceCore/config/genesis.json` with that of core-1/final_genesis.json.
* Add `persistent_peers` or `seeds` in `${HOME}/.persistenceCore/config/config.toml` from core-1/final_peers.json.
* Start node
```shell
persistenceCore start
```

### Post genesis

* [Install](#installation-steps) persistence core application
* Initialize node
```shell
persistenceCore init {{NODE_NAME}} --chain-id core-1
```
* Replace the contents of your `${HOME}/.persistenceCore/config/genesis.json` with that of core-1/final_genesis.json from the `master` branch of [repository](https://github.com/persistenceOne/genesisTransactions).
* Verify checksum `sha265sum genesis.json` matches `673d30abd133a13210bf271d8a52aabc3f1b12c0864f543f4313f7f9589bdb53`
* Inside file `${HOME}/.persistenceCore/config/config.toml`,
  * set `seeds` to `"449a0f1b7dafc142cf23a1f6166bbbf035edfb10@13.232.85.66:26656,5b27a6d4cf33909c0e5b217789e7455e261941d1@15.223.104.135:26656"`.
  * If your node has a public ip, set it in `external_address = "tcp://<public-ip>:26656"`, else leave the filed empty.
* Set `minimum-gas-prices` in `${HOME}/.persistenceCore/config/app.toml` with the minimum price you want (example `0.005uxprt`) for the security of the network.
* Start node
```shell
persistenceCore start
```
* Acquire $XPRT tokens to self delegate to your validator node. Minimum 1 XPRT is require to become a validator. You must send your XPRT to the address created in the Generate Keys step previosuly.
* Wait for the blockchain to sync. You can check the sync status using the command
```
curl http://localhost:26657/status sync_info "catching_up": false
```
Once `"catching_up"` is `false`, the sync is complete. If this is a production validator, we recommend syncing from genesis to ensure security. However, for dev purposes, you can achieve a faster sync using snapshots. The latest snapshot is available at  https://tendermint-snapshots.s3.ap-southeast-1.amazonaws.com/persistence/data.tar.lz4 .
You will need to download this file, and unzip it in `~/.persistenceCore/data` using the command `lz4 -d data.tar.lz4 | tar -xv`. Remove the db files that are there currently.
You can unpack this in flight with
```
curl -sSL https://tendermint-snapshots.s3.ap-southeast-1.amazonaws.com/persistence/data.tar.lz4 | tar -I lz4 -xf -
```
* To create your validator, just use the following command
```
persistenceCore tx staking create-validator \
--from {{KEY_NAME}} \
--amount XXXXXXXXuxprt \
--pubkey "$(persistenceCore tendermint show-validator)" \
--chain-id core-1 \
--moniker="{{VALIDATOR_NAME}}" \
--commission-max-change-rate=0.01 \
--commission-max-rate=1.0 \
--commission-rate=0.07 \
--min-self-delegation="1" \
--details="XXXXXXXX" \
--security-contact="XXXXXXXX" \
--website="XXXXXXXX"
```

## Edit Validator Description

You can edit your validator's public description. This info is to identify your validator, and will be relied on by delegators to decide which validators to stake to. Make sure to provide input for every flag below. If a flag is not included in the command the field will default to empty (`--moniker` defaults to the machine name) if the field has never been set or remain the same if it has been set in the past.

The <key_name> specifies which validator you are editing. If you choose to not include some of the flags below, remember that the --from flag **must** be included to identify the validator to update.

The `--identity` can be used as to verify identity with systems like Keybase or UPort. When using Keybase, `--identity` should be populated with a 16-digit string that is generated with a [keybase.io](https://keybase.io) account. It's a cryptographically secure method of verifying your identity across multiple online networks. The Keybase API allows us to retrieve your Keybase avatar. This is how you can add a logo to your validator profile.

```shell
persistenceCore tx staking edit-validator
  --moniker="choose a moniker" \
  --website="https://your-website.com" \
  --identity=6A0D65E29A4CBC8E \
  --details="To infinity and beyond!" \
  --chain-id=core-1 \
  --gas="auto" \
  --gas-prices="0.0025uxprt" \
  --from=<key_name> \
  --commission-rate="0.10"
```

::: danger Warning
Please note that some parameters such as `commission-max-rate` and `commission-max-change-rate` cannot be changed once your validator is up and running.
:::

__Note__: The `commission-rate` value must adhere to the following rules:

- Must be between 0 and the validator's `commission-max-rate`
- Must not exceed the validator's `commission-max-change-rate` which is maximum
  % point change rate **per day**. In other words, a validator can only change
  its commission once per day and within `commission-max-change-rate` bounds.

## View Validator Description

View the validator's information with this command:

```bash
persistenceCore query staking validator <account_persistence>
```

## Track Validator Signing Information

In order to keep track of a validator's signatures in the past you can do so by using the `signing-info` command:

```bash
persistenceCore query slashing signing-info <validator-pubkey>\
  --chain-id core-1
```

## Unjail Validator

When a validator is "jailed" for downtime, you must submit an `Unjail` transaction from the operator account in order to be able to get block proposer rewards again (depends on the zone fee distribution).

```bash
persistenceCore tx slashing unjail \
	--from=<key_name> \
	--chain-id core-1
```

## Confirm Your Validator is Running

Your validator is active if the following command returns anything:

```bash
persistenceCore query tendermint-validator-set | grep "$(persistenceCore tendermint show-address)"
```

You should now see your validator in one of the Cosmos Hub explorers. You are looking for the `bech32` encoded `address` in the `~/.persistenceCore/config/priv_validator.json` file.

## Halting Your Validator

When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have your validator systematically and gracefully halt. You can achieve this by either setting the `halt-height` to the height at which you want your node to shutdown or by passing the `--halt-height` flag to `persistenceCore`. The node will shutdown with a zero exit code at that given height after committing
the block.

## Advanced configuration
You can find more advanced information about running a node or a validator on the [Tendermint Core documentation](https://docs.tendermint.com/v0.34/tendermint-core/validators.html).

## Version
This chain is currently running on persistenceCore [v3.1.1](https://github.com/persistenceOne/persistenceCore/releases/tag/v3.1.1)
Commit Hash: `d557c8f98f2440f9fe82dcf5a30b05b714dee25a`
>Note: If your node is running on an older version of the application, please update it to this version at the earliest to avoid being exposed to security vulnerabilities /defects.

## Binary
The binary can be downloaded from [here](https://github.com/persistenceOne/persistenceCore/releases/tag/v3.1.1).

## Explorer
The explorer for this chain will hosted [here](https://explorer.persistence.one) after the chain goes live.

## Wallet
The wallet application for this chain is hosted [here](https://wallet.persistence.one).

