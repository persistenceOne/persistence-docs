# Setup a node

<mark style="color:red;">To be reviewed and updated</mark>

### Initialize the Chain

Before actually running the node, we need to initialize the chain, and most importantly its genesis file. This is done with the `init` subcommand:

```
persistencecore init <moniker> --chain-id my-test-chain
# The argument <moniker> is the custom username of your node, it should be human-readable.
```

The command above creates all the configuration files needed for your node to run, as well as a default genesis file, which defines the initial state of the network. All these configuration files are in \~/.persistencecore by default, but you can overwrite the location of this folder by passing the `--home` flag.

The \~/.persistencecore folder has the following structure:

```
.                                   # ~/.persistencecore
  |- data                           # Contains the databases used by the node.
  |- config/
      |- app.toml                   # Application-related configuration file.
      |- config.toml                # Tendermint-related configuration file.
      |- genesis.json               # The genesis file.
      |- node_key.json              # Private key to use for node authentication in the p2p protocol.
      |- priv_validator_key.json    # Private key to use as a validator in the consensus protocol.
```

### Updating Some Default Settings

If you want to change any field values in configuration files (for ex: genesis.json) you can use jq (installation (opens new window)& docs (opens new window)) & sed commands to do that. Few examples are listed here.

```
# to change the chain-id
jq '.chain_id = "testing"' genesis.json > temp.json && mv temp.json genesis.json

# to enable the api server
sed -i '/\[api\]/,+3 s/enable = false/enable = true/' app.toml

# to change the voting_period
jq '.app_state.gov.voting_params.voting_period = "600s"' genesis.json > temp.json && mv temp.json genesis.json

# to change the inflation
jq '.app_state.mint.minter.inflation = "0.300000000000000000"' genesis.json > temp.json && mv temp.json genesis.json
```

### Adding Genesis Accounts

Before starting the chain, you need to populate the state with at least one account. To do so, first create a new account in the keyring named `my_validator` under the test keyring backend (feel free to choose another name and another backend).

Now that you have created a local account, go ahead and grant it some stake tokens in your chain's genesis file. Doing so will also make sure your chain is aware of this account's existence:

`persistencecore add-genesis-account $MY_VALIDATOR_ADDRESS 100000000000stake`

Recall that `$MY_VALIDATOR_ADDRESS` is a variable that holds the address of the `my_validator` key in the keyring. Also note that the tokens have the {amount}{denom} format: amount is is a 18-digit-precision decimal number, and denom is the unique token identifier with its denomination key (e.g. xprt or uxprt). Here, we are granting stake tokens, as stake is the token identifier used for staking in persistencecore.

Now that your account has some tokens, you need to add a validator to your chain. Validators are special full-nodes that participate in the consensus process (implemented in the underlying consensus engine) in order to add new blocks to the chain. Any account can declare its intention to become a validator operator, but only those with sufficient delegation get to enter the active set. For this guide, you will add your local node (created via the init command above) as a validator of your chain. Validators can be declared before a chain is first started via a special transaction included in the genesis file called a gentx:

```
# Create a gentx.
persistencecore gentx my_validator 100000000stake --chain-id my-test-chain --keyring-backend test

# Add the gentx to the genesis file.
persistencecore collect-gentxs
```

A gentx does three things:

* Registers the validator account you created as a validator operator account (i.e. the account that controls the validator).
* Self-delegates the provided amount of staking tokens.
* Link the operator account with a Tendermint node pubkey that will be used for signing blocks. If no `--pubkey` flag is provided, it defaults to the local node pubkey created via the `persistencecore init` command above. For more information on gentx, use the following command:

`persistencecore gentx --help`

### Configuring the Node Using app.toml and config.toml

Two configuration files are automatically generated inside \~/.persistencecore/config:

* config.toml: used to configure the Tendermint
* app.toml: used to configure your app, such as state pruning strategies, telemetry, gRPC and REST servers configuration, state sync... Both files are heavily commented, please refer to them directly to tweak your node.

One example config to tweak is the `minimum-gas-prices` field inside app.toml, which defines the minimum gas prices the validator node is willing to accept for processing a transaction. Depending on the chain, it might be an empty string or not. If it's empty, make sure to edit the field with some value, for example 10token, or else the node will halt on startup. For the purpose of this tutorial, let's set the minimum gas price to 0:

```
 # The minimum gas prices a validator is willing to accept for processing a
 # transaction. A transaction's fees must meet the minimum of any denomination
 # specified in this config (e.g. 0.25token1;0.0001token2).
 minimum-gas-prices = "0stake"
```

### Run a Localnet

Now that everything is set up, you can finally start your node with the command:

`persistencecore start`

You should see blocks come in.
