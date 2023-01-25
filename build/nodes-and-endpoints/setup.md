# Run a Local Node
> **IMPORTANT**
>  Before starting, ensure the [persistenceCore binary is installed](https://docs.persistence.one/build/nodes-and-endpoints/join-mainnet#install-the-persistencecore-binary).

## Initialize the Chain

Before starting, ensure you've already [installed the persistenceCore binary](https://docs.persistence.one/build/nodes-and-endpoints/join-mainnet#install-the-persistencecore-binary) and the command `persistenceCore version` output is valid (e.g. `v6.1.0`).

With that out of the way, before running the node, we need to initialize the chain and its genesis file. This is done with the `init` subcommand:

```bash
persistenceCore init <moniker> --chain-id my-test-chain
# The argument <moniker> is the custom username of your node, it should be human-readable.
```

The command above creates all the configuration files needed for your node to run, as well as a default genesis file, which defines the initial state of the network. All these configuration files are in `~/.persistenceCore` by default, but you can overwrite the location of this folder by passing the `--home` flag.

The `~/.persistenceCore` folder has the following structure:

```bash
.                                   # ~/.persistenceCore
  |- data                           # Contains the databases used by the node.
  |- config/
      |- app.toml                   # Application-related configuration file.
      |- config.toml                # Tendermint-related configuration file.
      |- genesis.json               # The genesis file.
      |- node_key.json              # Private key to use for node authentication in the p2p protocol.
      |- priv_validator_key.json    # Private key to use as a validator in the consensus protocol.
```

## Add Genesis Accounts

Before starting the chain, you need to populate the state with at least one account. To do so, first create a new account in the keyring named `my_validator` under the test keyring backend (feel free to choose another name and another backend).

```bash
persistenceCore keys add my_validator --keyring-backend test
# ensure you securely save the mnemonic seed phrase
```

In the next step, you will need to have the address of the key created in the previous step. Copy the address from the output of the following command:
	
```bash
persistenceCore keys list --keyring-backend test
```

Now that you have created a local account, go ahead and grant it some stake tokens in your chain's genesis file. Doing so will also make sure your chain is aware of this account's existence. Make sure to replace`[MY_VALIDATOR_ADDRESS]` with the address you copied in the previous step.

```bash
persistenceCore add-genesis-account [MY_VALIDATOR_ADDRESS] 100000000000stake
# example: persistenceCore add-genesis-account persistence17hcgeqsusfsw729apqh4kza6q6je72vt8spmum 100000000000stake
```

Note that the tokens have the {amount}{denom} format: amount is is a 18-digit-precision decimal number, and denom is the unique token identifier with its denomination key (e.g. xprt or uxprt). Here, we are granting `stake` tokens, as it is the token identifier used for staking in persistenceCore.

Now that your account has some tokens, you need to add a validator to your chain. Validators are special full-nodes that participate in the consensus process (implemented in the underlying consensus engine) in order to add new blocks to the chain. Any account can declare its intention to become a validator operator, but only those with sufficient delegation get to enter the active set. For this guide, you will add your local node (created via the init command above) as a validator of your chain. Validators can be declared before a chain is first started via a special transaction included in the genesis file called a gentx:

```bash
# Create a gentx.
persistenceCore gentx my_validator 100000000stake --chain-id my-test-chain --keyring-backend test

# Add the gentx to the genesis file.
persistenceCore collect-gentxs
```

A gentx does three things:

* Registers the validator account you created as a validator operator account (i.e. the account that controls the validator).
* Self-delegates the provided amount of staking tokens.
* Link the operator account with a Tendermint node pubkey that will be used for signing blocks. If no `--pubkey` flag is provided, it defaults to the local node pubkey created via the `persistenceCore init` command above. For more information on gentx, use the following command:

```bash
persistenceCore gentx --help
```

## Configure the Node

Two configuration files are automatically generated inside `~/.persistenceCore/config`:

- **config.toml**: used to configure Tendermint
- **app.toml**: used to configure your app, such as state pruning strategies, telemetry, gRPC and REST servers configuration, state sync, etc. Both files are heavily commented, please refer to them directly to tweak your node.

One example config to tweak is the `minimum-gas-prices` field inside app.toml, which defines the minimum gas prices the validator node is willing to accept for processing a transaction. Depending on the chain, it might be an empty string or not. If it's empty, make sure to edit the field with some value, for example `0.01stake`, or else the node will halt on startup. For the purpose of this tutorial, let's set the minimum gas price to 0:

```bash
 # The minimum gas prices a validator is willing to accept for processing a
 # transaction. A transaction's fees must meet the minimum of any denomination
 # specified in this config.
 minimum-gas-prices = "0stake"
```

## Run a Localnet

Now that everything is set up, you can finally start your node with the command:

```bash
persistenceCore start
```

You should see blocks come in.
